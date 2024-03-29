import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              MN WE: Wish to Empower
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
                  PILLARS
                </a>
              </li>
              
              {/* <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li> */}
              <li>
                <a href="#portfolio" className="page-scroll">
                  Events
                </a>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#alumni" className="page-scroll">
                  Alumni
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
              <a className="btn btn-custom btn-lg page-scroll" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LMAZZME4H4EYY&source=url" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
