import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"


const HomePage = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        console.log("data", allProjects);
        setProjectList(allProjects);

    }, []);
    return (
        <div id="project-list">
        {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />
                })}
            </div>
        )
}

export default HomePage