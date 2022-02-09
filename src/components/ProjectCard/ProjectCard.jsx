import React from "react"
import { Link } from "react-router-dom"
import "./ProjectCard.css"

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="col-md-4 col-sm-6 col-xs-6 block wordpress icons">
            <Link style={{ textDecoration: 'none' }} to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="" />
                <span className="name">{projectData.title}</span>
            </Link>
        </div>
    )
}

export default ProjectCard