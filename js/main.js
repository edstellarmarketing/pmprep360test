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
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target % 1 === 0 ? target : target.toFixed(1);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

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
        }
    });
}

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