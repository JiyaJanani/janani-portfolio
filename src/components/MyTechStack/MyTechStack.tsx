import React from 'react';
import './MyTechStack.css';
import html from '../../assets/TechIcons/html.png';
import css from '../../assets/TechIcons/css.png';
import bootstrap from '../../assets/TechIcons/bootstrap.png';
import git from '../../assets/TechIcons/git.png';
import github from '../../assets/TechIcons/github.png';
import js from '../../assets/TechIcons/js.png';
import react from '../../assets/TechIcons/react.png';
import sass from '../../assets/TechIcons/sass.png';
import tailwind from '../../assets/TechIcons/tailwind.png';
import vscode from '../../assets/TechIcons/vscode.png';


function MyTechStack() {
    const techStack = [html, css, react, bootstrap, git, github, js, react]
    return (
        <div id="tech">
            <div className='heading'>My Tech Stack</div>
            <div className='subheading'> Technologies I’ve been working with recently</div>
            <div className='iconwrap'>
                {techStack.map((icon) => {
                    return (<img className="tech-icon" src={icon} />)
                })}
            </div>

        </div>
    );
}

export default MyTechStack;
