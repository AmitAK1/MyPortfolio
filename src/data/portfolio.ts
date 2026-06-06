export const hero = {
  name: "Amit Kamble",
  headline: "Amit Kamble — Building LLM, CV, and Agentic Systems.",
  subheadline:
    "Computer Science student at IIITDM Kancheepuram focused on GenAI, Machine Learning, Computer Vision, and scalable AI systems.",
  badge: "AI Engineer",
  location: "Chennai, India"
} as const;

export const links = {
  github: "https://github.com/AmitAK1",
  linkedin: "https://linkedin.com/in/amit-kamble-b893b5214",
  resume: "/assets/amit-kamble-resume.pdf"
} as const;

export type Project = {
  title: string;
  summary: string;
  tech: readonly string[];
  highlights: readonly string[];
  github: string;
  live?: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "SanitiSense AI",
    summary:
      "A civic operating system for sanitation reporting, route optimization, and epidemic prevention.",
    tech: ["React 18", "Next.js 14", "TypeScript", "AWS Lambda"],
    highlights: [
      "Photo + voice reporting for low-literacy access",
      "95%+ spam detection accuracy",
      "30% fuel savings and 40% labor efficiency improvement"
    ],
    github: "https://github.com/AmitAK1/sanitisense-ai",
    live: "https://main.d18a1q87hofbl9.amplifyapp.com/",
    status: "AI for Bharat hackathon"
  },
  {
    title: "Neural Vulnerability Scanner",
    summary:
      "A deep learning pipeline that detects C/C++ vulnerabilities with CodeBERT + LoRA and AST scoring.",
    tech: ["Python 3.10+", "PyTorch", "CodeBERT", "LoRA"],
    highlights: [
      "Best F1 score: 74.32% on held-out test set",
      "87.94% recall with tuned threshold",
      "Covers 12+ CWE categories with AST ensemble scoring"
    ],
    github: "https://github.com/AmitAK1/Neural-Vulnerability-Scanner",
    status: "Advanced security AI"
  },
  {
    title: "Text-Guided Brain Tumor Segmentation",
    summary:
      "Multimodal medical AI research combining radiology text priors with MRI features for tumor segmentation.",
    tech: ["Python", "PyTorch", "ResNet34", "DistilBERT"],
    highlights: [
      "Vision + language fusion pipeline",
      "BraTS 2020 and TextBraTS datasets",
      "Patient-level split with zero data leakage"
    ],
    github: "https://github.com/AmitAK1/Text-Guided-BraTS-Segmentation",
    status: "Medical AI research"
  },
  {
    title: "Missing Object Surveillance System",
    summary:
      "Real-time YOLOv8 + ByteTrack surveillance for ROI-based monitoring and intelligent alerts.",
    tech: ["Python 3.8+", "YOLOv8", "ByteTrack", "CustomTkinter"],
    highlights: [
      "IIoT edge-node architecture",
      "~9-10 FPS on YOLOv8 Nano",
      "MQTT, SMTP, and OpenCV alert pipeline"
    ],
    github: "https://github.com/AmitAK1/missing-object-surveillance",
    status: "Production-ready"
  },
  {
    title: "Autonomous Research Agent",
    summary:
      "LangGraph-based autonomous research workflow for finance and market analysis with self-correction loops.",
    tech: ["LangGraph", "Groq API", "Pinecone", "FastAPI"],
    highlights: [
      "Planner → Researcher → Reflector → Validator",
      "Vector memory for context reuse",
      "Automates CAGR and trend analysis"
    ],
    github: "https://github.com/AmitAK1/Research-Agent",
    live: "https://research-agent-lumiq-ai.streamlit.app/",
    status: "Live agent"
  },
  {
    title: "Water Quality Prediction",
    summary:
      "A live AICTE internship project that predicts multiple water quality indicators from environmental inputs.",
    tech: ["Python 3.12", "scikit-learn", "Streamlit", "Pandas"],
    highlights: [
      "Predicts 9 water quality parameters",
      "Multi-target regression using RandomForest",
      "Interactive Streamlit deployment"
    ],
    github: "https://github.com/AmitAK1/Water-Quality-Prediction_AICTE",
    live:
      "https://water-quality-predictionaicte-shnhd9rzxyjkgakhyzgyah.streamlit.app/",
    status: "Live demo"
  },
  {
    title: "Automated Bone Age Estimation",
    summary:
      "Deep learning model for pediatric bone age estimation with explainable AI visualizations.",
    tech: ["TensorFlow 2.x", "Xception", "OpenCV", "Grad-CAM"],
    highlights: [
      "Trained on 12,611 RSNA pediatric X-ray images",
      "R² score: 0.9169 and MAE: 9.04 months",
      "91.54% classification accuracy with Grad-CAM explainability"
    ],
    github:
      "https://github.com/AmitAK1/Automated-Bone-Age-Estimation-using-Deep-Learning",
    status: "Research project"
  }
] as const;

export type SkillGroup = {
  title: string;
  eyebrow: string;
  items: readonly string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Programming Languages",
    eyebrow: "Core coding stack",
    items: ["Python", "JavaScript", "TypeScript", "C++"]
  },
  {
    title: "AI & Machine Learning",
    eyebrow: "Model development",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "CNNs",
      "Random Forest",
      "RAG",
      "LLMs",
      "Prompt Engineering"
    ]
  },
  {
    title: "Backend & Deployment",
    eyebrow: "APIs and delivery",
    items: ["FastAPI", "REST APIs", "Node.js", "AWS Lambda", "Streamlit"]
  },
  {
    title: "Data, Cloud & Tools",
    eyebrow: "Working systems",
    items: [
      "SQL",
      "Pinecone",
      "Vector Databases",
      "Git",
      "GitHub",
      "AWS",
      "Amazon Bedrock",
      "AWS Amplify",
      "LangGraph",
      "Hugging Face",
      "OpenCV"
    ]
  },
  {
    title: "Cybersecurity",
    eyebrow: "Security fundamentals",
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Network Security Fundamentals",
      "Wireshark"
    ]
  }
] as const;

export const education = [
  {
    school: "IIITDM Kancheepuram",
    degree: "B.Tech CSE (AI Major)",
    years: "2023-2027"
  },
  {
    school: "Jawahar Navodaya Vidyalaya, Bundi (Dakshana Foundation)",
    degree: "CBSE, Rajasthan",
    years: "2021-2023",
    note: "Percentage: 84%"
  }
] as const;

export type Achievement = {
  title: string;
  details?: readonly string[];
};

export const achievements: Achievement[] = [
  {
    title: "Secured 2nd Place in the AI/ML Hackathon 2026 conducted by IIITDM Kancheepuram."
  },
  {
    title: "Technical Team Volunteer — ICPC Asia Regional Contest (Dec 2025).",
    details: [
      "Supported contest infrastructure and technical operations during ICPC Asia Regional Contest.",
      "Collaborated with organizing teams to ensure smooth execution of programming competition workflows."
    ]
  }
] as const;

export const contact = {
  email: "amit.ak0599@gmail.com"
} as const;
