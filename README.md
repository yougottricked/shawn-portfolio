# Shawn Ethan Varughese — Personal Engineering Portfolio

> **Staff-Grade Systems Architect & Design Engineering Portfolio**  
> Built with Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion, and `cmdk`.

---

## 🚀 Quick Start (Visual Studio Code)

1. Open this folder in Visual Studio Code:
   ```bash
   code C:\Users\User\portfolio
   ```

2. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.

3. Verify production build:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

### Option A: Using Vercel CLI (1-Click)
```bash
npx vercel
```
Follow the short terminal prompts to link your Vercel account. It will deploy to edge servers with zero configuration.

### Option B: Push to GitHub & Connect to Vercel
1. Create a repository on GitHub (e.g., `shawn-portfolio`).
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio launch"
   git branch -M main
   git remote add origin https://github.com/yougottricked/shawn-portfolio.git
   git push -u origin main
   ```
3. Import the repo at [vercel.com/new](https://vercel.com/new).

---

## 💎 Features & Architecture

- **Flagship Project 1 (LWICMS — Capstone FYP)**:
  - 36 Controllers, 274 Routes, 91 Tables, 164 Foreign Keys.
  - Interactive **11-Rule Tank Compatibility Evaluator** embedded directly in the card.
  - Real-time bio-compatibility calculation (pH, temperature, aggression matrix).
  - 5.0/5.0 stakeholder evaluation from 37 industry testers, 30/30 unit tests passed.

- **Flagship Project 2 (AquaPonds — Deep Learning & IoT)**:
  - Multivariate IoT time-series telemetry (pH, DO, Temp, Turbidity, Ammonia).
  - Bayesian-tuned KerasTuner DNN & Unsupervised Latent Autoencoder.
  - Interactive **Multivariate Sensor Sliders & Live WQI Inference Gauge**.
  - Live reconstruction loss calculation and pond condition diagnosis.

- **Flagship Project 3 (RescueNet — Cloud Serverless)**:
  - AWS SAM Serverless microservices (Node.js 20.x, Lambda, RDS PostgreSQL).
  - Zero-route RPC dispatcher client bridge.
  - Interactive **Live Shelter Operations & Supply Cover Urgency Simulator**.

- **Interactive Tactile Lab**:
  - Apple macOS dock Gaussian proximity magnification: $s(d) = 1.0 + A \cdot \exp(-d^2 / 2\sigma^2)$.
  - Zero-JS GPU-composited rotating conic gradient borders using CSS `@property --angle`.
  - Rolling digit odometer avoiding layout shift.
  - Milestone celebratory particles using brand-palette `canvas-confetti`.

- **Global Command Palette (`⌘K`)**:
  - Instant spotlight search across projects, technical arsenal, field notes, and direct contact.

- **Design Engineering Compliance**:
  - Strict semantic dark mode contrast ($\ge 13.8:1$).
  - 30 FPS capped ambient canvas with `prefers-reduced-motion` compliance.
  - Nested border radius formula: $R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{padding})$.
