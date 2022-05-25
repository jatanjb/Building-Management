import './Header.css';
import logo from '../images/Lunamer.png';
import './ManagerDashboard.css';

import React, { Component } from 'react';

class Header extends Component {
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

   handleHome = () => {
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;
    var role = jsonsession.role;
    // chatLink = "http://localhost:3001/" + username;
    if (role === "Admin") {
      window.location = "/Admin"
    } else {
      window.location = "/ManagerDashboard";
    }
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
      <div class="navbar">
        <input type="checkbox" id="navCheck"></input>
        <div class="navHeader">
          <div class="navTitle">
            <img src={logo} alt="Lunamer" style={{ height: "150px" }}></img>
          </div>
        </div>
        <div class="navBtn">
          <label for="navCheck">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="navLinks">
          <a onClick={this.handleHome}>Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href={this.state.chatLink}>Chat</a>
          <a href="http://dxs0748.uta.cloud/">Blog</a>
          <a href='/' onClick={this.handleLogout}>Logout</a>

        </div>
      </div>
    );

  }

}






// function Header() {
//   var chatLink = "";
//   const handleLogout = () => {
//     sessionStorage.removeItem("userData");
//   }

//   const handleHome = () => {
//     var sessiondata = sessionStorage.getItem('userData');
//     var jsonsession = JSON.parse(sessiondata);
//     var username = jsonsession.username;
//     var role = jsonsession.role;
//     chatLink = "http://localhost:3001/" + username;
//     if (role === "Admin") {
//       window.location = "/Admin"
//     } else {
//       window.location = "/ManagerDashboard";
//     }
//   }

//   return (
//     <div class="navbar">
//       <input type="checkbox" id="navCheck"></input>
//       <div class="navHeader">
//         <div class="navTitle">
//           <img src={logo} alt="Lunamer" style={{ height: "150px" }}></img>
//         </div>
//       </div>
//       <div class="navBtn">
//         <label for="navCheck">
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>
//       </div>

//       <div class="navLinks">
//         <a onClick={handleHome}>Home</a>
//         <a href="/about">About</a>
//         <a href="/services">Services</a>
//         <a href="/contact">Contact</a>
//         <a href="/chat">Chat</a>
//         <a href="http://dxs0748.uta.cloud/">Blog</a>
//         <a href={chatLink} onClick={handleLogout}>Logout</a>

//       </div>
//     </div>
//   );
// }

export default Header;