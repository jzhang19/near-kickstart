// npm modules from https://npm.js.com/
import React, {useState} from "react"
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
    <div>
      <nav className="navbar">
        <div>
          { currentUser
            ? <button onClick={signOut}>Log out</button>
            : <button onClick={signIn}>Log in</button>
          }
          { currentUser
          ? 
              currentUser.accountId + ' ' + Big(currentUser.balance).div(10 ** 24) + 'Ⓝ'
          : ""
          }
          { !!currentUser }
        </div>
      </nav>
      <div id="img-div">
        <img id="logo" src={require('../../assets/logo-black.svg')} alt="locally"/>
      </div>
    </div>
  )
}

export default Nav