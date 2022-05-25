import React, { Component }  from 'react';
import './Login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import { useRef } from 'react';

class Login extends Component{

state ={
username: "",
password: ""
//redirect: false
};
handleAdd= async e =>{
  console.log(e.target.name);
  await this.setState({
    [e.target.name] : e.target.value,
  })
}
handleSubmit = e =>{
e.preventDefault();
console.log(this.state.username);
console.log(this.state.password);
let formData = new FormData();
formData.append("username",this.state.username);
formData.append("password",this.state.password);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/login";
axios.post(url,formData)
.then(res=>
//  console.log(res.data.loginStatus)
{
  console.log(res.data);
  if(res.data.role && res.data.role == 'Admin'){
    console.log('Login successfull');
    JSON.stringify(res.data);
    sessionStorage.setItem('userData',JSON.stringify(res.data));
    window.location= "/Admin";
  }
  else if(res.data.role && res.data.role == 'Resident'){
    console.log('Login successfull');
    JSON.stringify(res.data);
    sessionStorage.setItem('userData',JSON.stringify(res.data));
    window.location= "/ViewVisitorInfo";
  }
  else if (res.data.role && res.data.role == 'Visitor') {
    console.log('Login successfull');
    JSON.stringify(res.data);
    sessionStorage.setItem('userData',JSON.stringify(res.data));
    window.location= "/ViewIncidentInfoVisitor";
  }
  else if (res.data.role && res.data.role == 'Manager') {
    console.log('Login successfull');
    JSON.stringify(res.data);
    sessionStorage.setItem('userData',JSON.stringify(res.data));
    window.location= "/ManagerDashboard";
  }
  else{
    console.log('login failed');
  }
}
)
.catch(err=> console.log(err));
}
render(){
/*
  if(this.state.redirect){
    return (<Redirect to={'/ViewVisitorInfo'}>)
  }
*/
  return(
    <div className="login-text">
            <h1>
                <span>Welcome To Lunamar</span>
            </h1>
            <form className="loginbox" id="login"  name="login" onSubmit={this.handleSubmit}>
                <input onChange={this.handleAdd} name="username" placeholder="Email" type="email" id="email"></input>
                <br/>
                <input onChange={this.handleAdd} name="password" placeholder="Password" type="password" id="password"></input>
                <br/>
                <button className="login-button" type="submit" id="submit" >Login</button>
            </form>
            <br/>
            <a href="/register">Register</a>
        </div>
  );
}
}

export default Login;
