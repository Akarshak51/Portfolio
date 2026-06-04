export const personalInfo = {
  name: "Akarashak Mishra",
  shortName: "Akarashak",
  taglines: [
    "AI · Full Stack · Embedded",
    "Building things that matter.",
    "LangChain + FastAPI + Arduino",
    "Open to work & collaborate.",
  ],
  description:
    "Building at the crossroads of AI, full-stack systems, and embedded hardware. From neural nets to real-time circuits — I make ideas that matter, work.",
  location: "Prayagraj, India",
  email: "aveshmishra51@gmail.com",
  phone: "+91 9616624052",
  github: "https://github.com/Akarshak51",
  linkedin: "https://www.linkedin.com/in/akarashak-mishra-5a0013250",
  leetcode: "https://leetcode.com/u/Akarshak51/",
  codechef: "https://www.codechef.com/users/clear_mood_66",
  resume: "/assets/Akarashak_resume%20S.docx",
  photo: "/assets/avesh3.jpg",
  stats: [
    { num: 6, suffix: "+", label: "Projects Built" },
    { num: 5, suffix: "+", label: "Internships" },
    { num: 100, suffix: "+", label: "Students Led" },
  ],
};

export const skills = [
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    accent: "violet",
    tags: ["Python", "LangChain", "FastAPI", "Scikit-learn", "NumPy", "LLMs", "RAG", "YOLO", "OpenCV"],
    bars: [
      { label: "Python", pct: 90 },
      { label: "LangChain / FastAPI", pct: 80 },
      { label: "ML / CV / YOLO", pct: 75 },
    ],
  },
  {
    icon: "🌐",
    title: "Full Stack Web",
    accent: "cyan",
    tags: ["React", "JavaScript", "Node.js", "HTML/CSS", "REST APIs", "Vercel", "Tailwind"],
    bars: [
      { label: "React / JS", pct: 82 },
      { label: "Node / REST", pct: 75 },
      { label: "HTML / CSS", pct: 88 },
    ],
  },
  {
    icon: "🔧",
    title: "Embedded & Hardware",
    accent: "orange",
    tags: ["Arduino", "C++", "IoT", "Sensors", "EEG", "Serial", "OpenCV"],
    bars: [
      { label: "Arduino / C++", pct: 78 },
      { label: "Signal Processing", pct: 70 },
      { label: "IoT Integration", pct: 72 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PrepGrid",
    desc: "AI-powered interview preparation platform. Generates topic-wise questions, tracks progress and delivers personalized study plans using LLMs.",
    image: "/assets/Virtual-Interview-Practice.jpg",
    tags: ["React", "FastAPI", "AI", "LLM", "Vercel"],
    accent: "cyan",
    github: null,
    live: "https://prepgrid-pold.vercel.app/",
    wide: true,
  },
  {
    id: 2,
    title: "Landing Page",
    desc: "Modern, responsive landing page with smooth animations, clean UI and mobile-first design. Deployed live on Vercel.",
    image: "/assets/3d page.webp",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    accent: "orange",
    github: null,
    live: "https://landing-kappa-gilt-77.vercel.app/",
    wide: false,
  },
  {
    id: 3,
    title: "YOLO Object Detection + Voice",
    desc: "Real-time object detection using YOLOv8 with voice feedback. Detects objects via webcam and announces them aloud using text-to-speech.",
    image: "/assets/object detection.webp",
    tags: ["Python", "YOLO", "OpenCV", "TTS", "CV"],
    accent: "violet",
    github: "https://github.com/Akarshak51/YOLO-Object-Detection-Voice",
    live: null,
    wide: false,
  },
  {
    id: 4,
    title: "AI Doubt Solver",
    desc: "AI tutoring system using LangChain and FastAPI. Delivers adaptive explanations with multi-turn clarification for students.",
    image: "/assets/Screenshot 2026-02-20 174754.png",
    tags: ["Python", "FastAPI", "LangChain", "LLM"],
    accent: "orange",
    github: "https://github.com/Akarshak51/AI-Doubt-Solver",
    live: null,
    wide: false,
  },
 
  {
    id: 6,
    title: "Problem Finder App",
    desc: "Helps developers discover and track coding challenges across platforms using smart filters and quick search workflows.",
    image: "/assets/Screenshot 2026-02-20 160330.png",
    tags: ["React", "JavaScript", "Vercel", "UX"],
    accent: "lime",
    github: "https://github.com/Akarshak51/problem-finder-app",
    live: "https://problem-finder-app.vercel.app/",
    wide: false,
  },
  {
    id: 8,
    title: "EEG Fatigue Detection",
    desc: "EEG signal pipeline with ML classification for driver fatigue detection. Feature extraction with real-world brain signal validation.",
    image: "/assets/Screenshot 2025-11-12 154622.png",
    tags: ["EEG", "ML", "Python", "Signals"],
    accent: "pink",
    github: "https://github.com/Akarshak51/EEG-Fatigue-Detection-System",
    live: null,
    wide: false,
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern — Enginow",
    period: "May 2026 - Aug 2026 · Remote Internship",
    badge: "Full Stack",
    points: [
      "Built and maintained full-stack web features using React, Node.js and REST APIs.",
      "Collaborated with the product team to deliver responsive, user-facing interfaces.",
      "Integrated backend APIs with frontend components improving data flow efficiency.",
      "Worked on real-world codebase following professional development practices.",
    ],
  },
  {
    role: "Campus Ambassador — IIT Delhi",
    period: "Aug 2025 – Oct 2025 · Remote & On-campus",
    image : "/assets/iit d.png",
    badge: "Leadership",
    points: [
      "Increased participation across 3+ departments through structured outreach campaigns.",
      "Coordinated with a 5-member organizing team on logistics and communication.",
      "Managed registration workflow for 100+ student participants.",
    ],
  },
  {
    role: "Dental Tech Intern — Suvidha Foundation",
    period: "May 2026 Remote Internship · NGO",
    badge: "Internship",
    points: [
      "Developed and maintained datas for the NGO's online presence.",
      "Contributed to anotation improving accessibility and responsiveness.",
      "Collaborated with a team to implement content  updates.",
    ],
  },
  {
    role: "Content Writing Intern",
    period: "Jan 2026 2-week remote internship",
    badge: "Internship",
    points: [
      "Delivered research-based technical and educational content on short timelines.",
      "Improved readability with better story structure and engaging hooks.",
    ],
  },
  {
    role: "Fundraising Intern",
    period: "Nov 2025 1-week remote internship",
    badge: "Internship",
    points: [
      "Supported outreach campaigns across digital channels.",
      "Tracked responses and maintained campaign activity records.",
    ],
  },
];

export const certificates = [

  {
    img: "/assets/h2.png",
    label: "Hackathon — Amity University",
    type: "Hackathon",
  },
   {
    img: "/assets/iit b.png",
    label: "Hackathon — IIT Bombay",
    type: "Hackathon",
  },
   {
    img: "/assets/certificate (2).png",
    label: "Hackathon — IIT BHU",
    type: "Hackathon",
  },
  {
    img: "/assets/7.jpg",
    label: "Quiz — Unstop",
    type: "Quiz",
  },
  {
    img: "/assets/92fc3244-1949-4a5a-b56a-729d4cc02455.jpg",
    label: "Quiz — Codespark",
    type: "Quiz",
  },
  {
    img: "/assets/Screenshot 2026-02-20 154259.png",
    label: "Internshala Certification",
    type: "Certificate",
  },
  {
    img: "/assets/Screenshot 2026-02-20 154335.png",
    label: "Internshala Certification",
    type: "Certificate",
  },
];

export const themes = [
  { id: "dark",   label: "Dark",   emoji: "🌌" },
  { id: "neon",   label: "Neon",   emoji: "⚡" },
  { id: "aurora", label: "Aurora", emoji: "🌈" },
  { id: "fire",   label: "Fire",   emoji: "🔥" },
];
