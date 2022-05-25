import './Header.css';
import logo from '../images/Lunamer.png';
import React, { Component } from 'react';

class HeaderResident extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chatLink: ""
    }
  }

  // var chatLink = "";
   handleLogout = () => {
    sessionStorage.removeItem("userData");
  }

   handleHome = ()  =>{
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    // var username = jsonsession.username;
    var role = jsonsession.role;
      window.location= "/ViewVisitorInfo";
  }

  async componentDidMount() {

    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;
    const chatLink = "http://localhost:3001/?name=" + username;
    console.log(chatLink)
    this.setState({ chatLink, isLoading: false })


  }

  render() {
    return (
      <div className="Header">
      <header>
        <div className="wrapper">
          <div className="logo">
            <img src={logo} alt="Lunamer"></img>
          </div>
          <div class="nav">

            <ul>
            <li><a onClick={this.handleHome}>Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a>
                <ul>
                  <li><a href="/">Manage Resident</a>
                    <ul>
                      <li><a href="/ViewVisitorInfo">View Visitor Information</a></li>
                      <li><a href="/SubscriberForm"> Subscribe Services</a></li>
                      <li><a href="/ViewSubscriberInfo"> View Subscribe Services</a></li>
                      <li><a href="/IncidentRequestForm"> Add Incident</a></li>
                      <li><a href="/ViewIncidentInfo"> View Incident</a></li>
                      <li><a href="/UploadMedia"> Upload Media</a></li>
                      <li><a href="/GetMedia"> Get Media</a></li>
                    </ul>
                  </li>
                  
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
              <li><a href={this.state.chatLink}>Chat</a></li>
              <li><a href="http://dxs0748.uta.cloud/">Blog</a></li>
              <li><a href="/" onClick={this.handleLogout}>Logout</a></li>

            </ul>
          </div>
        </div>
      </header>
    </div>
    );

  }

}



export default HeaderResident;