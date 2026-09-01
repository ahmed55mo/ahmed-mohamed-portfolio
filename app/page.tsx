'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Mail, Menu, X } from 'lucide-react'

const projects = [
  { title: 'Intelligent Document Q&A', category: 'Generative AI · RAG', description: 'A grounded question-answering system that lets users explore document collections in natural language.', tags: ['Python', 'LLMs', 'RAG', 'LangChain'], featured: true, visual: 'rag' },
  { title: 'Automated Drawing Analysis', category: 'Computer Vision · Deep Learning', description: 'A visual similarity workflow comparing student drawings against reference templates through geometric features.', tags: ['OpenCV', 'scikit-image', 'Deep Learning'], visual: 'vision' },
  { title: 'NLP Sentiment Analysis', category: 'NLP · Machine Learning', description: 'A text classification pipeline that transforms raw language into interpretable sentiment predictions.', tags: ['Python', 'NLP', 'Scikit-learn'], visual: 'text' },
  { title: 'Image Processing Application', category: 'Computer Vision · C++', description: 'A custom image-processing application built around reusable algorithms and an efficient workflow.', tags: ['C++', 'Algorithms', 'Image Processing'], visual: 'code' },
  { title: 'Multi-Game Board Platform', category: 'Software Engineering', description: 'Multiple board games implemented with object-oriented design and a reusable game architecture.', tags: ['C++', 'OOP', 'Architecture'], visual: 'board' },
  { title: 'Online Library Platform', category: 'Web Development', description: 'A Django platform for managing books and users through a structured backend system.', tags: ['Python', 'Django', 'JavaScript'], visual: 'web' },
]

const skills = {
  'AI / ML': ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
  'Generative AI': ['LLMs', 'RAG', 'Prompt Engineering', 'Embeddings', 'Semantic Search', 'Vector Databases'],
  'Frameworks & Libraries': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face', 'OpenCV', 'NumPy', 'Pandas'],
  Development: ['Django', 'HTML', 'CSS', 'JavaScript', 'Git', 'C++'],
}

function SectionHeading({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading reveal"><div className="section-index">{number} <span /></div><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div></div>
}

function AIMap() {
  const nodes = ['Documents', 'Chunking', 'Embeddings', 'Retriever', 'LLM', 'Answer']
  return <div className="ai-map" aria-label="Retrieval augmented generation pipeline diagram">{nodes.map((node, i) => <div className="map-node" key={node}><span className="node-dot" /><span>{node}</span>{i < nodes.length - 1 && <span className="map-line" />}</div>)}</div>
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'rag') return <div className="visual-rag"><div className="rag-stack"><span>PDF</span><span>DOCX</span><span>TXT</span></div><div className="visual-arrow">→</div><div className="rag-core"><span className="core-orbit" /><span>RAG</span><small>context-aware</small></div><div className="visual-answer">answer<span>▰ ▰ ▰</span></div></div>
  if (type === 'vision') return <div className="visual-vision"><div className="draw-box"><span className="sketch-circle" /><span className="sketch-line" /></div><div className="versus">VS</div><div className="draw-box alt"><span className="sketch-circle" /><span className="sketch-line" /></div><div className="similarity">similarity analysis <b>0.92</b></div></div>
  if (type === 'text') return <div className="visual-flow"><span>“The result feels<br />surprisingly natural.”</span><i>↓</i><strong>positive</strong><em>0.94 confidence</em></div>
  if (type === 'code') return <div className="code-visual"><span>01</span><span>function process(image) {'{'}</span><span className="indent">return filter(image)</span><span>{'}'}</span><b>● ● ●</b></div>
  if (type === 'board') return <div className="board-visual">{Array.from({ length: 16 }, (_, i) => <span key={i} className={i % 5 === 0 ? 'piece' : ''} />)}</div>
  return <div className="web-visual"><div className="web-bar" /><div className="web-content"><span /><span /><span /><b /></div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Generative AI', 'Computer Vision', 'NLP', 'Software']
  const visibleProjects = filter === 'All' ? projects : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase().split(' ')[0]))
  return <main>
    <nav className="nav"><a className="brand" href="#home">AM<span>.</span></a><div className={`nav-links ${menuOpen ? 'open' : ''}`}>{['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(item => <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-cta" href="#contact">Let&apos;s Talk <ArrowUpRight size={15} /></a></div><button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></nav>

    <section id="home" className="hero page-pad"><div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Available for AI / ML projects</p><p className="hero-label">AI ENGINEER <span>·</span> GENERATIVE AI <span>·</span> MACHINE LEARNING</p><h1>Building intelligent<br /><span>systems with AI.</span></h1><p className="hero-text">I build practical AI applications using LLMs, RAG, NLP, Machine Learning, and Deep Learning — turning complex problems into intelligent, usable solutions.</p><div className="hero-actions"><a className="button primary" href="#projects">View my work <ArrowUpRight size={17} /></a><a className="button secondary" href="#contact">Let&apos;s work together <ArrowUpRight size={17} /></a></div></div><div className="hero-visual reveal"><div className="visual-label">SYSTEM / RETRIEVAL PIPELINE <span>01</span></div><AIMap /><div className="visual-footer"><span>query → context → response</span><span className="pulse-line" /></div></div></section>

    <div className="tech-strip"><span className="strip-label">Technologies I work with</span>{['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'Hugging Face', 'FAISS', 'Git'].map(x => <span key={x}>{x}</span>)}</div>

    <section id="about" className="section page-pad about"><SectionHeading number="01" eyebrow="The person behind the systems" title="Turning AI concepts into working systems." copy="I’m an AI Engineer focused on building intelligent applications with modern machine learning and generative AI technologies. My work sits at the intersection of strong technical foundations and practical, useful products." /><div className="about-grid"><div className="about-statement"><span>AI ENGINEER / 2026</span><p>“The most useful AI is the kind that fits naturally into the problem it is solving.”</p></div><div className="about-points"><div><b>01</b><span>Build with intent</span><p>Start with the real problem, not the most fashionable model.</p></div><div><b>02</b><span>Stay curious</span><p>Continuously experiment across language, vision, and data.</p></div></div></div></section>

    <section id="projects" className="section page-pad projects"><SectionHeading number="02" eyebrow="Selected work" title="Proof through projects." copy="A selection of AI, machine learning, and software projects built while developing my engineering expertise." /><div className="filters">{filters.map(x => <button className={filter === x ? 'active' : ''} onClick={() => setFilter(x)} key={x}>{x}</button>)}</div><div className="project-grid">{visibleProjects.map((p, i) => <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.title}><div className="project-top"><span>0{i + 1}</span><span>{p.category}</span></div><ProjectVisual type={p.visual} /><div className="project-info"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="project-link">View project <ArrowUpRight size={16} /></a></div></article>)}</div></section>

    <section className="section page-pad capabilities"><SectionHeading number="03" eyebrow="Capabilities" title="What I build." /><div className="cap-grid">{[['01', '⌁', 'LLM Applications', 'Building applications around language models, prompting, context management, and inference workflows.'], ['02', '⌬', 'RAG Systems', 'Designing retrieval pipelines that connect LLMs with external knowledge and documents.'], ['03', '◌', 'NLP Solutions', 'Text processing, classification, semantic search, embeddings, and language understanding.'], ['04', '⌘', 'Machine Learning', 'Developing machine-learning pipelines from preprocessing through model evaluation.']].map(([n, icon, title, text]) => <div className="cap-card" key={title}><span className="cap-number">{n}</span><i>{icon}</i><h3>{title}</h3><p>{text}</p><ArrowUpRight className="cap-arrow" size={18} /></div>)}</div></section>

    <section id="skills" className="section page-pad skills"><SectionHeading number="04" eyebrow="Technical toolkit" title="Skills with a purpose." copy="A growing toolkit for taking an idea from raw data to a working intelligent system." /><div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{items.map(skill => <span key={skill}><Check size={13} />{skill}</span>)}</div></div>)}</div></section>

    <section className="section page-pad process"><SectionHeading number="05" eyebrow="Engineering process" title="How I approach AI problems." /><div className="process-grid">{[['01', 'Understand', 'Define the actual problem and desired outcome.'], ['02', 'Prepare', 'Collect, clean, structure, and understand the data.'], ['03', 'Build', 'Develop the appropriate ML, NLP, LLM, or RAG solution.'], ['04', 'Evaluate', 'Measure quality, reliability, latency, and usefulness.'], ['05', 'Improve', 'Iterate based on results and real-world requirements.']].map(([n, title, text]) => <div className="process-step" key={title}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

    <section id="experience" className="section page-pad experience"><SectionHeading number="06" eyebrow="Background" title="Built through study and practice." /><div className="timeline"><div className="timeline-item"><span className="timeline-dot" /><p className="timeline-date">EDUCATION</p><h3>Cairo University</h3><p>Faculty of Computers and Artificial Intelligence<br />AI Department</p></div><div className="timeline-item"><span className="timeline-dot" /><p className="timeline-date">TRAINING · NTI / ITIDA</p><h3>Natural Language Processing</h3><p>Transformers, semantic search, RAG, fine-tuning, NLP, freelancing, and career development.</p></div></div></section>

    <section className="section page-pad code-section"><div className="code-copy"><p className="eyebrow">Built in code</p><h2>Ideas become real<br /><span>when they run.</span></h2><p>I believe AI engineering is demonstrated through working systems, experiments, and code.</p><a className="button secondary" href="#contact"><span aria-hidden="true" className="github-mark">GH</span> View GitHub <ArrowUpRight size={17} /></a></div><div className="code-grid" aria-hidden="true">{Array.from({ length: 100 }, (_, i) => <i key={i} style={{ opacity: `${0.15 + ((i * 7) % 70) / 100}` }} />)}</div></section>

    <section id="contact" className="contact page-pad"><p className="eyebrow">07 / Contact</p><h2>Have an AI problem<br /><span>to solve?</span></h2><p>Let&apos;s turn your idea into a practical AI solution.</p><div className="contact-actions"><a className="button primary" href="mailto:your.email@example.com">Start a conversation <Mail size={17} /></a><a className="button secondary" href="#home">Back to top <ArrowUpRight size={17} /></a></div><div className="contact-links"><span>EMAIL / <b>your.email@example.com</b></span><span>LINKEDIN / <b>linkedin.com/in/your-handle</b></span><span>GITHUB / <b>github.com/your-handle</b></span></div></section>
    <footer><span className="brand">AM<span>.</span></span><span>AI Engineer · © 2026 Ahmed Mohamed</span><div><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></footer>
  </main>
}
