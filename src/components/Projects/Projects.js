import uniqid from 'uniqid'
import { projects, gameProjects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Game Development</h2>

      <div className='projects__grid'>
        {gameProjects.map((project) => (
          // <ProjectContainer key={uniqid()} project={project} />
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>

      <h2 className='section__title'>Web Development</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
          // <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
