import React from "react"
import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link style={{ textDecoration: 'none' }} to={`/project/${projectData.id}`}>
                <img alt="" src={projectData.image}/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    )
}

export default ProjectCard