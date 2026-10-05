export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack System" | "Deep Learning" | "Cloud Serverless";
  period: string;
  role: string;
  summary: string;
  stats: { label: string; value: string; detail: string }[];
  tags: string[];
  highlights: string[];
  metrics: { [key: string]: string | number };
}

export const PROFILE = {
  name: "Shawn Ethan Varughese",
  credential: "BSc (Hons) Software Engineering",
  institution: "Asia Pacific University (APU)",
  role: "Aquatic Systems & Full-Stack Architect",
  tagline: "Architecting high-concurrency fish retail commerce, aquaculture water intelligence, and resilient cloud systems.",
  status: "Open to High-Impact Opportunities",
  location: "Kuala Lumpur, Malaysia (MYT / UTC+8)",
  email: "yougottricked2002@gmail.com",
  github: "https://github.com/yougottricked",
  linkedin: "https://www.linkedin.com/in/shawn-varughese-377bbb183/",
};

export const PROJECTS: ProjectData[] = [
  {
    id: "lwicms",
    title: "LWICMS — Live Fish Retail IMS",
    subtitle: "High-Concurrency Inventory & Multi-Role Commerce Architecture",
    category: "Full-Stack System",
    period: "Final Year Capstone Project (2026)",
    role: "Lead Systems Architect & Full-Stack Engineer",
    summary:
      "A comprehensive multi-tenant retail & customer management platform resolving mortality tracking gaps (66.7% unrecorded in retail) and real-time inventory visibility. Features an 11-rule automated tank compatibility engine and a visual drag-and-drop 2D aquarium layout builder.",
    stats: [
      { label: "Controllers", value: "36", detail: "MVC application tier" },
      { label: "Declared Routes", value: "274", detail: "REST & API endpoints" },
      { label: "Database Schema", value: "91", detail: "Tables with 164 Foreign Keys" },
      { label: "Evaluation", value: "5.0/5.0", detail: "Rated Excellent by 37 Industry Testers" },
    ],
    tags: ["PHP MVC", "MySQL 8.4", "InnoDB Transactions", "Row Locks", "Chart.js", "RBAC"],
    highlights: [
      "11-Rule Tank Compatibility Engine balancing pH, dGH hardness, temperature, predatory matrix, and volume capacity.",
      "Row-locked atomic checkout & instantaneous mortality stock decrements preventing retail overselling.",
      "Interactive 2D Visual Aquarium Builder with live asset positioning and water chemistry validation.",
      "Role-based permission barriers across 5 distinct actors: Admin, Shop Owner, Staff, Breeder, and Hobbyist.",
    ],
    metrics: {
      controllers: 36,
      routes: 274,
      tables: 91,
      foreignKeys: 164,
      unitTests: "30/30 Passed",
      industrySurvey: 37,
    },
  },
  {
    id: "aquaponds",
    title: "AquaPonds — Deep Learning WQI",
    subtitle: "Multivariate IoT Water Quality Classifier & Latent Autoencoder",
    category: "Deep Learning",
    period: "Deep Learning Research & System Implementation",
    role: "AI / ML Researcher & Algorithm Engineer",
    summary:
      "Empirical deep learning pipeline for aquaculture water quality classification and anomaly detection. Ingests high-frequency IoT telemetry (pH, Dissolved Oxygen, Temperature, Turbidity, Conductivity, Ammonia) through tuned DNNs and representation-learning Autoencoders.",
    stats: [
      { label: "IoT Sensors", value: "6 Stream", detail: "Multivariate telemetry" },
      { label: "Hyperband", value: "KerasTuner", detail: "Bayesian-optimized layers" },
      { label: "Autoencoder", value: "Latent Bottleneck", detail: "Anomaly reconstruction" },
      { label: "Ablation", value: "Depth & Batch", detail: "Rigorous empirical testing" },
    ],
    tags: ["TensorFlow", "Keras", "KerasTuner", "Autoencoders", "Multivariate IoT", "Python"],
    highlights: [
      "Bayesian-optimized Deep Neural Network (DNN) with adaptive dropout and learning rate decay.",
      "Unsupervised Latent Autoencoder reconstructing sensor vectors to detect equipment drift and water degradation.",
      "Semi-supervised hybrid classifier achieving superior sample efficiency across imbalanced aquaculture conditions.",
      "Systematic ablation suite: evaluated depth scaling (1-5 layers), batch sweeps (16-128), and Adam vs RMSprop vs SGD.",
    ],
    metrics: {
      sensors: 6,
      modelVariants: 4,
      testF1: "97.4%",
      reconstructionLoss: "0.014 MSE",
    },
  },
  {
    id: "rescuenet",
    title: "RescueNet — Disaster Logistics",
    subtitle: "Cloud-Native Serverless Humanitarian Management System",
    category: "Cloud Serverless",
    period: "Distributed Systems & Cloud Architecture",
    role: "Cloud Systems Engineer",
    summary:
      "Mission-critical disaster relief platform built on AWS Serverless microservices. Orchestrates emergency shelter capacity, victim identification registries, and supply cover logistics across distributed crisis operations.",
    stats: [
      { label: "AWS Stack", value: "SAM + Lambda", detail: "Node.js 20.x in private VPC" },
      { label: "Relational DB", value: "PostgreSQL", detail: "18 normalized operational tables" },
      { label: "Architecture", value: "Zero-Route RPC", detail: "Type-safe dispatcher pattern" },
      { label: "Latency", value: "Sub-100ms", detail: "Distributed X-Ray tracing" },
    ],
    tags: ["AWS SAM", "AWS Lambda", "Amazon RDS", "PostgreSQL", "React", "CloudWatch"],
    highlights: [
      "AWS SAM & CloudFormation automated infrastructure provisioning with isolated VPC private subnets.",
      "Zero-route RPC client bridge (`controllers.js`) decoupling frontend UI from low-level HTTP verbs.",
      "12-column urgency-sorted operations dashboard composing live occupancy, supply cover days, and derived alerts in a single query.",
      "Granular victim intake and resource supply chains ensuring 100% accountability in relief zones.",
    ],
    metrics: {
      tables: 18,
      functions: "Microservices",
      vpcSubnets: 2,
      tracing: "AWS X-Ray",
    },
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Systems & Architecture",
    items: [
      { name: "Distributed Systems", level: "Advanced", note: "Event-driven, RPC bridges, AWS SAM" },
      { name: "PostgreSQL / MySQL", level: "Advanced", note: "InnoDB transactions, row locks, 90+ table schemas" },
      { name: "High-Concurrency Ledgers", level: "Expert", note: "Atomic sales, inventory decrement invariants" },
      { name: "Cloud & VPC Infrastructure", level: "Advanced", note: "AWS Lambda, RDS, VPC private subnets, X-Ray" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Deep Neural Networks (DNN)", level: "Advanced", note: "TensorFlow, Keras, architectural ablations" },
      { name: "Autoencoders & Anomaly Detection", level: "Advanced", note: "Latent bottlenecks, reconstruction loss" },
      { name: "Hyperparameter Tuning", level: "Proficient", note: "KerasTuner, Bayesian search, Hyperband" },
      { name: "Multivariate Time-Series IoT", level: "Advanced", note: "Sensor telemetry, feature engineering, WQI" },
    ],
  },
  {
    category: "Frontend & Design Engineering",
    items: [
      { name: "Next.js 15 & React 19", level: "Expert", note: "App Router, Server Actions, Turbopack" },
      { name: "Tactile Motion Physics", level: "Advanced", note: "Critically damped springs, layoutId morphs" },
      { name: "Tailwind CSS v4", level: "Expert", note: "Design tokens, CSS @property, nested radius" },
      { name: "Interactive 2D/3D Canvas", level: "Proficient", note: "Aquarium visualizers, SVG geometry, shaders" },
    ],
  },
];

export const CREDENTIALS = [
  {
    year: "2026",
    title: "BSc (Hons) Software Engineering",
    issuer: "Asia Pacific University (APU)",
    detail: "Graduating with First-Class honours trajectory. Capstone FYP in high-concurrency aquaculture software.",
  },
  {
    year: "2026",
    title: "Final Year Project: Perfect Stakeholder Rating",
    issuer: "Industry Validation Panel",
    detail: "Tested across 37 commercial operators, breeders, and hobbyists. Rated 5.0/5.0 with 30/30 unit tests verified.",
  },
  {
    year: "2025",
    title: "Deep Learning Research: AquaPonds WQI",
    issuer: "School of Computing & AI",
    detail: "Published extensive empirical ablation paper on autoencoder sensor reconstruction for aquaculture water quality.",
  },
  {
    year: "2024",
    title: "Cloud Disaster System: RescueNet",
    issuer: "AWS Architecture & Distributed Computing",
    detail: "Architected serverless humanitarian management platform deployed with AWS SAM and Amazon RDS.",
  },
];
