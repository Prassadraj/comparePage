export const compareHeroData = {
  meta: {
    label: "Micro1 VS HyrinG",
    titleLeft: "Micro1",
    titleRight: "Hyring",
    subtitle: "A Detailed Comparison",
    writtenOn: "18 Aug 2025",
    lastUpdated: "21 Aug 2025",
  },
  authors: {
    writtenBy: {
      name: "Team Hyring",
      role: "Written by",
      image: "/asset/logo.png",
    },
    factCheckedBy: {
      name: "Adithyan RK",
      role: "Fact Checked by",
      image: "/asset/main.png",
      verified: true,
    },
  },
  frameImage: "/compare/frame.png",
};

export const Tabledata = [
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  "Lorem ipsum dolor sit amet amet amet, consectetur adipiscing elit",
  
];

export const briefDataOne = {
  title: "Brief",
  description:
    "Hyring is an AI interviewing platform designed for recruiters who need to hire quickly without sacrificing judgment or control. On review platforms such as G2 and Capterra, users often discuss how Hyring cuts down on screening work in the early stages of hiring and helps recruiters identify better candidates earlier.",

  pros: [
    "Cuts early-stage screening time",
    "Consistent, structured interviews",
    "Visible interview integrity signals",
    "Clear summaries for hiring managers",
    "Easy to roll out for recruiters",
  ],

  cons: [
    "Less useful for very small teams",
    "Best value at moderate to high volume",
    "Not a replacement for an ATS",
  ],

  takeaway:
    "Hyring is commonly seen as a practical, dependable tool for larger teams and MNCs hiring at scale who want speed, structure, and transparency without removing humans from the decision-making process.",
};

export const conclusionData = {
  title: "Conclusion: Which is the Best AI Interviewer – Micro1 or Hyring?",
  subtitle:
    "For organizations deciding between the two, Hyring is the clearer choice when the goal is effective, scalable hiring.",

  left: {
    logo: "H",
    logoBg: "bg-lime-400",
    sections: [
      {
        title: "Why Hyring is stronger",
        text: "Recruiter-facing product with proctoring, role-based templates (video/phone/coding), public API + ATS integration docs, and pricing that makes scaling up evaluation value-friendly.",
      },
      {
        title: "Choose Hyring if",
        text: "You run high-volume or role-varied hiring and want transparent proctoring, recruiter dashboards, and easy ATS integration.",
      },
    ],
  },

  right: {
    logo: "m.",
    logoBg: "bg-black",
    sections: [
      {
        title: "Where Micro1 is strong",
        text: "Sourcing and vetting domain experts, human data operations, and tooling designed for enterprises that need to build/benchmark human datasets (Zara, Data Engine).",
      },
      {
        title: "Choose Micro1 if",
        text: "Your primary need is sourcing/qualifying expert contributors, building high-quality human datasets, or integrating recruitment into a larger ML/data-ops program.",
      },
    ],
  },

  disclaimer:
    "Disclaimer: Information is sourced from public records and is subject to change. This comparison does not constitute a guarantee of current service offerings or specifications.",
};

export const featureComparisonData = {
  title: "Micro1 vs Hyring: Detailed Feature Comparison",
  intro:
    "Across core hiring workflows, which are screening, assessment integrity, recruiter efficiency, and ATS handoff, Hyring is the stronger platform for recruiting teams.",

  section: {
    heading: "Conversational AI Interviewing",

    left: {
      name: "Hyring",
      logo: "H",
      logoBg: "bg-lime-400",
      description:
        "Two-way video + phone interviews with dynamic follow-ups that adapt to candidate answers, scoring beyond keywords (speech, content depth, role fit). This yields faster shortlists for high-volume roles where structured conversational screening matters.",
    },

    right: {
      name: "Micro1",
      logo: "m.",
      logoBg: "bg-black",
      description:
        "Zara is an AI recruiter focused on sourcing and vetting subject-matter experts. Micro1 can qualify experts at scale, but public documentation emphasizes sourcing & vetting rather than the recruiter UI for high-volume conversational interviewing.",
    },
  },

  winner: {
    title: "WHO WINS",
    text: "If the recruiter’s main requirement is high-volume, role-specific video screening with documented proctoring,",
    highlight: " Hyring is more visible regarding product fit.",
  },
};
export const featureComparisonDataUiUx = {
  title: "UI UX Experience",

  section: {
    heading: "Conversational AI Interviewing",

    left: {
      name: "Hyring",
      logo: "H",
      logoBg: "bg-lime-400",
      description:
        "Two-way video + phone interviews with dynamic follow-ups that adapt to candidate answers, scoring beyond keywords (speech, content depth, role fit). This yields faster shortlists for high-volume roles where structured conversational screening matters.",
    },

    right: {
      name: "Micro1",
      logo: "m.",
      logoBg: "bg-black",
      description:
        "Zara is an AI recruiter focused on sourcing and vetting subject-matter experts. Micro1 can qualify experts at scale, but public documentation emphasizes sourcing & vetting rather than the recruiter UI for high-volume conversational interviewing.",
    },
  },

  winner: {
    title: "WHO WINS",
    text: "If the recruiter’s main requirement is high-volume, role-specific video screening with documented proctoring, Hyring is more visible regarding product fit.",
    highlight: " Hyring is more visible regarding product fit.",
  },
};

export const micro1BriefData = {
  title: "Brief",
  description:
    "Micro1 is an AI-powered platform that concentrates on sourcing and screening expert talent, with its AI recruiter Zara frequently mentioned in reviews. The feedback on platforms such as Capterra and Trustpilot is generally centered on the candidate experience and the platform’s capability to engage expert contributors in a relaxed and conversational manner.",

  pros: [
    "Friendly interview experience",
    "Comfortable for candidates",
    "Strong for niche expert vetting",
    "Built for long-running programs",
  ],

  cons: [
    "Less recruiter-focused",
    "Limited hiring workflow signals",
    "Slower fit for fast hiring cycles",
  ],

  takeaway:
    "Micro1 is well regarded for expert vetting and candidate engagement, but it aligns more closely with expert programs than with the realities of traditional recruiting pipelines and workflows.",
};

export const comparisonData = {
  title: "Micro1 vs Hyring: A Snapshot",
  columns: [
    {
      key: "hyring",
      name: "hyring",
      highlight: true,
      logo: "/hyring-logo.svg",
    },
    {
      key: "micro1",
      name: "Micro1",
      logo: "/micro1-logo.svg",
    },
  ],
  rows: [
    {
      label: "Pricing per interview",
      hyring: "$1–$5 per interview",
      micro1: "~$8 per interview",
    },
    {
      label: "Free Trial",
      hyring: false,
      micro1: false,
      type: "boolean",
    },
    {
      label: "Best for",
      hyring: "High-Volume Hiring for SMEs / Mid-level",
      micro1: "Enterprises",
    },
    {
      label: "Help Center",
      hyring: true,
      micro1: false,
      type: "boolean",
    },
    {
      label: "Live Chat",
      hyring: true,
      micro1: false,
      type: "boolean",
    },
    {
      label: "New Releases / Updates",
      hyring: "Monthly",
      micro1: "Half-Yearly",
    },
    {
      label: "Trustpilot Score",
      icon: "trustpilot",
      hyring: "~4.9/5",
      micro1: "~4.7/5",
    },
    {
      label: "Capterra – Ease of Use",
      icon: "capterra",
      hyring: "4.9/5",
      micro1: "~4.8/5",
    },
    {
      label: "Capterra – Customer Service",
      icon: "capterra",
      hyring: "4.8/5",
      micro1: "~4.5/5",
    },
    {
      label: "Capterra – Features",
      icon: "capterra",
      hyring: "5/5",
      micro1: "~4.7/5",
    },
    {
      label: "Capterra – Value for Money",
      icon: "capterra",
      hyring: "4.8/5",
      micro1: "~4.4/5",
    },
    {
      label: "Capterra Rating (overall)",
      icon: "capterra",
      hyring: "4.8/5",
      micro1: "~4.9/5",
    },
    {
      label: "G2 Rating",
      icon: "g2",
      hyring: "4.9/5",
      micro1: "No profile found",
    },

    {
      label: "Website link",
      hyring: "https://hyring.com",
      micro1: "https://micro1.ai",
      type: "link",
    },
  ],
};

export const costPricingData = {
  title: "Cost & Pricing Structure",

  columns: [
    {
      key: "hyring",
      label: "hyring",
      highlight: true,
    },
    {
      key: "micro1",
      label: "Micro1",
    },
  ],

  rows: [
    {
      label: "Pricing model",
      hyring: [
        "Hyring uses a usage-based pricing model aligned to interview volume, making costs predictable and scalable for teams running high-volume or diverse (in terms of jobs) hiring campaigns.",
        "This approach allows organizations to pay based on screening activity (number of interviews, credits used, volume of candidates screened) rather than seat count (fixed price per recruiter per month whether hiring happens or not) and is customizable to a greater degree.",
      ],
      micro1: [
        "Micro1 follows an enterprise pricing model designed around platform deployments and AI recruiter agents, with costs typically structured around scope, scale, and integration complexity rather than per-interview usage.",
      ],
    },
    {
      label: "Transparency",
      hyring: [
        "Pricing can translate directly to cost per interview (starting around $1–$5+ per interview for larger volumes). This enables recruiters and finance teams to estimate cost per hire based on interview volume and hiring funnel design.",
      ],
      micro1: [
        "Micro1’s pricing is often customized and bundled, without explicit per-interview or cost-per-hire figures published. This can make budgeting less transparent for recruiting teams compared to usage-based models.",
      ],
    },
  ],

  footer:
    "You can further look at Hyring’s pricing structure and even request a consultation and avail special offers at Hyring Subscription Plans. In the case of Micro1 alternatives, Hyring offers a bang for your buck that is rarely matched when considering recruiting at scale.",
};

export const featureComparisonDataGlance = {
  title: "Micro1 vs Hyring: Feature Comparison At A Glance",
  auditedAt: "As audited on 30th Jan 2026.",

  companies: [
    {
      key: "hyring",
      label: "hyring",
    },
    {
      key: "micro1",
      label: "Micro1",
    },
  ],

  features: [
    {
      name: "Conversational AI interviewing (dynamic, two-way)",
      hyring: true,
      micro1: true,
    },
    {
      name: "Dynamic follow-up questions",
      hyring: true,
      micro1: "Not publicly mentioned",
    },
    {
      name: "Candidate authenticity & remote proctoring",
      hyring: true,
      micro1: "No data available",
    },
    {
      name: "Liveness Checks & Proctoring",
      hyring: true,
      micro1: "Not publicly documented",
    },
    {
      name: "Coding & role-based assessments",
      hyring: true,
      micro1: "Limited capacity",
    },
    {
      name: "Language & communication testing",
      hyring: true,
      micro1: "No data available",
    },
    {
      name: "Automated scheduling / calendar sync",
      hyring: true,
      micro1: "Enterprise oriented",
    },
    {
      name: "Hiring analytics & reports",
      hyring: true,
      micro1: true,
    },
    {
      name: "ATS / HRIS integrations & public API",
      hyring: true,
      micro1: true,
    },
    {
      name: "SOC2 & ISO 27001 enterprise security",
      hyring: true,
      micro1: "Only SOC2",
    },
    {
      name: "Custom branding & candidate experience",
      hyring: true,
      micro1: "Likely enterprise only",
    },
    {
      name: "Accessibility & global support",
      hyring: true,
      micro1: "No data available",
    },
    {
      name: "Support & onboarding (SLA, AM, training)",
      hyring: true,
      micro1: true,
    },
  ],
};

export const hyringReview = {
  title: "Hyring Review",
  items: [
    {
      id: 0,
      title: "AI Video Interviewer",
      icon: "/asset/productEcosystem-imgs/video.svg",
      description:
        "Asynchronous and live two-way video interviews with dynamic follow-ups",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop",
    },
    {
      id: 1,
      title: "AI Phone Interviewer",
      icon: "/asset/productEcosystem-imgs/call.svg",
      description: "Automated voice-based screening for high-volume roles",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop",
    },
    {
      id: 2,
      title: "AI Coding Interviewer",
      icon: "/asset/productEcosystem-imgs/code-circle.svg",
      description: "Technical assessments for developer and engineering roles",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=500&fit=crop",
    },
    {
      id: 3,
      title: "AI Resume Scanner",
      icon: "/asset/productEcosystem-imgs/document-text.svg",
      description:
        "Automated high volume resume scanning for L1-level interviews (thousands at a time)",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop",
    },
    {
      id: 4,
      title: "English Proficiency Test",
      icon: "/asset/productEcosystem-imgs/messages-2.svg",
      description:
        "English communication test to filter candidates by their level of proficiency in English",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop",
    },
  ],
  description:
    "Hyring's ecosystem is built around end-to-end recruiting and screening workflows. Its core products and modules include:",
  shortdescription:
    "Together, these products form a unified screening-to-hire system focused on operational recruiting teams.",
};

export const micro1Review = {
  title: "Micro1 Review",
  items: [
    {
      id: 0,
      title: "Zara (AI Recruiter)",
      description:
        "AI agent for sourcing, interviewing, and qualifying experts",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop",
    },
    {
      id: 1,
      title: "Human Data Engine",
      description:
        "Platform for collecting, validating, and managing human-generated data",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Talent Marketplace & Network",
      description: "Access to specialized domain experts",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Enterprise Integration Layer",
      description:
        "APIs and custom integrations for research and data pipelines",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Program Management Tools",
      description: "Oversight for large-scale annotation and expert programs",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop",
    },
  ],
  description:
    "Micro1's ecosystem focuses on enterprise-grade expert deployment and human data generation. Its core products and modules include:",
  shortdescription:
    "Together, these products form a comprehensive platform for managing experts and generating high-quality human data for AI training.",
};
export const workflowData = [
  {
    title: "Source",
    desc: "Recruiters source candidates via job boards, ATS, or referrals",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 5.625H22.5"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.75 9H19.125"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.625 12.9375C23.625 18.8438 18.8438 23.625 12.9375 23.625C7.03125 23.625 2.25 18.8438 2.25 12.9375C2.25 7.03125 7.03125 2.25 12.9375 2.25"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.75 24.75L22.5 22.5"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Invite",
    desc: "Candidates are invited to AI video, phone, or coding interviews",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.32563 7.11115L17.8769 3.9274C22.1631 2.49865 24.4919 4.83865 23.0744 9.1249L19.8906 18.6762C17.7531 25.0999 14.2431 25.0999 12.1056 18.6762L11.1606 15.8412L8.32563 14.8962C1.90188 12.7587 1.90188 9.2599 8.32563 7.11115Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.375 15.3591L15.4025 11.3203"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Screen",
    desc: "Built-in proctoring and fraud detection monitors authenticity",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8009 2.51156L6.18719 4.62656C4.89344 5.11031 3.83594 6.64031 3.83594 8.01281V16.3716C3.83594 17.6991 4.71344 19.4428 5.78219 20.2416L10.6197 23.8528C12.2059 25.0453 14.8159 25.0453 16.4022 23.8528L21.2397 20.2416C22.3084 19.4428 23.1859 17.6991 23.1859 16.3716V8.01281C23.1859 6.62906 22.1284 5.09906 20.8347 4.61531L15.2209 2.51156C14.2647 2.16281 12.7347 2.16281 11.8009 2.51156Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.1797 13.3544L11.9909 15.1656L16.8284 10.3281"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Assess",
    desc: "AI-generated scores and reports are produced",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.375 10.125C21.375 11.7563 20.8913 13.2525 20.0588 14.5013C18.8438 16.3013 16.92 17.5725 14.6813 17.8988C14.2988 17.9663 13.905 18 13.5 18C13.095 18 12.7013 17.9663 12.3188 17.8988C10.08 17.5725 8.15625 16.3013 6.94125 14.5013C6.10875 13.2525 5.625 11.7563 5.625 10.125C5.625 5.77125 9.14625 2.25 13.5 2.25C17.8538 2.25 21.375 5.77125 21.375 10.125Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.906 20.7819L22.0497 21.2206C21.6335 21.3219 21.3072 21.6369 21.2172 22.0531L20.8235 23.7069C20.6097 24.6069 19.4622 24.8769 18.866 24.1681L13.4997 18.0031L8.13347 24.1794C7.53722 24.8881 6.38972 24.6181 6.17597 23.7181L5.78222 22.0644C5.68097 21.6481 5.35472 21.3219 4.94972 21.2319L3.09347 20.7931C2.23847 20.5906 1.93472 19.5219 2.55347 18.9031L6.94097 14.5156C8.15597 16.3156 10.0797 17.5869 12.3185 17.9131C12.701 17.9806 13.0947 18.0144 13.4997 18.0144C13.9047 18.0144 14.2985 17.9806 14.681 17.9131C16.9197 17.5869 18.8435 16.3156 20.0585 14.5156L24.446 18.9031C25.0647 19.5106 24.761 20.5794 23.906 20.7819Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1508 6.7275L14.8145 8.05499C14.9045 8.23499 15.1408 8.415 15.3545 8.44875L16.5583 8.65124C17.3233 8.77499 17.5033 9.3375 16.952 9.88875L16.0183 10.8225C15.8608 10.98 15.7708 11.2838 15.827 11.5088L16.097 12.6675C16.3108 13.5787 15.827 13.9387 15.017 13.455L13.892 12.7912C13.6895 12.6675 13.352 12.6675 13.1495 12.7912L12.0245 13.455C11.2145 13.9275 10.7308 13.5787 10.9445 12.6675L11.2145 11.5088C11.2595 11.295 11.1808 10.98 11.0233 10.8225L10.0895 9.88875C9.53826 9.3375 9.71826 8.78624 10.4833 8.65124L11.687 8.44875C11.8895 8.415 12.1258 8.23499 12.2158 8.05499L12.8795 6.7275C13.2058 6.0075 13.7908 6.0075 14.1508 6.7275Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Review",
    desc: "AI-generated scores and reports are produced",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.75 11.25V16.875C24.75 22.5 22.5 24.75 16.875 24.75H10.125C4.5 24.75 2.25 22.5 2.25 16.875V10.125C2.25 4.5 4.5 2.25 10.125 2.25H15.75"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.75 11.25H20.25C16.875 11.25 15.75 10.125 15.75 6.75V2.25L24.75 11.25Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.875 14.625H14.625"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.875 19.125H12.375"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Shortlist",
    desc: "AI-generated scores and reports are produced",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 24.75C19.6875 24.75 24.75 19.6875 24.75 13.5C24.75 7.3125 19.6875 2.25 13.5 2.25C7.3125 2.25 2.25 7.3125 2.25 13.5C2.25 19.6875 7.3125 24.75 13.5 24.75Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71875 13.4963L11.9025 16.68L18.2813 10.3125"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "ATS Sync",
    desc: "Recruiters review results and apply human judgment",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.02734 5.80469H19.5974C21.4649 5.80469 22.9724 7.31219 22.9724 9.17969V12.9147"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.58235 2.25L4.02734 5.80497L7.58235 9.36001"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.9724 21.1959H7.40234C5.53484 21.1959 4.02734 19.6884 4.02734 17.8209V14.0859"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.418 24.7506L22.973 21.1957L19.418 17.6406"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Hire",
    desc: "Shortlisted candidates are pushed to the ATS or next interview stage",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2461 21.4287L17.9561 23.1387L21.3761 19.7188"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.6789 12.2287C13.5664 12.2175 13.4314 12.2175 13.3077 12.2287C10.6302 12.1387 8.50395 9.945 8.50395 7.245C8.4927 4.48875 10.7314 2.25 13.4877 2.25C16.2439 2.25 18.4827 4.48875 18.4827 7.245C18.4827 9.945 16.3452 12.1387 13.6789 12.2287Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.4906 24.5369C11.4431 24.5369 9.40688 24.0194 7.85438 22.9844C5.13187 21.1619 5.13187 18.1919 7.85438 16.3806C10.9481 14.3106 16.0219 14.3106 19.1156 16.3806"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const vettingData = [
  {
    title: "Source Experts",
    desc: "Experts are sourced through Micro1's network and outreach systems",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 5.625H22.5"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.75 9H19.125"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.625 12.9375C23.625 18.8438 18.8438 23.625 12.9375 23.625C7.03125 23.625 2.25 18.8438 2.25 12.9375C2.25 7.03125 7.03125 2.25 12.9375 2.25"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.75 24.75L22.5 22.5"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Vet",
    desc: "Zara conducts AI-led screening and qualification",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8009 2.51156L6.18719 4.62656C4.89344 5.11031 3.83594 6.64031 3.83594 8.01281V16.3716C3.83594 17.6991 4.71344 19.4428 5.78219 20.2416L10.6197 23.8528C12.2059 25.0453 14.8159 25.0453 16.4022 23.8528L21.2397 20.2416C22.3084 19.4428 23.1859 17.6991 23.1859 16.3716V8.01281C23.1859 6.62906 22.1284 5.09906 20.8347 4.61531L15.2209 2.51156C14.2647 2.16281 12.7347 2.16281 11.8009 2.51156Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.1797 13.3544L11.9909 15.1656L16.8284 10.3281"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Qualify",
    desc: "Experts are vetted for reliability and domain depth",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 24.75C19.6875 24.75 24.75 19.6875 24.75 13.5C24.75 7.3125 19.6875 2.25 13.5 2.25C7.3125 2.25 2.25 7.3125 2.25 13.5C2.25 19.6875 7.3125 24.75 13.5 24.75Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71875 13.4963L11.9025 16.68L18.2813 10.3125"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Deploy",
    desc: "Qualified contributors are assigned to enterprise programs",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9742 13.9169C23.9529 14.3106 24.5604 15.4694 24.3354 16.4931L23.8742 18.5856C23.0754 22.1856 20.2517 24.7506 16.1792 24.7506H10.8242C6.75166 24.7506 3.92791 22.1856 3.12916 18.5856L2.66791 16.4931C2.44291 15.4694 3.0504 14.3106 4.02915 13.9169L5.62667 13.2756L11.8254 10.7894C12.9054 10.3619 14.0979 10.3619 15.1779 10.7894L21.3767 13.2756L22.9742 13.9169Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.5 24.75V11.25"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.375 9V13.275L15.1762 10.7887C14.0962 10.3612 12.9038 10.3612 11.8238 10.7887L5.625 13.275V9C5.625 7.14375 7.14375 5.625 9 5.625H18C19.8563 5.625 21.375 7.14375 21.375 9Z"
          stroke="#151B33"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.3125 5.625H10.6875V3.375C10.6875 2.75625 11.1938 2.25 11.8125 2.25H15.1875C15.8063 2.25 16.3125 2.75625 16.3125 3.375V5.625Z"
          stroke="#151B33"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Monitor",
    desc: "Performance and quality are continuously monitored",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.245 2.25H19.7438C23.7488 2.25 24.75 3.25125 24.75 7.245V14.3663C24.75 18.3713 23.7488 19.3613 19.755 19.3613H7.245C3.25125 19.3725 2.25 18.3713 2.25 14.3775V7.245C2.25 3.25125 3.25125 2.25 7.245 2.25Z"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.5 19.375V24.7525"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.25 14.625H24.75"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.4375 24.75H18.5625"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Recalibrate",
    desc: "Low-performing experts are retrained or replaced",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.3688 24.3788C21.195 23.1075 24.75 18.72 24.75 13.5C24.75 7.29 19.755 2.25 13.5 2.25C5.99625 2.25 2.25 8.505 2.25 8.505M2.25 8.505V3.375M2.25 8.505H4.51125H7.245"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.25 13.5C2.25 19.71 7.29 24.75 13.5 24.75"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="3.67 3.67"
        />
      </svg>
    ),
  },
  {
    title: "Retain",
    desc: "High-performing experts are retained long-term",
    icon: (
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 2.25C7.29 2.25 2.25 7.29 2.25 13.5C2.25 19.71 7.29 24.75 13.5 24.75C19.71 24.75 24.75 19.71 24.75 13.5"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.7484 2.25L15.5234 11.475"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.625 6.9375V12.3712H20.0587"
          stroke="#102713"
          stroke-width="1.83333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

// comparePlateform 

export const comparePlateformData = [
  { img: "/asset/otherPlatform-imgs/frame1.svg" },
  { img: "/asset/otherPlatform-imgs/frame2.svg" },
  { img: "/asset/otherPlatform-imgs/frame3.svg" },
];
