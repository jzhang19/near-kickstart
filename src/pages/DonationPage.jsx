import React, {useState, useEffect} from "react";
import {useHistory } from "react-router-dom"
import DonationForm from "../components/DonationForm/DonationForm"

function DonationPage() {
    const history = useHistory();
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    }, [])
    function SignUp() {
        history.push('/sign-up/')
    }
    
    return token !== "null" 
    ? <DonationForm /> 
    : (<div className="unauthorised">
        <h3> Uh oh!</h3>
        <p> You need to join the community to donate to a project!</p>
        <button id="delete-button" className="submit-button" onClick={SignUp}>SIGN UP HERE!</button>
    </div>)

}

export default DonationPage;