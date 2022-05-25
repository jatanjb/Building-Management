import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewSubscriberInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subscriber: [],
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
    var role = jsonsession.role;
    console.log(username);
    data.append("username", username);
    data.append("role", role);
    var url = "";
    if(role === "Admin" || role === "Manager"){
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewAllServicesInfo";
    }else{
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewServicesInfo";
    }
    axios.post(url, data)
      .then(res => {
        const subscriber = res.data;
        this.setState({ subscriber, isLoading: false })
        console.log(subscriber)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  delete() {
    let id = this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id", id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteServicesInfo";
    axios.post(url, formData).then((res) => {
      console.log('deleted');
      window.location = "/ViewSubscriberInfo"
      this.getData();
    }).catch(function (err) {
      console.log(err);
    });
  }

  edit(id, service_type, apt_no, block_no, request_date, cost, status) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(service_type);
    console.log(block_no);
    console.log(apt_no);
    console.log(request_date);
    console.log(cost);
    console.log(status);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("username", username);
    formData.append("service_type", service_type);
    formData.append("block_no", block_no);
    formData.append("apt_no", apt_no);
    formData.append("request_date", request_date);
    formData.append("cost", cost);
    formData.append("status", status);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateServicesInfo";
    axios.post(url, formData)
      .then(res => {
        console.log("updateeeeeeee");
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }

  renderTableRows = () => {
    return this.state.subscriber.map(subscribers => {
      return (
        <tr>
          <td>{subscribers.id}</td>
          <td>{subscribers.service_type}</td>
          <td>{subscribers.apt_no}</td>
          <td>{subscribers.block_no}</td>
          <td>{subscribers.request_date}</td>
          <td>{subscribers.cost}</td>
          <td>{subscribers.status}</td>
          <td>
          <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: subscribers.id, service_type: subscribers.service_type, apt_no: subscribers.apt_no, block_no: subscribers.block_no, request_date: subscribers.request_date, cost: subscribers.cost, car_no: subscribers.car_no ,in_date: subscribers.in_date  ,status: subscribers.status })}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({ deleteId: subscribers.id }, () => this.delete())}></img>
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
            <span>Subscribed Services</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "150px", height: "200px" }}>
          <tr>
            <th>ID</th>
            <th>Service Type</th>
            <th>Apartment No</th>
            <th>Block No</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}
        </table>
        <div className="welcome-text" style={{ height: "110%" }}>
          <h1>
            <span>Edit Subscriber Informationr</span>
          </h1>
          <form className="loginbox" id="login" name="login" >
            <input
              value={this.state.id}
              name="id"
              onChange={(e) => this.handleInput(e)}
              placeholder="ID" hidden>
            </input>
            <br></br>
            <input
              value={this.state.service_type}
              name="service_type"
              onChange={(e) => this.handleInput(e)}
              placeholder="Service Type">
            </input>
            <br></br>
            <input
              value={this.state.apt_no}
              name="apt_no"
              onChange={(e) => this.handleInput(e)}
              placeholder="Apt No">
            </input>
            <br></br>
            <input
              value={this.state.block_no}
              name="block_no"
              onChange={(e) => this.handleInput(e)}
              placeholder="Block No">
            </input>
            <br></br>
            <input
              value={this.state.request_date}
              name="request_date"
              onChange={(e) => this.handleInput(e)}
              placeholder="Request Date">
            </input>
            <br></br>
            <input
              value={this.state.cost}
              name="cost"
              onChange={(e) => this.handleInput(e)}
              placeholder="Cost">
            </input>
            <br></br>
            <input
              value={this.state.status}
              name="status"
              onChange={(e) => this.handleInput(e)}
              placeholder="Status">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.service_type, this.state.apt_no, this.state.block_no, this.state.request_date, this.state.cost, this.state.status)}>
              Update</button>
          </form>
        </div>
      </>
    );
  }
}
export default ViewSubscriberInfo;
