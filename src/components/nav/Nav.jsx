// npm modules from https://npm.js.com/
import React, {useState} from "react"
import { Link, useLocation, useHistory } from "react-router-dom"
import Big from 'big.js';
import "./Nav.css"


const Nav = ({ contract, currentUser, nearConfig, walletConnection }) => {

  const signIn = () => {
    walletConnection.requestSignIn(
      {contractId: nearConfig.contractName}, //contract requesting access
      'NEAR Kickstart', //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    );
  };

  const signOut = () => {
    walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <div className="container">
      <Link to="/" className="logo pull-left">
        <img src={require('../../assets/logo-black.svg')} alt="logo"/>
      </Link>
      <nav className="navbar">
        <div className="dropdown pull-left">
          <a data-toggle="dropdown" href="#">Store <b className="caret"></b></a>
          <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
            <li><a href="index.html">Home Page</a></li>
            <li><a href="browse.html">Browse Page</a></li>
            <li><a href="single_item.html">Single Item Page</a></li>
            <li><a href="single_item_themeforest_affiliate.html">Single Item Themeforest Affiliate Page</a></li>
            <li><a href="login.html">Login Page</a></li>
            <li><a href="signup.html">Signup Page</a></li>
            <li><a href="services.html">Services Page</a></li>
            <li><a href="order_service.html">Order Service Page</a></li>
            <li><a href="cart.html">Cart Page</a></li>
            <li><a href="downloads.html">Downloads Page</a></li>
            <li><a href="works.html">Works Page</a></li>
            <li><a href="case_study.html">Case Study Page</a></li>
            <li><a href="pricing.html">Pricing Page</a></li>
            <li><a href="knowledge_base.html">Knowledge Base Page</a></li>
            <li><a href="knowledge_base_browse_topic.html">Knowledge Base Browse Topic Page</a></li>
            <li><a href="knowledge_base_single_topic.html">Knowledge Base Single Topic Page</a></li>
            <li><a href="contact_support.html">Contact Support Page</a></li>
            <li><a href="about_us.html">About Us Page</a></li>
          </ul>
        </div>
        <ul className="list-inline pull-left">
          <li><a href="services.html">Services</a></li>
          <li><a href="contact_support.html">Support</a></li>
          <li><a href="works.html">Custom Job</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
        <ul className="list-inline pull-right">
          <li><a href="cart.html">Your Cart</a></li>
        </ul>
        <div>
          { currentUser ? <button type="button" onClick={signOut}>Log out</button>  : <button type="button" onClick={signIn}>Log in</button> }
        </div>
      </nav>
    </div>
  )
}

export default Nav