//import './AddVisitorInformation.css';
import {useHistory} from "react-router-dom"
import React, { Component }  from 'react';
import axios from 'axios';

class AddVisitorInformation extends Component{

state ={
fname: "",
lname: "",
phone: "",
apt_no: "",
car_no: "",
purpose: "",
in_date: "",
out_date: ""
};
handleAdd= async e =>{
  console.log(e.target.name);
  await this.setState({
    [e.target.name] : e.target.value,
  })
}
handleSubmit = e =>{
e.preventDefault();
var sessiondata = sessionStorage.getItem('userData');
var jsonsession = JSON.parse(sessiondata);
var username = jsonsession.username;

console.log(username);
console.log(this.state.fname);
console.log(this.state.lname);
console.log(this.state.phone);
console.log(this.state.apt_no);
console.log(this.state.car_no);
console.log(this.state.purpose);
console.log(this.state.in_date);
console.log(this.state.out_date);

let formData = new FormData();
formData.append("username",username);
formData.append("fname",this.state.fname);
formData.append("lname",this.state.lname);
formData.append("phone",this.state.phone);
formData.append("apt_no",this.state.apt_no);
formData.append("car_no",this.state.car_no);
formData.append("purpose",this.state.purpose);
formData.append("in_date",this.state.in_date);
formData.append("out_date",this.state.out_date);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addVisitorsInfo";
axios.post(url,formData)
.then(res=>
{
  console.log(res.data);
}
)
.catch(err=> console.log(err));
}

render(){
    //const history = useHistory();
    return (
      <main>
      <div className="welcome-text" style={{height: "150%"}}>
        <a onClick=""><strong>Go Back</strong></a>
        <h1>
            <span>Visit An Apartment</span>
        </h1>
        <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
            <input onChange={this.handleAdd} name="fname" placeholder="First name" type="text" id="firstname" required></input>
            <br></br>
            <input onChange={this.handleAdd} name="lname" placeholder="Last name" type="text" id="lastname" required></input>
            <br></br>
            <input onChange={this.handleAdd} name="phone" placeholder="Phone Number" type="number" id="phonenumber" required></input>
            <br></br>
            <input onChange={this.handleAdd} name="apt_no" placeholder="Apartment Number" type="text" id="apartmentnumber" required></input>
            <br></br>
            <input onChange={this.handleAdd} name="car_no" placeholder="Car Number Plate" type="text" id="carnumberplate" required></input>
            ​<textarea onChange={this.handleAdd} name="purpose" placeholder="Purpose" id="purpose" rows="10" cols="70"></textarea>
            <div style={{width: "82%", height: "70px"}}>
                <span style={{color: "#fff"}}>In Date</span>&nbsp;&nbsp;
                <input onChange={this.handleAdd} name="in_date" placeholder="In Date" type="date" id="indate" required></input>
            </div>
            <div style={{width: "80%", height: "70px"}}>
                <span style={{color: "#fff"}}>Out Date</span>&nbsp;
                <input onChange={this.handleAdd} name="out_date" placeholder="Out Date" type="date" id="outdate" required></input>
            </div>
            <button type="submit" id="submit" style={{width: "20%"}}>Submit</button>
            <button type="reset" id="reset" style={{width: "20%",marginLeft: "60px"}}>Reset</button>
        </form>
    </div>
    </main>
    );
}
}

export default AddVisitorInformation;
