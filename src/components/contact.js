import React, { Component } from "react";
import * as emailjs from 'emailjs-com';

export class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '[Website Email]',
      message: '',
      disabled: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.checkFields)
    const { name, email, subject, message } = this.state
    let templateParams = {
      name: name,
      from_email: email,
      subject: subject,
      message_html: message
      }
      emailjs.send(
      'gmail',
      'template_3xqvDz8R',
        templateParams,
      'user_QSxIqOrf7vNJVr6GvVJzJ'
      )
      this.resetForm()
    }

 resetForm() {
  this.setState({
    name: '',
    email: '',
    message: '',
    disabled: true
  })
}

async handleChange(param, e) {
  await this.setState({ [param]: e.target.value })
  const { name, email, message } = this.state
  if(name !=='' && email !=='' && message !==''){
    await this.setState({
      disabled: false
    })
  }else{
    await this.setState({
      disabled: true
    })
  }  
}

render() {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we
                  will get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                    <input
                      id="name"
                      name="name"
                      value={this.state.name}
                      className="form-control"
                      onChange={this.handleChange.bind(this, 'name')}
                      placeholder="Enter Name"
                      required="required"
                    />
                      {/* <p className="help-block text-danger">{this.state.nameField}</p> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange.bind(this, 'email')}
                        className="form-control"
                        placeholder="Enter Email"
                        required="required"
                      />
                      {/* <p className="help-block text-danger">{this.state.emailField}</p> */}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                    placeholder="Message"
                    required="required"
                  ></textarea>
                  <p className="help-block text-danger">{this.state.messageField}</p>
                </div>
                <div id="success"></div>
                <button type="submit" disabled={this.state.disabled} className="btn btn-custom btn-lg" onClick={this.handleSubmit}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
            </div>
            
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {this.props.data ? this.props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={this.props.data ? this.props.data.instagram : "/" }
                      rel="noopener noreferrer"
                      target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a 
                    href={this.props.data ? this.props.data.facebook : "/"}
                    rel="noopener noreferrer" 
                    target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a 
                    href={this.props.data ? this.props.data.linkedin : "/"}
                    rel="noopener noreferrer" 
                    target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2020 MN WE: Wish to Empower. Created by {"MN WE Executive Board"}
          </p>
        </div>
      </div>
    </div>
  );
}
}

export default Contact;
