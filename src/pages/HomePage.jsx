import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import Big from 'big.js';
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"


const HomePage = ( {currentUser} ) => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(allProjects);
    }, []);

    const filterProjects = key => () => {
        if (key == "all") {
            setProjectList(allProjects);
        } else {
            const newAllProjects = allProjects.filter(project => project.id.includes(key));
            setProjectList(newAllProjects);
        }
    };

    return (
        <React.Fragment>
            <section className="text-block mb-70">
                <h4 className="text-center">Our most selective crowd funding projects available for your next wealth growth.</h4>
                <p className="text-center">{ currentUser ? currentUser.accountId + ' ' + Big(currentUser.balance).div(10 ** 24) + 'Ⓝ' : "" }</p>
            </section>
            <a href="#" onClick={filterProjects('all')} className="btn btn-large btn-center mb-60">
                View our entire project colletion <i className="arrow-right"></i>
            </a>
            <ul className="list-inline list-menu navigation-isotope">
                <li className="button"><a href="#" onClick={filterProjects('illustration')}>Comics & Illustration</a></li>
                <li className="button"><a href="#" onClick={filterProjects('design')}>Design & Tech</a></li>
                <li className="button"><a href="#" onClick={filterProjects('film')}>Film</a></li>
            </ul>
            <section className="preview row isotope">
                { projectList.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData} />
                    })
                }
            </section>
        </React.Fragment>
    )
}

export default HomePage