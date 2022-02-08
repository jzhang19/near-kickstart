import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx"


const HomePage = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        console.log("data", allProjects);
        setProjectList(allProjects);

    }, []);

    // <div id="project-list">
    // {projectList.map((projectData, key) => {
    //         return <ProjectCard key={key} projectData={projectData} />
    //         })}
    //     </div>

    return (
        <section className="preview row isotope">
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress icons">
                <a href="#"><img src={require('../assets/images/products/circle.png')} alt="" />
                    <span className="name">Circle</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block site-template mockup">
                <a href="#"><img src={require('../assets/images/products/Bloggr.png')} alt="" />
                    <span className="name">Bloggr</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template">
                <a href="#"><img src={require('../assets/images/products/Forum.png')} alt="" />
                    <span className="name">Forum</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress site-template mockup">
                <a href="#"><img src={require('../assets/images/products/Funding.png')} alt="" />
                    <span className="name">Funding</span>
                </a>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12 block wordpress site-template icons">
                <a href="#"><img src={require('../assets/images/products/Cubetto.png')} alt="" />
                    <span className="name">Cubetto</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Geo-Shop.png')} alt="" />
                    <span className="name">Geo Shop</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block mockup site-template">
                <a href="#"><img src={require('../assets/images/products/iPictures.png')} alt="" />
                    <span className="name">iPictures</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
                <a href="#"><img src={require('../assets/images/products/News_Central.png')} alt="" />
                    <span className="name">News Central</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons" >
                <a href="#"><img src={require('../assets/images/products/Sharehub.png')} alt="" />
                    <span className="name">Sharehub</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Shopilicious.png')} alt="" />
                    <span className="name">Shopilicious</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Shoppr.png')} alt="" />
                    <span className="name">Shoppr</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Square.png')} alt="" />
                    <span className="name">Square</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Uri.png')} alt="" />
                    <span className="name">Uri</span>
                </a>
            </div><div className="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
                <a href="#"><img src={require('../assets/images/products/West_Side.png')} alt="" />
                    <span className="name">West Side</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
                <a href="#"><img src={require('../assets/images/products/WooCommerce.png')} alt="" />
                    <span className="name">WooCommerce</span>
                </a>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
                <a href="#"><img src={require('../assets/images/products/Youtuber.png')} alt="" />
                    <span className="name">Youtuber</span>
                </a>
            </div>
        </section>
    )
}

export default HomePage