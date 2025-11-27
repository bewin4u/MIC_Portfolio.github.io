import { StatItem, ProjectItem, PhilosophyItem, ContactInfo, WritingItem } from './types';
import { Lightbulb, Users, Target, TrendingUp, ShieldCheck, Archive, ShieldAlert } from 'lucide-react';

export const HERO_DATA = {
  name: "Michael David Robinston",
  role: "AI Delivery & Product Leader",
  location: "Christchurch, New Zealand",
  tagline: "Bridging the gap between strategic value and technical excellence.",
  bio: "I lead and deliver production AI and automation platforms, focusing on measurable commercial outcomes that business and technical stakeholders can verify. My background spans telecom transformation, banking accountability, and sales and marketing fluency, giving me a delivery style that balances strategic value, cost ownership, and technical excellence that serves business goals.",
};

export const COMMERCIAL_STATS: StatItem[] = [
  { value: "$10M+", label: "Revenue Recovered", description: "Led AI-enabled Contract-to-Cash transformation", icon: TrendingUp },
  { value: "$1.5M", label: "Projected Savings", description: "Projected OpEx savings from FY26 via automation", icon: ShieldCheck },
  { value: "$50M+", label: "Assets Managed", description: "Directed reconciliation systems in enterprise finance", icon: Archive },
  { value: "$5M+", label: "Risk Mitigated", description: "Using fraud, audit, and compliance automation", icon: ShieldAlert },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "governance",
    title: "AI Delivery & Programme Governance",
    role: "Project Lead",
    description: "Led the Contract-to-Cash - Revenue Assurance Automation transformation program in Spark NZ. Orchestrated multi-stream delivery for AI products and automation platforms, translating technical progress into business-friendly artefacts for SteerCo and vendor benefit reviews.",
    tags: ["Revenue Assurance", "Transformation", "RAID Framework", "SLA Readiness"],
    metrics: [
      "Led Contract-to-Cash transformation program",
      "Managed dependencies and delivery risks using RAID",
      "Benefit realisation governance across streams"
    ]
  },
  {
    id: "fraud-risk",
    title: "Fraud & Credit Risk Intelligence",
    role: "Product Leader",
    description: "Delivered fraud and bad-debt risk intelligence models and audit automation interfaces into production in Spark NZ, with a focus on explainability, traceability, and commercial value. Collaborated with platform, data, and architecture partners to ensure readiness assurance and business confidence.",
    tags: ["Audit Automation", "Risk Intelligence", "Governance", "Traceability"],
    metrics: [
      "Delivered audit automation interfaces into production",
      "Focus on explainability and commercial value",
      "Readiness assurance for AI adoption"
    ]
  },
  {
    id: "credit-score",
    title: "AI Credit Score Engine",
    role: "Technical Lead",
    description: "Built the credit scoring engine in Spark NZ using a gradient boosting model with CatBoost for fast delivery across mixed categorical and numeric risk signals. Pre-model preparation included standard EDA techniques: missing value handling, feature behavior profiling, correlation spread analysis, and outlier assessment.",
    tags: ["CatBoost", "SHAP", "EDA", "Risk Modelling"],
    metrics: [
      "Designed score outputs to match established industry trust ranges (300-850)",
      "High explainability via SHAP for risk contributions",
      "Standard EDA techniques for robust model prep"
    ]
  },
  {
    id: "agentic-ai",
    title: "Spark Agentic AI",
    role: "Team Lead",
    description: "Leading the Agentic AI team in Spark NZ, automating End-to-End (E2E) cumbersome manual processes by AI Agents. This initiative leverages autonomous agents to reduce friction and operational costs.",
    tags: ["Agentic AI", "Process Automation", "Cost Reduction", "E2E Automation"],
    metrics: [
      "Driving $1.5M+ in projected annual OpEx savings",
      "Automating complex manual workflows via AI Agents",
      "Leading cross-functional agentic AI pods"
    ]
  }
];

export const WRITING: WritingItem[] = [
  {
    title: "LinkedIn Articles on LLMs and Automation",
    platform: "LinkedIn Pulse",
    description: "Michael's Automation & GenAI Nuggets: Insights on automation, delivery frameworks, and commercial AI adoption.",
    link: "https://www.linkedin.com/pulse/michaels-automation-genai-nuggets-tastier-than-2-david-robinston-s5svc"
  },
  {
    title: "Fuzzy Matching for Million Row Address Dataset",
    platform: "Medium",
    description: "Topic highlight: million-row fuzzy matching, scaled string distance search using RapidFuzz and linking-layer methods using Splink.",
    link: "https://medium.com/@bewin4u/fuzzy-matching-for-million-row-address-dataset-with-rapidfuzz-and-splink-b704eaf1fda9"
  }
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "AI Pulse & Awareness",
    content: "Founded 'AI Pulse' as an internal AI-awareness initiative that uplifts teams and accelerates safe AI adoption in enterprises.",
    icon: Lightbulb
  },
  {
    title: "The AI Pod Model",
    content: "I design AI delivery around small cross-functional pods (3 - 5 people) where each pod owns a tight mission, value metric, and fast iteration cycle. Also I have led large AI Automation squads of size 10 - 15 people.",
    icon: Users
  },
  {
    title: "Commercial Confidence",
    content: "My approach builds commercial confidence, avoids delivery bottlenecks, and creates measurable gains that executives can sign-off and trust.",
    icon: Target
  }
];

export const CORE_STRENGTHS = [
  "AI Delivery Orchestration",
  "Commercial Fluency (CapEx/OpEx)",
  "SLA & Governance Confidence",
  "ML Delivery (CatBoost + SHAP)",
  "Cross Functional Team management",
  "Risk Oversight (RAID)",
  "WOE/IV Scoring Layers",
  "Stakeholder Management"
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+642102749937",
  email: "bewin4u@gmail.com",
  location: "Christchurch, New Zealand"
};
