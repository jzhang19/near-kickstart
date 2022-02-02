import 'regenerator-runtime/runtime'
import React from "react"
import PropTypes from 'prop-types';
import Big from 'big.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

// These are our components

import NavigationComponent from "./components/nav/Nav.jsx"

// These are our pages

import Home from './pages/HomePage.jsx'
import Projects from "./pages/ProjectPage.jsx"
import Login from "./pages/LoginPage"
import NewProjectPage from "./pages/NewProjectPage"
import SignUpPage from "./pages/SignUpPage"
import DonationPage from "./pages/DonationPage"
import ThankYouPage from "./pages/ThankYouPage"

const App = ({ contract, currentUser, nearConfig, wallet }) => {

  const signIn = () => {
    wallet.requestSignIn(
      {contractId: nearConfig.contractName}, //contract requesting access
      'NEAR Kickstart', //optional name
      null, //optional URL to redirect to if the sign in was successful
      null //optional URL to redirect to if the sign in was NOT successful
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <main>
      <header>
        <h1>NEAR Guest Book</h1>
        { currentUser
          ? <button onClick={signOut}>Log out</button>
          : <button onClick={signIn}>Log in</button>
        }
      </header>
      { currentUser
        ? 
            currentUser.accountId + ' ' + Big(currentUser.balance).div(10 ** 24) + 'Ⓝ'
        : ""
      }
      { !!currentUser }
    
      <div>
        <Router>
          {/* we define our links inside here. This is how we change pages */}
          <NavigationComponent />
          {/* When our route changes in the url, we then render the correct page */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project/:id">
              <Projects />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/new-project">
              <NewProjectPage />
            </Route>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/donation-form">
              <DonationPage />
            </Route>
            <Route path="/thank-you">
              <ThankYouPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </main>
  )
}

App.propTypes = {
  contract: PropTypes.shape({
  }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

export default App