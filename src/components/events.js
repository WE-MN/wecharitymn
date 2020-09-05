import React, { Component } from "react";

export class Events extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Events</h2>
            <p>

            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">

              {this.props.data
                ? this.props.data.map((d,i) => (
                  <div key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                  <div className="portfolio-item">
                    <div className="hover-bg">
                      {" "}
                      <a
                        // href={d.link}
                        title={d.title}
                        data-lightbox-gallery="gallery1"
                      >
                        <div className="hover-text">
                        <h4>{d.title}</h4>
                        </div>
                        <img
                          src={d.img}
                          className="img-responsive"
                          alt="..."
                        />{""}
                      </a>{" "}
                    </div>
                  </div>
                </div>
                  ))
                : "Loading..."}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
