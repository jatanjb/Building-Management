import {useHistory} from "react-router-dom";
import React, { Component }  from 'react';
import axios from 'axios';

class AddOwnerInformation extends Component{

state ={
owner_name: "",
owner_username:"",
floor_no: "",
block_no: "",
apt_no: ""
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
console.log(this.state.owner_name);
console.log(this.state.owner_username);
console.log(this.state.floor_no);
console.log(this.state.block_no);
console.log(this.state.apt_no);
//console.log(this.state.services);

let formData = new FormData();
formData.append("owner_username",this.state.owner_username);
formData.append("owner_name",this.state.owner_name);
formData.append("floor_no",this.state.floor_no);
formData.append("block_no",this.state.block_no);
formData.append("apt_no",this.state.apt_no);
formData.append("username",username);
//formData.append("services",this.state.services);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addOwnerInfo";
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
      <div className="welcome-text" style={{height: "90%"}}>
			<a onClick=""><strong>Go Back</strong></a>
            <h1>
                <span>Add Owner Information</span>
            </h1>
            <form class="loginbox" onSubmit={this.handleSubmit}>
				<label for="role" style={{color: "#fff"}}>Owner name: </label>
              <input onChange={this.handleAdd} name="owner_name" type="text" id="Owner name"  required style={{marginRight:"30px"}}></input>
				<br></br>
        <label for="role" style={{color: "#fff"}}>Owner Username: </label>
              <input onChange={this.handleAdd} name="owner_username" type="text" id="Owner Username"  required style={{marginRight:"30px"}}></input>
				<br></br>
				<label for="role" style={{color: "#fff"}}>Floor No: </label>
                <input onChange={this.handleAdd} name="floor_no" type="text" id="floorNo"  required></input>
				<br></br>
				<label for="role" style={{color: "#fff"}}>Block No: </label>
                <input onChange={this.handleAdd} name="block_no" type="text" id="blockNo"  required ></input>
				<br></br>
				<label for="role" style={{color: "#fff"}}>Apartment No: </label>
                <input onChange={this.handleAdd} name="apt_no" type="text" id="apartmentNo"  required style={{marginRight:"30px"}}></input>

                <br></br>
                <button type="submit" id="submit" style={{width: "20%"}}>Submit</button>
                <button type="reset" id="reset" style={{width: "20%",marginLeft: "60px"}}>Reset</button>
            </form>
        </div>
    </main>
    );
}
}

export default AddOwnerInformation;
