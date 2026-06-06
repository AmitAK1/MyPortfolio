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

export const projects = [
  {
    title: "SanitiSense AI",
    tech: ["Amazon Bedrock", "Rekognition", "RAG", "AWS"],
    highlights: [
      "Multimodal AI system",
      "84.6% classification accuracy",
      "Automated sanitation issue detection"
    ],
    github: "https://github.com/AmitAK1/sanitisense-ai"
  },
  {
    title: "Agentic Research Assistant",
    tech: ["LangGraph", "Pinecone", "FastAPI", "Streamlit"],
    highlights: [
      "Multi-agent workflow",
      "Reflection loops",
      "Vector database retrieval"
    ],
    github: "https://github.com/AmitAK1/Research-Agent"
  },
  {
    title: "Automated Bone Age Estimation",
    tech: ["TensorFlow", "Xception CNN"],
    highlights: [
      "Trained on 12,611 X-ray images",
      "R² = 0.9169",
      "MAE = 9.04 months"
    ],
    github:
      "https://github.com/AmitAK1/Automated-Bone-Age-Estimation-using-Deep-Learning"
  }
] as const;

export const skills = [
  "Python",
  "FastAPI",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "LangGraph",
  "AWS",
  "Pinecone",
  "RAG",
  "Machine Learning",
  "Computer Vision",
  "SQL"
] as const;

export const education = [
  {
    school: "IIITDM Kancheepuram",
    degree: "B.Tech CSE (AI Major)",
    years: "2023-2027"
  }
] as const;

export const achievements = [
  "Secured 2nd Place in the AI/ML Hackathon 2026 conducted by IIITDM Kancheepuram.",
  "Technical Team Volunteer — ICPC Asia Regional Contest (Dec 2025)."
] as const;

export const contact = {
  email: "cs23b2034@iiitdm.ac.in"
} as const;
