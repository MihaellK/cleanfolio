import React, { useState } from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Modal from '@material-ui/core/Modal';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div 
        className={`projectCard ${hovered ? 'projectCard--hovered' : ''}`}
        style={{ backgroundImage: `url(${project.image || 'https://picsum.photos/id/235/200/300'})` }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && handleOpen()}
      >
        {hovered ? (
          <div className="project__content">
            <h3>{project.name}</h3>
            <p className="project__description">{project.briefDescription}</p>
            {project.stack && (
              <ul className="project__stack">
                {project.stack.map((item) => (
                  <li key={uniqid()} className="project__stack-item">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ) : null}
      </div>

      <Modal open={open} onClose={handleClose} className='projectCard-modal'>
        <div className='modal-container'>
          <div className="modal-content">
            <h2>{project.name}</h2>

            {project.images && project.images.length > 0 && (
              <div className="modal-images">
                {project.images.map((img) => (
                  <img key={uniqid()} src={img} alt="Project preview" className="modal-image" />
                ))}
              </div>
            )}

            <p>{project.description}</p>
            <h3>Tags</h3>
            {project.stack && (
              <ul className="project__stack">
                {project.stack.map((item) => (
                  <li key={uniqid()} className="project__stack-item">{item}</li>
                ))}
              </ul>
            )}

            {project.responsibilities && project.responsibilities.length > 0 && (
              <div className="modal-section">
                <h3>Responsibilities</h3>
                <ul>
                  {project.responsibilities.map((item) => (
                    <li key={uniqid()}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.achievements && project.achievements.length > 0 && (
              <div className="modal-section">
                <h3>Achievements</h3>
                <ul>
                  {project.achievements.map((item) => (
                    <li key={uniqid()}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* <div className='modal-footer'>
              <div className="project__actions">
                {project.sourceCode && (
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="project__icon-link">
                    <GitHubIcon />
                  </a>
                )}
                {project.livePreview && (
                  <a 
                    href={project.livePreview} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project__icon-link"
                  >
                    <LaunchIcon />
                  </a>
                )}
              </div>
            </div> */}

          </div>
        </div>
        
      </Modal>
    </>
  );
};

export default ProjectCard;