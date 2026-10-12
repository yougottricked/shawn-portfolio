export const PROFILE = {
  name: "Shawn Ethan Varughese",
  role: "Software Engineer",
  location: "Kuala Lumpur, Malaysia",
  email: "shawnethan0512@gmail.com",
  cv: "/Shawn_Ethan_Varughese_CV.pdf",
  site: "https://portfolio-shawnz.vercel.app",
  github: "https://github.com/yougottricked",
  linkedin: "https://www.linkedin.com/in/shawn-varughese-377bbb183/",
};

export interface Shot {
  src: string;
  alt: string;
  caption: string;
  /** Charts and diagrams are shown whole on a white plate; app screenshots fill the frame. */
  fit?: "cover" | "contain";
  /** A looping clip played in place of the image; `src` is then its poster frame. */
  video?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
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
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    id: "akuaverse",
    title: "AkuaVerse",
    summary: "Aquarium marketplace with a 3D tank builder",
    context: "Personal project, in progress",
    year: "2026",
    role: "Solo",
    description:
      "AkuaVerse is where LWICMS went next: instead of software for one shop, a marketplace for Malaysia's aquarium trade, where shops list their stock and hobbyists plan a tank before they buy. The centrepiece is the tank builder, which now has a full 3D view.",
    built: [
      "A to-scale tank editor with front, side and plan views. Hobbyists place rock, wood, plants and fish, and the builder works out displacement and net water volume and checks that the fish share a temperature range and won't eat each other.",
      "A 3D view in three.js on WebGPU, falling back to WebGL 2: a rendered water volume with an animated surface and caustics, and particles that follow the same flow field the 2D editor uses. You can orbit freely, and the camera is fitted to the whole tank so no angle crops it.",
      "The plan turns into a shopping list, with hardscape linked to the specific pieces shops have in stock.",
      "A Django REST API that validates every saved tank layout on the server, matched by a sanitiser in the browser.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Next.js", "TypeScript", "three.js"],
    shots: [
      {
        src: "/work/akuaverse-3d-poster.webp",
        video: "/work/akuaverse-3d.mp4",
        alt: "A planted aquarium on a stand, rotating in a 3D view",
        caption: "3D view: orbiting a 60 cm planted tank, with water, flow and fish switched on",
      },
      { src: "/work/akuaverse-editor.webp", alt: "AkuaVerse tank editor with the livestock panel", caption: "The 2D editor, with the habitat checks passing for the chosen fish" },
    ],
  },
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
    links: [{ label: "Team repository", href: "https://github.com/Legendary-Phoenix/RescueNet-Disaster-Relief-Management-System" }],
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
      "Built a standard Power BI dashboard for DHL warehouses across the APAC region, so every site reports its operations the same way. I worked out which KPIs matter most to warehouse workers and operators, designed the dashboard around them, and presented it to the regional teams. I also handled day-to-day IT at the Shah Alam site: setting up laptops, printers and RF scanners, fixing warehouse Wi-Fi, and helping staff onto Microsoft MFA.",
  },
  {
    role: "Web Developer Intern",
    company: "Brandvibe",
    period: "May – Jul 2024",
    location: "Selangor",
    description:
      "Built business websites for clients in Wix, using Velo for custom behaviour, made Figma prototypes, and updated sites as client requirements changed.",
  },
];

export const SKILLS = [
  { group: "Languages", items: "PHP, JavaScript, TypeScript, Python, SQL" },
  { group: "Frameworks", items: "Django, React, Next.js, Node.js, Express, three.js, TensorFlow, Keras" },
  { group: "Databases", items: "PostgreSQL, MySQL" },
  { group: "Tools", items: "Git, AWS, Power BI, Figma" },
];

export const EDUCATION = [
  {
    award: "BSc (Hons) Software Engineering, dual award with De Montfort University",
    school: "Asia Pacific University (APU)",
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

export const AQUASCAPING_RESULTS = [
  { contest: "Setia Alam Aquascaping Competition", result: "1st place, Aquarium Design" },
  { contest: "IAPLC 2024", result: "Ranked 337th in the world ranking" },
  { contest: "IADC 2024", result: "Entered “Bonsai Jungle”" },
];
