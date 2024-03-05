import React from 'react';
import './ProjectSection.css';
import Card from './Card';


function ProjectSection() {
    return (
        <div id="projectSection">
            <div className='project-heading'>Projects</div>
            <div className='project-sub-heading'>Things I’ve built so far</div>
            <div style={{ marginTop: '40px' }}></div>
            <div className='card-container'>
                {[1, 2, 3, 4].map((item, index) => {
                    return (
                        <Card />
                    )
                })}
            </div>

            <div style={{ padding: '40px' }}></div>

        </div>
    );
}

export default ProjectSection;
