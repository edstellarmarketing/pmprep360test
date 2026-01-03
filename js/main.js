<<<<<<< HEAD
// ===================================
// CAREER LEARNING TRACKS DATA
// ===================================

const careerTracks = {
    // Entry Level Roles
    'coordinator': {
        stages: [
            {
                role: 'Project Coordinator',
                cert: 'CAPM® Certification',
                time: '0-1 year experience',
                salary: '$45K - $65K',
                skills: [
                    'Project documentation',
                    'Team coordination basics',
                    'Meeting facilitation'
                ]
            },
            {
                role: 'Assistant Project Manager',
                cert: 'PMP® Certification',
                time: '1-3 years experience',
                salary: '$65K - $90K',
                skills: [
                    'Project planning fundamentals',
                    'Stakeholder communication',
                    'Basic risk management'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '3-6 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Full project lifecycle management',
                    'Advanced stakeholder engagement',
                    'Team leadership'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PgMP® Certification',
                time: '8+ years experience',
                salary: '$140K - $200K+',
                skills: [
                    'Program portfolio management',
                    'Strategic planning',
                    'Executive leadership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Bronze Package - Self-Paced',
            desc: 'Perfect for entry-level professionals starting their PM journey with foundational knowledge.',
            price: '$699'
        },
        totalIncrease: '+$155K'
    },
    
    'administrator': {
        stages: [
            {
                role: 'Project Administrator',
                cert: 'CAPM® Certification',
                time: '0-1 year experience',
                salary: '$42K - $62K',
                skills: [
                    'Administrative support',
                    'Documentation management',
                    'Scheduling assistance'
                ]
            },
            {
                role: 'Project Coordinator',
                cert: 'PMP® Certification',
                time: '1-3 years experience',
                salary: '$62K - $85K',
                skills: [
                    'Project coordination',
                    'Resource tracking',
                    'Status reporting'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '3-6 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Project execution',
                    'Team management',
                    'Delivery excellence'
                ]
            },
            {
                role: 'Program Manager',
                cert: 'PgMP® Certification',
                time: '8+ years experience',
                salary: '$140K - $190K+',
                skills: [
                    'Multi-project coordination',
                    'Strategic alignment',
                    'Portfolio optimization'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Bronze Package - Self-Paced',
            desc: 'Ideal for administrative professionals transitioning to project management roles.',
            price: '$699'
        },
        totalIncrease: '+$148K'
    },
    
    'support': {
        stages: [
            {
                role: 'Project Support Officer',
                cert: 'CAPM® Certification',
                time: '0-1 year experience',
                salary: '$40K - $60K',
                skills: [
                    'Project documentation',
                    'Data entry and tracking',
                    'Basic reporting'
                ]
            },
            {
                role: 'Project Coordinator',
                cert: 'PMP® Certification',
                time: '1-3 years experience',
                salary: '$65K - $88K',
                skills: [
                    'Project coordination',
                    'Communication management',
                    'Stakeholder liaison'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '3-6 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Full project ownership',
                    'Risk mitigation',
                    'Team leadership'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PgMP® Certification',
                time: '7+ years experience',
                salary: '$135K - $185K+',
                skills: [
                    'Complex project management',
                    'Program coordination',
                    'Strategic planning'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Great for support professionals who benefit from structured learning and instructor guidance.',
            price: '$1,299'
        },
        totalIncrease: '+$145K'
    },
    
    'team-member': {
        stages: [
            {
                role: 'Team Member',
                cert: 'CAPM® Certification',
                time: '0-2 years PM experience',
                salary: '$50K - $70K',
                skills: [
                    'Project fundamentals',
                    'Team collaboration',
                    'Process understanding'
                ]
            },
            {
                role: 'Project Coordinator',
                cert: 'PMP® Certification',
                time: '2-4 years experience',
                salary: '$70K - $95K',
                skills: [
                    'Project coordination',
                    'Schedule management',
                    'Status reporting'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '4-7 years experience',
                salary: '$95K - $130K',
                skills: [
                    'End-to-end project delivery',
                    'Agile/traditional methodologies',
                    'Cross-functional leadership'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PgMP® Certification',
                time: '9+ years experience',
                salary: '$150K - $210K+',
                skills: [
                    'PMO establishment',
                    'Governance frameworks',
                    'Organizational strategy'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Bronze Package - Self-Paced',
            desc: 'Perfect for team members looking to formalize their PM knowledge at their own pace.',
            price: '$699'
        },
        totalIncrease: '+$160K'
    },

    // Junior Level Roles
    'assistant-pm': {
        stages: [
            {
                role: 'Assistant Project Manager',
                cert: 'PMP® Certification',
                time: '0-2 years experience',
                salary: '$65K - $85K',
                skills: [
                    'Project planning support',
                    'Task coordination',
                    'Documentation management'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '2-5 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Independent project delivery',
                    'Agile or risk specialization',
                    'Team leadership'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PgMP® Certification',
                time: '5-8 years experience',
                salary: '$125K - $165K',
                skills: [
                    'Large-scale project management',
                    'Mentor junior PMs',
                    'Program coordination'
                ]
            },
            {
                role: 'VP of Project Management',
                cert: 'PfMP® Certification',
                time: '10+ years experience',
                salary: '$180K - $250K+',
                skills: [
                    'Portfolio strategy',
                    'Organizational transformation',
                    'Executive stakeholder management'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Ideal for assistant PMs who want structured training to transition to full PM roles.',
            price: '$1,299'
        },
        totalIncrease: '+$185K'
    },

    'analyst': {
        stages: [
            {
                role: 'Project Analyst',
                cert: 'CAPM® or PMP®',
                time: '0-2 years experience',
                salary: '$60K - $80K',
                skills: [
                    'Data analysis',
                    'Project metrics tracking',
                    'Reporting and insights'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMP® Certification',
                time: '2-5 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Analytical project management',
                    'Data-driven decisions',
                    'Performance optimization'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PgMP® Certification',
                time: '5-8 years experience',
                salary: '$125K - $165K',
                skills: [
                    'Complex project analytics',
                    'Program management',
                    'Strategic insights'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$165K - $220K+',
                skills: [
                    'PMO analytics framework',
                    'Portfolio performance',
                    'Business intelligence'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Great for analysts transitioning to PM roles with strong analytical foundations.',
            price: '$1,299'
        },
        totalIncrease: '+$160K'
    },

    'planner': {
        stages: [
            {
                role: 'Project Planner',
                cert: 'PMP® Certification',
                time: '0-2 years experience',
                salary: '$65K - $88K',
                skills: [
                    'Schedule development',
                    'Resource planning',
                    'Critical path analysis'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-RMP® Certification',
                time: '2-5 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Comprehensive planning',
                    'Risk management',
                    'Execution oversight'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PgMP® Certification',
                time: '5-8 years experience',
                salary: '$125K - $165K',
                skills: [
                    'Program planning',
                    'Multi-project coordination',
                    'Strategic alignment'
                ]
            },
            {
                role: 'Program Manager',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$165K - $210K+',
                skills: [
                    'Portfolio planning',
                    'Enterprise-level strategy',
                    'Resource optimization'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Perfect for planners looking to expand from scheduling to full project leadership.',
            price: '$1,299'
        },
        totalIncrease: '+$145K'
    },

    'scheduler': {
        stages: [
            {
                role: 'Project Scheduler',
                cert: 'PMP® Certification',
                time: '0-2 years experience',
                salary: '$62K - $85K',
                skills: [
                    'Schedule creation',
                    'Timeline management',
                    'MS Project/Primavera'
                ]
            },
            {
                role: 'Project Manager',
                cert: 'PMI-RMP® Certification',
                time: '2-5 years experience',
                salary: '$90K - $125K',
                skills: [
                    'Integrated planning',
                    'Risk-aware scheduling',
                    'Project delivery'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PgMP® Certification',
                time: '5-8 years experience',
                salary: '$125K - $165K',
                skills: [
                    'Complex scheduling',
                    'Program management',
                    'Dependency management'
                ]
            },
            {
                role: 'Director of Project Delivery',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$160K - $200K+',
                skills: [
                    'Delivery excellence',
                    'Portfolio optimization',
                    'Operational strategy'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Ideal for schedulers advancing to comprehensive project management.',
            price: '$1,299'
        },
        totalIncrease: '+$138K'
    },

    // Mid Level Roles
    'project-manager': {
        stages: [
            {
                role: 'Project Manager',
                cert: 'PMP® Certification',
                time: '0-2 years experience',
                salary: '$85K - $110K',
                skills: [
                    'Project planning & execution',
                    'Stakeholder management',
                    'Risk identification'
                ]
            },
            {
                role: 'Senior Project Manager',
                cert: 'PMI-ACP® or PMI-RMP®',
                time: '2-5 years experience',
                salary: '$110K - $140K',
                skills: [
                    'Advanced risk management',
                    'Agile methodologies',
                    'Cross-functional leadership'
                ]
            },
            {
                role: 'Program Manager',
                cert: 'PgMP® Certification',
                time: '5-10 years experience',
                salary: '$140K - $180K',
                skills: [
                    'Program portfolio management',
                    'Strategic alignment',
                    'Multi-project orchestration'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PfMP® Certification',
                time: '10+ years experience',
                salary: '$180K - $250K+',
                skills: [
                    'Strategic portfolio leadership',
                    'Organizational transformation',
                    'Executive stakeholder management'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Perfect for experienced professionals who need structure and expert guidance to pass on the first attempt.',
            price: '$1,299'
        },
        totalIncrease: '+$165K'
    },

    'it-pm': {
        stages: [
            {
                role: 'IT Project Manager',
                cert: 'PMP® Certification',
                time: '0-2 years PM experience',
                salary: '$90K - $115K',
                skills: [
                    'Software project management',
                    'Technical stakeholder management',
                    'Agile/Waterfall hybrid'
                ]
            },
            {
                role: 'Senior IT Project Manager',
                cert: 'PMI-ACP® Certification',
                time: '2-5 years experience',
                salary: '$115K - $150K',
                skills: [
                    'Agile transformation',
                    'DevOps integration',
                    'Technical leadership'
                ]
            },
            {
                role: 'IT Program Manager',
                cert: 'PgMP® Certification',
                time: '5-9 years experience',
                salary: '$150K - $190K',
                skills: [
                    'IT portfolio management',
                    'Digital transformation',
                    'Technology strategy'
                ]
            },
            {
                role: 'Director of Technical PM',
                cert: 'PfMP® Certification',
                time: '10+ years experience',
                salary: '$190K - $260K+',
                skills: [
                    'Enterprise technology strategy',
                    'Innovation portfolio',
                    'CTO collaboration'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Best for IT PMs targeting senior roles where certification can accelerate career advancement.',
            price: '$2,499'
        },
        totalIncrease: '+$170K'
    },

    'agile-pm': {
        stages: [
            {
                role: 'Agile Project Manager',
                cert: 'PMI-ACP® Certification',
                time: '0-2 years Agile experience',
                salary: '$90K - $118K',
                skills: [
                    'Scrum/Kanban mastery',
                    'Agile coaching',
                    'Sprint management'
                ]
            },
            {
                role: 'Senior Agile PM',
                cert: 'PMP® + PMI-ACP®',
                time: '2-5 years experience',
                salary: '$118K - $150K',
                skills: [
                    'Agile at scale',
                    'Hybrid methodologies',
                    'Transformation leadership'
                ]
            },
            {
                role: 'Agile Program Manager',
                cert: 'PgMP® Certification',
                time: '5-8 years experience',
                salary: '$150K - $190K',
                skills: [
                    'Agile portfolio management',
                    'SAFe implementation',
                    'Program orchestration'
                ]
            },
            {
                role: 'VP of Agile Delivery',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$190K - $270K+',
                skills: [
                    'Enterprise agility',
                    'Organizational change',
                    'Executive leadership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Ideal for Agile PMs who want personalized coaching to master both traditional and agile frameworks.',
            price: '$2,499'
        },
        totalIncrease: '+$180K'
    },

    'construction-pm': {
        stages: [
            {
                role: 'Construction Project Manager',
                cert: 'PMP® Certification',
                time: '0-3 years PM experience',
                salary: '$85K - $115K',
                skills: [
                    'Construction planning',
                    'Site management',
                    'Contract administration'
                ]
            },
            {
                role: 'Senior Construction PM',
                cert: 'PMI-RMP® Certification',
                time: '3-7 years experience',
                salary: '$115K - $155K',
                skills: [
                    'Large-scale projects',
                    'Safety & risk management',
                    'Multi-contractor coordination'
                ]
            },
            {
                role: 'Construction Program Manager',
                cert: 'PgMP® Certification',
                time: '7-12 years experience',
                salary: '$155K - $200K',
                skills: [
                    'Multi-site programs',
                    'Developer relations',
                    'Portfolio optimization'
                ]
            },
            {
                role: 'Director of Construction',
                cert: 'PfMP® Certification',
                time: '12+ years experience',
                salary: '$200K - $280K+',
                skills: [
                    'Strategic development',
                    'P&L ownership',
                    'Executive leadership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Silver Package - Live Virtual',
            desc: 'Great for construction PMs who want to apply PM frameworks to complex building projects.',
            price: '$1,299'
        },
        totalIncrease: '+$195K'
    },

    'engineering-pm': {
        stages: [
            {
                role: 'Engineering Project Manager',
                cert: 'PMP® Certification',
                time: '0-3 years PM experience',
                salary: '$88K - $118K',
                skills: [
                    'Engineering project planning',
                    'Technical stakeholder management',
                    'Design coordination'
                ]
            },
            {
                role: 'Senior Engineering PM',
                cert: 'PMI-RMP® Certification',
                time: '3-7 years experience',
                salary: '$118K - $158K',
                skills: [
                    'Complex engineering projects',
                    'Risk & quality management',
                    'Cross-disciplinary leadership'
                ]
            },
            {
                role: 'Engineering Program Manager',
                cert: 'PgMP® Certification',
                time: '7-11 years experience',
                salary: '$158K - $205K',
                skills: [
                    'Engineering portfolio',
                    'Product development programs',
                    'Innovation management'
                ]
            },
            {
                role: 'Chief Project Officer',
                cert: 'PfMP® Certification',
                time: '12+ years experience',
                salary: '$205K - $300K+',
                skills: [
                    'Enterprise project strategy',
                    'Organizational excellence',
                    'C-suite leadership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Perfect for engineering PMs seeking executive roles with personalized career coaching.',
            price: '$2,499'
        },
        totalIncrease: '+$212K'
    },

    // Senior Level Roles
    'senior-pm': {
        stages: [
            {
                role: 'Senior Project Manager',
                cert: 'PMP® + PMI-ACP®/RMP®',
                time: '0-2 years at senior level',
                salary: '$110K - $140K',
                skills: [
                    'Large-scale project delivery',
                    'Mentoring junior PMs',
                    'Specialized expertise'
                ]
            },
            {
                role: 'Program Manager',
                cert: 'PgMP® Certification',
                time: '2-5 years experience',
                salary: '$140K - $180K',
                skills: [
                    'Multi-project coordination',
                    'Strategic alignment',
                    'Resource optimization'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PfMP® Certification',
                time: '5-9 years experience',
                salary: '$180K - $230K',
                skills: [
                    'PMO establishment',
                    'Governance frameworks',
                    'Portfolio strategy'
                ]
            },
            {
                role: 'VP of Project Management',
                cert: 'PfMP® Certification',
                time: '10+ years experience',
                salary: '$230K - $300K+',
                skills: [
                    'Enterprise PM strategy',
                    'Organizational transformation',
                    'Executive leadership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Best for senior PMs targeting director and VP roles where executive presence matters.',
            price: '$2,499'
        },
        totalIncrease: '+$190K'
    },

    'program-manager': {
        stages: [
            {
                role: 'Program Manager',
                cert: 'PgMP® Certification',
                time: '0-2 years at program level',
                salary: '$135K - $170K',
                skills: [
                    'Program governance',
                    'Multi-project coordination',
                    'Benefits realization'
                ]
            },
            {
                role: 'Senior Program Manager',
                cert: 'PgMP® + PMI-RMP®',
                time: '2-5 years experience',
                salary: '$170K - $210K',
                skills: [
                    'Large-scale programs',
                    'Strategic program risk',
                    'Executive stakeholder management'
                ]
            },
            {
                role: 'Director of PMO',
                cert: 'PfMP® Certification',
                time: '5-8 years experience',
                salary: '$210K - $260K',
                skills: [
                    'Portfolio management',
                    'Organizational strategy',
                    'PMO maturity development'
                ]
            },
            {
                role: 'Chief Project Officer',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$260K - $350K+',
                skills: [
                    'Enterprise portfolio strategy',
                    'Organizational transformation',
                    'Board-level reporting'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Perfect for program managers advancing to executive roles with strategic focus.',
            price: '$2,499'
        },
        totalIncrease: '+$215K'
    },

    'portfolio-manager': {
        stages: [
            {
                role: 'Portfolio Manager',
                cert: 'PgMP® Certification',
                time: '0-2 years at portfolio level',
                salary: '$145K - $185K',
                skills: [
                    'Portfolio optimization',
                    'Investment prioritization',
                    'Resource allocation'
                ]
            },
            {
                role: 'Senior Portfolio Manager',
                cert: 'PfMP® Certification',
                time: '2-5 years experience',
                salary: '$185K - $230K',
                skills: [
                    'Strategic portfolio management',
                    'Business case evaluation',
                    'Value maximization'
                ]
            },
            {
                role: 'Director of Portfolio Management',
                cert: 'PfMP® Certification',
                time: '5-8 years experience',
                salary: '$230K - $280K',
                skills: [
                    'Enterprise portfolio strategy',
                    'Organizational alignment',
                    'Executive advisory'
                ]
            },
            {
                role: 'VP of Strategic Portfolio',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$280K - $380K+',
                skills: [
                    'Corporate strategy alignment',
                    'Investment strategy',
                    'C-suite partnership'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Ideal for portfolio managers transitioning to senior leadership with strategic impact.',
            price: '$2,499'
        },
        totalIncrease: '+$235K'
    },

    // Leadership Roles
    'director-pmo': {
        stages: [
            {
                role: 'Director of PMO',
                cert: 'PgMP® + PfMP®',
                time: '0-2 years at director level',
                salary: '$165K - $210K',
                skills: [
                    'PMO governance',
                    'Portfolio oversight',
                    'Organizational strategy'
                ]
            },
            {
                role: 'Senior Director of PMO',
                cert: 'PfMP® Certification',
                time: '2-5 years experience',
                salary: '$210K - $260K',
                skills: [
                    'Enterprise PMO',
                    'Maturity advancement',
                    'Strategic leadership'
                ]
            },
            {
                role: 'VP of Project Management',
                cert: 'PfMP® Certification',
                time: '5-8 years experience',
                salary: '$260K - $320K',
                skills: [
                    'Enterprise PM strategy',
                    'Organizational transformation',
                    'Executive leadership'
                ]
            },
            {
                role: 'Chief Project Officer',
                cert: 'PfMP® Certification',
                time: '9+ years experience',
                salary: '$320K - $450K+',
                skills: [
                    'Corporate strategy',
                    'Board presentations',
                    'C-suite collaboration'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Executive-level coaching for directors advancing to VP and C-suite positions.',
            price: '$2,499'
        },
        totalIncrease: '+$285K'
    },

    'vp-pm': {
        stages: [
            {
                role: 'VP of Project Management',
                cert: 'PfMP® Certification',
                time: '0-3 years at VP level',
                salary: '$230K - $300K',
                skills: [
                    'Enterprise PM strategy',
                    'Organizational transformation',
                    'Executive stakeholder management'
                ]
            },
            {
                role: 'Senior VP of PMO',
                cert: 'PfMP® Certification',
                time: '3-6 years experience',
                salary: '$300K - $380K',
                skills: [
                    'Multi-division oversight',
                    'Strategic planning',
                    'Leadership development'
                ]
            },
            {
                role: 'Chief Project Officer',
                cert: 'PfMP® Certification',
                time: '6-10 years experience',
                salary: '$380K - $500K',
                skills: [
                    'Corporate strategy alignment',
                    'Board-level reporting',
                    'Enterprise transformation'
                ]
            },
            {
                role: 'Chief Operating Officer',
                cert: 'Executive Leadership',
                time: '10+ years experience',
                salary: '$500K - $750K+',
                skills: [
                    'Operations excellence',
                    'P&L ownership',
                    'Corporate governance'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Elite executive coaching for VPs advancing to C-suite and COO positions.',
            price: '$2,499'
        },
        totalIncrease: '+$520K'
    },

    'cpo': {
        stages: [
            {
                role: 'Chief Project Officer',
                cert: 'PfMP® Certification',
                time: 'Current CPO role',
                salary: '$320K - $450K',
                skills: [
                    'Enterprise portfolio strategy',
                    'Organizational excellence',
                    'Board collaboration'
                ]
            },
            {
                role: 'Senior Chief Project Officer',
                cert: 'PfMP® + Executive Cert',
                time: '3-5 years experience',
                salary: '$450K - $600K',
                skills: [
                    'Corporate transformation',
                    'Innovation portfolio',
                    'Strategic M&A integration'
                ]
            },
            {
                role: 'Chief Operating Officer',
                cert: 'Executive Leadership',
                time: '5-8 years experience',
                salary: '$600K - $850K',
                skills: [
                    'Full operations oversight',
                    'Revenue & profitability',
                    'Executive leadership'
                ]
            },
            {
                role: 'Chief Executive Officer',
                cert: 'Board Certification',
                time: '10+ years experience',
                salary: '$850K - $2M+',
                skills: [
                    'Vision & strategy',
                    'Shareholder value',
                    'Ultimate accountability'
                ]
            }
        ],
        recommendedPackage: {
            name: 'Gold Package - 1-on-1 Mentoring',
            desc: 'Executive-level certification and coaching for C-suite professionals.',
            price: '$2,499'
        },
        totalIncrease: '+$1.7M+'
    }
};

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initStickyElements();
    initAnimations();
    initTestimonialCarousel();
    initFAQAccordion();
    initContactForm();
    initCareerTracks();
    
    // Load saved career track selection from localStorage
    const savedRole = localStorage.getItem('selectedRole');
    if (savedRole && careerTracks[savedRole]) {
        document.getElementById('roleSelect').value = savedRole;
        updateCareerTrack(savedRole);
    } else {
        // Default to project-manager
        updateCareerTrack('project-manager');
    }
});

// ===================================
// NAVIGATION
// ===================================

function initNavigation() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#contact') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        mobileToggle.classList.remove('active');
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
}

// ===================================
// STICKY ELEMENTS
// ===================================

function initStickyElements() {
    const navbar = document.getElementById('navbar');
    const stickyCta = document.getElementById('stickyCta');
    
    window.addEventListener('scroll', function() {
        // Navbar scroll effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Sticky CTA bar appears after hero section
        if (window.scrollY > 600) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
}

// ===================================
// ANIMATIONS
// ===================================

function initAnimations() {
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateNumber(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
=======
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
>>>>>>> 9c8f5bf5e02510ea504e01e763142783edf4bb97
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
<<<<<<< HEAD
            element.textContent = target % 1 === 0 ? target : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
=======
            element.textContent = formatStatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatStatNumber(Math.floor(current));
>>>>>>> 9c8f5bf5e02510ea504e01e763142783edf4bb97
        }
    }, 16);
}

<<<<<<< HEAD
// ===================================
// TESTIMONIAL CAROUSEL
// ===================================

function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    let autoplayInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 8000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoplay();
            showSlide(index);
            startAutoplay();
        });
    });
    
    // Start autoplay
    startAutoplay();
    
    // Pause on hover
    const carousel = document.getElementById('testimonialCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }
}

// ===================================
// FAQ ACCORDION
// ===================================

function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===================================
// CONTACT FORM
// ===================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!data.fullName || !data.email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // TODO: Replace with actual API endpoint
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you! We will contact you soon with your PMP readiness assessment.');
            
            // Close modal
            closeContactForm();
            
            // Reset form
            form.reset();
        });
    }
}

function openContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeContactForm() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
        closeContactForm();
    }
});

// ===================================
// CAREER TRACKS
// ===================================

function initCareerTracks() {
    const roleSelect = document.getElementById('roleSelect');
    
    if (roleSelect) {
        roleSelect.addEventListener('change', function() {
            const selectedRole = this.value;
            updateCareerTrack(selectedRole);
            
            // Save selection to localStorage
            localStorage.setItem('selectedRole', selectedRole);
        });
    }
}

function updateCareerTrack(roleKey) {
    const track = careerTracks[roleKey];
    
    if (!track) {
        console.error('Career track not found:', roleKey);
        return;
    }
    
    // Update all 4 stages
    track.stages.forEach((stage, index) => {
        const stageNum = index + 1;
        
        // Update role
        const roleEl = document.getElementById(`stage${stageNum}Role`);
        if (roleEl) roleEl.textContent = stage.role;
        
        // Update certification
        const certEl = document.getElementById(`stage${stageNum}Cert`);
        if (certEl) certEl.textContent = stage.cert;
        
        // Update time
        const timeEl = document.getElementById(`stage${stageNum}Time`);
        if (timeEl) timeEl.textContent = stage.time;
        
        // Update salary
        const salaryEl = document.getElementById(`stage${stageNum}Salary`);
        if (salaryEl) salaryEl.textContent = stage.salary;
        
        // Update skills
        const skillsEl = document.getElementById(`stage${stageNum}Skills`);
        if (skillsEl) {
            skillsEl.innerHTML = stage.skills.map(skill => 
                `<li>${skill}</li>`
            ).join('');
        }
    });
    
    // Update salary bars with animation
    updateSalaryBars(track.stages);
    
    // Update total increase
    const totalIncreaseEl = document.getElementById('totalIncrease');
    if (totalIncreaseEl) {
        totalIncreaseEl.innerHTML = `Potential increase: <strong>${track.totalIncrease}</strong> over your career`;
    }
    
    // Update recommended package
    updateRecommendedPackage(track.recommendedPackage);
    
    // Trigger animation
    animateCareerPath();
}

function updateSalaryBars(stages) {
    // Calculate relative widths based on max salary
    const maxSalary = 300000; // $300K as reference max
    
    stages.forEach((stage, index) => {
        const avgSalary = parseSalaryAverage(stage.salary);
        const percentage = (avgSalary / maxSalary) * 100;
        
        const barFill = document.querySelector(`.salary-bar[data-stage="${index + 1}"] .bar-fill`);
        if (barFill) {
            // Reset width first
            barFill.style.width = '0%';
            
            // Animate after a brief delay
            setTimeout(() => {
                barFill.style.width = `${Math.min(percentage, 100)}%`;
            }, 100 + (index * 150));
=======
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
>>>>>>> 9c8f5bf5e02510ea504e01e763142783edf4bb97
        }
    });
}

<<<<<<< HEAD
function parseSalaryAverage(salaryRange) {
    // Parse salary string like "$85K - $110K" to get average
    const matches = salaryRange.match(/\$(\d+(?:\.\d+)?)[KM]/g);
    if (!matches || matches.length < 2) return 0;
    
    const min = parseFloat(matches[0].replace('$', '').replace('K', '')) * 1000;
    const max = parseFloat(matches[1].replace('$', '').replace('K', '').replace('M', '')) * 
                (matches[1].includes('M') ? 1000000 : 1000);
    
    return (min + max) / 2;
}

function updateRecommendedPackage(packageInfo) {
    const packageEl = document.getElementById('packageRecommendation');
    if (packageEl) {
        packageEl.innerHTML = `
            <p class="package-name">${packageInfo.name}</p>
            <p class="package-desc">${packageInfo.desc}</p>
            <p class="package-price"><strong>${packageInfo.price}</strong> one-time payment</p>
        `;
    }
}

function animateCareerPath() {
    const stages = document.querySelectorAll('.career-stage');
    
    stages.forEach((stage, index) => {
        // Reset animation
        stage.style.opacity = '0';
        stage.style.transform = 'translateX(-30px)';
        
        // Trigger animation
        setTimeout(() => {
            stage.style.transition = 'all 0.6s ease';
            stage.style.opacity = '1';
            stage.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Print career roadmap
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});
=======
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
>>>>>>> 9c8f5bf5e02510ea504e01e763142783edf4bb97
