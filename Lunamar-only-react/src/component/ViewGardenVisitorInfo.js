import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewGardenVisitorInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gardenvisitor: [],
      isLoading: false,
      isError: false,
      currentPage: 1,
      todosPerPage: 3
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });

  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state);
  }

  async componentDidMount() {
    var data = new FormData();
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;
    console.log(username);

    var role = jsonsession.role;
    console.log(role);

    data.append("username", username);
    data.append("role", role);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewGardenVisitorInfo";
    axios.post(url, data)
      .then(res => {
        const gardenvisitor = res.data;
        this.setState({ gardenvisitor, isLoading: false })
        console.log(gardenvisitor)
        console.log(res.data);
      })
      .catch(err => console.log(err));

  }

  delete(){
    let id= this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id",id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteVisitorsInfo";
    axios.post(url, formData).then((res) => {
        console.log('deleted');
        window.location= "/ViewGardenVisitorInfo"
        this.getData();
    }).catch(function (err) {
        console.log(err);
    });
  }
  
  edit(id,firstname,lastname,garden_name,purpose,car_no,mobileno,in_date,out_date) {

    
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(firstname);
    console.log(lastname);
    console.log(garden_name);
    console.log(out_date);
    console.log(purpose);
    console.log(mobileno);
    console.log(car_no);
    console.log(in_date);
    console.log(id);

    let formData = new FormData();
    formData.append("id",id);
    formData.append("username",username);
    formData.append("fname",firstname);
    formData.append("lname",lastname);
    formData.append("garden_name",garden_name);
    formData.append("purpose",purpose);
    formData.append("phone",mobileno);
    formData.append("car_no",car_no);
    formData.append("in_date",in_date);
    formData.append("out_date",out_date);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateVisitorsInfo";
    axios.post(url,formData)
    .then(res=>
    {
      console.log("updateeeeeeee");
      console.log(res.data);
    }
    )
    .catch(err=> console.log(err));
  }

  renderTableRows = () => {
    return this.state.gardenvisitor.map(gardenvisitors => {
      return (
        <tr>
          <td>{gardenvisitors.id}</td>
          <td>{gardenvisitors.firstname}</td>
          <td>{gardenvisitors.lastname}</td>
          <td>{gardenvisitors.garden_name}</td>
          <td>{gardenvisitors.purpose}</td>
          <td>{gardenvisitors.mobileno}</td>
          <td>{gardenvisitors.car_no}</td>
          <td>
          < img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: gardenvisitors.id, firstname: gardenvisitors.firstname, lastname: gardenvisitors.lastname, garden_name: gardenvisitors.garden_name, purpose: gardenvisitors.purpose, mobileno: gardenvisitors.mobileno, car_no: gardenvisitors.car_no ,in_date: gardenvisitors.in_date  ,out_date: gardenvisitors.out_date })}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({deleteId:gardenvisitors.id},()=>this.delete())}></img>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <>
        <div className="welcome-text" style={{ height: "10%" }}>
          <h1 style={{ marginTop: "15px" }}>
            <span>Garden Visitor's Data</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "210px", height: "200px" }}>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Garden Name</th>
            <th>Purpose</th>
            <th>Phone Number</th>
            <th>Car Number Plate</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}
        </table>
        <div className="welcome-text" style={{height: "110%"}}>
            <h1>
                <span>Edit Garden Visitor Informationr</span>
            </h1>
            <form className="loginbox" id="login"  name="login" >
            <input
            value={this.state.id}
            name="id"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="ID" hidden>
          </input>
          <br></br>
            <input
            value={this.state.firstname}
            name="firstname"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="First Name">
          </input>
          <br></br>
          <input
            value={this.state.lastname}
            name="lastname"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Last Name">
          </input>
          <br></br>
          <input
            value={this.state.garden_name}
            name="garden_name"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Garden Name">
          </input>
          <br></br>
          <input
            value={this.state.purpose}
            name="purpose"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Purpose">
          </input>
          <br></br>
          <input
            value={this.state.car_no}
            name="car_no"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Car No">
          </input>
          <br></br>
          <input
            value={this.state.mobileno}
            name="mobileno"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Mobile No">
          </input>
          <br></br>
          <input
            value={this.state.in_date}
            type="date"
            name="in_date"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="In Date">
          </input>
          <br></br>
          <input
            value={this.state.out_date}
            type="date"
            name="out_date"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Out Date">
          </input>
                <button className="login-button" type="button" id="submit" onClick = {this.edit(this.state.id,this.state.firstname,this.state.lastname,this.state.garden_name,this.state.purpose,this.state.car_no,this.state.mobileno,this.state.in_date,this.state.out_date)}>
                  Update</button>
            </form>
        </div>
        
      </>
    );
  }
}

export default ViewGardenVisitorInfo;
