import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'
import { BrowserPreview } from './BrowserPreview'

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const reversed = index % 2 === 1

  return (
    <article
      id={project.slug}
      className={`project ${reversed ? 'project--reversed' : ''}`}
      style={{ '--accent': project.accent } as CSSProperties}
    >
      <div className="project-media">
        <BrowserPreview url={project.liveUrl} title={project.name} />
      </div>

      <div className="project-body">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <ul className="project-stack" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-actions">
          <a className="btn btn--primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
          <a className="btn btn--ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
            Source code
          </a>
        </div>
      </div>
    </article>
  )
}
