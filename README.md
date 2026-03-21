# MANVITHA DUNGI — PORTFOLIO

## UNIT_01 // PILOT IDENTIFICATION

A neo-brutalist, interactive portfolio website showcasing projects across **embedded systems, robotics, full-stack development, and AI/ML integration**. Built with React, Framer Motion, and inspired by NERV headquarters aesthetic.

**Live Demo:** [Portfolio Website](https://manvitha-portfolio.dev)  
**GitHub:** [ManvithaDungi](https://github.com/ManvithaDungi)  
**LinkedIn:** [@manvitha-dungi](https://www.linkedin.com/in/manvitha-dungi-8a8040211/)

---

## FEATURES

✓ **Responsive Design** — Mobile-first, brutalist UI with manga-inspired panels  
✓ **Dark/Light Mode Toggle** — Theme switching with localStorage persistence  
✓ **Smooth Animations** — Framer Motion for entrance effects and transitions  
✓ **Project Showcase** — 8 major projects with full tech stacks and GitHub links  
✓ **Skills Matrix** — 9 categories: Programming, Frontend, Backend, Embedded Systems, Robotics, Security, Tools, and Specialized domains  
✓ **Contact Integration** — Direct links to email, GitHub, LinkedIn, and phone  
✓ **Accessibility** — WCAG-compliant, semantic HTML, ARIA labels  

---

## TECH STACK

### Frontend
- **React 18** — Component-based UI
- **Vite** — Fast build tool and dev server
- **Framer Motion** — Advanced animations and transitions
- **React Router v6** — Client-side routing
- **CSS3** — Grid, Flexbox, custom properties for theming

### UI Components
- **Material UI** — Component library
- **React Icons** — Icon library
- **Recharts** — Data visualization (RadarChart for skills)

### Styling
- **CSS Variables** — Dual-palette system (Light: NERV PAPER, Dark: NERV CORE)
- **Responsive Breakpoints** — Mobile, tablet, desktop optimization
- **CSS Grid & Flexbox** — Layout system

### Development
- **TypeScript** — Type safety (optional)
- **ESLint** — Code linting
- **Git** — Version control

---

## PROJECT PORTFOLIO

### 1. PX4 Autopilot Simulation with Gazebo & ROS2
**Type:** Self-Driven Systems Project  
**Tech Stack:** Gazebo, ROS2, MAVSDK, PX4 Autopilot  
**Description:** Autonomous drone simulation with ROS2 and MAVSDK for offboard control and waypoint navigation  
[GitHub](https://github.com/ManvithaDungi/PX4-Gazebo-Simulation)

### 2. Zynk — Full-Stack Social Event Platform
**Type:** Curriculum Project  
**Tech Stack:** MongoDB, Express, ReactJS, Node.js, Socket.io  
**Description:** Scalable social event platform with real-time chat and notifications  
[GitHub](https://github.com/ManvithaDungi/Zynk)

### 3. Real-Time Health Monitoring System
**Type:** Embedded Systems Project  
**Tech Stack:** STM32F401, STM32F407, C++, ADC, I2C, GPIO  
**Description:** Embedded health monitoring with pulse and temperature sensors, bare-metal firmware  
[GitHub](https://github.com/ManvithaDungi/Health-Monitor-System)

### 4. Autonomous Arbitrage Agent for BNB
**Type:** Hackathon Project (BNB Chain YZi Labs Hackathon-2026)  
**Tech Stack:** Python, BNB Chain, Web3.py, LangGraph, Solidity, PancakeSwap V2  
**Description:** AI-powered trading agent with 4-way fusion analysis and smart contracts  
[GitHub](https://github.com/ManvithaDungi/Autonomous-Arbitrage-Agent-for-BNB)

### 5. AI Moderated Peer Community & Symptom Checker
**Type:** Hackathon Project (ACM Girls Hackathon)  
**Tech Stack:** React, Firebase, Gemini, Vite, Hugging Face  
**Description:** Privacy-first women's health platform with AI moderation and wellness tracking  
[GitHub](https://github.com/ManvithaDungi/AI_SymptomAnalyserForWomen)

### 6. Patient Management System
**Type:** Healthcare Platform Project  
**Tech Stack:** Python/Django, PostgreSQL, React, JWT, Cryptography  
**Description:** HIPAA & GDPR-compliant healthcare platform with RBAC and end-to-end encryption  
[GitHub](https://github.com/ManvithaDungi/PatientManagementSystem)

### 7. Safety-Heroes — Interactive Safety Learning Platform
**Type:** Educational Technology Project  
**Tech Stack:** React, React Hooks, React Router, Material UI, CSS Grid  
**Description:** Autism-friendly educational platform with interactive mini-games and habit tracking  
[GitHub](https://github.com/ManvithaDungi/Safety-Heroes)

### 8. SecureRx — Secure Prescription Management System
**Type:** Healthcare Security Project  
**Tech Stack:** Node.js, Express, React, MongoDB, JWT, RSA/AES-256  
**Description:** Healthcare security system with end-to-end encryption and QR verification  
[GitHub](https://github.com/ManvithaDungi/SecureRx)

---

## SKILL DOMAINS

**Programming Languages:** Python • C++ • Java • JavaScript • Solidity

**Frontend:** React • React Hooks • React Router • Vite • CSS3 • Framer Motion • Material UI

**Backend:** Node.js • Express.js • Django • REST APIs • Socket.io • JWT

**Databases:** MongoDB • PostgreSQL • Firebase

**Embedded Systems:** STM32F4 • Arduino • C++ Firmware • ADC • I2C • UART • GPIO • Sensors

**Robotics & Autonomy:** ROS2 • Gazebo • PX4 Autopilot • MAVSDK • Drone Control • GPS/IMU

**Security & Cryptography:** RSA • AES-256 • SHA-256 • HMAC • End-to-End Encryption • MFA

**Tools & Platforms:** Git • GitHub • VS Code • Postman • Keil uVision • STM32CubeIDE • LaTeX

**Specialized:** AI/ML Integration • Blockchain Smart Contracts • HIPAA Compliance • GDPR Compliance • Web3.py • LangGraph

---

## INSTALLATION & SETUP

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git**

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/ManvithaDungi/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Or with yarn
yarn install
```

### Development Server

```bash
# Start dev server (Vite)
npm run dev

# Server runs at http://localhost:5173
```

### Build for Production

```bash
# Build optimized bundle
npm run build

# Preview production build
npm run preview
```

---

## PROJECT STRUCTURE

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ThemeToggle.css
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Proficiency.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Boot.jsx
│   │   │   └── [section].css
│   │   └── ui/
│   │       ├── MangaPanel.jsx
│   │       ├── SystemLabel.jsx
│   │       ├── HalftoneOverlay.jsx
│   │       ├── RadarChart.jsx
│   │       ├── SpeedLines.jsx
│   │       ├── NervLine.jsx
│   │       ├── TransitionRibbon.jsx
│   │       └── [component].css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.jsx
│   └── index.jsx
├── package.json
├── vite.config.js
├── tsconfig.json
└── README.md
```

---

## THEMING & CUSTOMIZATION

### Color Palettes

#### Light Mode (NERV PAPER)
```
Background:  #F0EDE6
Text (Primary): #0A0A0F
Text (Muted): #4A5568
Accent (Blue): #0047CC
Accent (Cyan): #007FA3
Warning/Alert: #CC1200
```

#### Dark Mode (NERV CORE)
```
Background: #04060D
Text (Primary): #D8E8FF
Text (Muted): #5A7899
Accent (Blue): #1A7FFF
Accent (Cyan): #00EEFF
Warning/Alert: #FF1A1A
```

### Modifying Colors

Edit [src/styles/globals.css](src/styles/globals.css) to customize the CSS variable palettes:

```css
:root {
  --color-bg: #F0EDE6;
  --color-white: #0A0A0F;
  --color-blue: #0047CC;
  /* ... more variables */
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #04060D;
    --color-white: #D8E8FF;
    --color-blue: #1A7FFF;
  }
}
```

---

## EXPERIENCE

### Summer Research Intern
**organization:** IDEAS — Institute of Data Engineering, Analytics and Science Foundation (ISI Kolkata)  
**Duration:** May 2025 - July 2025  
**Focus:** Data analytics, simulation environments, and intelligent systems research

---

## EDUCATION

**Amrita Vishwa Vidyapeetham, Coimbatore**
- B.Tech Computer Science & Engineering (2023-2027)
- CGPA: 7.93/10

**Sri Venkateshwara Junior College**
- Board of Intermediate Education (2021-2023)
- Percentage: 92.1%

**Timpany School**
- ICSE (Till 2021)
- Percentage: 96%

---

## CONTACT

📧 **Email:** [manvitha3626@gmail.com](mailto:manvitha3626@gmail.com)  
👔 **LinkedIn:** [@manvitha-dungi](https://www.linkedin.com/in/manvitha-dungi-8a8040211/)  
🐙 **GitHub:** [@ManvithaDungi](https://github.com/ManvithaDungi)  
📱 **Phone:** [+91-7013702246](tel:+917013702246)  

---

## ACHIEVEMENTS & RECOGNITION

✓ Shortlisted and participated in BNB Chain YZi Labs Hackathon-2026 (Bangalore)  
✓ Participated in ACM Girls Hackathon (Coimbatore)  
✓ Organized Finance Workshop for Pragathi-2025 college event  
✓ Active member of multiple college events and communities  
✓ Research experience at premier institution (ISI Kolkata)  

---

## KEY HIGHLIGHTS

- **8 Major Projects** spanning embedded systems, robotics, healthcare tech, and AI/ML
- **Full-Stack Development** from firmware (C++) to frontend (React) to backend (Node.js/Django)
- **Security & Compliance** expertise (HIPAA, GDPR, cryptography, smart contracts)
- **Hackathon Success** — 2 successful hackathon projects with innovative solutions
- **Research Experience** at India's premier data science institution
- **Multi-Domain Expertise** uniquely positioned at intersection of hardware and software

---

## DESIGN PHILOSOPHY

This portfolio embodies the **NERV aesthetic** — inspired by Neon Genesis Evangelion's headquarters design:
- **Brutalism** — Hard lines, bold typography, minimal decoration
- **Functionality** — Every element serves a purpose
- **Japanese Influence** — Kanji accents, manga panels, manga-inspired animations
- **High Contrast** — Aged paper (light) vs. deep space (dark) color schemes
- **Glitch Elements** — Speed lines, distortion effects, system labels

---

## LICENSE

This project is open source. Feel free to fork, modify, and adapt for your own portfolio.

---

## DEPLOYMENT

### Automatic Deployment (GitHub Actions)

This repository includes automatic deployment via GitHub Actions. **Every push to the `main` branch triggers a build and deployment to GitHub Pages.**

#### Setup GitHub Pages

1. Go to repository **Settings > Pages**
2. Set **Source** to "GitHub Actions"
3. Push to main branch - deployment starts automatically

#### Alternative Deployment Services

For **Vercel** or **Netlify** deployment:
1. Copy the corresponding workflow file from `.github/workflows/`
2. Add required secrets to GitHub (see instructions in workflow files)
3. Rename the file to remove `.example` extension
4. Disable/remove `deploy.yml` if using an alternative

### Manual Deployment

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

#### GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch or configure Actions
```

---

## PERFORMANCE

- **Vite** for optimized bundling
- **CSS Variables** for efficient theming (no runtime overhead)
- **Framer Motion** optimized for 60fps animations
- **Recharts** lazy-loaded for performance
- **~200KB gzipped** final bundle size

---

## BROWSER SUPPORT

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## FUTURE ROADMAP

- [ ] Blog section for technical articles
- [ ] Interactive project demos
- [ ] Downloadable resume in multiple formats
- [ ] Testimonials/recommendations section
- [ ] Analytics dashboard
- [ ] Email subscription for updates
- [ ] Dark mode refinements
- [ ] Accessibility audit (WCAG AAA)

---

## FEEDBACK & SUPPORT

If you have suggestions, improvements, or found any bugs:
1. Open an [issue](https://github.com/ManvithaDungi/Portfolio/issues)
2. Submit a [pull request](https://github.com/ManvithaDungi/Portfolio/pulls)
3. Contact via [email](mailto:manvitha3626@gmail.com)

---

**Made with ⚡ by Manvitha Dungi | Last Updated: March 2026**
