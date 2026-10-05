# Portfolio Master Plan & System Architecture

> **Author**: Shawn Ethan Varughese  
> **Degree**: BSc (Hons) Software Engineering — Asia Pacific University (APU)  
> **Target Archetype**: Staff / High-Level Design Engineer & Full-Stack Systems Architect  
> **Deployment Target**: Vercel (`Next.js 15` App Router, React 19, Tailwind CSS v4, Framer Motion, Lucide)

---

## 1. Executive Summary & Persona Positioning

Unlike conventional resumes or low-fidelity static sites (e.g. Devan Asokan) or purely decorative editorial sites (e.g. Yap Hann Cheng's The Archive), this portfolio is engineered as a **living, tactile operating canvas**. It blends:
1. **Academic & Engineering Depth**: Demonstrating rigorous computer science fundamentals, high-concurrency state machines, and empirical machine learning.
2. **Tactile Polish (Awwwards / Staff Design Engineer Standard)**: Damped springs ($k=350, d=32$), nested border radius formulas, GPU conic borders, and strict semantic dark mode ($\ge 13.8:1$ contrast).
3. **Interactive Proofs over Passive Text**: Embedding live interactive micro-widgets for each flagship project directly into bento cards.

---

## 2. Ingested Flagship Projects Breakdown

### Project 1: LWICMS — Live Web-Based Inventory & Customer Management System
- **Context**: Final Year Project (Capstone) — BSc (Hons) Software Engineering.
- **Problem**: 66.7% of ornamental fish retail mortality goes unrecorded; 85.7% of hobbyists cannot check live tank stock; fragmented breeder-shop supply chains; zero shrinkage analytics.
- **Architectural Scale**:
  - **36 Controllers**, **274 Routes**, **91 Database Tables**, **164 Foreign Keys**.
  - **11-Rule Tank Compatibility Engine**: Real-time evaluation of water parameters (pH, hardness, temperature), aggressive behavior matrix, and adult fish volume constraints.
  - **Concurrency & Ledger Invariants**: Row-locked atomic sales transactions; instantaneous mortality stock deduction preventing overselling.
  - **Interactive 2D Visual Aquarium Builder**: Live browser-based visual tank aquascape layout editor with drag-and-drop fish and hardscape assets.
  - **5-Role Multi-Tenancy**: Granular permission boundaries for Platform Admin, Shop Owner, Staff, Commercial Fish Breeder, and Hobbyist.
  - **Empirical Validation**: 37 industry survey participants; 30/30 unit tests green; 6/6 schema integrity checks; 5.0/5.0 stakeholder evaluation score.

### Project 2: AquaPonds — Deep Learning IoT Water Quality (WQI) Classifier & Autoencoder
- **Context**: Advanced Deep Learning Research & Engineering (Assignment & Thesis).
- **Domain**: Automated Aquaculture IoT Telemetry & Environmental Risk Intelligence.
- **Dataset**: AquaPonds multivariate time-series sensor stream (pH, Dissolved Oxygen, Temperature, Electrical Conductivity, Turbidity, Total Ammonia Nitrogen).
- **Model Architectures & Experiments**:
  - **Baseline ANN**: Initial feed-forward classification network.
  - **Hyperband / Bayesian KerasTuner DNN**: Deep Neural Network with tuned dropout, batch normalization, and learning rate schedules.
  - **Unsupervised Representation Autoencoder**: Latent bottleneck compression for reconstruction loss and sensor anomaly detection.
  - **Semi-Supervised Autoencoder Classifier (AE-Clf)**: Combining unsupervised feature extraction with high-precision classification.
  - **Ablation Benchmarks**: Depth ablation (1 to 5 dense layers), batch size sweeps (16 to 128), optimizer evaluations (Adam vs RMSprop vs SGD), ROC/AUC curves, and confusion matrix validation.

### Project 3: RescueNet — Cloud-Native Serverless Disaster Relief & Humanitarian Logistics System
- **Context**: Distributed Systems & Cloud Architecture (AWS Serverless).
- **Infrastructure & AWS Stack**:
  - **AWS SAM (Serverless Application Model)** & CloudFormation infrastructure-as-code.
  - **Node.js 20.x Lambda Microservices** in isolated private VPC subnets with NAT Gateways.
  - **Amazon RDS PostgreSQL** (18 normalized operational tables, connection pooling).
  - **AWS CloudWatch & X-Ray Distributed Tracing** for sub-millisecond bottleneck tracking.
- **Frontend & Architectural Innovations**:
  - **Two-Tier Zero-Route RPC Bridge**: Type-safe client controller dispatcher (`frontend/lib/controllers.js`) eliminating boilerplate Express route tables.
  - **Ambient Identity Context**: Multi-role volunteer/admin context resolved at request runtime without polluting API arguments.
  - **12-Column Urgency-Sorted Operations Dashboard**: Composes shelter capacity, banded inventory cover days, active disasters, and derived alert feeds into a single atomic payload.
  - **Design Token System**: Plain CSS design system (`--rn-` variables) with zero framework lock-in.

---

## 3. UI/UX Rules & Primitives from Knowledge Base

1. **Strict Dark Mode Semantics (Juice Lab Rules)**:
   - Primary: `#f4f4f5` ($\ge 13.8:1$ contrast)
   - Secondary: `#a1a1aa` ($\ge 7.1:1$ contrast)
   - Tertiary: `#71717a` ($\ge 4.5:1$ contrast)
   - Surface: `#09090b` / `#121217` with `rgba(255, 255, 255, 0.08)` borders.
2. **Mathematical Motion (tactile-ui-ux Skill)**:
   - Critically damped springs ($\text{stiffness}: 350, \text{damping}: 32$).
   - macOS Dock proximity magnification: $s(d) = 1.0 + A \cdot \exp\left(-\frac{d^2}{2\sigma^2}\right)$.
   - Nested border radius: $R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{padding})$.
   - Zero-JS rotating conic border: `@property --angle`.
3. **Interactive Proof Widgets**:
   - **LWICMS**: Live Interactive 11-Rule Tank Compatibility Evaluator sandbox.
   - **AquaPonds**: Interactive Sensor Slider & Real-Time WQI Risk Gauge with live autoencoder anomaly loss calculation.
   - **RescueNet**: Live Humanitarian Shelter Urgency Simulator (capacity vs supply cover days).

---

## 4. Complete Application Structure

```
portfolio/
├── PORTFOLIO_MASTER_PLAN.md      # This comprehensive design document
├── package.json                   # Next.js 15, React 19, Tailwind CSS v4, Framer Motion
├── tsconfig.json                  # Strict TypeScript configuration
├── next.config.ts                 # Next.js optimization & security headers
├── tailwind.config.ts             # Semantic dark mode & tactile tokens
├── public/                        # Static assets, favicon, resume placeholders
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, metadata, command palette provider
│   │   ├── page.tsx               # Master single-page tactile canvas
│   │   └── globals.css            # GPU conic properties, scrollbar, theme variables
│   ├── components/
│   │   ├── chrome/
│   │   │   ├── Navbar.tsx         # Proximity magnification dock & time clock
│   │   │   ├── CommandMenu.tsx    # Cmd+K spotlight search via cmdk
│   │   │   └── Footer.tsx         # Tactile inquiry form & social links
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx    # Editorial headline & interactive status pill
│   │   │   └── AmbientCanvas.tsx  # Low-power 30 FPS ambient particle mesh
│   │   ├── work/
│   │   │   ├── BentoGrid.tsx      # Flagship project cards
│   │   │   ├── LwicmsCard.tsx     # Embedded 11-Rule compatibility sandbox
│   │   │   ├── AquaPondsCard.tsx  # Embedded IoT WQI sensor gauge
│   │   │   └── RescueNetCard.tsx  # Embedded serverless shelter simulator
│   │   ├── lab/
│   │   │   └── TactileLab.tsx     # Design engineering physics & micro-interaction playground
│   │   ├── skills/
│   │   │   └── ArsenalGrid.tsx    # Standardized 24x24 optical vector tech matrix
│   │   └── credentials/
│   │       └── FieldNotes.tsx     # Academic achievements, publications, and stats
│   └── lib/
│       ├── constants.ts           # Project metadata, credentials, and links
│       └── utils.ts               # Classnames helper, formatters, physics math
```

---

## 5. Deployment Instructions for Vercel

1. **Local Development**:
   ```bash
   cd C:\Users\User\portfolio
   npm install
   npm run dev
   ```
2. **Open in VS Code**:
   ```bash
   code C:\Users\User\portfolio
   ```
3. **Deploy to Vercel**:
   ```bash
   npx vercel
   # Follow the interactive prompt or connect GitHub repository in vercel.com dashboard
   ```
