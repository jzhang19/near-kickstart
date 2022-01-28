import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom"
import NewProjectForm from "../components/NewProjectForm/NewProjectForm"

function NewProjectPage() {
    const [token, setToken] = useState(window.localStorage.getItem('token'))
    const history = useHistory ()
    useEffect(() => {
        setToken(window.localStorage.getItem('token'))
    }, [])
    function SignUp() {
        history.push('/sign-up/')
    }
    return token !== "null" 
    ? <NewProjectForm /> 
    : (<div className="unauthorised">
        <h3> What are you doing here?</h3>
        <p> You need to join our community to create a new project!</p>
        <button id="delete-button" className="submit-button" onClick={SignUp}>SIGN UP HERE!</button>

    </div>)

}

export default NewProjectPage;