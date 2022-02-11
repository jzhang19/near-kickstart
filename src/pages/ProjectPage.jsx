import React, { useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { allProjects } from "../data"
import * as nearAPI from 'near-api-js';

const ProjectPage = ({ contract, currentUser }) => {
    
    const [projectData, setProjectData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const project = allProjects.find(project => project['id'] == id);
        console.log(project);
        console.log(currentUser);
        console.log(contract);
        contract.display({account_id: currentUser.accountId}).then(data => {
            console.log(data);
        });
        setProjectData(project);
    });

    const formattedDate = new Date(projectData?.date_created).toDateString();
    console.log(formattedDate)
    
    const [token, setToken] = useState(window.localStorage.getItem('token'));
    
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    }, []);

    const newDonation = () => {
        localStorage.getItem('token')
        return (
            <div>
                {
                    token || token !== "null"
                    ? history.push('/donation-form')
                    : <div></div>
                }
            </div>
    )};

    return  (
        <React.Fragment>
            <section className="text-block mb-70 text-center">
                <h4>CrowdLoan</h4>
            </section>
            <section className="features border-decor-parent mb-60">
                <i className="btn-close"></i>
                <div className="row">
                    <div className="col-md-4 col-sm-4 text-center">
                        <img src={projectData.image} alt=""/>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="features-info">
                            <h6 className="border-decor">{projectData.title}</h6>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Description</td>
                                        <td>{projectData.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Lock Period</td>
                                        <td>12 Months</td>
                                    </tr>
                                    <tr>
                                        <td>Goal</td>
                                        <td>{projectData.goal}</td>
                                    </tr>
                                    <tr>
                                        <td>Accepted Tokens</td>
                                        <td>
                                            <div className="tags">
                                                <a href="#">BTC</a>
                                                <a href="#">ETH</a>
                                                <a href="#">NEAR</a>
                                                <a href="#">DOT</a>
                                                <a href="#">ATOM</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart-block row mb-40">
                <div className="col-md-8">
                    <h5>Contribute</h5>
                    <div className="payment mb-30">
                        <div className="payment-method">
                            <div className="active"><img src="images/eiefy_0019_Payment_01.png" alt=""/></div>
                            <div><img src="images/eiefy_0018_Payment_02.png" alt=""/></div>
                            <div><img src="images/eiefy_0017_Payment_03.png" alt=""/></div>
                        </div>
                        <div className="payment-info">
                            <label>Current NEAR</label>
                            <input type="text" className="form-control"/>
                            <label>Contribute Amount</label>
                            <input type="text" className="form-control"/>
                            <div className="row inline-select">
                                <div className="col-md-12">
                                    <label>Email to be notified</label>
                                    <input type="text" className="form-control" placeholder="Add"/>
                                </div>
                            </div>
                            <table className="table mt-30">
                                <tbody>
                                    <tr className="total">
                                        <td>Your contribution amount</td>
                                        <td>$101.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="btn btn-small">Contribute</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5>Rewards Summary</h5>
                    <table className="table mb-30">
                        <tbody>
                            <tr>
                                <td>Base Rewards</td>
                                <td>$39.00</td>
                            </tr>
                            <tr>
                                <td>Early Bird Bonus</td>
                                <td>$2.00</td>
                            </tr>
                            <tr>
                                <td>Referal Bonus</td>
                                <td>$60.00</td>
                            </tr>
                            <tr className="total">
                                <td>Total:</td>
                                <td>$101.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProjectPage