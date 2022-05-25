import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component } from 'react';
import axios from 'axios';

class ViewPoolInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pool: [],
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
    data.append("username", username);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewPoolInfo";
    axios.post(url, data)
      .then(res => {
        const pool = res.data;
        this.setState({ pool, isLoading: false })
        console.log(pool)
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  delete() {
    let id = this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id", id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deletePoolInfo";
    axios.post(url, formData).then((res) => {
      console.log('deleted');
      window.location = "/ViewPoolInfo"
      this.getData();
    }).catch(function (err) {
      console.log(err);
    });
  }

  renderTableRows = () => {
    return this.state.pool.map(pools => {
      return (
        <tr>
          <td>{pools.id}</td>
          <td>{pools.poolName}</td>
          <td>{pools.poolStatus}</td>
          <td>{pools.createdBy}</td>
          <td>{pools.createdDate}</td>
          <td>
          <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: pools.id, poolName: pools.poolName, poolStatus: pools.poolStatus, createdBy: pools.createdBy, createdDate: pools.createdDate})}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({ deleteId: pools.id }, () => this.delete())}></img>
          </td>
        </tr>
      )
    })
  }

  edit(id, poolName, poolStatus, createdBy, createdDate) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(poolName);
    console.log(poolStatus);
    console.log(createdBy);
    console.log(createdDate);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("username", username);
    formData.append("poolName", poolName);
    formData.append("poolStatus", poolStatus);
    formData.append("createdBy", createdBy);
    formData.append("createdDate", createdDate);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updatePoolInfo";
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
            <span>Pool Information</span>
          </h1>
        </div>

        <table style={{ position: "relative", top: "210px", height: "200px" }}>
          <tr>
            <th>poolId</th>
            <th>poolName</th>
            <th>Status</th>
            <th>UserId</th>
            <th>createdDate</th>
            
            
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
              value={this.state.poolName}
              name="poolName"
              onChange={(e) => this.handleInput(e)}
              placeholder="Pool Name">
            </input>
            <br></br>
            <input
              value={this.state.poolStatus}
              name="poolStatus"
              onChange={(e) => this.handleInput(e)}
              placeholder="Pool Status">
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
              value={this.state.createdDate}
              name="createdDate"
              onChange={(e) => this.handleInput(e)}
              placeholder="Created Date">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.poolName, this.state.poolStatus, this.state.createdBy, this.state.createdDate)}>
              Update</button>
          </form>
        </div>
      </>
    );
  }
}

export default ViewPoolInfo;
