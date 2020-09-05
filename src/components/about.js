import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src={this.props.data ? this.props.data.image : 'loading...'} className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h2>Our Mission</h2>
                <p>{this.props.data ? this.props.data.Why : 'loading...'}</p>
                <a href="https://docs.google.com/document/d/13NaXXhxwC4mBFG4ud-AFEhs5zivqSZCW8GLi6fM4FMI/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><p>Our statement on the Black Lives Matter Movement.</p></a>
                <a href="https://docs.google.com/document/d/1K6RrbZF316At9xH3r2YLyKKXI3z0-1zSWiQ-VPMf2ew/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><p>Our statement on the international WE Charity scandal.</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
