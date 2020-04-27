import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';

function App() {
  const portfolioLinks = [
   
    {
      title: 'Sustainably Develop',
      caption: 'Make initiatives to sustain some of our sources for the future generation'
    },
    {
      title: 'Say no to Deforestation',
      caption: 'Deforestaion is the important feature for a lot of natural calamities. Make enough measure to stop that'
    },
    {
      title: 'Planting Plants',
      caption: 'Try planting trees nearby your home. Take proper care of it. One day it will sure help you.'
    }
  ]

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">IIT MADRUSH</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Theme</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Statistics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome all to the</div>
        <div className="intro-heading text-uppercase">FUN FEST 2020</div>
       <div className="intro-heading">Be awesome and save NATURE</div>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About Us</h2>
          <h3 className="section-subheading text-muted">Fun fest, a spectacular showcase of talent,an epitome of incredible human experience. Our mission is to bring happiness and ecsaty to you.This year we have our 50th grand edition! HURRAY! Join us this year from 19th September-24th September at Fun Fest!.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-music fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Music Fun</h4>
          <p className="text-muted">Music is an integerated part of our lives. And yeah! We have a live concert of our favourite XXX band who are going to perform for us.. Gear up guyss</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-table fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">EDM night</h4>
          <p className="text-muted">Well, nothing is much better than dancing amidst a huge croud for your favourite music and with your friends right? Thats why we have EDM night on the first day of the event. Wear up your suits and ROCK!!</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-spoon fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Food Stalls</h4>
          <p className="text-muted">Dont miss the food stalls near KP ground or you gonna regret.</p>
        </div>
      </div>
    </div>
  </section>

  
  <Portfolio portfolioLinks={portfolioLinks}></Portfolio>

  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Stats</h2>
          <h3 className="section-subheading text-muted">We keep the counts high varying from the footfalls to the events so as to run more successfully!!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
            <h4>250+</h4>
            <p className="text-muted">EVENTS</p>
            <ul className="list-inline social-buttons">
              
              
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-table"></i>
                </a>
              </li>
            </ul>
           
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
            <h4>14K+</h4>
            <p className="text-muted">FOOTFALL</p>
            <ul className="list-inline social-buttons">
              
              
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-table"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
            <h4>250+</h4>
            <p className="text-muted">INTERNATIONAL EVENTS</p>
            <ul className="list-inline social-buttons">
              
              
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-table"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Not just that, We have 2000+ colleges participating in the event all across India</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">We are here to always help</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; IIT MADRUSH</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
           
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            
            
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;
