
# ⚡ Manvitha Dungi — Portfolio  

A **neo-brutalist, interactive portfolio** showcasing projects across  
**Web Development • AI/ML • Embedded Systems • Blockchain • Robotics**

🌐 **Live:** https://manvithadungi.github.io/Portfolio/
🐙 **GitHub:** https://github.com/ManvithaDungi  
💼 **LinkedIn:** https://www.linkedin.com/in/manvitha-dungi-8a8040211/  

---

## 🚀 Overview  

This portfolio is designed as a **high-performance, visually distinct interface** inspired by the **NERV aesthetic** — combining brutalist UI with smooth animations and strong system-like structure.

It reflects my work across **full-stack development, intelligent systems, and real-time applications**.

---

## ✨ Features  

- **Responsive, mobile-first design** — Optimized for all devices with fluid layouts and adaptive typography  
- **Dark / Light mode with persistent state** — Theme preference saved to localStorage with smooth transitions  
- **Smooth animations using Framer Motion** — Choreographed motion sequences, spring physics, and scroll-triggered animations  
- **Modular component-based architecture** — Reusable UI primitives and section components  
- **Accessible (semantic HTML + ARIA)** — WCAG compliance, keyboard navigation, screen reader support  
- **Clean project showcase with GitHub integration** — Interactive project cards with live links and repository data  
- **NERV-inspired brutalist aesthetics** — System-like UI with strong visual hierarchy and geometric design  
- **Advanced visual effects** — Halftone overlays, manga panels, nerve-line animations, and speed line effects  
- **Interactive data visualization** — Radar charts for skill proficiency, animated progress indicators  

---

## 🛠 Tech Stack  

### Frontend Framework
- **React** (Vite) — Fast component-based architecture with hot module replacement  
- **React Router** — Client-side routing for smooth page transitions  

### Animation & Motion
- **Framer Motion** — Declarative animation library with spring physics and gesture support  
- **React Transition Group** — Page transition orchestration  

### styling & UI
- **CSS3** — Grid, Flexbox, custom properties (CSS variables), transforms, transitions  
- **CSS-in-JS** — Scoped component styles for maintainability  
- **Material UI Icons** — SVG icon library for UI consistency  
- **Responsive Design** — Mobile-first, breakpoint-based layouts  
- **Theme System** — Dynamic dark/light mode with CSS variable switching  

### Data Visualization
- **Recharts** — React charting library for animated RadarChart component  
- **React Icons** — Vector icon library for consistent iconography  

### Development & Tooling
- **Vite** — Lightning-fast bundler with native ES modules  
- **ESLint** — Code quality and style consistency  
- **Git & GitHub** — Version control and deployment  

---

## 🧩 Featured Projects  

### 🔹 Zynk — Social Event Platform  
Full-stack platform with real-time chat and notifications  
**Stack:** MERN + Socket.io  

### 🔹 Patient Management System  
Secure healthcare platform with RBAC and encryption  
**Stack:** React, Django/Node, PostgreSQL  

### 🔹 AI Symptom Checker  
AI-moderated women’s health platform  
**Stack:** React, Firebase, Gemini  

### 🔹 Autonomous Arbitrage Agent  
AI + blockchain trading system with smart contracts  
**Stack:** Python, Solidity, Web3  

👉 Explore more in the portfolio  

---

## 🧠 Skills  

**Languages:** Python, C++, Java, JavaScript, Solidity  

**Frontend:** React, Vite, CSS3, Framer Motion  

**Backend:** Node.js, Express, Django, REST APIs  

**Databases:** MongoDB, PostgreSQL, Firebase  

**Specialized:**  
AI/ML • Blockchain • Embedded Systems • Security & Cryptography  

---

## ⚙️ Setup  

```bash
git clone https://github.com/ManvithaDungi/Portfolio.git
cd Portfolio
npm install
npm run dev
````

---

## 📁 Project Structure

### Component Organization
```
src/
 ├── components/
 │   ├── layout/
 │   │   └── Navbar.jsx        — Fixed navigation with theme toggle
 │   │
 │   ├── sections/             — Full-width content sections
 │   │   ├── Hero.jsx          — Landing section with animated intro
 │   │   ├── About.jsx         — Bio and background
 │   │   ├── Experience.jsx    — Work history and achievements
 │   │   ├── Skills.jsx        — Interactive skill visualization with RadarChart
 │   │   ├── Projects.jsx      — Featured work showcase
 │   │   ├── Proficiency.jsx   — Technical proficiency breakdown
 │   │   ├── Boot.jsx          — System boot/loading sequence
 │   │   └── Contact.jsx       — Contact form and social links
 │   │
 │   └── ui/                   — Reusable visual components
 │       ├── HalftoneOverlay.jsx    — Halftone dot matrix effect
 │       ├── MangaPanel.jsx         — Comic panel layout wrapper
 │       ├── NervLine.jsx           — Animated circuit-style lines
 │       ├── RadarChart.jsx         — Multi-axis skill visualization
 │       ├── SpeedLines.jsx         — Motion effect lines
 │       ├── SystemLabel.jsx        — Styled badge components
 │       ├── ThemeToggle.jsx        — Dark/light mode switcher
 │       └── TransitionRibbon.jsx   — Page transition effects
 │
 ├── data/
 │   ├── projects.js          — Project metadata and links
 │   └── skills.js            — Skill categories and proficiency data
 │
 ├── styles/
 │   ├── globals.css          — Global resets, typography, CSS variables
 │   ├── animations.css       — Keyframe animations and motion utilities
 │   └── [Component].css      — Component-scoped styles
 │
 ├── App.jsx                  — Root component with routing
 └── index.jsx                — Entry point
```

### Key Architectural Patterns
- **Section components** — Self-contained, full-width content regions with cohesive styling  
- **UI primitives** — Reusable visual effects composable into larger layouts  
- **Data-driven rendering** — Projects and skills pulled from centralized data files  
- **Responsive wrappers** — Container components that adapt to viewport  
- **Animation contexts** — Framer Motion configurations shared across components  


---

## 🎯 Highlights

* 8+ major projects across multiple domains
* Strong full-stack + system-level development experience
* Hackathon participation (BNB Chain, ACM)
* Research exposure (ISI Kolkata)

---

## 🎨 Design Philosophy & UI System  

### Aesthetic Principles
This portfolio embraces a **brutalist, system-inspired design language** heavily influenced by the NERV aesthetic from *Evangelion*. The visual identity prioritizes:

- **Geometric precision** — Grids, clean lines, and structured layouts  
- **High contrast** — Bold color separation and stark typography  
- **System-like hierarchy** — Information organized with technical clarity  
- **Minimal ornamentation** — Functional design with purposeful visual effects  
- **Motion as communication** — Animations that guide users and reinforce structure  

### Color System
- **Dark Mode** — Deep charcoal (#0a0a0a) backgrounds with neon accents (electric blues, magentas)  
- **Light Mode** — Crisp whites (#fafafa) with muted, high-contrast colors  
- **Accent Palette** — Strategic use of brand colors to highlight interactive elements  
- **Semantic Colors** — Status indicators for projects, skills, and calls-to-action  

### Typography
- **Display Fonts** — Bold, geometric sans-serif for headings (high visual impact)  
- **Body Fonts** — Clean, readable typefaces for content (system fonts for performance)  
- **Scale System** — Computed sizing from base scale (1.25x ratio) for visual harmony  
- **Weight Hierarchy** — 400 (regular), 600 (semi-bold), 700 (bold) for structure  

### Spacing & Layout
- **CSS Grid** — Primary layout system for sections and component grids  
- **Flexbox** — Alignment and distribution of nested elements  
- **Modular Scale** — Consistent spacing using multiples of base unit (8px)  
- **Responsive Breakpoints** — Mobile-first approach with tablet (768px) and desktop (1024px) overrides  

---

## 🎬 UI Components & Visual Effects  

### Signature Components

#### **ThemeToggle**
Interactive dark/light mode switcher with smooth color transitions. Persists user preference across sessions using localStorage.

#### **HalftoneOverlay**
Procedural halftone pattern rendering (dot matrix effect) that creates a retro, printed aesthetic over images and sections. CPU-optimized using canvas rendering.

#### **MangaPanel**
Comic-book style layout system with irregular borders, speech bubbles, and action effects. Creates dramatic visual breaks in content.

#### **NervLine**
Animated system lines and connection patterns that draw themselves on page load. Uses SVG path animations for technical, circuit-like aesthetics.

#### **SpeedLines**
Directional motion lines (velocity streaks) that animate during transitions. Conveys dynamism and urgency, particularly in hero and section transitions.

#### **RadarChart**
Interactive skill proficiency visualization. Renders animated multi-axis radars using Recharts, with smooth transitions and hover interactions.

#### **TransitionRibbon**
Page transition effects with cascading, ribbon-like elements. Creates continuity between sections with synchronized motion sequences.

#### **SystemLabel**
Styled badge components for project tags, skills, and status indicators. Typography-heavy with minimal background, fitting the system aesthetic.

### Animation Framework
- **Framer Motion** — Core animation library for orchestrated motion sequences  
- **Staggered animations** — Sequential, timed reveals for visual flow  
- **Scroll-triggered effects** — `useInView` hook for viewport-based animation triggers  
- **Spring physics** — Damped spring animations for natural, organic movement  
- **Page transitions** — Choreographed entry/exit sequences for route changes  

---

## 🎨 CSS Architecture  

### Style Organization
```
styles/
├── globals.css       — Reset, CSS variables, typography, defaults
├── animations.css    — Keyframe animations, motion utilities
└── components/
    ├── [Component].css  — Scoped styles per component
```

### CSS Features
- **CSS Variables** — Centralized color, spacing, and timing tokens  
- **Grid & Flex utilities** — Responsive layout helpers  
- **Media queries** — Mobile-first with desktop enhancements  
- **Custom properties** — Theme switching via `--theme-bg`, `--theme-text`, etc.  
- **Pseudo-elements** — Decorative borders, highlights, and overlays  
- **Transitions & transforms** — GPU-accelerated performance  

### Dark Mode Implementation
- **Root-level variables** — Theme tokens toggled at `:root` or `.light-theme`  
- **Automatic OS preference detection** — `prefers-color-scheme` media query fallback  
- **LocalStorage persistence** — User choice remembered between sessions  
- **Instant switching** — No page reload required  

---

## 📱 Responsive Design  

### Breakpoint Strategy
| Breakpoint | Device | Adjustments |
|---|---|---|
| **Mobile** | < 640px | Single column, touch-optimized spacing, larger tap targets |
| **Tablet** | 640px—1024px | Two-column grids, adjusted font scales |
| **Desktop** | > 1024px | Full multi-column layouts, complex visualizations |

### Responsive Behaviors
- **Fluid typography** — Font sizes scale with viewport using CSS `clamp()`  
- **Adaptive grids** — `auto-fit` and `auto-fill` with container queries  
- **Touch-friendly interactions** — Minimum 44px tap targets  
- **Performance optimization** — Lazy loading of visual effects on smaller screens  

---

## 🎯 Performance & Optimization  

### Rendering Optimization
- **CSS containment** — `contain: layout, paint` for section isolation  
- **GPU acceleration** — `will-change`, `transform: translateZ(0)` for smooth animations  
- **Conditional rendering** — Complex effects disabled on low-end devices  
- **Image optimization** — Lazy loading, WebP formats, responsive srcsets  

### Bundle Efficiency
- **Tree-shaking** — Unused animations and utilities removed in production  
- **CSS minification** — Scoped styles reduce file size  
- **Framer Motion optimization** — Only necessary motion libraries bundled  

---

## 📬 Contact

📧 [manvitha3626@email.com](mailto:manvitha3626@email.com)
📱 +91-7013702246

---

## ⭐ If you like this project

Feel free to fork, star, or reach out!

---

**Built with ⚡ by Manvitha Dungi**

```

