# Pinamang Educational Complex (PINAECO) — Official Website

> **"Life Is What You Make It"** • Established 1992 • Konongo-Ahyiaem, Ashanti Region, Ghana

A high-performance, fully responsive, and SEO/AEO/GEO-optimized web portal for **Pinamang Educational Complex (PINAECO)**. The platform showcases the institution's academic tiers, 32+ years of legacy, school policies, code of conduct, and an interactive online admission system.

---

## 🌟 Table of Contents

- [Overview & Identity](#-overview--identity)
- [Key Features](#-key-features)
- [Academic Programs](#-academic-programs)
- [Dedicated About Page & Governance](#-dedicated-about-page--governance)
- [SEO, AEO & GEO Architecture](#-seo-aeo--geo-architecture)
- [Enhanced Admissions Portal](#-enhanced-admissions-portal)
- [Project Architecture & File Structure](#-project-architecture--file-structure)
- [Local Setup & Running](#-local-setup--running)
- [Contact & Official Coordinates](#-contact--official-coordinates)

---

## 🏫 Overview & Identity

- **Institution:** Pinamang Educational Complex (PINAECO)
- **Founding Year:** 1992
- **Location:** P. O. Box 19, Konongo-Ahyiaem, Asante Akim, Ashanti Region, Ghana
- **Motto:** *"Life Is What You Make It"*
- **Official Brand Colors:**
  - Royal Navy: `#091A3C` / `#061128`
  - Amber Gold: `#E59714` / `#D48806`
  - Crisp White & Light Slate: `#FFFFFF` / `#F8FAFC`
- **School Levels:** Crèche, Nursery, Kindergarten, Primary School, and Junior High School (JHS).

---

## 🚀 Key Features

1. **Brand Hero & Navigation:**
   - Official Pinamang Educational Complex crest emblem in header, footer, and browser favicon.
   - Dynamic sticky navigation header with smooth section scrolling and active state indicators.
   - Floating badge highlighting *"A Legacy of Excellence — Since 1992"*.
   - 5-pillar Navy Feature Bar: *Holistic Education, Expert Educators, Innovative Learning, Global Perspective, Safe & Supportive Campus*.

2. **Milestones & Metrics Counter:**
   - Animated counter banner celebrating `32+ Years of Excellence`, `1500+ Students Enrolled`, `80+ Qualified Teachers`, `100+ Awards Won`, and `98% BECE Distinction & Placement`.

3. **Interactive Modals:**
   - **Comprehensive Online Admission Form:** Multi-section student, parent, medical, and document declaration system.
   - **Schedule a Tour:** Date and time slot reservation for campus visits.
   - **Parent & Student Portals:** Fast authentication interface for School Vault.
   - **Video Tour Showcase:** Clean responsive modal player.
   - **Dynamic Toast Notifications:** User feedback for all submissions.

---

## 📚 Academic Programs

The complex features five core educational tiers:

1. **Crèche** *(Ages 6 mos – 2 yrs):* Nurturing sensory discovery, affection, and safe day-care.
2. **Nursery** *(Nursery 1 & 2):* Early language, coordination, social bonding, and guided exploratory play.
3. **Kindergarten (KG)** *(KG 1 – KG 2):* Structured phonics, numeracy, creative arts, and confidence building for primary entry.
4. **Primary School** *(Class 1 – Class 6):* Foundational mastery in Mathematics, English, Integrated Science, Computing, and Creative Arts.
5. **Junior High School (JHS)** *(JHS 1 – JHS 3):* Rigorous STEM preparation, critical inquiry, leadership development, and intensive BECE coaching.

---

## 🏛 Dedicated About Page & Governance

Clicking **"LEARN MORE ABOUT US"** or **"ABOUT US"** navigates to `about.html`, featuring:

- **Mission:** Providing holistic, high-quality, and disciplined basic education that unlocks every child's inborn potential for lifelong impact and global citizenship.
- **Vision:** To be the premier basic educational institution of choice in the Ashanti Region and Ghana.
- **Motto Philosophy:** *"Life Is What You Make It"* — empowering learners to forge purposeful futures through diligence and character.
- **Core Values:** Discipline, Academic Excellence, Integrity, Creative Inquiry, Respect, and Leadership.
- **32-Year Heritage Timeline:** Tracing milestones from 1992 foundation to modern complex.
- **Comprehensive School Policies & Code of Conduct:**
  1. *Student Code of Conduct & Positive Discipline*
  2. *Academic Standards & Assessment Protocols*
  3. *School Uniform & Grooming Policy*
  4. *Child Safeguarding, Health & Campus Safety*
  5. *Technology, Computing Lab & Digital Device Policy*
  6. *Parent-School Partnership & PTA Communication*

---

## 🔍 SEO, AEO & GEO Architecture

### 1. Traditional SEO (Search Engine Optimization)
- Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- Strict single `<h1>` hierarchy per document.
- Descriptive meta titles, meta descriptions, and keyword tags.
- Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags for rich social sharing.
- `sitemap.xml` and `robots.txt` configuration.

### 2. AEO (Answer Engine Optimization)
- Structured, concise Q&A answers designed for conversational AI answer engines (Google Search Generative Experience / AI Overviews, Perplexity, Gemini, ChatGPT).
- Direct entity definitions for Pinamang Educational Complex, Konongo, PINAECO, and admission criteria.

### 3. GEO (Generative Engine Optimization & Local Search)
- **Geographic Tags:**
  - `geo.region`: `GH-AH` (Ghana, Ashanti Region)
  - `geo.placename`: `Konongo-Ahyiaem`
  - `geo.position` & `ICBM`: `6.6167, -1.2167`
- **Schema.org JSON-LD Knowledge Graph:**
  - Linked entities for `School`, `EducationalOrganization`, `AboutPage`, and `PostalAddress`.
  - Rich properties including `slogan`, `foundingDate`, `address`, `telephone`, and `geo`.

---

## 📝 Enhanced Admissions Portal

The online admission system gathers comprehensive applicant details structured across 4 clear sections:

1. **Student Personal Information:** Full legal name, date of birth, gender, nationality, primary spoken language, grade applied for, and previous school attended.
2. **Parent / Primary Guardian Details:** Full name, relationship, primary phone, WhatsApp number, email, GhanaPost GPS digital address, occupation, and residential address in Konongo / Ashanti Region.
3. **Emergency & Medical Information:** Emergency contact person & phone, blood group, allergies, dietary constraints, and medical notes.
4. **Document Checklist & Declaration:** Checkbox confirmation for Birth Certificate / Weighing Card, Passport Photos, Terminal Reports, Immunization Records, and signed disciplinary agreement.

---

## 📂 Project Architecture & File Structure

```
Pinamang/
├── index.html                   # Main landing page with full interactive layout
├── about.html                   # Dedicated About page (Mission, Vision, Policies, History)
├── styles.css                   # Master stylesheet & custom design system
├── app.js                       # Interactive modal engine, validation & counter animations
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap with page and image metadata
├── README.md                    # Comprehensive documentation
└── assets/
    └── images/
        ├── pinamang_logo.png    # Official Pinamang Educational Complex crest logo
        ├── hero_students.jpg    # Authentic hero student photo in PIMACO uniform
        └── campus_building.jpg  # Students & faculty in front of campus building
```

---

## 💻 Local Setup & Running

1. **Clone or navigate to the workspace directory:**
   ```bash
   cd c:/Users/demiurge/Desktop/workspace/Pinamang
   ```

2. **Serve locally using Python or Node.js:**
   ```bash
   # Using Python 3
   python -m http.server 3000

   # Or using Node.js npx
   npx serve -l 3000
   ```

3. **Open in browser:**
   ```
   http://localhost:3000/
   ```

---

## 📍 Contact & Official Coordinates

- **Address:** P. O. Box 19, Konongo-Ahyiaem, Ashanti Region, Ghana
- **Phone:** `+233 (0) 24 815 3394` / `0248153394`
- **Email:** `pinamangeducomplex@gmail.com`
- **School Portal:** `pinamang.schoolvault.school`
- **Motto:** *"Life Is What You Make It"*

---
*© 2026 Pinamang Educational Complex (PINAECO). All Rights Reserved.*
