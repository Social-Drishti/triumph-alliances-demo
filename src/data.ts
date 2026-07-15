export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  imageUrl: string;
  category: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface PartnerBenefit {
  title: string;
  description: string;
  iconName: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  experience: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: string;
  authorRole: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export const stats: Stat[] = [
  {
    value: "1,090+ Cr",
    label: "Sales Closed",
    description: "Total real estate value liquidated."
  },
  {
    value: "3,500+",
    label: "Channel Partners",
    description: "Active real estate brokers in Mumbai."
  },
  {
    value: " Setup",
    label: "Cost for Developers",
    description: "Zero upfront fees for developer marketing."
  },
  {
    value: "60+ Cr",
    label: "Monthly Run-Rate",
    description: "Consistent sales execution velocity."
  }
];

export const services: Service[] = [
  {
    id: "sales-strategy",
    title: "Direct Sales",
    subtitle: "Zero Upfront Cost",
    description: "We take full ownership of your project sales. We deploy expert closing teams to handle every visitor.",
    iconName: "TrendingUp",
    details: [
      "Zero Setup Cost: No overhead or advisory retainer fee for developer marketing assets.",
      "Stalled Project Revivals: Specialists in taking over slow-moving inventories and turning them into local blockbusters.",
      "Pricing & Inventory Structuring: Designing optimal layouts and payment plans tuned for immediate Mumbai demand.",
      "High-Performance Closing Teams: Dedicated, project-exclusive closing managers with rigorous pipeline management."
    ],
    features: ["Zero setup cost", "Stalled project specialists", "Dynamic pricing models", "Dedicated closing managers"]
  },
  {
    id: "creative-digital",
    title: "Creative & Digital",
    subtitle: "Performance Marketing",
    description: "Our in-house studio designs targeted digital campaigns and ultra-premium visual assets.",
    iconName: "Palette",
    details: [
      "High-Intent Performance Leads: Multi-channel digital marketing campaigns optimized for verified buyers (CPA & CPL metrics).",
      "Experiential Content Design: Ultra-premium brochure layouts, 3D site visualizations, walkthrough videos, and luxury sales gallery styling.",
      "Hyper-Local Targeting: Direct localized outreach and database mapping to high-net-worth individuals (HNIs) in specific Mumbai micromarkets.",
      "Omni-Channel Lead Funnels: High-converting landing pages integrated into custom CRM tools for transparent real-time developer review."
    ],
    features: ["Performance lead gen", "Visual collateral design", "HNI micromarket database", "Integrated CRM funnels"]
  },
  {
    id: "channel-activation",
    title: "Channel Activation",
    subtitle: "Direct Broker Network",
    description: "Get instant access to over 3,500 active boutique brokers across Mumbai.",
    iconName: "Users",
    details: [
      "3,500+ Broker Network: Instant activation of boutique brokers and high-performing institutional networks across MMR.",
      "Slick CP Meets & Training: We run high-production orientation meets and provide brokers with ready-to-use digital toolkits.",
      "On-Time Commission Auditing: High-priority broker payouts to ensure extreme enthusiasm and sustained broker interest.",
      "Custom Broker Portals: Dedicated communication channels to share instant inventory availability and incentive structures."
    ],
    features: ["3,500+ active brokers", "Broker toolkits & events", "Transparent payout cycles", "Live inventory sharing"]
  },
  {
    id: "manpower-support",
    title: "Site Support",
    subtitle: "Elite Site Closers",
    description: "We place trained relationship experts on-site to convert every visitor into a buyer.",
    iconName: "Briefcase",
    details: [
      "Professional On-Site Advisors: Elite real-estate professionals trained in objection handling, high-ticket persuasion, and professional etiquette.",
      "Rigorous Lead Nurturing: Quick call response times, active follow-ups, and custom VIP site tours for prospective home buyers.",
      "CRM & Booking Operations: End-to-end booking facilitation, documentation management, and smooth onboarding transitions to the developer.",
      "Post-Sales Client Relations: Keeping customers engaged and enthusiastic, fostering reference pipelines and word-of-mouth growth."
    ],
    features: ["Elite closing experts", "VIP site tour facilitation", "Booking operations support", "Customer reference builders"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "vivaan-heights",
    title: "Aura Grande Residence",
    subtitle: "Reviving a Stalled Premium Project in Mulund, Mumbai",
    location: "Mulund West, Mumbai",
    category: "Residential Revitalization",
    imageUrl: "/stock_buildings.jpg",
    metrics: [
      { label: "Sales in 90 Days", value: "INR 112 Cr" },
      { label: "Active CPs Activated", value: "480+" },
      { label: "Inventory Liquidated", value: "85%" },
      { label: "CPL Reduction", value: "42%" }
    ],
    challenge: "Aura Grande Residence was an ultra-premium tower that got stuck due to a sluggish local market and a mismatch in pricing structures. The developer was burning holding costs, and local brokers had stopped pitching the project due to delayed communications.",
    solution: "Triumph Alliances took over as the exclusive strategy house. We restructured the payment schemes into investor-friendly milestones, redesigned the digital collateral with our in-house creative team, and hosted an exclusive CP launch event to restore broker trust and share immediate commission transparency.",
    results: [
      "Liquidated 85% of the stalled premium apartments within the first 3 months.",
      "Generated over INR 112 Cr in sales revenue, completely stabilizing developer cash flows.",
      "Re-engaged 480+ local channel partners through optimized incentive plans."
    ],
    testimonial: {
      quote: "Triumph Alliances came in when Aura Grande was stalled for 12 months. Their strategy was swift, in-house marketing was flawless, and the sheer pace at which they closed deals took us by surprise.",
      author: "Rajesh Singhania",
      role: "Managing Director",
      company: "Singhania Realty Developers"
    }
  },
  {
    id: "horizon-crest",
    title: "Horizon Crest",
    subtitle: "Sashing Record Sales for a Mid-Segment Project in Thane",
    location: "Koproli Road, Thane",
    category: "Mid-Segment Residential",
    imageUrl: "/stock_buildings (2).jpg",
    metrics: [
      { label: "Total Sales Value", value: "INR 185 Cr" },
      { label: "Monthly Run Rate", value: "INR 22 Cr" },
      { label: "Partner Contribution", value: "65%" },
      { label: "Days to Sell-Out", value: "180 Days" }
    ],
    challenge: "A sprawling mid-segment township faced heavy competition from 5 adjacent projects. Standard digital marketing wasn't working, and the developer's in-house team was overwhelmed by low-quality, generic leads.",
    solution: "We deployed our micro-market targeted performance marketing suite to focus on families renting within a 5km radius. Simultaneously, we established a dedicated closing lounge on-site with elite Triumph closers, while coordinating direct transport facilities for VIP prospect site tours.",
    results: [
      "Achieved full sell-out of Phase-1 (240 units) in record 180 days.",
      "Maintained a consistent monthly sales velocity of INR 22+ Cr.",
      "Outperformed neighboring developments with a 3.2x higher visit-to-booking conversion rate."
    ],
    testimonial: {
      quote: "The micro-market targeting model Triumph created was brilliant. They didn't just give us leads; they gave us premium, qualified home buyers. A true strategy house.",
      author: "Anand K. Mehta",
      role: "Partner",
      company: "KM Group Developers"
    }
  },
  {
    id: "marina-breeze",
    title: "The Marina Bay Suites",
    subtitle: "Exclusive Launch of Sky Villas in Worli",
    location: "Worli, South Mumbai",
    category: "Ultra-Luxury Residential",
    imageUrl: "/stock_buildings (3).jpg",
    metrics: [
      { label: "Average Ticket Size", value: "INR 14.5 Cr" },
      { label: "Revenue Generated", value: "INR 290 Cr" },
      { label: "Launch Sell-Out", value: "80%" },
      { label: "HNI Site Walkins", value: "110+" }
    ],
    challenge: "Selling ultra-luxury sky villas requires an entirely different approach from standard real estate. Cold calling and regular portals are ineffective for HNIs, who value extreme privacy and customized experiences.",
    solution: "We engineered a highly confidential, invite-only launch campaign. We designed handmade physical velvet invitations coupled with premium interactive digital brochures and engaged exclusive wealth managers and high-tier luxury real estate advisors in South Mumbai.",
    results: [
      "Closed 20 premium Sky Villas, generating a total sales volume of INR 290 Cr.",
      "Ensured absolute developer confidentiality while creating unmatched brand prestige.",
      "Cultivated an exclusive, ongoing relationship database of 110+ vetted HNIs in South Mumbai."
    ],
    testimonial: {
      quote: "Triumph treated our luxury launch like a masterwork of art. Their bespoke HNI marketing strategies and absolute discretion exceeded all global standards.",
      author: "Vikramaditya Shah",
      role: "Chairman",
      company: "V. Shah Luxury Estates"
    }
  }
];

export const partnerBenefits: PartnerBenefit[] = [
  {
    title: "Instant Commission Clearance",
    description: "Enjoy prompt commission verification and lightning-fast payment cycles. We respect our channel partners' hard work above all else.",
    iconName: "CreditCard"
  },
  {
    title: "Exclusive Digital Toolkits",
    description: "Get access to white-labeled premium walkthrough videos, high-res site plans, brochures, and dynamic ad templates ready for your branding.",
    iconName: "Sliders"
  },
  {
    title: "Direct Developer Transparency",
    description: "Receive direct, live inventory access so you always know which units are available. No double-bookings, no confusion.",
    iconName: "Layers"
  },
  {
    title: "Dedicated CP Helpdesk",
    description: "Enjoy a dedicated support team that schedules site visits, arranges client transport, and helps you close your luxury leads smoothly.",
    iconName: "PhoneCall"
  },
  {
    title: "Broker Priority Reward Tiers",
    description: "Unlock premium quarterly reward programs, local luxury retreats, and higher commission brackets as you hit sales milestones.",
    iconName: "Award"
  },
  {
    title: "Regular Networking & Training",
    description: "Get invited to premium project briefings, real estate trend workshops, and exclusive networking dinners with top builders.",
    iconName: "Sparkles"
  }
];

export const openPositions: JobPosition[] = [
  {
    id: "sourcing-manager",
    title: "Real Estate Sourcing Manager",
    department: "Channel Partner Relations",
    experience: "3 - 5 Years",
    location: "Andheri, Mumbai",
    type: "Full-Time",
    description: "We are looking for a highly connected Sourcing Manager to engage and mobilize our active network of over 3,500+ channel partners across Mumbai.",
    requirements: [
      "Proven experience in Mumbai real estate broker relations or sourcing.",
      "Exceptional communication, negotiation, and public presentation skills.",
      "Ability to organize broker meets, project orientations, and manage dynamic commissions pipelines."
    ]
  },
  {
    id: "closing-expert",
    title: "Premium Sales Closing Expert",
    department: "Sales & Strategy Execution",
    experience: "4 - 6 Years",
    location: "Mulund / Thane, Mumbai",
    type: "Full-Time",
    description: "We are seeking high-performance real estate closing professionals with a proven track record of handling premium residential walk-ins and converting high-intent leads.",
    requirements: [
      "Extensive experience in high-ticket residential closings (ticket size INR 1.5 Cr to 8 Cr).",
      "Impeccable communication and absolute mastery over objection-handling and pricing pitch.",
      "Self-driven attitude, high discipline, and familiarity with top real estate CRMs."
    ]
  },
  {
    id: "performance-marketer",
    title: "Lead Generation Specialist / Performance Marketer",
    department: "Creative & Digital",
    experience: "2 - 4 Years",
    location: "Andheri, Mumbai",
    type: "Full-Time",
    description: "Join our in-house digital team to create and manage high-converting, high-intent lead campaigns across Meta, Google Search, and display networks specifically tailored for real estate.",
    requirements: [
      "Expertise in Facebook Ads Manager, Google PPC, and professional audience retargeting.",
      "Deep understanding of Cost-Per-Lead (CPL) optimization and landing page A/B testing.",
      "Analytical mindset with the ability to compile transparent campaign ROI reports for our developers."
    ]
  },
  {
    id: "creative-copywriter",
    title: "Real Estate Creative Copywriter",
    department: "Creative & Digital",
    experience: "1 - 3 Years",
    location: "Andheri, Mumbai",
    type: "Full-Time",
    description: "We need a wordsmith who can craft elegant narratives for luxury brochures, punchy taglines for landing pages, and engaging scripts for property walkthroughs.",
    requirements: [
      "Strong portfolio showcasing copy written for real estate, lifestyle, or luxury brands.",
      "Ability to translate complex developer project features into customer-centric benefits.",
      "Collaborative spirit to work closely with our graphic designers and video editors."
    ]
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "stalled-project-revival",
    title: "The Art of Stalled Project Revivals: How Strategy Trumps Pricing",
    excerpt: "When real estate inventory stops moving, developers immediately assume pricing is the issue. Here's why reshaping structure, marketing, and broker trust is more effective.",
    category: "Sales Strategy",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    imageUrl: "/stock_buildings (4).jpg",
    author: "Vinay Dangodra",
    authorRole: "Co-Founder & Head of Strategy",
    content: "In Mumbai's highly competitive real estate micro-markets, stalling is an expensive nightmare. A stagnant project doesn't just drain developer holding costs—it rapidly corrodes market perception. Once local brokers stop pitching a project and buyers sense stagnation, the project develops an unspoken stigma. \n\nStandard responses typically involve deep pricing cuts. However, price slicing is a race to the bottom that damages developer equity and fails to solve the root problem. The root problem is almost always positioning and distribution blockages. At Triumph Alliances, we focus on revitalizing stalled projects through a holistic three-pillar strategy: structural reconfiguration, narrative elevation, and trust-based channel reactivation. When you optimize broker payouts, clarify inventory schedules, and launch high-intent target marketing, velocity returns naturally without destroying pricing integrity."
  },
  {
    id: "mumbai-real-estate-trends",
    title: "MMR Real Estate Outlook 2026: Shift in Micromarket Demands",
    excerpt: "With new infrastructure projects like Metro expansions and Trans-Harbour Links completed, Mumbai's residential landscape has shifted. We examine the fastest growing pockets.",
    category: "Industry Insights",
    date: "Jun 15, 2026",
    readTime: "7 min read",
    imageUrl: "/stock_buildings (5).jpg",
    author: "Triumph Research",
    authorRole: "Market Intelligence Team",
    content: "The completion of key transit infrastructures has fundamentally reshaped the Mumbai Metropolitan Region (MMR). Commute times that previously took hours are now down to minutes, leading to an immediate redistribution of residential demand. Micromarkets that were once considered secondary are now leading premium residential growth. \n\nOur market research shows a massive surge in demand for premium 2BHK and 3BHK residences along the central belt and extended Western suburbs. Buyers are prioritizing wellness features, modern remote-working nooks, and highly integrated security structures. Developers who adapt their layouts to prioritize layout efficiency over purely bloated square footage are seeing 2.4x faster subscription rates. Moving into late 2026, understanding these transit-oriented demographic changes will define the difference between sales stagnation and rapid project absorption."
  },
  {
    id: "real-estate-performance-marketing",
    title: "Stop Wasting Budgets: Performance Lead Gen That Converts",
    excerpt: "Tired of receiving thousands of generic leads that lead to immediate switch-offs? Learn the difference between raw lead capture and high-intent funnel optimization.",
    category: "Digital Marketing",
    date: "May 20, 2026",
    readTime: "4 min read",
    imageUrl: "/real_estate_sales_office.jpg",
    author: "Sneha Nair",
    authorRole: "Creative Director",
    content: "In real estate, lead volume is a dangerous vanity metric. Any agency can set up a generic form and deliver thousands of low-cost leads. But if your calling center spends all day reaching numbers that are switched off, wrong, or completely unqualified, you are actually spending thousands on wasted labor. \n\nHigh-intent real estate performance marketing requires sophisticated micro-targeting, interactive multi-step qualifying questions, and instant automated verification. Instead of a single-click submit, we utilize short interactive forms where prospects verify budget tier, preferred location, and timeline of purchase before submitting. Coupled with instant WhatsApp OTP confirmation, our in-house digital engine filters out low-intent clicks. This ensures the site team only calls highly qualified prospects, raising booking conversions by up to 220% while saving thousands in wasted ad spend."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Triumph Alliances operates as a true Strategy House. Their zero upfront setup model is incredibly reassuring, and their team closed over INR 110 Cr of our stalled inventory in under 90 days. Their speed of execution is absolutely unparalleled in Mumbai.",
    author: "Rajesh Singhania",
    role: "Managing Director",
    company: "Singhania Realty Developers",
    avatarUrl: "/stock_buildings.jpg"
  },
  {
    id: "t2",
    quote: "Their network of 3,500+ active brokers is highly active. During our Thane project launch, Triumph mobilized over 400 brokers on site in a single week. We achieved a monthly sales run-rate of INR 22 Cr. Outstanding partner relationship.",
    author: "Anand K. Mehta",
    role: "Partner",
    company: "KM Group Developers",
    avatarUrl: "/stock_buildings (3).jpg"
  },
  {
    id: "t3",
    quote: "Selling high-ticket luxury penthouses in Worli was a challenge, but Triumph's invite-only strategy secured high-net-worth buyers with total discretion. They represent our brand with absolute premium elegance.",
    author: "Vikramaditya Shah",
    role: "Chairman",
    company: "V. Shah Luxury Estates",
    avatarUrl: "/stock_buildings (4).jpg"
  }
];

export const partnerFAQs = [
  {
    question: "How do I register as a Channel Partner with Triumph Alliances?",
    answer: "Registration is extremely simple and takes less than 2 minutes. Fill out our online form on this page with your basic details and RERA number. Our relationship manager will verify your credentials and send your login credentials to access active project toolkits."
  },
  {
    question: "When are commissions processed and cleared?",
    answer: "We offer one of the fastest commission clearance cycles in Mumbai. Upon a successful booking registration and developer milestone payment, we process and verify your broker payouts within 10 to 15 business days, with complete digital tracking."
  },
  {
    question: "Do you provide marketing support to individual brokers?",
    answer: "Yes! Triumph Alliances provides full white-labeled marketing collateral. You will receive customized site brochures, walkthrough videos, Facebook/WhatsApp ad creatives, and lead pitch scripts with your own agency name and contact info."
  },
  {
    question: "Can I bring clients for exclusive site visits?",
    answer: "Absolutely. We arrange premium air-conditioned transport for your high-profile clients, facilitate elite VIP tours on-site with our closing relationship managers, and help you finalize the deal while securing your broker ownership."
  }
];
