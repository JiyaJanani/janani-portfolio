import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectSection.css';


function ProjectSection() {
    return (
        <div id="projectSection">
            <div className='project-heading'>Projects</div>
            <div className='project-sub-heading'>Things I’ve built so far</div>
            <ProjectCard />
        </div>
    );
}

export default ProjectSection;
