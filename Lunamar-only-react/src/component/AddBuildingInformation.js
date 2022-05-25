import {useHistory} from "react-router-dom";
import React, { Component }  from 'react';
import axios from 'axios';


class AddBuildingInformation extends Component{


state ={
building_no: "",
block_no: ""
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
console.log(this.state.building_no);
console.log(this.state.block_no);
console.log(this.state.services);

let formData = new FormData();
formData.append("username",username);
formData.append("building_no",this.state.building_no);
formData.append("block_no",this.state.block_no);
formData.append("services",this.state.services);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addBuildingInfo";
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
        <div className="welcome-text">
		    <a>Go Back</a>
            <h1>
                <span>Add Building Information</span>
            </h1>
            <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
                <input onChange={this.handleAdd} name="building_no" placeholder="buildingNo" type="text" id="building_no" required></input>
                <br></br>
                <input onChange={this.handleAdd} name="block_no" placeholder="blockNo" type="text" id="block_no" required></input>
				<br></br>

                <br></br>
                <button type="submit" id="submit" style={{width: "20% ;"}}>Submit</button>
                <button type="reset" id="reset" style={{ width: "20% ;", marginLeft: "60px;" }}>Reset</button>
            </form>
        </div>
    );
}
}

export default AddBuildingInformation;
