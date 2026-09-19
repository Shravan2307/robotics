import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Boxes,
  ChevronDown,
  Circle,
  Code2,
  Cpu,
  Database,
  Eye,
  ExternalLink,
  Facebook,
  Globe2,
  GitBranch,
  GraduationCap,
  Hexagon,
  Instagram,
  Menu,
  Network,
  Radar,
  Radio,
  Route,
  ScanLine,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
  Zap,
} from "lucide-react";

type Icon = typeof Activity;

type EventItem = {
  category: string;
  type: string;
  title: string;
  date: string;
  description: string;
  href: string;
};

type ProjectItem = {
  number: string;
  title: string;
  label: string;
  tags: string[];
  description: string;
  objective: string;
  implementation: string;
  icon: Icon;
};

const officialLinks = {
  ras: "https://www.ieee-ras.org/",
  students: "https://www.ieee-ras.org/students/",
  chapters: "https://www.ieee-ras.org/ras-chapters/",
  events: "https://www.ieee-ras.org/ras-chapters/chapter-events/",
  membership: "https://www.ieee-ras.org/membership/",
  facebook: "https://www.facebook.com/ieee.ras/",
  instagram: "https://www.instagram.com/ieee_ras_official/",
  ros: "https://docs.ros.org/en/jazzy/",
  opencv: "https://opencv.org/",
  ai: "https://www.deeplearning.ai/",
  control: "https://ctms.engin.umich.edu/CTMS/index.php?example=Introduction&section=ControlPID",
  robotics: "https://www.ieee-ras.org/",
  research: "https://www.ieee-ras.org/publications/",
};

const events: EventItem[] = [
  {
    category: "WORKSHOPS",
    type: "CHAPTER PLACEHOLDER",
    title: "[EVENT NAME]",
    date: "[EVENT DATE]",
    description: "Add a verified local chapter workshop, talk, competition, or technical session here.",
    href: officialLinks.events,
  },
  {
    category: "TECHNICAL",
    type: "CHAPTER PLACEHOLDER",
    title: "[WORKSHOP NAME]",
    date: "[EVENT DATE]",
    description: "Chapter-specific listings stay intentionally open until an official source is available.",
    href: officialLinks.events,
  },
  {
    type: "CHAPTER PLACEHOLDER",
    title: "[COMPETITION NAME]",
    category: "COMPETITIONS",
    date: "[EVENT DATE]",
    description: "Use this card for a verified student competition or interdisciplinary build sprint.",
    href: officialLinks.events,
  },
  {
    type: "CHAPTER PLACEHOLDER",
    title: "[TALK NAME]",
    category: "TALKS",
    date: "[EVENT DATE]",
    description: "Use this card for a verified research talk, industry session, or student-led knowledge exchange.",
    href: officialLinks.events,
  },
];

const projects: ProjectItem[] = [
  {
    number: "01",
    title: "AUTONOMOUS NAVIGATION",
    label: "EXAMPLE PROJECT",
    tags: ["ROS", "SLAM", "COMPUTER VISION", "PYTHON"],
    description: "A reference architecture for mobile robots that perceive a space, build a map, and plan their next move.",
    objective: "Demonstrate how sensing, localization, mapping, and planning form one autonomous loop.",
    implementation: "Use a ROS graph to connect sensor inputs, a SLAM package, a planner, and a low-level controller. Replace this description with verified chapter implementation details when available.",
    icon: Route,
  },
  {
    number: "02",
    title: "ROBOTIC ARM",
    label: "EXAMPLE PROJECT",
    tags: ["CONTROL", "KINEMATICS", "ROS 2"],
    description: "A reference study in motion planning and precise end-effector control for collaborative workspaces.",
    objective: "Translate a desired pose into stable, explainable motion.",
    implementation: "Pair a kinematic model with trajectory generation and safety constraints. No chapter-specific result is claimed here.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "VISION-BASED ROBOTICS",
    label: "EXAMPLE PROJECT",
    tags: ["OPENCV", "AI / ML", "PERCEPTION"],
    description: "A reference system for connecting visual perception with a robot decision loop.",
    objective: "Explore how a machine can extract useful structure from camera data.",
    implementation: "Combine image acquisition, feature extraction, model inference, and a deliberately bounded action policy.",
    icon: Eye,
  },
];

const disciplines: { id: string; title: string; description: string; icon: Icon }[] = [
  { id: "vision", title: "COMPUTER VISION", description: "Enable machines to interpret visual information from the environment.", icon: Eye },
  { id: "ai", title: "AI / ML", description: "Use intelligent models for perception, prediction, and decision making.", icon: BrainCircuit },
  { id: "sensors", title: "SENSORS", description: "Turn signals from the physical world into useful system state.", icon: Radar },
  { id: "control", title: "CONTROL", description: "Translate decisions into precise physical actions.", icon: Workflow },
  { id: "planning", title: "MOTION PLANNING", description: "Search for safe, efficient paths through dynamic environments.", icon: Route },
  { id: "autonomy", title: "AUTONOMY", description: "Coordinate perception, planning, and action into robust behavior.", icon: Radio },
];

const resources: { category: string; title: string; description: string; href: string; icon: Icon }[] = [
  { category: "ROS", title: "ROS 2 Documentation", description: "Official documentation for building robot applications with ROS 2.", href: officialLinks.ros, icon: Network },
  { category: "COMPUTER VISION", title: "OpenCV", description: "Open-source tools for real-time computer vision and image processing.", href: officialLinks.opencv, icon: ScanLine },
  { category: "ARTIFICIAL INTELLIGENCE", title: "DeepLearning.AI", description: "Accessible learning paths for modern machine learning practice.", href: officialLinks.ai, icon: BrainCircuit },
  { category: "CONTROL SYSTEMS", title: "Control Tutorials", description: "University-hosted tutorials covering feedback and control fundamentals.", href: officialLinks.control, icon: Workflow },
  { category: "ROBOTICS", title: "IEEE RAS", description: "The official society hub for robotics and automation knowledge.", href: officialLinks.ras, icon: Bot },
  { category: "RESEARCH", title: "RAS Publications", description: "Explore official journals, magazines, and research-focused resources.", href: officialLinks.research, icon: GraduationCap },
];

const timeline = [
  { year: "1961", title: "INDUSTRIAL ROBOTICS", description: "Unimate entered production at General Motors, marking an early milestone in industrial robot deployment." },
  { year: "1972", title: "MOBILE INTELLIGENCE", description: "SRI’s Shakey demonstrated how sensing, planning, and action could be combined in a mobile robot." },
  { year: "1997", title: "AUTONOMOUS EXPLORATION", description: "NASA’s Sojourner rover operated on Mars, bringing autonomous navigation into planetary exploration." },
  { year: "2010s", title: "DATA-DRIVEN PERCEPTION", description: "Deep learning accelerated progress in visual recognition and robot perception research." },
  { year: "TODAY", title: "EMBODIED INTELLIGENCE", description: "Researchers continue to connect foundation models, simulation, hardware, and safe autonomy." },
];

function SectionReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, description, light = false }: { eyebrow: string; title: ReactNode; description: string; light?: boolean }) {
  return (
    <div className={`section-header ${light ? "section-header-light" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TechVisual() {
  return (
    <div className="tech-visual" aria-label="Abstract robotics system visualization">
      <div className="visual-rings visual-ring-one" />
      <div className="visual-rings visual-ring-two" />
      <div className="visual-crosshair crosshair-a" />
      <div className="visual-crosshair crosshair-b" />
      <div className="visual-node node-a" />
      <div className="visual-node node-b" />
      <div className="visual-node node-c" />
      <svg className="visual-arm" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="armGradient" x1="130" y1="95" x2="405" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f5f5f5" />
            <stop offset="0.5" stopColor="#9da5b1" />
            <stop offset="1" stopColor="#414a57" />
          </linearGradient>
          <linearGradient id="redGradient" x1="100" y1="100" x2="420" y2="420" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff7a5f" />
            <stop offset="1" stopColor="#ff3b35" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M215 375 C250 350 271 321 275 278" stroke="#ff3b35" strokeOpacity=".25" strokeWidth="22" filter="url(#glow)" />
        <path d="M275 278 L192 190 L232 112" stroke="#0b0e13" strokeWidth="54" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M275 278 L192 190 L232 112" stroke="url(#armGradient)" strokeWidth="39" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M275 278 L192 190 L232 112" stroke="#e7ebf0" strokeOpacity=".28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M290 286 L366 360" stroke="#0b0e13" strokeWidth="54" strokeLinecap="round" />
        <path d="M290 286 L366 360" stroke="url(#armGradient)" strokeWidth="39" strokeLinecap="round" />
        <circle cx="275" cy="278" r="44" fill="#11161e" stroke="#f0f2f5" strokeWidth="8" />
        <circle cx="275" cy="278" r="22" fill="#ff3b35" stroke="#ff9781" strokeWidth="4" />
        <circle cx="192" cy="190" r="31" fill="#141b24" stroke="#bfc6cf" strokeWidth="8" />
        <circle cx="192" cy="190" r="12" fill="#ff3b35" />
        <circle cx="232" cy="112" r="29" fill="#141b24" stroke="#bfc6cf" strokeWidth="8" />
        <circle cx="232" cy="112" r="10" fill="#ff3b35" />
        <path d="M356 351 L399 338 L416 359 L384 396 L356 383Z" fill="#eef1f4" stroke="#8f9aa8" strokeWidth="5" />
        <path d="M386 390 L409 426 M405 372 L439 397" stroke="#ff3b35" strokeWidth="6" strokeLinecap="round" />
        <path d="M155 415 H390" stroke="#ff3b35" strokeOpacity=".35" strokeDasharray="3 8" />
        <path d="M125 415 H142 M403 415 H420" stroke="#ff3b35" strokeWidth="2" />
        <circle cx="275" cy="278" r="73" stroke="#ff3b35" strokeOpacity=".38" strokeDasharray="2 9" />
      </svg>
      <div className="visual-label label-top"><span className="label-dot live-dot" />SYSTEM STATUS<strong>ONLINE</strong></div>
      <div className="visual-label label-right"><span className="label-dot" />VISION<strong>ACTIVE</strong></div>
      <div className="visual-label label-bottom"><span className="label-dot" />AUTONOMY<strong>READY</strong></div>
      <div className="visual-label label-left"><span className="label-dot" />CONTROL<strong>ACTIVE</strong></div>
      <div className="visual-coordinates">X 042.18<br />Y 118.04<br />Z 006.72</div>
    </div>
  );
}

function AppLogo() {
  return (
    <a className="brand" href="#top" aria-label="IEEE RAS home">
      <span className="brand-mark"><span /><span /><span /></span>
      <span><b>IEEE</b><em>RAS</em></span>
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [eventFilter, setEventFilter] = useState("ALL");
  const [selectedDiscipline, setSelectedDiscipline] = useState("vision");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = ["home", "about", "stack", "events", "projects", "team", "resources"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    const frame = requestAnimationFrame(() => modalCloseRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      cancelAnimationFrame(frame);
    };
  }, [selectedProject]);

  const filteredEvents = useMemo(() => {
    if (eventFilter === "ALL") return events;
    return events.filter((event) => event.category === eventFilter);
  }, [eventFilter]);

  const navItems = [
    ["home", "HOME"], ["about", "ABOUT"], ["events", "EVENTS"], ["projects", "PROJECTS"], ["team", "TEAM"], ["resources", "RESOURCES"],
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="top" className="site-shell">
      <header className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <AppLogo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`}>
                {label}
                {activeSection === id && <span className="active-indicator" />}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={officialLinks.membership} target="_blank" rel="noreferrer">JOIN RAS <ArrowUpRight size={14} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div id="mobile-menu" className="mobile-menu" role="navigation" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }}>
              {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>)}
              <a className="mobile-menu-cta" href={officialLinks.membership} target="_blank" rel="noreferrer">JOIN RAS <ArrowUpRight size={15} /></a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-content container">
            <motion.div className="hero-copy" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="hero-kicker"><span className="kicker-line" />IEEE ROBOTICS &amp; AUTOMATION SOCIETY</div>
              <h1>ENGINEERING<br /><span>INTELLIGENCE.</span><br />BUILDING <i>AUTONOMY.</i></h1>
              <p className="hero-subtitle">Exploring robotics, automation, and intelligent systems through engineering, research, and innovation.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo("about")}>EXPLORE RAS <ArrowRight size={16} /></button>
                <button className="button button-secondary" onClick={() => scrollTo("events")}>VIEW EVENTS <ArrowDown size={16} /></button>
              </div>
              <div className="hero-footnote"><span>01</span><span className="footnote-line" /><span>PUBLICLY SOURCED / ORGANIZATION OVERVIEW</span></div>
            </motion.div>
            <motion.div className="hero-visual-wrap" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.25 }}>
              <TechVisual />
            </motion.div>
          </div>
          <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></div>
        </section>

        <section className="command-section container" aria-label="RAS command center">
          <div className="command-label">IEEE RAS <span>//</span> COMMAND CENTER</div>
          <div className="command-body">
            <span className="command-intro">ACTIVE SYSTEMS</span>
            <div className="system-statuses">
              {["ROBOTICS", "AUTOMATION", "COMPUTER VISION", "AI / ML"].map((item) => <div className="system-status" key={item}><span className="status-pulse" />{item}<b>ONLINE</b></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="01 / THE SOCIETY" title={<>WHERE ROBOTICS<br /><span>MEETS INTELLIGENCE.</span></>} description="IEEE Robotics and Automation Society is a leading organization in research and technological developments in robotics and automation worldwide." /></SectionReveal>
            <div className="about-layout">
              <SectionReveal className="about-statement"><div className="statement-number">01</div><h3>Systems that sense.<br />Decide. <span>Act.</span></h3><p>The society brings together students, researchers, educators, and industry professionals around the technologies that make intelligent machines possible.</p><a className="text-link" href={officialLinks.ras} target="_blank" rel="noreferrer">ABOUT IEEE RAS <ArrowUpRight size={15} /></a></SectionReveal>
              <div className="feature-grid">
                {[
                  ["01", "ROBOTICS", "Explore intelligent machines and robotic systems.", Bot],
                  ["02", "AUTOMATION", "Design systems that sense, decide, and act.", Cpu],
                  ["03", "INNOVATION", "Turn engineering concepts into real-world solutions.", Sparkles],
                ].map(([num, title, text, IconComponent]) => { const FeatureIcon = IconComponent as Icon; return <SectionReveal key={title as string}><article className="feature-card"><div className="feature-top"><span>{num as string}</span><FeatureIcon size={19} /></div><h3>{title as string}</h3><p>{text as string}</p><div className="feature-line" /></article></SectionReveal>; })}
              </div>
            </div>
            <div className="source-note"><ShieldCheck size={14} /> Organization copy sourced from publicly available IEEE RAS and IEEE RAS Students pages.</div>
          </div>
        </section>

        <section className="section section-mission">
          <div className="container mission-grid">
            <SectionReveal className="mission-card"><span className="eyebrow"><span className="eyebrow-line" />MISSION / OFFICIAL CONTEXT</span><h2>ADVANCE THE<br /><span>FIELD FORWARD.</span></h2><p>IEEE RAS supports the development and exchange of scientific knowledge in robotics and automation, with student activities that foster education, networking, and professional growth.</p><a className="text-link" href={officialLinks.students} target="_blank" rel="noreferrer">READ STUDENT ACTIVITIES <ArrowUpRight size={15} /></a></SectionReveal>
            <div className="mission-divider" aria-hidden="true"><span>×</span></div>
            <SectionReveal className="mission-card mission-vision"><span className="eyebrow"><span className="eyebrow-line" />VISION / CHAPTER LAYER</span><h2>BUILD WHAT<br /><span>COMES NEXT.</span></h2><p>This chapter-facing layer is ready for a verified local mission, vision, faculty contact, or campus context. No chapter-specific claim is made until an official source is supplied.</p><button className="outline-mini" onClick={() => scrollTo("team")}>ADD VERIFIED DETAILS <ArrowRight size={15} /></button></SectionReveal>
          </div>
        </section>

        <section id="stack" className="section section-stack">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="02 / SYSTEMS THINKING" title={<>THE ROBOTICS<br /><span>STACK.</span></>} description="Intelligent behavior is a systems problem. Explore the connected disciplines that make a robot perceive, reason, and move." /></SectionReveal>
            <div className="stack-layout">
              <div className="stack-visual" aria-label="Interactive robotics stack diagram">
                <div className="stack-orbit orbit-one" /><div className="stack-orbit orbit-two" />
                <div className="stack-center"><Bot size={32} /><span>ROBOT</span><small>SYSTEM CORE</small></div>
                {disciplines.map((discipline, index) => { const DisciplineIcon = discipline.icon; return <button key={discipline.id} className={`stack-node node-${index + 1} ${selectedDiscipline === discipline.id ? "selected" : ""}`} onClick={() => setSelectedDiscipline(discipline.id)}><DisciplineIcon size={16} /><span>{discipline.title}</span></button>; })}
              </div>
              <div className="stack-copy" aria-live="polite"><span className="system-index">DISCIPLINE / 0{disciplines.findIndex((item) => item.id === selectedDiscipline) + 1}</span><h3>{disciplines.find((item) => item.id === selectedDiscipline)?.title}</h3><p>{disciplines.find((item) => item.id === selectedDiscipline)?.description}</p><div className="stack-detail"><div><span>INPUT</span><b>WORLD STATE</b></div><ArrowRight size={17} /><div><span>OUTPUT</span><b>DECISION / ACTION</b></div></div><div className="stack-hint"><Circle size={7} fill="currentColor" /> Select a node to inspect the system layer</div></div>
            </div>
          </div>
        </section>

        <section id="events" className="section section-events">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="03 / COMMUNITY SIGNAL" title={<>LEARN.<br /><span>BUILD. COMPETE.</span></>} description="Local RAS chapters sponsor or co-sponsor symposia, student competitions, and continuing education workshops. This space is ready for verified chapter programming." /></SectionReveal>
            <div className="filter-row" role="tablist" aria-label="Event filters">{["ALL", "WORKSHOPS", "COMPETITIONS", "TALKS", "TECHNICAL"].map((filter) => <button key={filter} role="tab" aria-controls="event-panel" aria-selected={eventFilter === filter} className={eventFilter === filter ? "filter-active" : ""} onClick={() => setEventFilter(filter)}>{filter}</button>)}</div>
            <div id="event-panel" className="events-grid" role="tabpanel" aria-live="polite">{filteredEvents.map((event, index) => <SectionReveal key={`${event.title}-${eventFilter}`}><article className="event-card"><div className="event-top"><span>0{index + 1}</span><span className="event-type">{event.type}</span><ArrowUpRight size={17} /></div><h3>{event.title}</h3><div className="event-date">{event.date}</div><p>{event.description}</p><a href={event.href} target="_blank" rel="noreferrer">VIEW OFFICIAL SOURCE <ArrowRight size={14} /></a></article></SectionReveal>)}</div>
            <div className="section-disclaimer"><span className="red-dot" /> Chapter event cards are placeholders until a verified student chapter source is connected. <a href={officialLinks.events} target="_blank" rel="noreferrer">Browse official RAS chapter events <ArrowUpRight size={13} /></a></div>
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="04 / BUILD LOG" title={<>BUILDING SYSTEMS<br /><span>THAT MOVE, SEE &amp; THINK.</span></>} description="A premium showcase shell for the chapter’s technical work. Every example is clearly labeled until real project documentation is available." /></SectionReveal>
            <div className="projects-list">{projects.map((project, index) => { const ProjectIcon = project.icon; return <SectionReveal key={project.number}><article className="project-row"><div className="project-number">{project.number}</div><div className="project-icon"><ProjectIcon size={23} /></div><div className="project-main"><span className="project-label">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><button className="project-open" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.title}`}><ArrowUpRight size={21} /></button></article></SectionReveal>; })}</div>
          </div>
        </section>

        <section className="section section-timeline">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="05 / A SHORT HISTORY" title={<>FROM MACHINES<br /><span>TO INTELLIGENCE.</span></>} description="A compact timeline of milestones that shaped the field — from factory floors to embodied intelligence." /></SectionReveal>
            <div className="timeline">{timeline.map((item, index) => <SectionReveal key={item.year} className="timeline-item"><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-content"><span className="timeline-year">{item.year}</span><h3>{item.title}</h3><p>{item.description}</p></div></SectionReveal>)}</div>
          </div>
        </section>

        <section id="team" className="section section-team">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="06 / PEOPLE BEHIND THE MACHINES" title={<>THE <span>TEAM.</span></>} description="A considered structure for the people who make a chapter move. Replace each placeholder with verified public information before launch." /></SectionReveal>
            <div className="team-grid">{["FACULTY / MENTORS", "CORE TEAM", "TECHNICAL TEAM", "DESIGN / MEDIA"].map((role, index) => <SectionReveal key={role}><article className="team-card"><div className="team-avatar"><Hexagon size={26} /><span>0{index + 1}</span></div><div><span className="team-role">{role}</span><h3>[NAME]</h3><p>[SHORT BIO / VERIFIED ROLE]</p></div><div className="team-links"><a href={officialLinks.students} target="_blank" rel="noreferrer" aria-label={`${role} source`}><ExternalLink size={15} /></a></div></article></SectionReveal>)}</div>
            <div className="section-disclaimer"><span className="red-dot" /> No chapter-specific names, roles, or bios have been invented. <a href={officialLinks.chapters} target="_blank" rel="noreferrer">Open official RAS chapter directory <ArrowUpRight size={13} /></a></div>
          </div>
        </section>

        <section id="resources" className="section section-resources">
          <div className="container">
            <SectionReveal><SectionHeader eyebrow="07 / OPEN KNOWLEDGE" title={<>LEARN<br /><span>ROBOTICS.</span></>} description="Legitimate public resources to help students move from a first concept to a working system." /></SectionReveal>
            <div className="resource-grid">{resources.map((resource) => { const ResourceIcon = resource.icon; return <SectionReveal key={resource.title}><a className="resource-card" href={resource.href} target="_blank" rel="noreferrer"><div className="resource-top"><ResourceIcon size={19} /><ArrowUpRight size={16} /></div><span>{resource.category}</span><h3>{resource.title}</h3><p>{resource.description}</p><div className="resource-cta">EXPLORE <ArrowRight size={14} /></div></a></SectionReveal>; })}</div>
          </div>
        </section>

        <section className="section section-news">
          <div className="container news-strip"><div><span className="eyebrow"><span className="eyebrow-line" />08 / SIGNAL FEED</span><h2>LATEST FROM <span>RAS.</span></h2></div><div className="news-empty"><Radio size={18} /><div><strong>UPDATES COMING SOON.</strong><p>Verified chapter updates will appear here once an official feed or source is available.</p></div><a href={officialLinks.ras} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /></a></div></div>
        </section>

        <section className="join-section">
          <div className="join-grid" />
          <div className="container join-inner"><div><span className="eyebrow"><span className="eyebrow-line" />NEXT SYSTEM / YOUR INPUT</span><h2>BUILD THE<br /><span>FUTURE WITH US.</span></h2><p>Explore robotics, automation, and intelligent systems with the community.</p></div><a className="button button-primary button-large" href={officialLinks.membership} target="_blank" rel="noreferrer">JOIN IEEE RAS <Send size={16} /></a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid"><div><AppLogo /><p className="footer-tagline">Robotics.<br />Automation.<br />Innovation.</p></div><div className="footer-column"><span>NAVIGATION</span>{navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</div><div className="footer-column"><span>OFFICIAL SOURCES</span><a href={officialLinks.ras} target="_blank" rel="noreferrer">IEEE RAS <ExternalLink size={12} /></a><a href={officialLinks.students} target="_blank" rel="noreferrer">RAS STUDENTS <ExternalLink size={12} /></a><a href={officialLinks.chapters} target="_blank" rel="noreferrer">RAS CHAPTERS <ExternalLink size={12} /></a></div><div className="footer-column footer-social"><span>CONNECT</span><div><a href={officialLinks.ras} target="_blank" rel="noreferrer" aria-label="IEEE RAS website"><Globe2 size={17} /></a><a href={officialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href={officialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div><small>CHAPTER / INSTITUTION<br />[OFFICIAL EMAIL]</small></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} IEEE RAS / ALL RIGHTS RESERVED.</span><span>DESIGNED FOR ENGINEERING INTELLIGENCE.</span></div>
      </footer>

      <AnimatePresence>
        {selectedProject && <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" aria-describedby="project-modal-description" initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} onClick={(event) => event.stopPropagation()} onKeyDown={(event) => { if (event.key === "Escape") setSelectedProject(null); }}><button ref={modalCloseRef} className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={18} /></button><span className="project-label">{selectedProject.label} / {selectedProject.number}</span><h2 id="project-modal-title">{selectedProject.title}</h2><p className="modal-lede" id="project-modal-description">{selectedProject.description}</p><div className="modal-grid"><div><span>PROJECT OVERVIEW</span><p>{selectedProject.objective}</p></div><div><span>TECHNOLOGIES</span><p>{selectedProject.tags.join(" · ")}</p></div><div><span>IMPLEMENTATION</span><p>{selectedProject.implementation}</p></div><div><span>RESULT</span><p>Replace with verified documentation or measurements when this becomes a real chapter project.</p></div></div><div className="modal-note"><ShieldCheck size={15} /> No chapter-specific result is being claimed in this example.</div></motion.div></motion.div>}
      </AnimatePresence>
    </div>
  );
}

export default Home;
