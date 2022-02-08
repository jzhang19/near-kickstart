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

const App = ({ contract, currentUser, nearConfig, walletConnection }) => {


  return (
    <React.Fragment>
      <header>
        {/* we define our links inside here. This is how we change pages */}
        <NavigationComponent 
          contract={contract} 
          currentUser={currentUser} 
          nearConfig={nearConfig} 
          walletConnection={walletConnection}
        />
      </header>
      <main className="home">
        <div class="container">
        <section class="preview row isotope">
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress icons">
              <a href="#"><img src="images/products/circle.png" alt=""/>
                  <span class="name">Circle</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block site-template mockup">
              <a href="#"><img src="images/products/Bloggr.png" alt=""/>
                  <span class="name">Bloggr</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template">
              <a href="#"><img src="images/products/Forum.png" alt=""/>
                  <span class="name">Forum</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress site-template mockup">
              <a href="#"><img src="images/products/Funding.png" alt=""/>
                  <span class="name">Funding</span>
              </a>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12 block wordpress site-template icons">
              <a href="#"><img src="images/products/Cubetto.png" alt=""/>
                  <span class="name">Cubetto</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
              <a href="#"><img src="images/products/Geo-Shop.png" alt=""/>
                  <span class="name">Geo Shop</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block mockup site-template">
              <a href="#"><img src="images/products/iPictures.png" alt=""/>
                  <span class="name">iPictures</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
              <a href="#"><img src="images/products/News_Central.png" alt=""/>
                  <span class="name">News Central</span>
              </a>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons"/>
              <a href="#"><img src="images/products/Sharehub.png" alt=""/>
                  <span class="name">Sharehub</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
              <a href="#"><img src="images/products/Shopilicious.png" alt=""/>
                  <span class="name">Shopilicious</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
              <a href="#"><img src="images/products/Shoppr.png" alt=""/>
                  <span class="name">Shoppr</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
              <a href="#"><img src="images/products/Square.png" alt=""/>
                  <span class="name">Square</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
              <a href="#"><img src="images/products/Uri.png" alt=""/>
                  <span class="name">Uri</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
              <a href="#"><img src="images/products/West_Side.png" alt=""/>
                  <span class="name">West Side</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block psd-template icons">
              <a href="#"><img src="images/products/WooCommerce.png" alt=""/>
                  <span class="name">WooCommerce</span>
              </a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6 block wordpress psd-template icons">
              <a href="#"><img src="images/products/Youtuber.png" alt=""/>
                  <span class="name">Youtuber</span>
              </a>
          </div>
      </section>
          <Router>
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
    </React.Fragment>
  )
}

// App.propTypes = {
//   contract: PropTypes.shape({
//   }).isRequired,
//   currentUser: PropTypes.shape({
//     accountId: PropTypes.string.isRequired,
//     balance: PropTypes.string.isRequired
//   }),
//   nearConfig: PropTypes.shape({
//     contractName: PropTypes.string.isRequired
//   }).isRequired,
//   wallet: PropTypes.shape({
//     requestSignIn: PropTypes.func.isRequired,
//     signOut: PropTypes.func.isRequired
//   }).isRequired
// };

export default App