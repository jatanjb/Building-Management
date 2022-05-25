//import './IncidentRequestForm.css';
//import {useHistory} from "react-router-dom";
import React, { Component }  from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

class IncidentRequestFormVisitor extends Component{

state ={
incidentDesc: "",
incidentDate: ""
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
console.log(this.state.incidentDesc);
console.log(this.state.incidentDate);

let formData = new FormData();
formData.append("username",username);
formData.append("incidentDesc",this.state.incidentDesc);
formData.append("incidentDate",this.state.incidentDate);
formData.append("reportedBy", username);
formData.append("reportedFor", "Visitor");
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addIncidentsInfo";
axios.post(url,formData)
.then(res=>
{
  console.log(res.data);
}
)
.catch(err=> console.log(err));
}

  render(){

    return (
        <main>
            <div className="login-text" style={{height:"90%"}}>
    		    <a onClick=""><strong>Go Back</strong></a>
                <h1>
                    <span>Register Incident / Request</span>
                </h1>
                <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
                    ​<textarea onChange={this.handleAdd} name="incidentDesc" placeholder="Incident or Request Description" id="incidentorrequestdescription" rows="10" cols="70"></textarea>
                    <div style= {{width: "82%", height: "70px"}}>
                        <span style= {{color: "#fff"}}>Incident/Request Date</span>&nbsp;&nbsp;
                        <input onChange={this.handleAdd} name="incidentDate" placeholder="Incident/Request Date" type="date" id="Incident/RequestDate" required></input>
                    </div>
                    <br></br>
                    <button type="submit" id="submit" style= {{width: "20%"}}>Submit</button>
                    <button type="reset" id="reset" style= {{width: "20%", marginLeft: "60px"}}>Reset</button>
                </form>
            </div>
        </main>
    );
  }
}

export default IncidentRequestFormVisitor;
