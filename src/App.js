import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Pillars from './components/pillars';
import About from './components/about';
// import Services from './components/services';
import Events from './components/events';
// import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Pillars data={this.state.landingPageData.Features} />
        
        {/* <Services data={this.state.landingPageData.Services} /> */}
        <Events data={this.state.landingPageData.Events}/>
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
