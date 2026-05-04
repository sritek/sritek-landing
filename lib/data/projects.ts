import { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    slug: "ai-survey-platform",
    category: "Digital Market Research",
    title: "AI Video Survey Platform",
    headline: "Transforming Market Research with AI-Powered Video",
    description:
      "An AI-powered video survey platform that transforms market research by capturing authentic video feedback at scale.",
    challenge:
      "Traditional surveys miss emotional nuance. Clients needed richer qualitative data without manual video review.",
    solution:
      "We built a platform where respondents record video answers. AI transcribes, sentiment-analyzes, and clusters responses into insights automatically.",
    results: [
      "3× faster research cycles",
      "40% higher response quality scores",
      "Reduced analysis time by 80%",
    ],
    tech: ["Next.js", "OpenAI Whisper", "Python", "PostgreSQL", "AWS S3"],
    year: "2025",
    imageColor: "#0c1520",
    featured: true,
  },
  {
    slug: "vehicle-damage-ai",
    category: "AI-Driven Insurtech",
    title: "AI Vehicle Damage Assessment",
    headline: "Automating Insurance Claims with Computer Vision",
    description:
      "An AI-powered platform that revolutionizes automotive insurance claims by automating damage detection.",
    challenge:
      "Manual vehicle damage assessment is slow, subjective, and expensive for insurers.",
    solution:
      "Computer vision model trained on 50k+ damage images, integrated into a mobile-first claims flow.",
    results: [
      "Claims processing from 5 days → 2 hours",
      "94% model accuracy",
      "Saved $2M in assessor costs annually",
    ],
    tech: ["React Native", "Python", "TensorFlow", "FastAPI", "GCP"],
    year: "2025",
    imageColor: "#0a1825",
    featured: true,
  },
  {
    slug: "saas-dashboard",
    category: "SaaS",
    title: "Real-Time Analytics Dashboard",
    headline: "Live Data, Instant Decisions",
    description:
      "A real-time analytics dashboard that processes millions of events per day with sub-second query performance.",
    challenge:
      "Legacy analytics tools couldn't handle real-time data at scale, causing hours of delay in business-critical decisions.",
    solution:
      "Built a streaming data pipeline with real-time visualization, custom alerting, and collaborative annotation features.",
    results: [
      "Processing 2M+ events/day",
      "Sub-200ms query latency",
      "60% reduction in decision lag",
    ],
    tech: ["Next.js", "Apache Kafka", "ClickHouse", "WebSocket", "AWS"],
    year: "2024",
    imageColor: "#0f1a12",
    featured: true,
  },
];
