import React, { useState } from 'react';
import { useHistory, useParams} from "react-router-dom";

const DonationForm = (props) => {
    const history = useHistory();
    // const { refreshProjectData } = props;
    const { id } = useParams();
    const [Donation, setDonation] = useState({
        DonationAmount: "",
        DonationComment: "",
        DonationAnonymous: "undefined",
        DonationProject_id: "id"
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setDonation((prevDonation) => {
            return {
                ...prevDonation,
                [id]: value,
            };
        });
    };
    const postData = async () => {
        const token = window.localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_API_URL}donations/`,
            {
                method: "post",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    amount: Donation?.amount,
                    comment: Donation?.comment,
                    anonymous: Donation?.anonymous,
                    project_id: Donation?.project_id,
                }),
            });
            // refreshProjectData();
            console.log(response)
            return response.json();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData()
            .then((response) => {
                // console.log('------response from my API --------')
                history.push("/thank-you");
            })
    };
    return (
        <div id="signup-form-container" className="form-container">
                {/* <p className="pagetitle--register" align="center">Create your account</p> */}
                <form id="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label>Donation Amount:</label>
                        <input
                        type="text" 
                        id="donation-amount" 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Comment:</label>
                        <textarea
                        type="text" 
                        id="comment:" 
                        onChange={handleChange} />
                    </div>
                    <button className="submit-button" type="submit" onClick={handleSubmit}>Donate!</button>
                </form>
            </div >
    )
}

export default DonationForm;