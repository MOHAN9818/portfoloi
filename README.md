# Personal Portfolio Website — Galla Mohan Sai

A premium, modern, responsive personal portfolio website for **Galla Mohan Sai** — Full Stack Developer & AI/ML Enthusiast, Computer Science and Engineering student at VIT-AP University.

Built with **React 19**, **Vite**, **Tailwind CSS**, and **Lucide React**.

---

## 🌟 Highlights & Features

- **Sophisticated Dark Theme**: Deep dark slate/navy palette (`#030712`, `#070d1e`) with electric blue, violet, and subtle cyan accents.
- **Hero Section**:
  - Name: Galla Mohan Sai
  - Animated role switcher: *Full Stack Developer*, *React Developer*, *AI/ML Enthusiast*, *MERN Stack Builder*
  - Interactive live code preview panel (`developer.profile.ts`)
  - Direct CTAs: *View My Projects*, *Download Resume*, *Contact Me*, and *GitHub Profile*
- **Truthful Content Integrity**:
  - No fabricated experience metrics, fake client counts, or inflated skill progress bars.
  - Verified academic information (VIT-AP University B.Tech CSE graduating 2027, Intermediate 96.5%).
- **Interactive Project Showcase**:
  - **AI Mock Interviewer** (High-prominence AI card with Google Gemini API & RAG architecture, interview practice preview mockup, live demo & GitHub repo links).
  - **Fin Tracker** (Finance dashboard preview mockup, monthly income/expense metrics, savings rate progress, live demo & GitHub repo links).
  - **X Clone** (Social feed preview mockup, verified handle styling, dynamic layout, live demo link).
  - **Privacy Preserving Traffic Sign Recognition** (Academic Machine Learning project exploring Federated Learning and Differential Privacy on the GTSRB dataset, clearly marked as *In Progress*).
- **Working Resume System**:
  - Interactive modal displaying CV summary with direct PDF preview and download buttons.
  - Standard, clean PDF located at `public/resume.pdf`.
  - Drop-in replacement support: simply replace `public/resume.pdf` with your updated resume file.
- **Accessible & Responsive**:
  - Keyboard accessible, mobile navigation drawer, reduced-motion accessibility support, zero horizontal overflow.
- **Centralized Configuration**:
  - All personal details, project metadata, skills, contact links, and email placeholders are organized in `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + custom SVG icons
- **Deployment**: Optimized for [Vercel](https://vercel.com/) with `vercel.json` included

---

## 📂 Project Architecture

```
portfoloi/
├── public/
│   └── resume.pdf                 # Real, valid PDF resume (drop-in replaceable)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky glassmorphic navigation with mobile menu
│   │   ├── Hero.jsx               # Hero with role animation & developer code mockup
│   │   ├── About.jsx              # Truthful biography, highlights, and academic merit
│   │   ├── Skills.jsx             # Categorized skills (no fake percentage bars)
│   │   ├── Projects.jsx           # Featured live projects & academic ML project
│   │   ├── Education.jsx          # Academic timeline (VIT-AP & Intermediate 96.5%)
│   │   ├── Certifications.jsx     # MERN, Prodigy Internship & NPTEL AI Search (60/100)
│   │   ├── GithubSection.jsx      # GitHub activity showcase & verified repositories
│   │   ├── Contact.jsx            # Functional contact form, email & social links
│   │   ├── Footer.jsx             # Tagline, dynamic year, and back-to-top button
│   │   ├── ResumeModal.jsx        # Interactive CV preview & download dialog
│   │   ├── Icons.jsx              # Vector SVG icons for GitHub & LinkedIn
│   │   └── previews/
│   │       ├── AiInterviewPreview.jsx      # AI mock session interface preview
│   │       ├── FinanceDashboardPreview.jsx # Financial summary & savings rate preview
│   │       └── SocialFeedPreview.jsx       # Social timeline feed preview
│   ├── data/
│   │   └── portfolioData.js       # Central data configuration
│   ├── App.jsx                    # Root application component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Tailwind directives and custom design tokens
├── scripts/
│   └── generate_resume.py         # Utility script to generate valid resume.pdf
├── index.html                     # SEO metadata, Inter fonts, and terminal favicon
├── tailwind.config.js             # Custom colors, fonts, and animation keyframes
├── vercel.json                    # Single Page App routing for Vercel
└── package.json                   # Project scripts and dependencies
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally in Development Mode

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview

```bash
npm run build
npm run preview
```

---

## ⚙️ Customization Guide

### 1. Updating Personal Email & LinkedIn URL
Open `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  // Add your email address
  email: "your.email@example.com",

  // Add your LinkedIn profile URL
  linkedinUrl: "https://linkedin.com/in/yourprofile",
  
  // ...
};
```

### 2. Updating Your Resume PDF
To update the downloadable resume, place your official PDF file directly into:
```
public/resume.pdf
```
No code changes are required; the website will automatically serve and download the new file.

---

## 🌐 Deploy to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/MOHAN9818/<your-repo-name>.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Vite**
4. Click **Deploy**. Vercel will automatically build and host the website with zero configuration.
