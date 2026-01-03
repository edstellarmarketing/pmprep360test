// ===========================
// Navigation & Scroll Effects
// ===========================

let lastScroll = 0;
const navbar = document.getElementById('navbar');
const stickyCTA = document.getElementById('stickyCTA');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow to navbar on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show sticky CTA bar after scrolling past hero
    if (currentScroll > 800) {
        stickyCTA.classList.add('visible');
    } else {
        stickyCTA.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            navMenu.style.display = 'flex';
        } else {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
            navMenu.style.display = 'none';
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navMenu.style.display = 'none';
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
            }
        }
    });
});

// ===========================
// Scroll-to-Sections Functions
// ===========================

function scrollToPackages() {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
        const offsetTop = packagesSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        const offsetTop = coursesSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===========================
// FAQ Accordion
// ===========================

function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ===========================
// Testimonials Carousel
// ===========================

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current testimonial
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }
    
    // Activate current dot
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function setTestimonial(index) {
    showTestimonial(index);
}

// Auto-rotate testimonials
let testimonialInterval = setInterval(nextTestimonial, 8000);

// Pause auto-rotation on hover
const testimonialCarousel = document.querySelector('.testimonials-carousel');
if (testimonialCarousel) {
    testimonialCarousel.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialCarousel.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextTestimonial, 8000);
    });
}

// ===========================
// Lead Form Modal
// ===========================

const leadFormModal = document.getElementById('leadFormModal');
const leadForm = document.getElementById('leadForm');
let selectedPackageGlobal = '';

function openLeadForm(packageName = '') {
    leadFormModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (packageName) {
        selectedPackageGlobal = packageName;
        document.getElementById('selectedPackage').value = packageName;
        
        // Pre-select appropriate training format based on package
        const formatCheckboxes = document.querySelectorAll('input[name="format"]');
        formatCheckboxes.forEach(checkbox => checkbox.checked = false);
        
        if (packageName === 'Bronze') {
            document.querySelector('input[value="self-paced"]').checked = true;
        } else if (packageName === 'Silver') {
            document.querySelector('input[value="live-virtual"]').checked = true;
        } else if (packageName === 'Gold') {
            document.querySelector('input[value="mentoring"]').checked = true;
        }
    }
}

function closeLeadForm() {
    leadFormModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking overlay
if (leadFormModal) {
    leadFormModal.querySelector('.modal-overlay').addEventListener('click', closeLeadForm);
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && leadFormModal.classList.contains('active')) {
        closeLeadForm();
    }
});

// ===========================
// Form Submission Handler
// ===========================

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const data = {};
    
    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        if (key === 'format') {
            // Handle multiple checkboxes
            if (!data[key]) {
                data[key] = [];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }
    
    // Get checked format values
    const formatCheckboxes = document.querySelectorAll('input[name="format"]:checked');
    data.format = Array.from(formatCheckboxes).map(cb => cb.value);
    
    console.log('Form submitted with data:', data);
    
    // Show success message
    showSuccessMessage();
    
    // In a real implementation, you would send this data to your backend
    // Example:
    // fetch('/api/leads', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(result => {
    //     showSuccessMessage();
    //     trackConversion(data);
    // })
    // .catch(error => {
    //     showErrorMessage();
    // });
}

function showSuccessMessage() {
    const modalContent = leadFormModal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
        <div style="padding: 3rem; text-align: center;">
            <div style="font-size: 4rem; color: #28A745; margin-bottom: 1.5rem;">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2 style="color: #1A1A1A; margin-bottom: 1rem;">Thank You!</h2>
            <p style="font-size: 1.1rem; color: #4A4A4A; margin-bottom: 2rem;">
                Your PMP Readiness Assessment request has been received.<br>
                One of our advisors will contact you within 24 hours.
            </p>
            <p style="font-size: 0.95rem; color: #777777; margin-bottom: 2rem;">
                Check your email for your personalized assessment report and next steps.
            </p>
            <button class="btn btn-primary btn-lg" onclick="closeLeadForm(); location.reload();">
                <i class="fas fa-arrow-left"></i> Back to Homepage
            </button>
        </div>
    `;
    
    // Auto-close and reload after 5 seconds
    setTimeout(() => {
        closeLeadForm();
        location.reload();
    }, 5000);
}

function showErrorMessage() {
    alert('There was an error submitting your form. Please try again or contact us directly at support@pmprep360.com');
}

// ===========================
// Scroll Animations
// ===========================

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(`
        .stat-card,
        .step-item,
        .course-card,
        .package-card,
        .benefit-card,
        .methodology-pillar
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Counter Animation for Stats
// ===========================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatStatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatStatNumber(Math.floor(current));
        }
    }, 16);
}

function formatStatNumber(num) {
    if (num >= 10000) {
        return (num / 1000).toFixed(0) + ',000+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k+';
    } else if (num === 99.6) {
        return '99.6%';
    } else if (num >= 100) {
        return num + '+';
    }
    return num;
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumber = entry.target.querySelector('.stat-number');
            
            if (statNumber) {
                const targetValue = parseFloat(statNumber.textContent.replace(/[^0-9.]/g, ''));
                statNumber.textContent = '0';
                setTimeout(() => {
                    animateCounter(statNumber, targetValue);
                }, 200);
            }
        }
    });
}, { threshold: 0.5 });

// Observe stat cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat-card').forEach(card => {
        statsObserver.observe(card);
    });
});

// ===========================
// Dynamic Year Update
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright');
    
    if (copyrightElement && copyrightElement.textContent.includes('2026')) {
        copyrightElement.textContent = copyrightElement.textContent.replace('2026', currentYear);
    }
});

// ===========================
// Progress Bar Animation for Cohorts
// ===========================

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressFill = entry.target.querySelector('.progress-fill');
            if (progressFill && !progressFill.classList.contains('animated')) {
                progressFill.classList.add('animated');
                const width = progressFill.style.width;
                progressFill.style.width = '0';
                setTimeout(() => {
                    progressFill.style.width = width;
                }, 100);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cohort-item').forEach(item => {
        progressObserver.observe(item);
    });
});

// ===========================
// Prevent form resubmission on page reload
// ===========================

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// Track CTA Clicks (for analytics)
// ===========================

function trackCTAClick(ctaName, packageName = '') {
    console.log(`CTA Clicked: ${ctaName}`, { package: packageName });
    
    // In a real implementation, send to analytics
    // Example: gtag('event', 'cta_click', { cta_name: ctaName, package: packageName });
    // Example: fbq('track', 'Lead', { content_name: ctaName });
}

// Add tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            trackCTAClick(buttonText);
        });
    });
});

// ===========================
// Phone Number Formatting
// ===========================

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `+1 (${value}`;
            } else if (value.length <= 6) {
                value = `+1 (${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `+1 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        
        e.target.value = value;
    });
}

// ===========================
// Email Validation
// ===========================

const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function(e) {
        const email = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            e.target.style.borderColor = '#DC3545';
            showEmailError(e.target);
        } else {
            e.target.style.borderColor = '#28A745';
            hideEmailError(e.target);
        }
    });
}

function showEmailError(input) {
    let errorMsg = input.parentElement.querySelector('.email-error');
    
    if (!errorMsg) {
        errorMsg = document.createElement('span');
        errorMsg.className = 'email-error';
        errorMsg.style.color = '#DC3545';
        errorMsg.style.fontSize = '0.85rem';
        errorMsg.style.marginTop = '0.3rem';
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Please enter a valid email address';
        input.parentElement.appendChild(errorMsg);
    }
}

function hideEmailError(input) {
    const errorMsg = input.parentElement.querySelector('.email-error');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// ===========================
// Form Validation Before Submit
// ===========================

if (leadForm) {
    leadForm.addEventListener('submit', function(e) {
        const formatCheckboxes = document.querySelectorAll('input[name="format"]:checked');
        
        if (formatCheckboxes.length === 0) {
            e.preventDefault();
            alert('Please select at least one preferred training format.');
            return false;
        }
        
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            document.getElementById('email').focus();
            return false;
        }
    });
}

// ===========================
// Console Welcome Message
// ===========================

console.log('%c Welcome to PMPrep360! ', 'background: #0066CC; color: white; font-size: 20px; padding: 10px;');
console.log('%c Your growth journey in project management starts here—and never expires. ', 'font-size: 14px; color: #0066CC;');

// ===========================
// Lazy Loading for Images (if needed)
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===========================
// Accessibility: Focus Management
// ===========================

// Trap focus within modal when open
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

if (leadFormModal) {
    leadFormModal.addEventListener('transitionend', function() {
        if (this.classList.contains('active')) {
            trapFocus(this);
            const firstInput = this.querySelector('input, select, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }
    });
}

// ===========================
// Print Styles Handler
// ===========================

window.addEventListener('beforeprint', () => {
    // Close any open modals before printing
    if (leadFormModal.classList.contains('active')) {
        closeLeadForm();
    }
});

// ===========================
// Performance Monitoring
// ===========================

window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${(loadTime / 1000).toFixed(2)} seconds`);
    }
});

// ===========================
// Export functions for global access
// ===========================

window.openLeadForm = openLeadForm;
window.closeLeadForm = closeLeadForm;
window.scrollToPackages = scrollToPackages;
window.scrollToCourses = scrollToCourses;
window.toggleFAQ = toggleFAQ;
window.nextTestimonial = nextTestimonial;
window.prevTestimonial = prevTestimonial;
window.setTestimonial = setTestimonial;
window.handleFormSubmit = handleFormSubmit;