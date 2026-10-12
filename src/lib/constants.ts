export const PROFILE = {
  name: "Shawn Ethan Varughese",
  role: "Software Engineer",
  location: "Kuala Lumpur, Malaysia",
  email: "yougottricked2002@gmail.com",
  github: "https://github.com/yougottricked",
  linkedin: "https://www.linkedin.com/in/shawn-varughese-377bbb183/",
};

export interface Shot {
  src: string;
  alt: string;
  caption: string;
  /** Charts and diagrams are shown whole on a white plate; app screenshots fill the frame. */
  fit?: "cover" | "contain";
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  context: string;
  year: string;
  role: string;
  description: string;
  built: string[];
  stack: string[];
  shots: Shot[];
}

export const PROJECTS: Project[] = [
  {
    id: "lwicms",
    title: "LWICMS",
    summary: "Inventory and customer management for ornamental fish shops",
    context: "Final year project",
    year: "2026",
    role: "Solo",
    description:
      "Aquarium shops in Malaysia often track live stock on paper or in spreadsheets, so fish deaths and sales go unrecorded. LWICMS is a web system where shops manage stock tank by tank, record sales and losses, order from suppliers, and where hobbyists can plan an aquarium before they buy.",
    built: [
      "Tank-level stock: each tank knows which species it holds and how full it is. Sales and mortality update stock inside a database transaction, so two staff can't sell the same fish.",
      "An aquarium builder for hobbyists that checks space, temperament and water parameters before anything goes in the cart.",
      "A breeder side: track breeding colonies and spawn batches from eggs to sellable fish, log water chemistry, and see which shops are running low on fish the breeder can supply, then send them a proposal.",
      "Purchase orders, a supplier directory and customer pre-orders for shops.",
      "Five user roles (admin, shop owner, staff, breeder, hobbyist), CSV reports, and a full English and Chinese interface.",
    ],
    stack: ["PHP 8.3", "MySQL 8.4", "JavaScript", "Chart.js"],
    shots: [
      { src: "/work/lwicms-dashboard.webp", alt: "LWICMS shop owner dashboard", caption: "Shop owner dashboard: stock, revenue, mortality and top sellers for the year" },
      { src: "/work/lwicms-tanks.webp", alt: "LWICMS tank overview", caption: "Tanks: what each tank holds and how close it is to capacity" },
      { src: "/work/lwicms-inventory.webp", alt: "LWICMS inventory list", caption: "Inventory across fish, plants and products, with low-stock flags" },
      { src: "/work/lwicms-aquarium-builder.webp", alt: "LWICMS aquarium builder", caption: "Aquarium builder: a 180 cm planted tank that passes all 23 habitat checks" },
      { src: "/work/lwicms-breeder-dashboard.webp", alt: "LWICMS breeder dashboard", caption: "Breeder dashboard: supply stock, shop demand alerts and proposals" },
      { src: "/work/lwicms-breeder-batch.webp", alt: "LWICMS spawn batch detail", caption: "A spawn batch moving from eggs to juveniles, with survival tracked" },
      { src: "/work/lwicms-breeder-demand.webp", alt: "LWICMS shop demand page", caption: "Shop demand: shops low on stock that the breeder can supply" },
      { src: "/work/lwicms-landing.webp", alt: "LWICMS public landing page", caption: "Public landing page for browsing shops, fish and breeders" },
    ],
  },
  {
    id: "rescuenet",
    title: "RescueNet",
    summary: "Disaster relief coordination platform",
    context: "Cloud computing group project",
    year: "2026",
    role: "Team of 4 · I built the volunteer module",
    description:
      "During floods, relief groups coordinate shelters, victims and supplies over scattered chats and spreadsheets. RescueNet puts that in one place. Each team member owned one user role; I built everything a volunteer uses in the field.",
    built: [
      "A volunteer dashboard showing shelter occupancy, supply levels and open tasks, with an alert when any supply drops below a day of cover.",
      "Victim registration. Changing a victim's status (checked in, medical, transferred, discharged) updates the shelter's headcount in the same transaction.",
      "Resource requests and task tracking, from pending to in progress to done.",
      "A single RPC endpoint in place of REST routes, so the React pages call backend controller functions directly.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
    shots: [
      { src: "/work/rescuenet-dashboard.webp", alt: "RescueNet volunteer dashboard", caption: "Volunteer dashboard: shelter capacity, supply alerts and open tasks" },
      { src: "/work/rescuenet-victims.webp", alt: "RescueNet victim register", caption: "Victim register for the volunteer's assigned shelters" },
      { src: "/work/rescuenet-tasks.webp", alt: "RescueNet task list", caption: "Tasks with one next action each: start, then mark complete" },
      { src: "/work/rescuenet-requests.webp", alt: "RescueNet resource requests", caption: "Resource requests raised by the volunteer, tracked by status" },
    ],
  },
  {
    id: "water-quality",
    title: "Pond Water Quality Classifier",
    summary: "Deep learning on fish pond sensor data",
    context: "Deep learning assignment",
    year: "2026",
    role: "Solo",
    description:
      "Using about 50,000 sensor readings from three fish ponds (dissolved oxygen, pH, ammonia, temperature, turbidity, nitrate and manganese), I built a Water Quality Index label and trained two neural networks from scratch to sort each reading into Excellent, Good, Poor or Very Poor.",
    built: [
      "A deep neural network reaching 98.55% test accuracy (98.38% ± 0.16 across three random seeds).",
      "An autoencoder that compresses the 7 readings to 6 numbers, plus a classifier on top: 98.74%, so the compression lost nothing.",
      "Comparisons against logistic regression (91.6%) and random forest (98.0%), and tests of network depth, batch size and optimiser.",
      "One honest result: a plain two-layer network scored 98.95%, beating both. More depth and tuning did not help on this data.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "KerasTuner", "scikit-learn"],
    shots: [
      { src: "/work/dl-models.webp", alt: "Bar chart of test accuracy for six models", caption: "Test accuracy of all six models against the 80% target", fit: "contain" },
      { src: "/work/dl-confusion.webp", alt: "Confusion matrix of the deep neural network", caption: "Where the deep network's predictions land, by water quality band", fit: "contain" },
      { src: "/work/dl-learning-curve.webp", alt: "Training and validation curves", caption: "Training and validation accuracy and loss per epoch", fit: "contain" },
      { src: "/work/dl-sensors.webp", alt: "Distributions of the seven sensor readings", caption: "Distribution of each sensor reading after cleaning", fit: "contain" },
    ],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    role: "IT Support Intern",
    company: "DHL Supply Chain",
    period: "Jul – Nov 2025",
    location: "Shah Alam",
    description:
      "Supported staff and systems at a supply chain site, and built Power BI dashboards for the operations team.",
  },
  {
    role: "Web Developer Intern",
    company: "Brandvibe",
    period: "May – Jul 2024",
    location: "Selangor",
    description:
      "Built and maintained responsive client websites and tested them across browsers before release.",
  },
];

export const SKILLS = [
  { group: "Languages", items: "PHP, JavaScript, TypeScript, Python, SQL" },
  { group: "Frameworks", items: "React, Next.js, Node.js, Express, TensorFlow, Keras" },
  { group: "Databases", items: "MySQL, PostgreSQL" },
  { group: "Tools", items: "Git, AWS, Power BI" },
];

export const EDUCATION = [
  {
    award: "Bachelor's degree, Software Engineering (dual degree)",
    school: "Asia Pacific University (APU) and De Montfort University",
    period: "Sep 2024 – Sep 2026",
  },
  {
    award: "Diploma in Information Technology, Software Engineering",
    school: "Asia Pacific University (APU / APIIT)",
    period: "Apr 2022 – May 2024",
  },
];

export const AQUASCAPING_SHOTS: Shot[] = [
  { src: "/work/aquascape-iaplc-2024.webp", alt: "Planted aquarium layout with driftwood and red plants", caption: "IAPLC 2024 entry, ranked 337th in the world ranking" },
  { src: "/work/aquascape-iadc-2024.webp", alt: "Dense green planted aquarium layout titled Bonsai Jungle", caption: "IADC 2024 entry, “Bonsai Jungle”" },
];

export const HOBBIES = [
  { name: "Football", note: "Playing with friends and following the game." },
  { name: "Go-karting", note: "Racing on karting tracks." },
];
