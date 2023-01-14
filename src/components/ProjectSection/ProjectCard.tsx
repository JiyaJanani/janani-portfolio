import React from 'react';
import './ProjectSection.css';
import neou from '../../assets/Project/neou.png';
import sampleCard from '../../assets/Project/sample-project-card.png';
import github from '../../assets/icons_github-fill.png';
import linkChain from '../../assets/icons_link-chain.png';


function ProjectCard() {
    return (
        <div id="projectCard">
            <div className='card-root'>
                <div className="project-card-container">
                    <img src={sampleCard} />
                </div>
                <div className='project-content'>
                    <div className='projectTitle'>Project Tile goes here</div>
                    <div className='projectInfo'>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</div>
                    <div className='projectTechStack'>Tech stack : HTML , JavaScript, SASS, React</div>
                    <div className='project-card-footer'>
                        <div className='project-footer-icron-wrap'>
                            <img src={linkChain} />
                            <div className='footer-content'>live preview</div>
                        </div>
                        <div className='project-footer-icron-wrap'>
                            <img src={github} />
                            <div className='footer-content'>view code</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
