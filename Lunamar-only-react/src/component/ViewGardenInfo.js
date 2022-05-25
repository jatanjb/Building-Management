//import './GardenInfo.css';
//import edit from '../images/edit.svg';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewGardenInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewgarden: [],
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
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewGardenInfo";
    axios.post(url, data)
      .then(res => {
        const viewgarden = res.data;
        this.setState({ viewgarden, isLoading: false })
        console.log(viewgarden)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state);
  }

  edit(id, gardenName, createdDate, createdBy, gardenStatus ) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(gardenName);
    console.log(gardenStatus);
    console.log(createdBy);
    console.log(createdDate);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("username", username);
    formData.append("gardenName", gardenName);
    formData.append("gardenStatus", gardenStatus);
    formData.append("createdBy", createdBy);
    formData.append("createdDate", createdDate);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateGardenInfo";
    axios.post(url, formData)
      .then(res => {
        console.log("updateeeeeeee");
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }

  delete(){
    let id= this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id",id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteGardenInfo";
    axios.post(url, formData).then((res) => {
        console.log('deleted');
        window.location= "/ViewGardenInfo"
        this.getData();
    }).catch(function (err) {
        console.log(err);
    });
  }

  renderTableRows = () => {
    return this.state.viewgarden.map(viewgardens => {
      return (
        <tr>
          <td>{viewgardens.id}</td>
          <td>{viewgardens.gardenName}</td>
          <td>{viewgardens.createdDate}</td>
          <td>{viewgardens.gardenStatus}</td>
          <td>{viewgardens.createdBy}</td>
          <td>
          <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: viewgardens.id, gardenName: viewgardens.gardenName, createdDate: viewgardens.createdDate, gardenStatus: viewgardens.gardenStatus, createdBy: viewgardens.createdBy})}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({deleteId:viewgardens.id},()=>this.delete())}></img>
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
            <span>Garden Information</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "210px", height: "200px" }}>
          <tr>
            <th>gardenId</th>
            <th>gardenName</th>
            <th>createdDate</th>
            <th>Status</th>
            <th>createdBy</th>
            <th>Action</th>
          </tr>
          {this.renderTableRows()}
        </table>
        <div className="welcome-text" style={{ height: "110%" }}>
          <h1>
            <span>Edit Pool Information</span>
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
              value={this.state.gardenName}
              name="gardenName"
              onChange={(e) => this.handleInput(e)}
              placeholder="Garden Name">
            </input>
            <br></br>
            <input
              value={this.state.createdDate}
              name="createdDate"
              onChange={(e) => this.handleInput(e)}
              placeholder="Create dDate">
            </input>
            <br></br>
            <input
              value={this.state.createdBy}
              name="createdBy"
              onChange={(e) => this.handleInput(e)}
              placeholder="Created By">
            </input>
            <br></br>
            <input
              value={this.state.gardenStatus}
              name="gardenStatus"
              onChange={(e) => this.handleInput(e)}
              placeholder="Garden Status">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.gardenName, this.state.createdDate, this.state.createdBy, this.state.gardenStatus)}>
              Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default ViewGardenInfo;
