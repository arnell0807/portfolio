import { ProjectCard } from './components/ProjectCard'
import { profile, projects } from './data/projects'

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
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-intro">
            {profile.role}. <em>{profile.focus}</em>
          </p>
          <p className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </p>
        </section>

        <section id="work" className="work">
          <div className="section-head">
            <h2>Selected work</h2>
          </div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </section>

        <section id="contact" className="contact">
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
