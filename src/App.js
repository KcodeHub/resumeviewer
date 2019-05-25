import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contacts';
import Footer from './Components/Footer';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumedata: {}
    }
  }
  getResumeData(){
    $.ajax({
      url:'http://localhost:3000/resumedata.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({resumedata: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }

    })
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state.resumedata);
    return (
      <div >
       <Header data={this.state.resumedata.main}/>
       <About data={this.state.resumedata.main}/>
       <Resume data={this.state.resumedata.resume}/>
       <Portfolio data={this.state.resumedata.portfolio}/>
       <Testimonials data={this.state.resumedata.testimonials}/>
       <Contact data={this.state.resumedata.main}/>
       <Footer />
      </div>
    );
  }
}

export default App;
