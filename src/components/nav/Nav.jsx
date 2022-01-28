// npm modules from https://npm.js.com/
import React, {useState} from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
// import LoginForm from "../LoginForm/LoginForm"
import "./Nav.css"


const Nav = () => {
  const location = useLocation()
  const history = useHistory();
  // console.log(location)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const logout = () => {
    localStorage.setItem('token', null)
    history.push('/')
    setToken(null)
    // window.location = window.location.origin
  }
  console.log("getting token in nav", localStorage.getItem('token'))
  return (
    <div>
      <nav className="navbar">
        {
          !token || token === "null"
          ? <div className="nav-links">
          <Link className={`${location.pathname === '/' ? 'active' : ''}`}to="/">Home</Link>
          <Link className={`${location.pathname === '/login/' ? 'active' : ''}`} to="/login/">Login</Link>
          <Link className={`${location.pathname === '/sign-up/' ? 'active' : ''}`} to="/sign-up/">Sign up!</Link>
          </div>
          : <div className="nav-links">
          <Link className={`${location.pathname === '/' ? 'active' : ''}`}to="/">Home</Link>
          <Link className={`${location.pathname === '/new-project/' ? 'active' : ''}`}to="/new-project/">New project +</Link>
          <button id="logout-button" onClick={logout} className={`${location.pathname === '/login/' ? 'active' : ''}`}>Logout</button>
        </div>

        }
      </nav>
      <div id="img-div">
        <img id="logo" src={require('../../assets/locally-logo.jpg')} alt="locally"/>
      </div>
    </div>
  )
}

export default Nav