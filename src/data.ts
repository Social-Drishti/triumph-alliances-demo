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
    description: "Total inventory sold from 2022 to 2025 across Mumbai projects."
  },
  {
    value: "3,500+",
    label: "Channel Partners",
    description: "Active brokers mobilized across Mumbai micromarkets."
  },
  {
    value: " Setup",
    label: "Cost for Developers",
    description: "No upfront fees. We invest our capital to run campaigns."
  },
  {
    value: "60+ Cr",
    label: "Monthly Run-Rate",
    description: "Consistent sales execution velocity across mandates."
  }
];

export const services: Service[] = [
  {
    id: "sales-strategy",
    title: "End-to-End Sales Management",
    subtitle: "Zero Upfront Cost",
    description: "Dedicated on-ground sales teams and administrative staff deployed at zero setup cost, handling the complete sales process from lead qualification to closure.",
    iconName: "TrendingUp",
    details: [
      "Lead Qualification & Nurturing: Systematic vetting of inbound leads, follow-ups, and appointment-setting with continuous campaign performance monitoring.",
      "On-Ground Sales Teams: Dedicated, project-exclusive closing teams deployed at the site to handle showings, negotiations, and the closure process.",
      "Zero Setup Cost: No upfront fees or infrastructure costs. Developers only pay on performance — a commission-based model that aligns our success with yours.",
      "Stalled Project Revivals: Specialists in taking over delayed, disrupted, and difficult developments and turning them into celebrated sell-outs."
    ],
    features: ["Zero setup cost model", "Dedicated closing teams", "Lead qualification systems", "Performance-based revenue"]
  },
  {
    id: "creative-digital",
    title: "In-House Creative & Digital Marketing",
    subtitle: "Performance Marketing",
    description: "An internal creative studio produces all marketing materials — brochures, project themes, branding — while a specialized digital team runs high-impact campaigns on social media targeting lead generation.",
    iconName: "Palette",
    details: [
      "In-House Creative Studio: All marketing collateral — brochures, site branding, campaign creatives — produced internally for speed and consistency.",
      "Digital Campaign Execution: High-precision digital campaigns on Facebook, Instagram, and search platforms optimized for verified buyer leads.",
      "Project Repositioning: Narrative restructuring for stalled or poorly positioned projects to rebuild buyer trust and urgency.",
      "Brand Collateral Production: Quick access to marketing materials including 3D visualizations, walkthrough videos, and themed sales gallery styling."
    ],
    features: ["In-house creative team", "Digital ad campaigns", "Narrative repositioning", "Rapid collateral production"]
  },
  {
    id: "channel-activation",
    title: "Channel Partner Activation",
    subtitle: "Broker Network Mobilization",
    description: "Activation of a strong channel-partner network of 3,500+ brokers across Mumbai through targeted outreach, site familiarization drives, and incentive programs to drive walk-ins and closures.",
    iconName: "Users",
    details: [
      "3,500+ Broker Network: Immediate activation of boutique brokers and institutional networks across Mumbai micromarkets.",
      "CP Outreach & Training: High-production orientation meets, targeted communications, and ready-to-use digital toolkits for brokers.",
      "Site Familiarization Drives: Organized broker site visits and tours to build confidence and urgency among the partner network.",
      "Transparent Commission Cycles: High-priority broker payouts to ensure sustained enthusiasm and long-term partner loyalty."
    ],
    features: ["3,500+ active brokers", "Targeted CP outreach", "Site familiarization tours", "Fast commission payouts"]
  },
  {
    id: "manpower-support",
    title: "Manpower & Site Support",
    subtitle: "Professional On-Site Teams",
    description: "Ready-to-deploy sales and administrative teams stationed at project sites with zero upfront cost, handling everything from visitor reception to post-sales client relations.",
    iconName: "Briefcase",
    details: [
      "Professional On-Site Advisors: Trained relationship experts handling visitor reception, project walkthroughs, and objection handling.",
      "Rigorous Lead Nurturing: Active follow-ups, custom VIP site tours, and quick response times for prospective home buyers.",
      "CRM & Booking Operations: End-to-end booking facilitation, documentation management, and smooth onboarding transitions.",
      "Post-Sales Client Relations: Keeping customers engaged post-booking, fostering reference pipelines and word-of-mouth growth."
    ],
    features: ["Trained on-site teams", "VIP tour facilitation", "Booking operations", "Customer relationship management"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "jogeshwari-project",
    title: "Jogeshwari Project",
    subtitle: "10-Year Delayed Stalled Project Turnaround",
    location: "Jogeshwari, West Mumbai",
    category: "Stalled Project Revival",
    imageUrl: "/stock_buildings.jpg",
    metrics: [
      { label: "Debt Cleared", value: "₹72 Cr" },
      { label: "Price Appreciation", value: "37% Rise" },
      { label: "Inventory Sold", value: "100%" },
      { label: "Occupation Certificate", value: "Obtained" }
    ],
    challenge: "A West Mumbai project that had been stalled for 10 years, burdened with debt, and had managed only 8 sales in 6 months under two previous firms. Buyer confidence was at rock bottom and local brokers had abandoned the project.",
    solution: "Triumph deployed an aggressive CP activation strategy combined with clear project repositioning and daily on-ground discipline. The team rebuilt buyer trust and urgency through targeted broker outreach, redesigned marketing collateral, and consistent site-level execution.",
    results: [
      "Complete sell-out of Towers B and C, achieving 100% inventory liquidation.",
      "Cleared ₹72 Cr of developer debt through accelerated sales revenue.",
      "Sale prices appreciated from ₹19,000 to ₹26,000 per sq.ft — a 37% increase.",
      "Obtained Occupation Certificate (OC) and became the micro-market's top-selling project."
    ]
  },
  {
    id: "shristi-residency",
    title: "Shristi Residency",
    subtitle: "Dense Slum Pocket Project — Breakthrough Success",
    location: "Mumbai",
    category: "Low Walk-In Revival",
    imageUrl: "/stock_buildings (2).jpg",
    metrics: [
      { label: "Units Sold in 1 Year", value: "134" },
      { label: "Revenue Generated", value: "₹150+ Cr" },
      { label: "CPs Activated", value: "179" },
      { label: " Setup Cost to Builder", value: "" }
    ],
    challenge: "The project by Shristi Builders was generating only ~20 walk-ins per month with ~150 unsold units. Located in a commercially difficult dense slum pocket, buyer confidence was extremely low and the project had stalled.",
    solution: "Triumph deployed a dedicated sales team with intense micro-market engagement. The team activated 179 channel partners through targeted communication and organized site familiarization tours. Daily on-ground discipline and consistent broker follow-ups drove traction.",
    results: [
      "Sold 134 units in one year, generating ₹150+ Cr in revenue.",
      "Overcame the perception of a commercially difficult location to achieve breakthrough success.",
      "All achieved with zero setup cost to the builder — a pure performance-based engagement."
    ]
  },
  {
    id: "rera-launch-recovery",
    title: "Post-RERA Launch Recovery",
    subtitle: "From 1 Flat in 14 Months to Near Sell-Out",
    location: "Mumbai",
    category: "RERA Recovery",
    imageUrl: "/stock_buildings (3).jpg",
    metrics: [
      { label: "Units Sold", value: "84 of 90" },
      { label: "Revenue Generated", value: "₹95 Cr" },
      { label: "Marketing Spend", value: "₹12 Lakh" },
      { label: "Construction Complete", value: "1 Year Early" }
    ],
    challenge: "A project that had sold only 1 flat in the 14 months following RERA registration (July 2024) due to limited amenities and strong competition from nearby developments. The project was at serious risk of missing RERA deadlines.",
    solution: "Triumph reframed the product narrative, activated channel partners aggressively, and launched a high-precision digital campaign using just ₹12 lakh. The combination of repositioned messaging, broker mobilization, and targeted digital ads created rapid momentum.",
    results: [
      "Sold 84 of 90 units (~93% of inventory), generating ₹95 Cr in sales.",
      "Completed construction a full year before the RERA deadline.",
      "Achieved maximum ROI with a marketing spend of only ₹12 lakh."
    ]
  },
  {
    id: "greenpath-prelaunch",
    title: "Greenpath Pre-Launch",
    subtitle: "Rapid Pre-Launch Sell-Out on Minimal Budget",
    location: "Mumbai",
    category: "Pre-Launch Acceleration",
    imageUrl: "/stock_buildings (4).jpg",
    metrics: [
      { label: "Sales During Launch", value: "₹50 Cr" },
      { label: "Marketing Budget", value: "₹9 Lakh" },
      { label: "CPs Activated", value: "153" },
      { label: "Live Partners", value: "30" }
    ],
    challenge: "Greenpath needed strong pre-launch demand on a very tight budget of just ₹9 lakh. Building buyer momentum before an official launch required precise targeting and efficient broker activation without the luxury of a large marketing spend.",
    solution: "Triumph designed a pre-launch blueprint that activated 153 channel partners, with 30 becoming live, active partners. Focused communication drove targeted walk-ins through precise broker outreach and buyer engagement campaigns.",
    results: [
      "Achieved ₹50 Cr of sales during the launch phase with only ₹9 lakh in marketing spend.",
      "Sufficient revenue generated to fund construction without requiring bank finance.",
      "153 CPs activated with 30 live partners driving consistent walk-in traffic."
    ]
  }
];

export const partnerBenefits: PartnerBenefit[] = [
  {
    title: "Immediate Inventory Access",
    description: "Get transparent, real-time inventory updates across all active project sites in Mumbai. No double-bookings, no confusion — just live availability.",
    iconName: "Layers"
  },
  {
    title: "Digital Marketing Toolkits",
    description: "Access white-labeled brochures, project walkthrough videos, campaign creatives, and ad templates ready for your branding and client outreach.",
    iconName: "Sliders"
  },
  {
    title: "Fast Commission Cycles",
    description: "Enjoy prompt commission verification and one of the fastest payout cycles in Mumbai. We respect our partners' hard work with transparent, timely payments.",
    iconName: "CreditCard"
  },
  {
    title: "Dedicated CP Support",
    description: "A dedicated relationship manager helps schedule site visits, arranges client transport, and supports you through the closure process.",
    iconName: "PhoneCall"
  },
  {
    title: "Site Familiarization Tours",
    description: "Organized site visits and project orientation sessions to help you and your clients experience the property firsthand and build buying confidence.",
    iconName: "Award"
  },
  {
    title: "Networking & Training",
    description: "Get invited to project briefings, real estate trend workshops, and networking opportunities with developers and top-performing brokers.",
    iconName: "Sparkles"
  }
];

export const openPositions: JobPosition[] = [
  {
    id: "sourcing-manager",
    title: "Real Estate Sourcing Manager",
    department: "Channel Partner Relations",
    experience: "3 - 5 Years",
    location: "Malad West, Mumbai",
    type: "Full-Time",
    description: "We are looking for a highly connected Sourcing Manager to engage and mobilize our active network of over 3,500 channel partners across Mumbai micromarkets.",
    requirements: [
      "Proven experience in Mumbai real estate broker relations or sourcing.",
      "Exceptional communication, negotiation, and public presentation skills.",
      "Ability to organize broker meets, project orientations, and manage commission pipelines."
    ]
  },
  {
    id: "closing-expert",
    title: "Premium Sales Closing Expert",
    department: "Sales & Strategy Execution",
    experience: "4 - 6 Years",
    location: "Mumbai",
    type: "Full-Time",
    description: "We are seeking high-performance real estate closing professionals with a proven track record of handling residential walk-ins and converting high-intent leads.",
    requirements: [
      "Extensive experience in residential closings across Mumbai micromarkets.",
      "Impeccable communication and mastery over objection-handling and pricing pitch.",
      "Self-driven attitude, high discipline, and familiarity with real estate CRMs."
    ]
  },
  {
    id: "performance-marketer",
    title: "Lead Generation Specialist / Performance Marketer",
    department: "Creative & Digital",
    experience: "2 - 4 Years",
    location: "Malad West, Mumbai",
    type: "Full-Time",
    description: "Join our in-house digital team to create and manage high-converting lead campaigns across Meta, Google Search, and display networks tailored for real estate.",
    requirements: [
      "Expertise in Facebook Ads Manager, Google PPC, and audience retargeting.",
      "Deep understanding of Cost-Per-Lead (CPL) optimization and landing page A/B testing.",
      "Analytical mindset with the ability to compile campaign ROI reports for developers."
    ]
  },
  {
    id: "creative-copywriter",
    title: "Real Estate Creative Copywriter",
    department: "Creative & Digital",
    experience: "1 - 3 Years",
    location: "Malad West, Mumbai",
    type: "Full-Time",
    description: "We need a wordsmith who can craft elegant narratives for brochures, punchy taglines for campaigns, and engaging scripts for property walkthroughs.",
    requirements: [
      "Strong portfolio showcasing copy written for real estate, lifestyle, or luxury brands.",
      "Ability to translate complex project features into customer-centric benefits.",
      "Collaborative spirit to work closely with our graphic designers and video editors."
    ]
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "stalled-project-revival",
    title: "How We Revived a 10-Year Stalled Project in Jogeshwari",
    excerpt: "When a West Mumbai project sat idle for a decade with only 8 sales in 6 months, we deployed aggressive CP activation, repositioned the narrative, and achieved a complete sell-out.",
    category: "Sales Strategy",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    imageUrl: "/stock_buildings (4).jpg",
    author: "Triumph Alliances",
    authorRole: "Strategy Team",
    content: "In Mumbai's highly competitive real estate micro-markets, stalling is an expensive nightmare. A stagnant project doesn't just drain developer holding costs — it rapidly corrodes market perception. Once local brokers stop pitching a project and buyers sense stagnation, the project develops an unspoken stigma.\n\nStandard responses typically involve deep pricing cuts. However, price slicing is a race to the bottom that damages developer equity and fails to solve the root problem. The root problem is almost always positioning and distribution blockages.\n\nOur Jogeshwari case study demonstrates this perfectly. A project stalled for 10 years with only 8 sales under two previous firms was transformed through a three-pillar strategy: aggressive CP activation to rebuild the broker network, clear repositioning of the project narrative to restore buyer confidence, and daily on-ground discipline at the site level.\n\nThe result: complete sell-out of Towers B and C, clearance of ₹72 Cr in developer debt, price appreciation from ₹19,000 to ₹26,000 per sq.ft, and an Occupation Certificate obtained. The project became the micro-market's top-selling development.\n\nThe lesson is clear — when you optimize broker engagement, clarify inventory messaging, and launch targeted marketing, velocity returns naturally without destroying pricing integrity."
  },
  {
    id: "digital-campaign-roi",
    title: "Maximum ROI: How ₹12 Lakh Sold 84 Units Worth ₹95 Cr",
    excerpt: "A project that sold only 1 flat in 14 months post-RERA was transformed with a precision digital campaign and aggressive CP activation — proving that strategy trumps budget.",
    category: "Industry Insights",
    date: "Jun 15, 2026",
    readTime: "7 min read",
    imageUrl: "/stock_buildings (5).jpg",
    author: "Triumph Alliances",
    authorRole: "Digital & Strategy Team",
    content: "In real estate marketing, budget size is not the primary driver of results — strategy precision is. Our recent engagement with a post-RERA project proves this decisively.\n\nThe project had sold only 1 flat in 14 months following RERA registration. Limited amenities and strong competition from nearby developments had created a perception problem that no amount of generic advertising could solve.\n\nOur approach combined three elements: reframing the product narrative to highlight untapped value propositions, activating channel partners aggressively through targeted outreach and site familiarization, and launching a high-precision digital campaign with a budget of just ₹12 lakh.\n\nThe digital campaign focused on micro-market targeting — reaching potential buyers within specific geographic radius and demographic profiles who were actively searching for homes in the area. Combined with the broker network activation, this created a dual-channel momentum that rapidly converted interest into bookings.\n\nThe outcome: 84 of 90 units sold (~93% of inventory), generating ₹95 Cr in sales revenue. Construction was completed a full year before the RERA deadline. The total marketing spend was just ₹12 lakh — demonstrating that when strategy, execution, and channels align, even minimal budgets can deliver extraordinary results."
  },
  {
    id: "zero-cost-model",
    title: "The Zero-Setup Cost Model: Why It Works for Developers",
    excerpt: "Traditional agencies charge upfront retainers regardless of results. Our performance-based model means we invest our capital first and earn only when we close deals.",
    category: "Digital Marketing",
    date: "May 20, 2026",
    readTime: "4 min read",
    imageUrl: "/real_estate_sales_office.jpg",
    author: "Triumph Alliances",
    authorRole: "Leadership Team",
    content: "The real estate services industry has long operated on an agency model where developers bear the financial risk upfront. Retainer fees, setup costs, and marketing budgets are required before any sales activity begins — often with no guarantee of results.\n\nTriumph Alliances was founded on the premise that this model is broken. When developers pay upfront, the incentive structure is misaligned. Agencies are motivated to collect fees, not to close deals.\n\nOur zero-setup cost model flips this dynamic entirely. We invest our own capital into running digital campaigns, producing creative collateral, deploying sales teams, and activating our broker network. We earn only when we close deals — our success is directly tied to the developer's success.\n\nThis model works because it forces discipline. Every rupee we spend must generate measurable returns. Our in-house digital team optimizes campaigns for verified buyer leads, not vanity metrics. Our sales teams focus on conversion ratios, not just foot traffic. Our broker activation efforts target quality partners who can drive actual bookings.\n\nThe results speak for themselves: from the Jogeshwari turnaround (complete sell-out after 10 years of stagnation) to the RERA recovery (84 units sold for ₹95 Cr with just ₹12 lakh in marketing), our performance-based approach consistently delivers outcomes that traditional retainer models struggle to match."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Triumph Alliances transformed our Jogeshwari project from a 10-year liability into the micro-market's top-selling development. Their aggressive CP activation and daily discipline achieved what two previous firms could not. Complete sell-out, ₹72 Cr debt cleared, and prices rose from ₹19,000 to ₹26,000 per sq.ft.",
    author: "Developer Client",
    role: "Project Owner",
    company: "Jogeshwari Project",
    avatarUrl: "/stock_buildings.jpg"
  },
  {
    id: "t2",
    quote: "With only 20 walk-ins per month and 150 unsold units, we had almost given up. Triumph deployed a dedicated team, activated 179 channel partners, and sold 134 units in one year — generating ₹150+ Cr. All at zero setup cost to us.",
    author: "Shristi Builders",
    role: "Developer Partner",
    company: "Shristi Residency",
    avatarUrl: "/stock_buildings (3).jpg"
  },
  {
    id: "t3",
    quote: "We had sold only 1 flat in 14 months after RERA. Triumph reframed our narrative, mobilized brokers aggressively, and ran a precision digital campaign for just ₹12 lakh. The result: 84 of 90 units sold, ₹95 Cr generated, and construction completed a year early.",
    author: "RERA Project Developer",
    role: "Client",
    company: "Post-RERA Launch",
    avatarUrl: "/stock_buildings (4).jpg"
  }
];

export const partnerFAQs = [
  {
    question: "How do I register as a Channel Partner with Triumph Alliances?",
    answer: "Fill out the registration form on this page with your basic details and RERA number. Our relationship manager will verify your credentials and share current active project folders. Onboarding is designed to be quick and straightforward."
  },
  {
    question: "When are commissions processed and cleared?",
    answer: "We prioritize fast, transparent commission cycles. Upon successful booking registration and developer milestone payment, broker payouts are processed promptly. We believe timely payments are essential to maintaining partner enthusiasm and long-term relationships."
  },
  {
    question: "Do you provide marketing support to individual brokers?",
    answer: "Yes. Triumph Alliances provides full white-labeled marketing collateral including customized site brochures, walkthrough videos, digital ad creatives, and lead pitch scripts. All materials are designed by our in-house creative team for maximum impact."
  },
  {
    question: "Can I bring clients for exclusive site visits?",
    answer: "Absolutely. We facilitate site visits for your clients with our on-ground sales teams, provide project orientations, and support you through the closing process to ensure your broker ownership is maintained throughout."
  }
];
