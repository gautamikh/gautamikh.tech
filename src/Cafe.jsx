import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

export const drinks = ['Agentic Espresso', 'Retrieval Pour-over', 'Automation Latte'];

const notes = [
  { problem: 'Translate natural-language questions into structured SPARQL queries over a knowledge graph.', flow: ['Question', 'Specialist agents', 'LangGraph orchestration', 'SPARQL query'], implementation: 'The project explores component-wise query generation: specialized agents collaborate on the parts of a structured query.' },
  { problem: 'Find relevant evidence in financial documents and use it to support answers to questions.', flow: ['Question', 'Document retrieval', 'Relevant evidence', 'Grounded answer'], implementation: 'A retrieval-augmented workflow connects document search with language-model responses.' },
  { problem: 'Make onboarding workflows easier to navigate with intelligent assistance.', flow: ['Onboarding request', 'Workflow context', 'AI assistance', 'Next step'], implementation: 'An exploration of how AI assistance and automation can support practical onboarding tasks.' },
];

export function Reveal({ children, className = '' }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .6 }}>{children}</motion.div>;
}

export function BeanCursor({ enabled }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const left = useSpring(x, { stiffness: 130, damping: 22 });
  const top = useSpring(y, { stiffness: 130, damping: 22 });
  useEffect(() => {
    if (!enabled || reduced || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const move = e => { x.set(e.clientX + 18); y.set(e.clientY + 18); };
    const hide = () => { x.set(-100); y.set(-100); };
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', hide);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', hide); };
  }, [enabled, reduced, x, y]);
  return enabled && !reduced ? <motion.span aria-hidden="true" className="bean-cursor" style={{ left, top }} /> : null;
}

export function ProjectOrder({ project, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const note = notes[project.id - 1];
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    closeButton.current.focus();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="order-dialog" aria-labelledby="order-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="order-sheet">
      <div className="order-top"><span className="section-label">COFFEE LAB / ORDER 0{project.id}</span><button ref={closeButton} className="close-order" onClick={onClose} aria-label="Close project details">×</button></div>
      <p className="order-drink">One {drinks[project.id - 1]}, please.</p>
      <h2 id="order-title">{project.name}</h2>
      <p className="order-intro">{project.desc}</p>
      <div className="order-facts"><span>BREW METHOD<b>{project.category}</b></span><span>HOUSE BLEND<b>{project.tags.join(' + ')}</b></span></div>
      <section><h3>01 / The problem</h3><p>{note.problem}</p></section>
      <section><h3>02 / Architecture overview</h3><ol className="brew-flow">{note.flow.map(step => <li key={step}>{step}</li>)}</ol><p className="detail-note">Conceptual overview based on the project summary.</p></section>
      <section><h3>03 / Technologies & implementation</h3><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p>{note.implementation}</p></section>
      <section><h3>04 / Evaluation</h3><p>Detailed evaluation results have not been added to this portfolio yet.</p></section>
      <a className="button primary" href={project.link} target="_blank" rel="noreferrer">Visit Gautami’s GitHub <span>↗</span></a>
      <p className="detail-note">Direct repository link coming soon.</p>
      <div className="receipt-end">THANK YOU FOR YOUR CURIOSITY · ENJOY YOUR BREW</div>
    </div>
  </dialog>;
}
