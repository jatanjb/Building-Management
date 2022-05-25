import './ViewBuildingInfo.css';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewBuildingInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      building: [],
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

  async componentDidMount() {
    var data = new FormData();
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;
    console.log(username);
    data.append("username", username);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewBuildingInfo";
    axios.post(url, data)
      .then(res => {
        const building = res.data;
        this.setState({ building, isLoading: false })
        console.log(building)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  delete() {
    let id = this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id", id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteBuildingInfo";
    axios.post(url, formData).then((res) => {
      console.log('deleted');
      window.location = "/ViewBuildingInfo"
      this.getData();
    }).catch(function (err) {
      console.log(err);
    });
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state);
  }

  edit(id, building_no, block_no, createdDate, createdBy) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(building_no);
    console.log(block_no);
    console.log(createdBy);
    console.log(createdDate);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("block_no", block_no);
    formData.append("building_no", building_no);
    formData.append("createdBy", createdBy);
    formData.append("createdDate", createdDate);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateBuildingInfo";
    axios.post(url, formData)
      .then(res => {
        console.log("updateeeeeeee");
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }

  renderTableRows = () => {
    return this.state.building.map(buildings => {
      return (
        <tr>
          <td>{buildings.id}</td>
          <td>{buildings.building_no}</td>
          <td>{buildings.block_no}</td>
          <td>{buildings.createdDate}</td>
          <td>{buildings.createdBy}</td>
          <td>
            <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({ id: buildings.id, building_no: buildings.building_no, block_no: buildings.block_no, createdDate: buildings.createdDate, createdBy: buildings.createdBy })}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({ deleteId: buildings.id }, () => this.delete())}></img>
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
            <span>Building Information</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "210px", height: "200px" }}>
          <tr>
            <th>ID</th>
            <th>building_no</th>
            <th>blockNo</th>
            <th>createdDate</th>
            <th>createdBy</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}
        </table>
        <div className="welcome-text" style={{ height: "110%" }}>
          <h1>
            <span>Edit Building Information</span>
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
              value={this.state.building_no}
              name="building_no"
              onChange={(e) => this.handleInput(e)}
              placeholder="Building No">
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
              value={this.state.createdDate}
              name="createdDate"
              onChange={(e) => this.handleInput(e)}
              placeholder="Create Date">
            </input>
            <br></br>
            <input
              value={this.state.createdBy}
              name="createdBy"
              onChange={(e) => this.handleInput(e)}
              placeholder="Created By">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.building_no, this.state.block_no, this.state.createdDate, this.state.createdBy)}>
              Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default ViewBuildingInfo;
