import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BeanCursor, ProjectOrder, Reveal, drinks } from './Cafe.jsx';

const projects = [
  { id: 1, name: 'Agentic Text-to-SPARQL', category: 'Agentic AI', icon: '☕', subtitle: 'Signature espresso', desc: 'Component-wise query generation with specialist agents, LangGraph orchestration, and knowledge graph reasoning.', tags: ['LangGraph', 'LLMs', 'SPARQL'], link: 'https://github.com/gautamikh' },
  { id: 2, name: 'Financial Report Assistant', category: 'RAG', icon: '◈', subtitle: 'Slow-brewed insights', desc: 'Exploring retrieval-augmented workflows for grounded answers over financial documents.', tags: ['RAG', 'Python', 'Retrieval'], link: 'https://github.com/gautamikh' },
  { id: 3, name: 'OnBoardOps', category: 'Automation', icon: '✦', subtitle: 'The house special', desc: 'An AI-inspired onboarding experience connecting intelligent assistance with practical workflows.', tags: ['AI workflows', 'Automation'], link: 'https://github.com/gautamikh' },
];
const categories = ['All brews', 'Agentic AI', 'RAG', 'Automation'];

export default function App() {
  const reducedMotion = useReducedMotion();
  const [order, setOrder] = useState(null);
  const [beanEnabled, setBeanEnabled] = useState(false);
  const [category, setCategory] = useState('All brews');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cup, setCup] = useState(0);
  const [toast, setToast] = useState('');
  const shown = projects.filter(p => category === 'All brews' || p.category === category);
  const cheers = () => {
    setCup(v => v + 1);
    setToast('Fresh ideas are brewing ✨');
    window.setTimeout(() => setToast(''), 2600);
  };
  return <div className={`site ${theme}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <BeanCursor enabled={beanEnabled} />
    <header className="topbar">
      <a className="logo" href="#home" aria-label="Gautami Coffee Lab home"><span className="logo-mark">✳</span> gautami<span className="logo-dot">.</span>coffee lab</a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="main-nav">☰</button>
      <nav id="main-nav" className={menuOpen ? 'open' : ''} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
        <a href="#about">The story</a><a href="#projects">The menu</a><a href="#experience">The roast</a><a href="#contact">Say hello</a>
      </nav>
      <button className="theme-switch" onClick={() => setTheme(v => v === 'dark' ? 'light' : 'dark')} aria-label="Toggle light and dark theme">{theme === 'dark' ? '☀' : '☾'} <span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
    </header>

    <main id="main">
      <section className="hero shell" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="live-dot"/> THE COFFEE LAB IS OPEN · WELCOME IN</div>
          <h1>Brewing<br/><em>intelligent</em><br/>ideas<span className="punct">.</span></h1>
          <p>Hey, I'm <b>Gautami</b> — an AI engineer building agentic systems, LLM-powered applications, and thoughtful human-centered experiences. Pull up a chair.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">Explore the menu <span>↗</span></a><a className="text-link" href="#about">Get to know me <span>→</span></a></div>
          <div className="hero-stats"><div><strong>AI + LLMs</strong><small>My daily grind</small></div><div><strong>LangGraph</strong><small>Favorite toolkit</small></div><div><strong>Curiosity</strong><small>Always on tap</small></div></div>
        </div>
        <div className="hero-art" aria-label="Animated illustration of a latte cup"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="float-label label-one">✧ ideas in progress</div><div className="float-label label-two">100% freshly brewed</div><div className="steam steam-one"/><div className="steam steam-two"/><div className="steam steam-three"/><div className="saucer"/><motion.button animate={reducedMotion ? undefined : { y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="cup" onClick={cheers} aria-label="Tap the coffee cup for a surprise"><span className="coffee"><span className="latte-art">♥</span></span><span className="cup-handle"/></motion.button><div className="art-caption">made with ☕ &amp; a little bit of code</div></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>AGENTIC AI ✳ LARGE LANGUAGE MODELS ✳ KNOWLEDGE GRAPHS ✳ CREATIVE ENGINEERING ✳ AGENTIC AI ✳ LARGE LANGUAGE MODELS ✳ KNOWLEDGE GRAPHS ✳ CREATIVE ENGINEERING ✳</div></div>

      <section className="section shell about" id="about"><div className="section-label">01 / THE STORY</div><Reveal><div className="about-grid"><div><h2>A little more <em>about the barista.</em></h2><p className="big-copy">I turn complicated AI problems into useful, understandable experiences.</p></div><div className="about-right"><p>My work sits at the intersection of language models, knowledge graphs, and agentic workflows. I love designing systems where specialized components work together to solve challenging tasks.</p><p>With research experience at RPTU Kaiserslautern and industry experience in applied AI, I'm always experimenting with what's next.</p><a className="text-link" href="https://github.com/gautamikh" target="_blank" rel="noreferrer">Find me on GitHub ↗</a></div></div></Reveal></section>

      <section className="section projects-section" id="projects"><div className="shell"><div className="section-label">02 / SELECT YOUR BREW</div><div className="section-heading"><div><h2>The project <em>menu.</em></h2><p>A few things I've been crafting, experimenting with, and refining.</p></div><div className="tiny-stamp">CRAFTED WITH<br/>CURIOSITY ✳</div></div><div className="filters" aria-label="Filter projects by category">{categories.map(c => <button className={category === c ? 'active' : ''} key={c} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div><div className="project-grid">{shown.map(p => <Reveal key={p.id}><article className="project-card" key={p.id}><div className="card-top"><span className="card-number">0{p.id} / {p.category.toUpperCase()}</span><span className="card-icon">{p.icon}</span></div><div className="card-body"><div className="drink-type">{p.subtitle}</div><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><button className="card-link" onClick={() => setOrder(p)} aria-label={`Order ${drinks[p.id - 1]}: explore ${p.name}`}>Order {drinks[p.id - 1]} <span>&#8599;</span></button></article></Reveal>)}</div><p className="menu-note">Choose a brew to explore the problem, the approach, and the ingredients.</p></div></section>

      <section className="section shell experience" id="experience"><div className="section-label">03 / THE ROAST PROFILE</div><h2>Experience with <em>depth.</em></h2><Reveal><div className="timeline"><div className="timeline-item"><span className="timeline-icon">✳</span><div><small>APPLIED AI · INDUSTRY</small><h3>ABB Corporate Research</h3><p>AI research internship — multi-agent workflows, document intelligence, and knowledge graph mapping.</p></div><span className="timeline-arrow">↗</span></div><div className="timeline-item"><span className="timeline-icon">✳</span><div><small>ACADEMIC RESEARCH</small><h3>RPTU Kaiserslautern</h3><p>MSc research on LLM-powered, component-wise SPARQL generation and specialized agent orchestration.</p></div><span className="timeline-arrow">↗</span></div><div className="timeline-item"><span className="timeline-icon">✳</span><div><small>DATA SCIENCE</small><h3>Procycons</h3><p>Industry experience applying data science methods to real-world problems.</p></div><span className="timeline-arrow">↗</span></div></div></Reveal></section>

      <section className="contact-section" id="contact"><div className="shell contact-inner"><span className="section-label">04 / ONE MORE CUP?</span><div className="contact-emblem">☕</div><h2>Let's brew<br/><em>something great.</em></h2><p>Ideas, opportunities, collaborations, or a good coffee recommendation — let's connect on GitHub.</p><div className="contact-links"><a className="button outlined" href="https://github.com/gautamikh" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
    </main>
    <footer className="footer shell"><button className="bean-toggle" aria-pressed={beanEnabled} onClick={() => setBeanEnabled(v => !v)}>Bean trail: {beanEnabled ? "on" : "off"}</button><span>✳ gautami.coffee lab</span><span>Crafted with React, caffeine & curiosity.</span><a href="#home">Back to top ↑</a></footer>
    {order && <ProjectOrder project={order} onClose={() => setOrder(null)} />}
    {toast && <div className="toast" role="status">{toast} · cup #{cup}</div>}
  </div>;
}
