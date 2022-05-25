import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import React, { Component }  from 'react';
import axios from 'axios';

class ViewOwnerInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      ownerinfo: [],
      isLoading: false,
      isError: false,
      currentPage: 1,
      todosPerPage: 3
    }
    this.handleClick = this.handleClick.bind(this);
    // this.goBack = this.goBack.bind(this);
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
    data.append("username",username);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewOwnerInfo";
    axios.post(url,data)
    .then(res=>
    {
      const ownerinfo = res.data;
      this.setState({ ownerinfo, isLoading: false })
      console.log(ownerinfo)
      console.log(res.data);
    })
    .catch(err=> console.log(err));
  }

  delete(){
    let id= this.state.deleteId;
    console.log(id);
    let formData = new FormData();
    formData.append("id",id);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteOwnerInfo";
    axios.post(url, formData).then((res) => {
        console.log('deleted');
        window.location= "/ViewOwnerInfo"
        this.getData();
    }).catch(function (err) {
        console.log(err);
    });
  }

  renderTableRows = () => {
    return this.state.ownerinfo.map(ownerinfos => {
      return (
        <tr>
          <td>{ownerinfos.id}</td>
          <td>{ownerinfos.owner_name}</td>
          <td>{ownerinfos.apt_no}</td>
          <td>{ownerinfos.block_no}</td>
          <td>{ownerinfos.owner_username}</td>
          <td>
          <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({id: ownerinfos.id, owner_name: ownerinfos.owner_name, apt_no: ownerinfos.apt_no, block_no: ownerinfos.block_no, owner_username: ownerinfos.owner_username})}></img>
            &nbsp;&nbsp;
            <img src={del} style={{ height: "25px" }} onClick={() => this.setState({deleteId:ownerinfos.id},()=>this.delete())}></img>
          </td>
        </tr>
      )
    })
  }

  edit(id, owner_name, apt_no, block_no, owner_username) {


    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;

    console.log(username);
    console.log(owner_name);
    console.log(block_no);
    console.log(apt_no);
    console.log(owner_username);
    console.log(id);

    let formData = new FormData();
    formData.append("id", id);
    formData.append("owner_name", owner_name);
    formData.append("block_no", block_no);
    formData.append("floor_no",block_no);
    formData.append("apt_no", apt_no);
    formData.append("owner_username", owner_username);

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateOwnerInfo";
    axios.post(url, formData)
      .then(res => {
        console.log("updateeeeeeee");
        console.log(res.data);
      }
      )
      .catch(err => console.log(err));
  }

render(){
    return (
      <>
      <div className="welcome-text" style = {{height:"10%"}}>
        <h1 style = {{marginTop:"15px"}}>
          <span>Owner Information</span>
        </h1>
      </div>

      <table style={{position:"relative",top:"210px",height:"200px"}}>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Apartment_no</th>
        <th>building_no</th>
        <th>email</th>
        <th>Action</th>
      </tr>
      {this.renderTableRows()}
      </table>
      <div className="welcome-text" style={{ height: "110%" }}>
          <h1>
            <span>Edit Owner Information</span>
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
              value={this.state.owner_name}
              name="owner_name"
              onChange={(e) => this.handleInput(e)}
              placeholder="Owner Name">
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
              value={this.state.owner_username}
              name="owner_username"
              onChange={(e) => this.handleInput(e)}
              placeholder="Owner Username">
            </input>
            <br></br>
            <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id, this.state.owner_name, this.state.apt_no, this.state.block_no, this.state.owner_username)}>
              Update</button>
          </form>
        </div>
  </>
    );
}
}

export default ViewOwnerInfo;
