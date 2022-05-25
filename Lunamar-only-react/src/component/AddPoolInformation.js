import {useHistory} from "react-router-dom"
import React, { Component }  from 'react';
import axios from 'axios';

class AddPoolInformation extends Component{

state ={
poolName: "",
poolStatus: ""
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
console.log(this.state.poolName);
console.log(this.state.poolStatus);
//console.log(this.state.services);

let formData = new FormData();
formData.append("username",username);
formData.append("poolName",this.state.poolName);
formData.append("poolStatus",this.state.poolStatus);
//formData.append("services",this.state.services);
const url = "http://ae9f-129-107-80-62.ngrok.io/api/addPoolInfo";
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
        <div class="welcome-text">
		<a onClick="">Garden's Home Page</a>
            <h1>
                <span>Add Pool Information</span>
            </h1>
            <form class="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>

                <input onChange={this.handleAdd} name="poolName" placeholder="poolName" type="text" id="poolname" required></input>
                <br></br>
                <input onChange={this.handleAdd} name="poolStatus" placeholder="poolStatus" type="text" id="pool_status" required></input>
				<br></br>

                <button type="submit" id="submit" style={{width: "20% ;"}}>Submit</button>
                <button type="reset" id="reset" style={{ width: "20% ;", marginLeft: "60px;" }}>Reset</button>
            </form>
        </div>
    );
}
}

export default AddPoolInformation;
