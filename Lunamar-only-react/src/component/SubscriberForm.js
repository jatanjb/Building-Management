//import './SubscriberForm.css';
import React, { Component }  from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

class SubscriberForm extends Component{

state ={
apt_no: "",
block_no: "",
services: ""
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
console.log(this.state.apt_no);
console.log(this.state.block_no);
// console.log(this.state.services);

var serviceType = '';
if(this.state.services == '25'){
serviceType = 'Water';
}else if(this.state.services == '30'){
serviceType = 'Electricity'
}else if(this.state.services == '20'){
serviceType = 'Internet'
}else{
serviceType = 'Gas'
}
console.log(serviceType);

let formData = new FormData();
formData.append("username",username);
formData.append("apt_no",this.state.apt_no);
formData.append("block_no",this.state.block_no);
formData.append("service_type",serviceType);
formData.append("cost",this.state.services);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addServicesInfo";
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
          <div className="welcome-text" style={{height:"90%"}}>
  		      <a onClick=""><strong>Home Page</strong></a>
              <h1>
                  <span>Subscribe Services</span>
              </h1>
              <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
                  <input onChange={this.handleAdd} name="apt_no" placeholder="Apartment No." type="text" id="Apartment No." required></input>
                  <br></br>
                  <input onChange={this.handleAdd} name="block_no" placeholder="Block No." type="text" id="Block No." required></input>
                  {/* <div className="radiobox">
                    <span>Services:</span>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="Water" name="Services" value="Water"></input>
                    <label for="Water">Water</label>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="Electricity" name="Services" value="Electricity"></input>
                    <label for="Electricity">Electricity</label>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="Internet" name="Services" value="Internet"></input>
                    <label for="Internet">Internet</label>
                    <input onChange={this.handleAdd} type="radio" className="radio-revert" id="Gas" name="Services" value="Gas"></input>
                    <label for="Gas">Gas</label>
                </div> */}
  				            {/* <div style={{width: "50%",height: "40px",marginLeft: "65px"}}>
  					               <label for="role" style={{color: "#fff"}}>Services: </label>
  					                    <select onChange={this.handleAdd} name="services" id="services" style={{width: "200px",height: "30px",border: "none"}}>
  					                         <option value="Water">Water</option>
  					                         <option value="Electricity">Electricity</option>
  					                         <option value="Internet">Internet</option>
  					                         <option value="Gas">Gas</option>
  					                     </select>
  				            </div> */}
                      <div style={{width: "50%",height: "40px",marginLeft: "65px"}}>
                      <label for="role" style={{color: "#fff"}}>Services: </label>
  					                    <select onChange={this.handleAdd} name="services" id="services" style={{width: "200px",height: "30px",border: "none"}}>
  					                         <option value="25">Water</option>
  					                         <option value="30">Electricity</option>
  					                         <option value="20">Internet</option>
  					                         <option value="10">Gas</option>
  					                     </select>
  				            </div>​
                   <div style={{width: "100%",height: "40px"}}>
                   <label style={{color: "#fff",position:"relative",right:"165px"}}>Cost:</label>
  				                <label style={{color: "#fff"}} id="price">{this.state.services}</label>
                  </div>
                      <button type="submit" id="submit" style={{width: "20%",position:"relative",right:"130px"}}>Submit</button>
              </form>
          </div>
      </main>
    );
}
}
export default SubscriberForm;
