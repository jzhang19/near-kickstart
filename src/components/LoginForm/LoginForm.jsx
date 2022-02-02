import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import "./LoginForm.css"

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const postData = async () => {
        
    };

    const handleSubmit = () => {

        wallet.requestSignIn(
            {contractId: nearConfig.contractName}, //contract requesting access
            'Kickstart', //optional name
            null, //optional URL to redirect to if the sign in was successful
            null //optional URL to redirect to if the sign in was NOT successful
        );

        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.location = window.location.origin;
            });
        }
    };
    return (
        <div id="login-form-container" className="form-container">
            <form>
                <button className="submit-button" type="submit" onClick={handleSubmit}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginForm