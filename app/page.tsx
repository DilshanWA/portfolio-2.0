'use client'

import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import TypeingText from '@/components/typing-animation'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Link,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  GraduationCap,
  X,
} from 'lucide-react'
import SocialIcon from '@/components/social-icon'

const projects = [
  {
    number: '01',
    name: 'USOAPNote',
    eyebrow: 'AI healthcare documentation',
    description: 'A production-ready platform that turns spoken clinical notes into structured SOAP documentation with Whisper and GPT-powered prompt pipelines.',
    stack: ['Next.js', 'FastAPI', 'OpenAI API', 'Whisper', 'Ubuntu VPS'],
    accent: 'violet',
  },
  {
    number: '02',
    name: 'CloudPDF',
    eyebrow: 'Document processing platform',
    description: 'A multi-feature PDF workspace for merging, splitting, compressing, and converting documents through secure, memory-optimized REST APIs.',
    stack: ['Next.js', 'FastAPI', 'PyMuPDF', 'Docker', 'Nginx'],
    accent: 'cyan',
  },
  {
    number: '03',
    name: 'DocMind',
    eyebrow: 'Private RAG system',
    description: 'A full-stack retrieval-augmented generation system for document chunking, embeddings, semantic search, and context-aware Q&A with local inference.',
    stack: ['LangChain', 'ChromaDB', 'Llama 3.2', 'Express.js', 'Docker'],
    accent: 'orange',
  },
  {
    number: '04',
    name: 'QuoteFlow',
    eyebrow: 'Business operations software',
    description: 'An invoice and quotation management platform with role-based access, Firebase real-time sync, and a focused responsive interface.',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS'],
    accent: 'lime',
  },
]

const skillGroups = [
  { icon: Code2, label: 'Languages', items: 'Python · JavaScript · TypeScript · C++ · SQL' },
  { icon: Server, label: 'Frameworks & Libraries', items: 'Next.js · React · React Native · Express · FastAPI · LangChain' },
  { icon: Database, label: 'Data & AI', items: 'PostgreSQL · MongoDB · MySQL · Firebase · Supabase · OpenAI API · RAG' },
  { icon: ShieldCheck, label: 'DevOps & Security', items: 'Docker · Git · Ubuntu VPS · Nginx · CI/CD · JWT · OAuth 2.0 · RBAC' },
  { icon: BriefcaseBusiness, label: 'Engineering', items: 'OOP · DSA · REST APIs · MVC · System Design · Jest · Supertest' },
]

const education = [
  ['BSc (Hons) Software Engineering', 'The Open University of Sri Lanka · Summerset Campus', '2023 – Present'],
  ['HND in Cybersecurity (OTHM Level 5)', 'Higher National Diploma', '2026 – Present'],
]

const certificates = [
  ['Introduction to Kubernetes', 'Simplilearn', 'May 2026'],
  ['Foundation: Introduction to LangChain — Python', 'LangChain', 'Feb 2026'],
  ['Front End Web Development', 'University of Moratuwa', 'Feb 2024'],
  ['API Testing with Postman', 'Coursera', 'Dec 2023'],
  ['AWS Cloud Technical Essentials', 'Coursera', '2023'],
]

export default function Portfolio() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('dilshan-theme')
    if (saved) setDark(saved === 'dark')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('dilshan-theme', dark ? 'dark' : 'light')
  }, [dark])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('dilshan.t.arachchige@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <NavBar />
      <main id="/">
        <div className="hidden md:flex fixed absolute top-95 right-0 transform -translate-x-1/2 flex flex-row justify-center items-center gap-4 mt-4 p-2 rounded-full border border-gray-200 dark:border-gray-600  shadow-lg z-50">
          <SocialIcon />
        </div>
        <section className="hero page-section">
          <div className="hero-copy reveal">
            <p className="kicker"><span className="status-dot" /> HELLO I'M</p>
            <h1>Dilshan<br /><em>Arachchige</em></h1>
            {/* 
            <div className='mb-4'>
              <TypeingText/>
            </div>
            */}
            <p className="hero-text">
              Software engineering undergraduate from Sri Lanka, focused on designing and shipping thoughtful 
              full-stack products with a growing interest in AI-powered systems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown data-icon="inline-end" /></a>
              <a className="text-link" href="mailto:dilshan.t.arachchige@gmail.com">Let&apos;s talk <ArrowUpRight data-icon="inline-end" /></a>
            </div>
          </div>
          <div className="hero-image-wrap reveal delay-1 ">
            <Image className="hero-image" src="/me-22.png" alt="Dilshan Arachchige" width={500} height={100} priority />
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ArrowDown /></a>
        </section>

        <section id="about" className="page-section split-section reveal">
          <div className="section-label">01 / About</div>
          <div className="section-content">
            <h2>Curious by nature.<br /><span>Practical by default.</span></h2>
            <div className="about-grid">
              <p>My work sits at the intersection of solid engineering and useful product experiences. 
                I enjoy taking an idea from a rough sketch to a reliable, deployed application.</p>
              <p>From AI healthcare tooling to document processing platforms, I&apos;ve worked across the stack — APIs, databases, interfaces, infrastructure, and everything in between.</p>
              </div><div className="meta-line"><span><MapPin /> Middeniya, Sri Lanka</span><span><Sparkles /> Currently learning: distributed systems</span></div></div>
        </section>

        <section id="skills" className="page-section split-section reveal">
          <div className="section-label">02 / Toolkit</div>
          <div className="section-content"><h2>The tools I use<br /><span>to make ideas real.</span></h2>
            <div className="skills-list">{skillGroups.map(({ icon: Icon, label, items }) => 
              <div className="skill-row" key={label}>
                <div className="skill-name"><Icon />{label}</div><p>{items}</p>
              </div>
            )}
            </div>
          </div>
        </section>

        <section id="projects" className="page-section projects-section reveal">
          <div className="section-heading">
            <div>
              <div className="section-label">03 / Selected work</div>
              <h2>Things I&apos;ve<br /><span>been building.</span></h2>
            </div>
            <p>Four projects, each a chance to solve a different kind of problem.</p>
          </div>
          <div className="project-grid">{projects.map((project) => 
            <article className={`project-card ${project.accent}`} key={project.name}>
              <div className="project-top">
                <span>{project.number}</span><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><GitBranch /></a>
              </div>
              <div className="project-art">
                <div className="art-grid" />
                <div className="art-mark">{project.number}</div>
              </div>
              <p className="project-eyebrow">{project.eyebrow}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">
                {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="card-link" href="https://github.com" target="_blank" rel="noreferrer">View project <ExternalLink /></a>
            </article>
          )}
          </div>
        </section>

        <section id="education" className="page-section split-section reveal">
          <div className="section-label">02 / Education</div>
          <div className="section-content">
            <h2>Grounded in learning.<br /><span>Always moving forward.</span></h2>
            <div className="education-list">
              {education.map(([degree, institution, date], i) => 
                <div className="education-row" key={degree}>
                  <span className="education-index">0{i + 1}</span>
                  <div>
                    <h3>{degree}</h3>
                    <p>{institution}</p>
                  </div>
                  <time>{date}</time>
                  <GraduationCap />
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="certificates" className="page-section split-section reveal">
          <div className="section-label">04 / Learning</div>
          <div className="section-content">
            <h2>Always making room<br /><span>for the next lesson.</span></h2>
            <div className="certificate-list">
              {certificates.map(([name, issuer, date], i) => 
                <div className="certificate-row" key={name}>
                  <span className="certificate-index">0{i + 1}</span>
                  <div>
                    <h3>{name}</h3>
                    <p>{issuer}</p>
                  </div>
                  <time>{date}</time>
                  <Check />
                  <ExternalLink color='gray' className='cursor-pointer'/>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section page-section reveal">
          <div className="section-label">05 / Contact</div>
          <div className="contact-content">
            <p className="kicker">Have a role, project, or good problem?</p>
            <h2>Let&apos;s make<br /><em>something useful.</em></h2>
            <a className="email-link" href="mailto:dilshan.t.arachchige@gmail.com">dilshan.t.arachchige@gmail.com <ArrowUpRight /></a>
            <div className="contact-details">
              <button onClick={copyEmail}>
                <span>{copied ? <Check /> : <Mail />} {copied ? 'Copied to clipboard' : 'Copy email'}</span>
              </button>
              <a href="tel:+94761606311"><Phone /> +94 761 606 311</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Dilshan Arachchige</span>
        <div>
          <a href="https://github.com" target="_blank" rel="noreferrer"><GitBranch /> GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Link /> LinkedIn</a>
        </div><span>Built with curiosity & care</span>
      </footer>
    </div>
  )
}

export { Mail, Send }
