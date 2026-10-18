import { ProjectCard } from './components/ProjectCard'
import { profile, projects } from './data/projects'

const skills = [
  'React',
  'TypeScript',
  'Vite',
  'Redux Toolkit',
  'TanStack Query',
  'React Router',
  'React Hook Form',
  'Supabase',
  'Tailwind CSS',
]

const year = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="nav-logo">
          {profile.name.split(' ')[0]}
          <span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow" aria-hidden />
          <p className="eyebrow">
            <span className="status-dot" /> {profile.role}
          </p>
          <h1 className="hero-title">
            Hi, I'm {profile.name}.
            <br />
            <em>I build things for the web.</em>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn--primary" href="#work">
              See my work
            </a>
            <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
          <ul className="skills" aria-label="Skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="work" className="work">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>{projects.length} projects, all deployed on Vercel</p>
          </div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </section>

        <section id="contact" className="contact">
          <h2>Let's work together</h2>
          <p>Have a project in mind or just want to say hi? My inbox is open.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© {year} {profile.name}</span>
        <span>Built with React, TypeScript and Vite</span>
      </footer>
    </>
  )
}

export default App
