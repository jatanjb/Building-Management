import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewIncidentInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      incident: [],
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
    var url = "";
    if(role === "Admin" || role === "Manager"){
      data.append("reportedFor", "Resident");
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewAllIncidentsInfo";
    }else{
      data.append("reportedBy", username);
      url = "http://ae9f-129-107-80-62.ngrok.io/api/viewIncidentsInfo";
    }
    
    // const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewAllIncidentsInfo";
    axios.post(url, data)
      .then(res => {
        const incident = res.data;
        this.setState({ incident, isLoading: false })
        console.log(incident)
        console.log(res.data);
      })
      .catch(err => console.log(err));

  }

  delete(){
    let id= this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id",id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteIncidentsInfo";
    axios.post(url, formData).then((res) => {
        console.log('deleted');
        window.location= "/ViewIncidentInfo"
        this.getData();
    }).catch(function (err) {
        console.log(err);
    });
  }

  renderTableRows = () => {
    return this.state.incident.map(incidents => {
      return (
        <tr>
          <td>{incidents.id}</td>
          <td>{incidents.incident_desc}</td>
          <td>{incidents.incident_date}</td>
          <td>{incidents.reportedBy}</td>
          <td>{incidents.status}</td>
          <td>
          <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: incidents.id, incident_desc: incidents.incident_desc, incident_date: incidents.incident_date, reportedBy: incidents.reportedBy, status: incidents.status})}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({deleteId:incidents.id},()=>this.delete())}></img>
          </td>
        </tr>
      )
    })
  }

  edit(id, incident_desc, incident_date, reportedBy, status) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(incident_desc);
    console.log(incident_date);
    console.log(reportedBy);
    console.log(status);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("incident_desc", incident_desc);
    formData.append("incident_date", incident_date);
    formData.append("reportedBy", reportedBy);
    formData.append("status", status);
    formData.append("reportedFor", "Resident");

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateIncidentsInfo";
    axios.post(url, formData)
      .then(res => {
        console.log("updateeeeeeee");
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="welcome-text" style={{ height: "10%" }}>
          <h1 style={{ marginTop: "15px" }}>
            <span>Incident / Request Info</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "150px", height: "200px" }}>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Incident/Request Date</th>
            <th>Reported By</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}
        </table>
        <div className="welcome-text" style={{ height: "110%" }}>
          <h1>
            <span>Edit Incident/Request Information</span>
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
              value={this.state.incident_desc}
              name="incident_desc"
              onChange={(e) => this.handleInput(e)}
              placeholder="Incident Desc">
            </input>
            <br></br>
            <input
              value={this.state.incident_date}
              name="incident_date"
              onChange={(e) => this.handleInput(e)}
              placeholder="Incident Date">
            </input>
            <br></br>
            <input
              value={this.state.reportedBy}
              name="reportedBy"
              onChange={(e) => this.handleInput(e)}
              placeholder="Reported By">
            </input>
            <br></br>
            <input
              value={this.state.status}
              name="status"
              onChange={(e) => this.handleInput(e)}
              placeholder="Status">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.incident_desc, this.state.incident_date, this.state.reportedBy, this.state.status)}>
              Update</button>
          </form>
        </div>
      </>
    );
  }
}
export default ViewIncidentInfo;
