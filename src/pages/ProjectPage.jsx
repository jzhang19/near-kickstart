import React, { useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { allProjects } from "../data"


const ProjectPage = () => {
    const [projectData, setProjectData] = useState();
    const history = useHistory();
    const { id } = useParams();

const deleteFunction = async () => {
        // This is our API request, which we need to tell our function to wait for using the key word await
    // await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, {
    //       method: "delete",
    //       headers: {
    //         "Authorization": `Token ${localStorage.getItem('token')}`
    //       }
    //     })
        // Once we delete the project above, we then want to navigate back to the homepage
        // since the project we are looking at, doesn't exist anymore
        history.push('/')
      }


    useEffect(() => {
        setProjectData(allProjects);

    }, );
    const formattedDate = new Date(projectData?.date_created).toDateString()
        // console.log(formattedDate)
    // const deleteProject = async () => {
    //     await fetch (`${process.env.REACT_APP_API_URL}projects/${project_id}`, {
    //         method: "delete",
    //         headers: {
    //             "Authorization": `Token $`
    //         }
    //     })
    // }
    const [token, setToken] = useState(window.localStorage.getItem('token'))
        useEffect(() => {
            setToken(window.localStorage.getItem('token'))
        }, [])

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
        )}

    return  (
        <React.Fragment>
            <section className="text-block mb-70 text-center">
                <h4>Checkout</h4>
                <p><i className="fa fa-lock" aria-hidden="true"></i>This page uses 256-bit encryption. Your payment data is never stored locally.</p>
            </section>
            <section className="features border-decor-parent mb-60">
                <i className="btn-close"></i>
                <div className="row">
                    <div className="col-md-4 col-sm-4 text-center">
                        <img src="images/eiefy_0056_Product-2.png" alt=""/>
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <div className="features-info">
                            <h6 className="border-decor">Geo Shop - Groceries Shopping Website</h6>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Support</td>
                                        <td>12 Months</td>
                                    </tr>
                                    <tr>
                                        <td>Updates</td>
                                        <td>Free Lifetime</td>
                                    </tr>
                                    <tr>
                                        <td>Domain Usage</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td>Included files</td>
                                        <td>
                                            <div className="tags">
                                                <a href="#">psd</a>
                                                <a href="#">css</a>
                                                <a href="#">php</a>
                                                <a href="#">js</a>
                                                <a href="#">icons</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Refund Policy</td>
                                        <td>30 Days, no-question asked</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cart-block row mb-40">
                <div className="col-md-8">
                    <h5>Add additional service</h5>
                    <div className="payment mb-30">
                        <div className="payment-method">
                            <div className="active"><img src="images/eiefy_0019_Payment_01.png" alt=""/></div>
                            <div><img src="images/eiefy_0018_Payment_02.png" alt=""/></div>
                            <div><img src="images/eiefy_0017_Payment_03.png" alt=""/></div>
                        </div>
                        <div className="payment-info">
                            <label>Name on Card</label>
                            <input type="text" className="form-control"/>
                            <label>Card Number</label>
                            <input type="text" className="form-control"/>
                            <div className="row inline-select">
                                <div className="col-md-7">
                                    <label>Expiry Date</label>
                                    <select name="expiryD" className="form-control">
                                        <option>MM</option>
                                        <option>Option #1</option>
                                        <option>Option #2</option>
                                    </select>
                                    <span>/</span>
                                    <select name="expiryY" className="form-control">
                                        <option>YY</option>
                                        <option>Option #1</option>
                                        <option>Option #2</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <label>CVV</label>
                                    <input type="text" className="form-control" placeholder="Add"/>
                                </div>
                            </div>
                            <label className="checkbox-text">
                                <label className="checkbox-default">
                                    <input type="checkbox"/>
                                    <span className="arrow"></span>
                                </label>
                                <p>Save card for next time</p>
                            </label>
                            <table className="table mt-30">
                                <tbody>
                                    <tr className="total">
                                        <td>Your Order Total</td>
                                        <td>$101.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="#" className="btn btn-small">Make Payment</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5>Order Summary</h5>
                    <table className="table mb-30">
                        <tbody>
                            <tr>
                                <td>Geo shop - groceries ..</td>
                                <td>$39.00</td>
                            </tr>
                            <tr>
                                <td>Handling Fee:</td>
                                <td>$2.00</td>
                            </tr>
                            <tr>
                                <td>Email Newsletter</td>
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
            <div id="card">
                <div>
                    <h2>{projectData?.title}</h2>
                    <h3>Location: {projectData?.location}</h3>
                    <h3>Created on: {formattedDate}</h3>
                    <h3>{projectData?.description}</h3>
                    <h3>Goal: $ {projectData?.goal}.00</h3>
                    <h3>Raised so far: $ {projectData?.total_donated}.00</h3>
                    <button id="delete-button" className="submit-button" onClick={newDonation}>Donate!</button>
                    {/* <button id="delete-button" className="submit-button" onClick>Donate!</button> */}
                    <img alt="project" src= {projectData?.image}/>
                </div>
                {token !== "null"
                ?<div>        
                    {/* <button onClick={editFunction}>Edit Project</button> */}
                    <button id="delete-button" className="submit-button" onClick={deleteFunction}>Delete Project</button>
                </div>
                : <div></div>
                }
            </div>
        </React.Fragment>
    )
}


export default ProjectPage

// date_created: "2020-03-21T00:28:23.382748+10:00"
// description: "Another project"
// goal: 1000
// id: 4
// image: "https://via.placeholder.com/300.jpg"
// is_open: true
// location: "STAFFORD"
// owner: 11
// title: "Project"

// const quickFunc = (someVar) => {
//     if(someVar && someVar.amount) {
//         // do stuff
//     }
// }