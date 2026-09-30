// // "use client";

// // import { useEffect, useState } from "react";

// // const socials = {
// //   github: "https://github.com/mahrougfadoua",
// //   linkedin: "https://www.linkedin.com/in/fadouamahroug/",
// //   kaggle: "https://www.kaggle.com/fadouamahroug",
// // };

// // const floatingIcons = ["🧠", "💻", "💾", "📊", "🐍", "👁️", "🤖", "📷", "⚡"];

// // const experiences = [
// //   {
// //     year: "2025",
// //     role: "Technical Assistant",
// //     place: "2nd CGEL Medical Conference",
// //     description:
// //       "Provided technical support and helped manage audiovisual and digital requirements during the medical conference.",
// //     icon: "🎥",
// //   },
// //   {
// //     year: "2025",
// //     role: "Event Organizer",
// //     place: "2nd PNR Scientific Days",
// //     description:
// //       "Contributed to event organization, coordination and technical preparation for a scientific research event.",
// //     icon: "🎤",
// //   },
// //   {
// //     year: "2025",
// //     role: "Marketing Manager",
// //     place: "Student & Scientific Activities",
// //     description:
// //       "Worked on communication, promotion and coordination of activities and events.",
// //     icon: "📣",
// //   },
// // ];

// // const projects = [
// //   {
// //     number: "01",
// //     title: "GastroNeXia",
// //     category: "Clinical AI for GI Endoscopy",
// //     description:
// //       "An AI-powered diagnostic support system for gastrointestinal endoscopy, combining real-time detection, segmentation, classification and explainable AI.",
// //     tags: ["AI", "Computer Vision", "YOLO", "Deep Learning"],
// //     images: ["/image1.jpg", "/image1-2.jpg"],
// //     accent: "blue",
// //     featured: true,
// //   },
// //   {
// //     number: "02",
// //     title: "SAWTNA",
// //     category: "Arabic NLP & Emotion Analysis",
// //     description:
// //       "An Arabic sports sentiment and emotion analysis platform using modern NLP techniques and transformer-based models.",
// //     tags: ["NLP", "MarBERT", "BERTopic", "Streamlit"],
// //     images: ["/image2.jpg", "/image2-2.jpg"],
// //     accent: "mint",
// //   },
// //   {
// //     number: "03",
// //     title: "Agri Challenge",
// //     category: "AI for Agriculture",
// //     description:
// //       "An AI-oriented solution developed as part of an agricultural innovation challenge.",
// //     tags: ["AI", "Data", "Innovation"],
// //     images: ["/image3.jpg", "/image3-2.jpg", "/image3-3.jpg"],
// //     accent: "yellow",
// //   },
// //   {
// //     number: "04",
// //     title: "Scratch Programming Instructor",
// //     category: "Teaching & Education",
// //     description:
// //       "Introduced young learners to programming and computational thinking through creative Scratch projects.",
// //     tags: ["Scratch", "Teaching", "Programming"],
// //     images: ["/image4.jpg", "/image4-2.jpg", "/image4-3.jpg"],
// //     accent: "yellow",
// //     sticker: "✦ TEACHING",
// //   },
// //   {
// //     number: "05",
// //     title: "Captain Trend",
// //     category: "Data & Digital Project",
// //     description:
// //       "A digital project exploring trends, content and data-driven ideas.",
// //     tags: ["Data", "Web", "Digital"],
// //     images: ["/image5.jpg"],
// //     accent: "purple",
// //   },
// //   {
// //     number: "06",
// //     title: "Wireless IoT Weather Monitor",
// //     category: "IoT & Embedded Systems",
// //     description:
// //       "A wireless weather monitoring system using environmental sensors and an ESP8266 microcontroller.",
// //     tags: ["IoT", "ESP8266", "Sensors"],
// //     images: [],
// //     accent: "orange",
// //     emoji: "🌦️",
// //   },
// //   {
// //     number: "07",
// //     title: "Mouth Recognition System",
// //     category: "Computer Vision",
// //     description:
// //       "A computer vision project focused on recognizing mouth-related visual patterns using deep learning.",
// //     tags: ["Computer Vision", "CNN", "TensorFlow"],
// //     images: [],
// //     accent: "pink",
// //     emoji: "👄",
// //   },
// // ];

// // const skills = [
// //   { name: "Python", icon: "🐍", color: "yellow" },
// //   { name: "Machine Learning", icon: "🧠", color: "blue" },
// //   { name: "Deep Learning", icon: "🤖", color: "purple" },
// //   { name: "Computer Vision", icon: "👁️", color: "mint" },
// //   { name: "NLP", icon: "💬", color: "pink" },
// //   { name: "TensorFlow / Keras", icon: "🔶", color: "orange" },
// //   { name: "PyTorch", icon: "🔥", color: "yellow" },
// //   { name: "Next.js", icon: "▲", color: "blue" },
// //   { name: "FastAPI", icon: "⚡", color: "mint" },
// //   { name: "PostgreSQL", icon: "🐘", color: "purple" },
// //   { name: "Flutter", icon: "📱", color: "blue" },
// //   { name: "Dart", icon: "🎯", color: "yellow" },
// //   { name: "Firebase", icon: "🔥", color: "orange" },
// //   { name: "IoT", icon: "📡", color: "pink" },
// // ];

// // const navItems = [
// //   { label: "About", href: "#about" },
// //   { label: "Experience", href: "#experience" },
// //   { label: "Projects", href: "#projects" },
// //   { label: "Skills", href: "#skills" },
// //   { label: "Journey", href: "#journey" },
// //   { label: "Contact", href: "#contact" },
// // ];

// // function FloatingIcons() {
// //   return (
// //     <div className="floating-icons" aria-hidden="true">
// //       {floatingIcons.map((icon, index) => (
// //         <span
// //           key={`${icon}-${index}`}
// //           className={`floating-icon floating-icon-${index + 1}`}
// //         >
// //           {icon}
// //         </span>
// //       ))}
// //     </div>
// //   );
// // }

// // function Reveal({
// //   children,
// //   className = "",
// // }: {
// //   children: React.ReactNode;
// //   className?: string;
// // }) {
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.08 }
// //     );

// //     const elements = document.querySelectorAll(".reveal-target");

// //     elements.forEach((element) => observer.observe(element));

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className={`reveal-target ${visible ? "is-visible" : ""} ${className}`}>
// //       {children}
// //     </div>
// //   );
// // }

// // function ProjectGallery({
// //   images,
// //   title,
// //   emoji,
// // }: {
// //   images: string[];
// //   title: string;
// //   emoji?: string;
// // }) {
// //   if (!images.length) {
// //     return (
// //       <div className="emoji-project">
// //         <div className="emoji-sticker">
// //           <span>{emoji}</span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const galleryClass =
// //     images.length >= 3
// //       ? "gallery-3"
// //       : images.length === 2
// //         ? "gallery-2"
// //         : "gallery-1";

// //   return (
// //     <div className={`project-gallery ${galleryClass}`}>
// //       {images.map((image, index) => (
// //         <div className={`gallery-sticker sticker-${index + 1}`} key={image}>
// //           <div className="sticker-frame">
// //             <img src={image} alt={`${title} preview ${index + 1}`} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // function ProjectCard({
// //   project,
// // }: {
// //   project: (typeof projects)[number];
// // }) {
// //   return (
// //     <article
// //       className={`project-card ${project.featured ? "project-featured" : ""}`}
// //     >
// //       <div
// //         className={`project-image-wrap accent-${project.accent} ${
// //           project.featured ? "project-image-featured" : ""
// //         }`}
// //       >
// //         <ProjectGallery
// //           images={project.images}
// //           title={project.title}
// //           emoji={project.emoji}
// //         />

// //         <span className="project-number">{project.number}</span>

// //         {project.sticker && (
// //           <span className="project-sticker">{project.sticker}</span>
// //         )}
// //       </div>

// //       <div className="project-content">
// //         <div className="project-heading">
// //           <div>
// //             <span className="project-category">{project.category}</span>
// //             <h3>{project.title}</h3>
// //           </div>

// //           <span className="project-arrow">↗</span>
// //         </div>

// //         <p>{project.description}</p>

// //         <div className="project-tags">
// //           {project.tags.map((tag) => (
// //             <span key={tag}>{tag}</span>
// //           ))}
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <main>
// //       <FloatingIcons />

// //       <nav className="navbar">
// //         <a href="#" className="logo">
// //           FM<span>.</span>
// //         </a>

// //         <div className="nav-links">
// //           {navItems.map((item) => (
// //             <a key={item.href} href={item.href}>
// //               {item.label}
// //             </a>
// //           ))}
// //         </div>

// //         <a href="#contact" className="nav-contact">
// //           Let&apos;s talk <span>↗</span>
// //         </a>
// //       </nav>

// //       {/* HERO */}
// //       <section className="hero" id="about">
// //         <div className="hero-content">
// //           <div className="hero-small">
// //             <span className="status-dot" />
// //             Available for opportunities
// //           </div>

// //           <h1>
// //             Artificial Intelligence
// //             <br />
// //             <span>&amp; Data Science</span>
// //           </h1>

// //           <p className="hero-description">
// //             I&apos;m Fadoua — an AI &amp; Data Science graduate who loves
// //             turning ideas, data and technology into useful digital experiences.
// //           </p>

// //           <div className="hero-actions">
// //             <a href="#projects" className="primary-btn">
// //               Explore my work <span>↓</span>
// //             </a>

// //             <a href="#contact" className="secondary-btn">
// //               Get in touch <span>↗</span>
// //             </a>
// //           </div>
// //         </div>

// //         <div className="hero-photo-area">
// //           <div className="photo-decoration photo-decoration-one" />
// //           <div className="photo-decoration photo-decoration-two" />

// //           <div className="hero-photo-frame">
// //             <img src="/me.png" alt="Fadoua Mahroug" />
// //           </div>

// //           <div className="photo-caption">
// //             <span>AI • DATA • CREATIVE TECH</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* STRIP */}
// //       <section className="intro-strip">
// //         <div>CURIOUS MIND</div>
// //         <span>✦</span>
// //         <div>AI ENTHUSIAST</div>
// //         <span>✦</span>
// //         <div>DATA EXPLORER</div>
// //         <span>✦</span>
// //         <div>CREATIVE BUILDER</div>
// //       </section>

// //       {/* EXPERIENCE */}
// //       <section className="section experience-section" id="experience">
// //         <Reveal>
// //           <div className="section-header">
// //             <span className="section-label">02 / EXPERIENCE</span>

// //             <h2>
// //               Things I&apos;ve
// //               <br />
// //               <span>been part of.</span>
// //             </h2>
// //           </div>
// //         </Reveal>

// //         <div className="experience-list">
// //           {experiences.map((experience, index) => (
// //             <Reveal key={experience.role}>
// //               <div className="experience-item">
// //                 <div className="experience-year">{experience.year}</div>

// //                 <div className="experience-icon">{experience.icon}</div>

// //                 <div className="experience-main">
// //                   <h3>{experience.role}</h3>
// //                   <h4>{experience.place}</h4>
// //                   <p>{experience.description}</p>
// //                 </div>

// //                 <div className="experience-index">
// //                   0{index + 1}
// //                 </div>
// //               </div>
// //             </Reveal>
// //           ))}
// //         </div>
// //       </section>

// //       {/* PROJECTS */}
// //       <section className="projects-section" id="projects">
// //         <div className="projects-inner">
// //           <Reveal>
// //             <div className="section-header projects-header">
// //               <span className="section-label">03 / SELECTED WORK</span>

// //               <h2>
// //                 Built,
// //                 <br />
// //                 <span>tested &amp; learned.</span>
// //               </h2>

// //               <p>
// //                 A collection of projects where I explored AI, data, software,
// //                 teaching and everything in between.
// //               </p>
// //             </div>
// //           </Reveal>

// //           <div className="projects-grid">
// //             {projects.map((project) => (
// //               <Reveal key={project.title}>
// //                 <ProjectCard project={project} />
// //               </Reveal>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* SKILLS — ORIGINAL SMALL COLORFUL DESIGN */}
// //       <section className="section skills-section" id="skills">
// //         <Reveal>
// //           <div className="section-header">
// //             <span className="section-label">04 / TOOLBOX</span>

// //             <h2>
// //               Things I
// //               <br />
// //               <span>work with.</span>
// //             </h2>
// //           </div>
// //         </Reveal>

// //         <div className="skills-cloud">
// //           {skills.map((skill) => (
// //             <div
// //               className={`skill-pill skill-${skill.color}`}
// //               key={skill.name}
// //             >
// //               <span className="skill-icon">{skill.icon}</span>
// //               <span className="skill-name">{skill.name}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* JOURNEY — LIGHT ORIGINAL STYLE */}
// //       <section className="journey-section" id="journey">
// //         <div className="journey-inner">
// //           <Reveal>
// //             <span className="section-label">05 / JOURNEY</span>

// //             <h2>
// //               Still learning.
// //               <br />
// //               <span>Always building.</span>
// //             </h2>

// //             <p>
// //               My journey is about experimenting, building real projects,
// //               learning from challenges and finding better ways to turn
// //               technology into something useful.
// //             </p>
// //           </Reveal>

// //           <Reveal className="journey-side">
// //             <div className="journey-card journey-card-one">
// //               <span>01</span>
// //               <strong>Learn</strong>
// //               <p>Explore new ideas, tools and technologies.</p>
// //             </div>

// //             <div className="journey-card journey-card-two">
// //               <span>02</span>
// //               <strong>Build</strong>
// //               <p>Turn what I learn into real projects.</p>
// //             </div>

// //             <div className="journey-card journey-card-three">
// //               <span>03</span>
// //               <strong>Grow</strong>
// //               <p>Improve through every experiment and challenge.</p>
// //             </div>
// //           </Reveal>
// //         </div>
// //       </section>

// //       {/* CONTACT */}
// // <section className="contact section" id="contact">
// //   <div className="container">
// //     <div className="contact-card">
// //       <div className="contact-floating">👋</div>

// //       <span className="eyebrow">LET&apos;S CONNECT</span>

// //       <h2>
// //         Got an idea?
// //         <br />
// //         <span>Let&apos;s build it.</span>
// //       </h2>

// //       <p>
// //         Open to internships, junior AI/Data opportunities,
// //         collaborations and projects where I can learn, contribute and
// //         build useful things.
// //       </p>

// //       <a
// //         className="email"
// //         href="mailto:fadoua.mahroug@univ-constantine2.dz"
// //       >
// //         fadoua.mahroug@univ-constantine2.dz <span>↗</span>
// //       </a>

// //       <div className="socials">
// //         <a
// //           href={socials.github}
// //           target="_blank"
// //           rel="noreferrer"
// //         >
// //           GitHub ↗
// //         </a>

// //         <a
// //           href={socials.linkedin}
// //           target="_blank"
// //           rel="noreferrer"
// //         >
// //           LinkedIn ↗
// //         </a>

// //         <a
// //           href={socials.kaggle}
// //           target="_blank"
// //           rel="noreferrer"
// //         >
// //           Kaggle ↗
// //         </a>
// //       </div>
// //     </div>
// //   </div>
// // </section>
// //     </main>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";

// const socials = {
//   github: "https://github.com/mahrougfadoua",
//   linkedin: "https://www.linkedin.com/in/fadouamahroug/",
//   kaggle: "https://www.kaggle.com/fadouamahroug",
// };

// const floatingIcons = ["🧠", "💻", "💾", "📊", "🐍", "👁️", "🤖", "📷", "⚡"];

// const experiences = [
//   {
//     year: "2025",
//     role: "Technical Assistant",
//     place: "2nd CGEL Medical Conference",
//     description:
//       "Provided technical support and helped manage audiovisual and digital requirements during the medical conference.",
//     icon: "🎥",
//   },
//   {
//     year: "2025",
//     role: "Event Organizer",
//     place: "2nd PNR Scientific Days",
//     description:
//       "Contributed to event organization, coordination and technical preparation for a scientific research event.",
//     icon: "🎤",
//   },
//   {
//     year: "2025",
//     role: "Marketing Manager",
//     place: "Student & Scientific Activities",
//     description:
//       "Worked on communication, promotion and coordination of activities and events.",
//     icon: "📣",
//   },
// ];

// const projects = [
//   {
//     number: "01",
//     title: "GastroNeXia",
//     category: "Clinical AI for GI Endoscopy",
//     description:
//       "An AI-powered diagnostic support system for gastrointestinal endoscopy, combining real-time detection, segmentation, classification and explainable AI.",
//     tags: ["AI", "Computer Vision", "YOLO", "Deep Learning"],
//     images: ["/image1.jpg", "/image1-2.jpg"],
//     accent: "blue",
//     featured: true,
//   },
//   {
//     number: "02",
//     title: "SAWTNA",
//     category: "Arabic NLP & Emotion Analysis",
//     description:
//       "An Arabic sports sentiment and emotion analysis platform using modern NLP techniques and transformer-based models.",
//     tags: ["NLP", "MarBERT", "BERTopic", "Streamlit"],
//     images: ["/image2.jpg", "/image2-2.jpg"],
//     accent: "mint",
//   },
//   {
//     number: "03",
//     title: "Agri Challenge",
//     category: "AI for Agriculture",
//     description:
//       "An AI-oriented solution developed as part of an agricultural innovation challenge.",
//     tags: ["AI", "Data", "Innovation"],
//     images: ["/image3.jpg", "/image3-2.jpg", "/image3-3.jpg"],
//     accent: "yellow",
//   },
//   {
//     number: "04",
//     title: "Scratch Programming Instructor",
//     category: "Teaching & Education",
//     description:
//       "Introduced young learners to programming and computational thinking through creative Scratch projects.",
//     tags: ["Scratch", "Teaching", "Programming"],
//     images: ["/image4.jpg", "/image4-2.jpg", "/image4-3.jpg"],
//     accent: "yellow",
//     sticker: "✦ TEACHING",
//   },
//   {
//     number: "05",
//     title: "Captain Trend",
//     category: "Data & Digital Project",
//     description:
//       "A digital project exploring trends, content and data-driven ideas.",
//     tags: ["Data", "Web", "Digital"],
//     images: ["/image5.jpg"],
//     accent: "purple",
//   },
//   {
//     number: "06",
//     title: "Wireless IoT Weather Monitor",
//     category: "IoT & Embedded Systems",
//     description:
//       "A wireless weather monitoring system using environmental sensors and an ESP8266 microcontroller.",
//     tags: ["IoT", "ESP8266", "Sensors"],
//     images: [],
//     accent: "orange",
//     emoji: "🌦️",
//   },
//   {
//     number: "07",
//     title: "Mouth Recognition System",
//     category: "Computer Vision",
//     description:
//       "A computer vision project focused on recognizing mouth-related visual patterns using deep learning.",
//     tags: ["Computer Vision", "CNN", "TensorFlow"],
//     images: [],
//     accent: "pink",
//     emoji: "👄",
//   },
// ];

// const skills = [
//   { name: "Python", icon: "🐍", color: "yellow" },
//   { name: "Machine Learning", icon: "🧠", color: "blue" },
//   { name: "Deep Learning", icon: "🤖", color: "purple" },
//   { name: "Computer Vision", icon: "👁️", color: "mint" },
//   { name: "NLP", icon: "💬", color: "pink" },
//   { name: "TensorFlow / Keras", icon: "🔶", color: "orange" },
//   { name: "PyTorch", icon: "🔥", color: "yellow" },
//   { name: "Next.js", icon: "▲", color: "blue" },
//   { name: "FastAPI", icon: "⚡", color: "mint" },
//   { name: "PostgreSQL", icon: "🐘", color: "purple" },
//   { name: "Flutter", icon: "📱", color: "blue" },
//   { name: "Dart", icon: "🎯", color: "yellow" },
//   { name: "Firebase", icon: "🔥", color: "orange" },
//   { name: "IoT", icon: "📡", color: "pink" },
// ];

// const navItems = [
//   { label: "About", href: "#about" },
//   { label: "Experience", href: "#experience" },
//   { label: "Projects", href: "#projects" },
//   { label: "Skills", href: "#skills" },
//   { label: "Journey", href: "#journey" },
//   { label: "Contact", href: "#contact" },
// ];

// function FloatingIcons() {
//   return (
//     <div className="floating-icons" aria-hidden="true">
//       {floatingIcons.map((icon, index) => (
//         <span
//           key={`${icon}-${index}`}
//           className={`floating-icon floating-icon-${index + 1}`}
//         >
//           {icon}
//         </span>
//       ))}
//     </div>
//   );
// }

// function Reveal({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.08 }
//     );

//     const elements = document.querySelectorAll(".reveal-target");

//     elements.forEach((element) => observer.observe(element));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       className={`reveal-target ${visible ? "is-visible" : ""} ${className}`}
//     >
//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    PROJECT GALLERY
//    Images are NEVER cropped.
//    Every project gets the same visual area.
// ========================================================= */

// function ProjectGallery({
//   images,
//   title,
//   emoji,
// }: {
//   images: string[];
//   title: string;
//   emoji?: string;
// }) {
//   if (!images.length) {
//     return (
//       <div className="project-visual project-visual-empty">
//         <div className="project-empty-content">
//           <span className="project-empty-emoji">{emoji}</span>

//           <span className="project-empty-label">
//             Project visual
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="project-carousel">
//       <div className="project-carousel-scroll">
//         <div className="project-carousel-track">
//           {images.map((image, index) => (
//             <div
//               className="project-carousel-slide"
//               key={image}
//             >
//               <img
//                 src={image}
//                 alt={`${title} preview ${index + 1}`}
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {images.length > 1 && (
//         <div className="project-carousel-dots">
//           {images.map((image, index) => (
//             <span
//               key={image}
//               className={`project-carousel-dot ${
//                 index === 0 ? "active" : ""
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function ProjectCard({
//   project,
// }: {
//   project: (typeof projects)[number];
// }) {
//   return (
//     <article
//       className={`project-card-clean ${
//         project.featured ? "project-card-featured" : ""
//       }`}
//     >
//       <div
//         className={`project-card-top accent-${project.accent}`}
//       >
//         <ProjectGallery
//           images={project.images}
//           title={project.title}
//           emoji={project.emoji}
//         />

//         <span className="project-number-clean">
//           {project.number}
//         </span>

//         {project.sticker && (
//           <span className="project-sticker-clean">
//             {project.sticker}
//           </span>
//         )}

//         <span className="project-image-arrow">↗</span>
//       </div>

//       <div className="project-card-info">
//         <div className="project-card-heading">
//           <div>
//             <span className="project-category-clean">
//               {project.category}
//             </span>

//             <h3>{project.title}</h3>
//           </div>

//           <span className="project-index-dot" />
//         </div>

//         <p>{project.description}</p>

//         <div className="project-tags-clean">
//           {project.tags.map((tag) => (
//             <span key={tag}>{tag}</span>
//           ))}
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function Home() {
//   return (
//     <main>
//       <FloatingIcons />

//       <nav className="navbar">
//         <a href="#" className="logo">
//           FM<span>.</span>
//         </a>

//         <div className="nav-links">
//           {navItems.map((item) => (
//             <a key={item.href} href={item.href}>
//               {item.label}
//             </a>
//           ))}
//         </div>

//         <a href="#contact" className="nav-contact">
//           Let&apos;s talk <span>↗</span>
//         </a>
//       </nav>

//       {/* HERO */}
//       <section className="hero" id="about">
//         <div className="hero-content">
//           <div className="hero-small">
//             <span className="status-dot" />
//             Available for opportunities
//           </div>

//           <h1>
//             Artificial Intelligence
//             <br />
//             <span>&amp; Data Science</span>
//           </h1>

//           <p className="hero-description">
//             I&apos;m Fadoua — an AI &amp; Data Science graduate who loves
//             turning ideas, data and technology into useful digital experiences.
//           </p>

//           <div className="hero-actions">
//             <a href="#projects" className="primary-btn">
//               Explore my work <span>↓</span>
//             </a>

//             <a href="#contact" className="secondary-btn">
//               Get in touch <span>↗</span>
//             </a>
//           </div>
//         </div>

//         <div className="hero-photo-area">
//           <div className="photo-decoration photo-decoration-one" />
//           <div className="photo-decoration photo-decoration-two" />

//           <div className="hero-photo-frame">
//             <img src="/me.png" alt="Fadoua Mahroug" />
//           </div>

//           <div className="photo-caption">
//             <span>AI • DATA • CREATIVE TECH</span>
//           </div>
//         </div>
//       </section>

//       {/* STRIP */}
//       <section className="intro-strip">
//         <div>CURIOUS MIND</div>
//         <span>✦</span>
//         <div>AI ENTHUSIAST</div>
//         <span>✦</span>
//         <div>DATA EXPLORER</div>
//         <span>✦</span>
//         <div>CREATIVE BUILDER</div>
//       </section>

//       {/* EXPERIENCE */}
//       <section className="section experience-section" id="experience">
//         <Reveal>
//           <div className="section-header">
//             <span className="section-label">02 / EXPERIENCE</span>

//             <h2>
//               Things I&apos;ve
//               <br />
//               <span>been part of.</span>
//             </h2>
//           </div>
//         </Reveal>

//         <div className="experience-list">
//           {experiences.map((experience, index) => (
//             <Reveal key={experience.role}>
//               <div className="experience-item">
//                 <div className="experience-year">
//                   {experience.year}
//                 </div>

//                 <div className="experience-icon">
//                   {experience.icon}
//                 </div>

//                 <div className="experience-main">
//                   <h3>{experience.role}</h3>
//                   <h4>{experience.place}</h4>
//                   <p>{experience.description}</p>
//                 </div>

//                 <div className="experience-index">
//                   0{index + 1}
//                 </div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* =====================================================
//           PROJECTS — ONLY THIS SECTION HAS BEEN REDESIGNED
//       ====================================================== */}

//       <section className="projects-section" id="projects">
//         <div className="projects-inner">
//           <Reveal>
//             <div className="section-header projects-header">
//               <span className="section-label">
//                 03 / SELECTED WORK
//               </span>

//               <h2>
//                 Built,
//                 <br />
//                 <span>tested &amp; learned.</span>
//               </h2>

//               <p>
//                 A collection of projects where I explored AI, data,
//                 software, teaching and everything in between.
//               </p>
//             </div>
//           </Reveal>

//           <div className="projects-grid-clean">
//             {projects.map((project) => (
//               <Reveal key={project.title}>
//                 <ProjectCard project={project} />
//               </Reveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS */}
//       <section className="section skills-section" id="skills">
//         <Reveal>
//           <div className="section-header">
//             <span className="section-label">04 / TOOLBOX</span>

//             <h2>
//               Things I
//               <br />
//               <span>work with.</span>
//             </h2>
//           </div>
//         </Reveal>

//         <div className="skills-cloud">
//           {skills.map((skill) => (
//             <div
//               className={`skill-pill skill-${skill.color}`}
//               key={skill.name}
//             >
//               <span className="skill-icon">{skill.icon}</span>
//               <span className="skill-name">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* JOURNEY */}
//       <section className="journey-section" id="journey">
//         <div className="journey-inner">
//           <Reveal>
//             <span className="section-label">05 / JOURNEY</span>

//             <h2>
//               Still learning.
//               <br />
//               <span>Always building.</span>
//             </h2>

//             <p>
//               My journey is about experimenting, building real projects,
//               learning from challenges and finding better ways to turn
//               technology into something useful.
//             </p>
//           </Reveal>

//           <Reveal className="journey-side">
//             <div className="journey-card journey-card-one">
//               <span>01</span>
//               <strong>Learn</strong>
//               <p>Explore new ideas, tools and technologies.</p>
//             </div>

//             <div className="journey-card journey-card-two">
//               <span>02</span>
//               <strong>Build</strong>
//               <p>Turn what I learn into real projects.</p>
//             </div>

//             <div className="journey-card journey-card-three">
//               <span>03</span>
//               <strong>Grow</strong>
//               <p>Improve through every experiment and challenge.</p>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="contact section" id="contact">
//         <div className="container">
//           <div className="contact-card">
//             <div className="contact-floating">👋</div>

//             <span className="eyebrow">LET&apos;S CONNECT</span>

//             <h2>
//               Got an idea?
//               <br />
//               <span>Let&apos;s build it.</span>
//             </h2>

//             <p>
//               Open to internships, junior AI/Data opportunities,
//               collaborations and projects where I can learn, contribute
//               and build useful things.
//             </p>

//             <a
//               className="email"
//               href="mailto:fadoua.mahroug@univ-constantine2.dz"
//             >
//               fadoua.mahroug@univ-constantine2.dz <span>↗</span>
//             </a>

//             <div className="socials">
//               <a
//                 href={socials.github}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 GitHub ↗
//               </a>

//               <a
//                 href={socials.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 LinkedIn ↗
//               </a>

//               <a
//                 href={socials.kaggle}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Kaggle ↗
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

const socials = {
  github: "https://github.com/mahrougfadoua",
  linkedin: "https://www.linkedin.com/in/fadouamahroug/",
  kaggle: "https://www.kaggle.com/fadouamahroug",
};

const floatingIcons = ["🧠", "💻", "💾", "📊", "🐍", "👁️", "🤖", "📷", "⚡"];

const experiences = [
  {
    year: "2025",
    role: "Technical Assistant",
    place: "2nd CGEL Medical Conference",
    description:
      "Provided technical support and helped manage audiovisual and digital requirements during the medical conference.",
    icon: "👩🏻‍💻",
  },
  {
    year: "2025",
    role: "Event Organizer",
    place: "2nd PNR Scientific Days",
    description:
      "Contributed to event organization, coordination and technical preparation for a scientific research event.",
    icon: "⚙️",
  },
  {
    year: "2025",
    role: "Marketing Manager",
    place: "Student & Scientific Activities",
    description:
      "Worked on communication, promotion and coordination of activities and events.",
    icon: "📣",
  },
];

const projects = [
  {
    number: "01",
    title: "GastroNeXia",
    category: "Clinical AI for GI Endoscopy",
    description:
      "An AI-powered diagnostic support system for gastrointestinal endoscopy, combining real-time detection, segmentation, classification and explainable AI.",
    tags: ["AI", "Computer Vision", "YOLO", "Deep Learning"],
    images: ["/image1.jpg", "/image1-2.jpg"],
    accent: "blue",
    featured: true,
  },
  {
    number: "02",
    title: "SAWTNA",
    category: "Arabic NLP & Emotion Analysis",
    description:
      "An Arabic sports sentiment and emotion analysis platform using modern NLP techniques and transformer-based models.",
    tags: ["NLP", "MarBERT", "BERTopic", "Streamlit"],
    images: ["/image2.jpg", "/image2-2.jpg"],
    accent: "mint",
  },
  {
    number: "03",
    title: "Agri Challenge",
    category: "AI for Agriculture",
    description:
      "An AI-oriented solution developed as part of an agricultural innovation challenge.",
    tags: ["AI", "Data", "Innovation"],
    images: ["/image3.jpg", "/image3-2.jpg", "/image3-3.jpg"],
    accent: "yellow",
  },
  {
    number: "04",
    title: "Scratch Programming Instructor",
    category: "Teaching & Education",
    description:
      "Introduced young learners to programming and computational thinking through creative Scratch projects.",
    tags: ["Scratch", "Teaching", "Programming"],
    images: ["/image4.jpg", "/image4-2.jpg", "/image4-3.jpg"],
    accent: "yellow",
    sticker: "✦ TEACHING",
  },
  {
    number: "05",
    title: "Captain Trend",
    category: "Data & Digital Project",
    description:
      "A digital project exploring trends, content and data-driven ideas.",
    tags: ["Data", "Web", "Digital"],
    images: ["/image5.jpg"],
    accent: "purple",
  },
  {
    number: "06",
    title: "Wireless IoT Weather Monitor",
    category: "IoT & Embedded Systems",
    description:
      "A wireless weather monitoring system using environmental sensors and an ESP8266 microcontroller.",
    tags: ["IoT", "ESP8266", "Sensors"],
    images: [],
    accent: "orange",
    emoji: "🌦️",
  },
  {
    number: "07",
    title: "Mouth Recognition System",
    category: "Computer Vision",
    description:
      "A computer vision project focused on recognizing mouth-related visual patterns using deep learning.",
    tags: ["Computer Vision", "CNN", "TensorFlow"],
    images: [],
    accent: "pink",
    emoji: "🤖",
  },
  {
    number: "08",
    title: "Chariot Vert",
    category: "Mobile App & Backend",
    description:
      "A supermarket mobile app developed for a client, with product browsing, promotions, favorites and a shopping cart, powered by a Spring Boot REST API and a PostgreSQL database.",
    tags: ["Flutter", "Spring Boot", "PostgreSQL", "Mobile"],
    images: [],
    accent: "mint",
    emoji: "🛒",
  },
];

const skills = [
  { name: "Python", icon: "🐍", color: "yellow" },
  { name: "Machine Learning", icon: "🧠", color: "blue" },
  { name: "Deep Learning", icon: "🤖", color: "purple" },
  { name: "Computer Vision", icon: "👁️", color: "mint" },
  { name: "NLP", icon: "💬", color: "pink" },
  { name: "TensorFlow / Keras", icon: "🔶", color: "orange" },
  { name: "PyTorch", icon: "🔥", color: "yellow" },
  { name: "Next.js", icon: "▲", color: "blue" },
  { name: "FastAPI", icon: "⚡", color: "mint" },
  { name: "PostgreSQL", icon: "🐘", color: "purple" },
  { name: "Flutter", icon: "📱", color: "blue" },
  { name: "Dart", icon: "🎯", color: "yellow" },
  { name: "Firebase", icon: "🔥", color: "orange" },
  { name: "IoT", icon: "📡", color: "pink" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function FloatingIcons() {
  return (
    <div className="floating-icons" aria-hidden="true">
      {floatingIcons.map((icon, index) => (
        <span
          key={`${icon}-${index}`}
          className={`floating-icon floating-icon-${index + 1}`}
        >
          {icon}
        </span>
      ))}
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll(".reveal-target");

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`reveal-target ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PROJECT GALLERY
   Images are NEVER cropped.
   Scrollable: mouse drag, touch swipe, trackpad.
   Dots follow the current image.
========================================================= */

function ProjectGallery({
  images,
  title,
  emoji,
}: {
  images: string[];
  title: string;
  emoji?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });

  if (!images.length) {
    return (
      <div className="project-visual project-visual-empty">
        <div className="project-empty-content">
          <span className="project-empty-emoji">{emoji}</span>

          <span className="project-empty-label"></span>
        </div>
      </div>
    );
  }

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const startDrag = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.pageX, startLeft: el.scrollLeft };
    el.style.scrollSnapType = "none";
  };

  const moveDrag = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.startLeft - (e.pageX - drag.current.startX);
  };

  const endDrag = () => {
    const el = scrollRef.current;
    if (!el || !drag.current.down) return;
    drag.current.down = false;
    el.style.scrollSnapType = "x mandatory";
    el.scrollTo({
      left: Math.round(el.scrollLeft / el.clientWidth) * el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="project-carousel">
      <div
        className="project-carousel-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={startDrag}
        onMouseMove={moveDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        <div className="project-carousel-track">
          {images.map((image, index) => (
            <div className="project-carousel-slide" key={image}>
              <img
                src={image}
                alt={`${title} preview ${index + 1}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <div className="project-carousel-dots">
          {images.map((image, index) => (
            <span
              key={image}
              className={`project-carousel-dot ${
                index === active ? "active" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article
      className={`project-card-clean ${
        project.featured ? "project-card-featured" : ""
      }`}
    >
      <div className={`project-card-top accent-${project.accent}`}>
        <ProjectGallery
          images={project.images}
          title={project.title}
          emoji={project.emoji}
        />

        <span className="project-number-clean">{project.number}</span>

        {project.sticker && (
          <span className="project-sticker-clean">{project.sticker}</span>
        )}

        <span className="project-image-arrow">↗</span>
      </div>

      <div className="project-card-info">
        <div className="project-card-heading">
          <div>
            <span className="project-category-clean">
              {project.category}
            </span>

            <h3>{project.title}</h3>
          </div>

          <span className="project-index-dot" />
        </div>

        <p>{project.description}</p>

        <div className="project-tags-clean">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <FloatingIcons />

      <nav className="navbar">
        <a href="#" className="logo">
          FM<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a href={socials.linkedin} className="nav-contact">
          Let&apos;s talk <span>↗</span>
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="about">
        <div className="hero-content">
          <div className="hero-small">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <h1>
            Artificial Intelligence
            <br />
            <span>&amp; Data Science</span>
          </h1>

          <p className="hero-description">
            I&apos;m Fadoua — an AI &amp; Data Science graduate who loves
            turning ideas, data and technology into useful digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore my work <span>↓</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-photo-area">
          <div className="photo-decoration photo-decoration-one" />
          <div className="photo-decoration photo-decoration-two" />

          <div className="hero-photo-frame">
            <img src="/me.png" alt="Fadoua Mahroug" />
          </div>

          <div className="photo-caption">
            <span>AI • DATA • CREATIVE TECH</span>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="intro-strip">
        <div>CURIOUS MIND</div>
        <span>✦</span>
        <div>AI ENTHUSIAST</div>
        <span>✦</span>
        <div>DATA EXPLORER</div>
        <span>✦</span>
        <div>CREATIVE BUILDER</div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <Reveal>
          <div className="section-header">
            <span className="section-label">02 / EXPERIENCE</span>

            <h2>
              Things I&apos;ve
              <br />
              <span>been part of.</span>
            </h2>
          </div>
        </Reveal>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal key={experience.role}>
              <div className="experience-item">
                <div className="experience-year">{experience.year}</div>

                <div className="experience-icon">{experience.icon}</div>

                <div className="experience-main">
                  <h3>{experience.role}</h3>
                  <h4>{experience.place}</h4>
                  <p>{experience.description}</p>
                </div>

                <div className="experience-index">0{index + 1}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <div className="projects-inner">
          <Reveal>
            <div className="section-header projects-header">
              <span className="section-label">03 / SELECTED WORK</span>

              <h2>
                Built,
                <br />
                <span>tested &amp; learned.</span>
              </h2>

              <p>
                A collection of projects where I explored AI, data,
                software, teaching and everything in between.
              </p>
            </div>
          </Reveal>

          <div className="projects-grid-clean">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <Reveal>
          <div className="section-header">
            <span className="section-label">04 / TOOLBOX</span>

            <h2>
              Things I
              <br />
              <span>work with.</span>
            </h2>
          </div>
        </Reveal>

        <div className="skills-cloud">
          {skills.map((skill) => (
            <div
              className={`skill-pill skill-${skill.color}`}
              key={skill.name}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section" id="journey">
        <div className="journey-inner">
          <Reveal>
            <span className="section-label">05 / JOURNEY</span>

            <h2>
              Still learning.
              <br />
              <span>Always building.</span>
            </h2>

            <p>
              My journey is about experimenting, building real projects,
              learning from challenges and finding better ways to turn
              technology into something useful.
            </p>
          </Reveal>

          <Reveal className="journey-side">
            <div className="journey-card journey-card-one">
              <span>01</span>
              <strong>Learn</strong>
              <p>Explore new ideas, tools and technologies.</p>
            </div>

            <div className="journey-card journey-card-two">
              <span>02</span>
              <strong>Build</strong>
              <p>Turn what I learn into real projects.</p>
            </div>

            <div className="journey-card journey-card-three">
              <span>03</span>
              <strong>Grow</strong>
              <p>Improve through every experiment and challenge.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-floating"></div>

            <span className="eyebrow">LET&apos;S CONNECT</span>

            <h2>
              Got an idea?
              <br />
              <span>Let&apos;s build it.</span>
            </h2>

            <p>
              Open to internships, junior AI/Data opportunities,
              collaborations and projects where I can learn, contribute
              and build useful things.
            </p>

            <a
              className="email"
              href="mailto:fadoua.mahroug@univ-constantine2.dz"
            >
              fadoua.mahroug@univ-constantine2.dz <span>↗</span>
            </a>

            <div className="socials">
              <a href={socials.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>

              <a href={socials.kaggle} target="_blank" rel="noreferrer">
                Kaggle ↗
              </a>
            </div>
            <a
  href="/Fadoua_Mahroug_CV.pdf"
  download="Fadoua_Mahroug_CV.pdf"
  className="cv-btn"
>
  Download CV <span>↓</span>
</a>
          </div>
        </div>
      </section>
    </main>
  );
}