import uniqid from 'uniqid'
import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`projectCard ${hovered ? 'projectCard--hovered' : ''}`}
      style={{ backgroundImage: `url(${project.image || 'https://picsum.photos/id/235/200/300'})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="project__content">
          <h3>{project.name}</h3>
          <p className="project__description">{project.description}</p>
          {project.stack && (
            <ul className="project__stack">
              {project.stack.map((item) => (
                <li key={uniqid()} className="project__stack-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="project__actions">
            {project.sourceCode && (
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project__icon-link">
                <GitHubIcon />
              </a>
            )}
            {project.livePreview && (
              <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="project__icon-link">
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;