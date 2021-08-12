import React, { Component } from "react";

export class Alumni extends Component {
  render() {
    return (
      <div id="alumni" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Alumni</h2>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 alumni">
                    <div className="thumbnail">
                      {" "}
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Alumni;
