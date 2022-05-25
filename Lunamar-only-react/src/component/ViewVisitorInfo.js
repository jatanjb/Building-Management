import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row, Table, Button, Modal, input, Radio, Checkbox } from 'antd';

class ViewVisitorInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      visitors: [],
      isLoading: false,
      isError: false,
      currentPage: 1,
      todosPerPage: 3
          
    }
  }


handleVisitorInput = (e) =>{
    this.setState({[e.target.name]:e.target.value})
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
    var url = "";
    if(role === "Admin" || role === "Manager"){
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewAllVisitorsInfo";
    }else{
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewVisitorsInfo";
    }
    axios.post(url, data)
      .then(res => {
        const visitors = res.data;
        this.setState({ visitors, isLoading: false })
        console.log(visitors)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  delete() {
    let id = this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id", id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteVisitorsInfo";
    axios.post(url, formData).then((res) => {
      console.log('deleted');
      window.location = "/ViewVisitorInfo"
      this.getData();
    }).catch(function (err) {
      console.log(err);
    });
  }

  editVisitor(id,firstname,lastname,apt_no,purpose,car_no,mobileno,in_date,out_date) {

    
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(firstname);
    console.log(lastname);
    console.log(apt_no);
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
    formData.append("apt_no",apt_no);
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
    return this.state.visitors.map(visitor => {
      return (
        <tr key={visitor.id}>
          <td>{visitor.id}</td>
          <td>{visitor.firstname}</td>
          <td>{visitor.lastname}</td>
          <td>{visitor.apt_no}</td>
          <td>{visitor.purpose}</td>
          <td>{visitor.mobileno}</td>
          <td>{visitor.car_no}</td>
          <td>
            <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: visitor.id, firstname: visitor.firstname, lastname: visitor.lastname, apt_no: visitor.apt_no, purpose: visitor.purpose, mobileno: visitor.mobileno, car_no: visitor.car_no ,in_date: visitor.in_date  ,out_date: visitor.out_date })}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({ deleteId: visitor.id }, () => this.delete())}></img>
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
            <span>Visitor Information</span>
          </h1> 
        </div>

        <table style={{ position: "relative", top: "150px", height: "200px" }}>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Apartment Number</th>
            <th>Purpose</th>
            <th>Phone Number</th>
            <th>Car Number Plate</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}

        </table>
        <div className="welcome-text" style={{height: "110%"}}>
            <h1>
                <span>Edit Visitor Informationr</span>
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
            value={this.state.apt_no}
            name="apt_no"
            onChange={(e) => this.handleVisitorInput(e)}
            placeholder="Apt No">
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
                <button className="login-button" type="button" id="submit" onClick = {this.editVisitor(this.state.id,this.state.firstname,this.state.lastname,this.state.apt_no,this.state.purpose,this.state.car_no,this.state.mobileno,this.state.in_date,this.state.out_date)}>
                  Update</button>
            </form>
        </div>
        
      </>
    );
  }
}
export default ViewVisitorInfo;
