import React from "react";
import { useHistory} from "react-router-dom"

function Thanks() {
    const history = useHistory()
    const Home = () => {
    history.push('/')}
    return (<div className="thank-you">
        <h3> Thank you for your support, it means the world!</h3>
        <p> Are you feeling generous?</p>
        <button id="delete-button" className="submit-button" onClick={Home}>Donate again!</button>
    </div>)
}

export default Thanks;