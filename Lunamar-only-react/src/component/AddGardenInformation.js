import {useHistory} from "react-router-dom"
import React, { Component }  from 'react';
import axios from 'axios';
//import {useHistory} from "react-router-dom";

class AddGardenInformation extends Component{

state ={
gardenName: "",
gardenStatus: ""
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
console.log(this.state.gardenName);
console.log(this.state.gardenStatus);
//console.log(this.state.services);

let formData = new FormData();
formData.append("username",username);
formData.append("gardenName",this.state.gardenName);
formData.append("gardenStatus",this.state.gardenStatus);
//formData.append("services",this.state.services);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addGardenInfo";
axios.post(url,formData)
.then(res=>
{
  console.log(res.data);
}
)
.catch(err=> console.log(err));
}

render(){
  //  const history = useHistory();
    return (
        <div className="welcome-text" >
            <a>Go Back</a>
            <h1>
                <span>Add Garden Information</span>
            </h1>
            <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
                <input onChange={this.handleAdd} name="gardenName" placeholder="gardenName" type="text" id="gardenname" required></input>
                <br></br>
                <input onChange={this.handleAdd} name="gardenStatus" placeholder="Status" type="text" id="gardenStatus" required></input>
                <br></br>
                &nbsp;&nbsp;
                <br></br>
                <button type="submit" id="submit" style={{width: "20% ;"}}>Submit</button>
                <button type="reset" id="reset" style={{ width: "20% ;", marginLeft: "60px;" }}>Reset</button>
            </form>
        </div>
    );
}
}

export default AddGardenInformation;
