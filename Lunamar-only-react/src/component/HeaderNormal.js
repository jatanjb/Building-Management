import './Header.css';
import logo from '../images/Lunamer.png';
import {Link} from "react-router-dom";
import React, { Component } from 'react';

class HeaderNormal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link: ""
    }
  }

  // var chatLink = "";
   handleLogout = () => {
    sessionStorage.removeItem("userData");
  }

   handleHome = () => {
    
  }

  async componentDidMount() {

    var sessiondata = sessionStorage.getItem('userData');
    if (sessiondata){
      var jsonsession = JSON.parse(sessiondata);
      var role = jsonsession.role;
      var link = "";
      // chatLink = "http://localhost:3001/" + username;
      if (role === "Admin") {
        link = "/Admin"
        this.setState({ link, isLoading: false })
      }else if (role === "Manager") {
        link = "/ManagerDashboard"
        this.setState({ link, isLoading: false })
      } else if (role === "Resident"){
        link = "/ViewVisitorInfo";
        this.setState({ link, isLoading: false })
      }else if (role === "Visitor"){
        link = "/ViewIncidentInfoVisitor";
        this.setState({ link, isLoading: false })
      }else{
        link = "/";
        this.setState({ link, isLoading: false })
      }
    }else{
      link = "/";
      this.setState({ link, isLoading: false })
    }
   


  }

  render() {
    return (
      <div className="navbar">
      <input type="checkbox" id="navCheck"></input>
      <div className="navHeader">
        <div className="navTitle">
          <img src={logo} alt="Lunamer" style={{height:"150px"}}></img>
        </div>
      </div>
      <div className="navBtn">
        <label htmlFor="navCheck">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="navLinks">
        <a href={this.state.link}>Home</a> 
        <a href="/about">About</a>
      {/*  <Link to="/about">About</Link> */}

        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        {/*   <li><a href="/chat">Chat</a></li>*/}
        <a href="http://dxs0748.uta.cloud/">Blog</a>
        <a href="/register">Register</a>
      </div>
    </div>
    );

  }

}


  // function HeaderNormal() {
  //   return (
  //     <div className="navbar">
  //       <input type="checkbox" id="navCheck"></input>
  //       <div className="navHeader">
  //         <div className="navTitle">
  //           <img src={logo} alt="Lunamer" style={{height:"150px"}}></img>
  //         </div>
  //       </div>
  //       <div className="navBtn">
  //         <label htmlFor="navCheck">
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </label>
  //       </div>

  //       <div className="navLinks">
  //         <a href="/">Home</a> 
  //         <a href="/about">About</a>
  //       {/*  <Link to="/about">About</Link> */}

  //         <a href="/services">Services</a>
  //         <a href="/contact">Contact</a>
  //         {/*   <li><a href="/chat">Chat</a></li>*/}
  //         <a href="http://dxs0748.uta.cloud/">Blog</a>
  //         <a href="/register">Register</a>
  //       </div>
  //     </div>
  //   );
  // }

export default HeaderNormal;
