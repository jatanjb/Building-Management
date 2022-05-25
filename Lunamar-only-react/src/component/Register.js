import './Register.css';
//import { useRef } from 'react';
import React, { Component }  from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';

class Register extends Component{ 
  state ={
  email: "",
  password: "",
  firstname: "",
  lastname: "",
  gender: "",
  role: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zipcode: ""
  };
  handleAdd= async e =>{
    console.log(e.target.name);
    await this.setState({
      [e.target.name] : e.target.value,
    })
  }
  handleSubmit = e =>{
  e.preventDefault();
  console.log(this.state.email);
  console.log(this.state.password);
  console.log(this.state.firstname);
  console.log(this.state.lastname);
  console.log(this.state.gender);
  console.log(this.state.role);
  console.log(this.state.phone);
  console.log(this.state.address);
  console.log(this.state.city);
  console.log(this.state.state);
  console.log(this.state.country);
  console.log(this.state.zipcode);

  let formData = new FormData();
  formData.append("email",this.state.email);
  formData.append("password",this.state.password);
  formData.append("firstname",this.state.firstname);
  formData.append("lastname",this.state.lastname);
  formData.append("gender",this.state.gender);
  formData.append("role",this.state.role);
  formData.append("phone",this.state.phone);
  formData.append("address",this.state.address);
  formData.append("city",this.state.city);
  formData.append("state",this.state.state);
  formData.append("country",this.state.country);
  formData.append("zipcode",this.state.zipcode);

  const url = "http://ae9f-129-107-80-62.ngrok.io/api/register";
  axios.post(url,formData)
  .then(res=> {
      console.log(res.data) 
      alert(res.data)
    })
  .catch(err=> {
      console.log(err);
      alert("Something went wrong!!!");
    });
    
  }
  render(){
    return (
        <div className="welcome-text">
            <h1>
                <span>Register</span>
            </h1>
            <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
                <input onChange={this.handleAdd} placeholder="Email" name="email" type="email" id="email" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="Password" name="password" type="password" id="password" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="First name" name="firstname" type="text" id="firstname" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="Last name" name="lastname" type="text" id="lastname" required></input>
                <br></br>
                <div className="radiobox">
                    <span>Gender</span>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="male" name="gender" value="male"></input>
                    <label for="male">Male</label>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="female" name="gender" value="female"></input>
                    <label for="female">Female</label>
                </div>
                <div className="optionbox">
                    <label for="role">Role:</label>&nbsp;&nbsp;
                    <select onChange={this.handleAdd} name="role" id="role">
                        <option value="Manager">Manager</option>
                        <option value="Resident">Resident</option>
                        <option value="Visitor">Visitor</option>
                    </select>
                </div>
                <input onChange={this.handleAdd} placeholder="Phone Number" name="phone" type="number" id="phonenumber" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="Address" name="address" type="text" id="address" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="City" name="city" type="text" id="city" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="State" name="state" type="text" id="state" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="Country" name="country" type="text" id="country" required></input>&nbsp;
                <input onChange={this.handleAdd} placeholder="Zip Code" name="zipcode" type="number" id="zipcode" required></input>&nbsp;
                <br></br>
                <button type="submit" className="login-button">Register</button>
            </form>

            <br></br>
            <a href="/">Already have an account?</a>
        </div>
    );
  }
}


/*
function Register() {
    const form = useRef();

    function sendEmail(event) {
        event.preventDefault();
        console.log('You clicked submit.');
        const email = event.target.email.value;
        const firstname = event.target.firstname.value;
        console.log(email)
        console.log(firstname)
        emailjs.sendForm('service_eupvrzc', 'template_xkz3zj7', form.current, 'user_CbJZrFwBtDetw36qqsMdw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset();
      }

    return (
        <div className="welcome-text">
            <h1>
                <span>Register</span>
            </h1>
            <form ref={form} className="loginbox" autocomplete="off" onSubmit={sendEmail}>
                <input placeholder="Email" name="email" type="email" id="email" required></input>&nbsp;
                <input placeholder="Password" type="password" id="password" required></input>&nbsp;
                <input placeholder="First name" name="firstname" type="text" id="firstname" required></input>&nbsp;
                <input placeholder="Last name" type="text" id="lastname" required></input>
                <br></br>
                <div className="radiobox">
                    <span>Gender</span>
                    <input type="radio" className="radio-revert" id="male" name="Gender" value="male" checked ></input>
                    <label for="male">Male</label>
                    <input type="radio" className="radio-revert" id="female" name="Gender" value="female"></input>
                    <label for="female">Female</label>
                </div>
                <div className="optionbox">
                    <label for="role">Role:</label>&nbsp;&nbsp;
                    <select name="role" id="role">
                        <option value="Manager">Manager</option>
                        <option value="Resident">Resident</option>
                        <option value="Visitor">Visitor</option>
                    </select>
                </div>
                <input placeholder="Phone Number" type="number" id="phonenumber" required></input>&nbsp;
                <input placeholder="Address" type="text" id="address" required></input>&nbsp;
                <input placeholder="City" type="text" id="city" required></input>&nbsp;
                <input placeholder="State" type="text" id="state" required></input>&nbsp;
                <input placeholder="Country" type="text" id="country" required></input>&nbsp;
                <input placeholder="Zip Code" type="text" id="zipcode" required></input>&nbsp;
                <br></br>
                <button type="submit" className="login-button">Register</button>
            </form>

            <br></br>
            <a href="/">Already have an account?</a>
        </div>
    );
} */

export default Register;
