import './Admin.css';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';

import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            servicesDashboard: [],
            visitorDashboard: [],
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

    handleMonth(number) {
        if (number === 1) {
            return "Jan.";
        } else if (number === 2) {
            return "Fab.";
        } else if (number === 3) {
            return "Mar.";
        } else if (number === 4) {
            return "Apr.";
        } else if (number === 5) {
            return "May";
        } else if (number === 6) {
            return "Jun.";
        } else if (number === 7) {
            return "Jul.";
        } else if (number === 8) {
            return "Aug.";
        } else if (number === 9) {
            return "Sep.";
        } else if (number === 10) {
            return "Oct.";
        } else if (number === 11) {
            return "Nov.";
        } else if (number === 12) {
            return "Dec.";
        } else {
            return ""
        }
    }

    async componentDidMount() {
        var data = new FormData();
        var sessiondata = sessionStorage.getItem('userData');
        var jsonsession = JSON.parse(sessiondata);
        var username = jsonsession.username;
        console.log(username);
        data.append("username", username);
        const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewAllUsers";
        axios.post(url, data)
            .then(res => {
                const users = res.data;
                this.setState({ users, isLoading: false })
                console.log(users)
                console.log(res.data);
                const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewServicesDashboard";
                axios.post(url, data)
                    .then(res => {
                        const servicesDashboard = res.data;
                        this.setState({ servicesDashboard, isLoading: false })
                        console.log(servicesDashboard)
                        console.log(res.data);
                        const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewVisitorDashboard";
                        axios.post(url, data)
                            .then(res => {
                                const visitorDashboard = res.data;
                                this.setState({ visitorDashboard, isLoading: false })
                                console.log(visitorDashboard)
                                console.log(res.data);
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));


            })
            .catch(err => console.log(err));



    }

    delete() {
        let id = this.state.deleteId;
        console.log(id);
        let formData = new FormData();
        formData.append("id", id);
        const url = "http://ae9f-129-107-80-62.ngrok.io/api/deleteUsers";
        axios.post(url, formData).then((res) => {
            console.log('deleted');
            window.location = "/Admin"
            this.getData();
        }).catch(function (err) {
            console.log(err);
        });
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state);
      }

      edit(id, username, role) {


        // var sessiondata = sessionStorage.getItem('userData');
        // var jsonsession = JSON.parse(sessiondata);
        // var username = jsonsession.username;
    
        console.log(username);
        console.log(role);
    
        let formData = new FormData();
        formData.append("id", id);
        formData.append("username", username);
        formData.append("role", role);
    
        const url = "http://ae9f-129-107-80-62.ngrok.io/api/updateUsers";
        axios.post(url, formData)
          .then(res => {
            console.log("updateeeeeeee");
            console.log(res.data);
          }
          )
          .catch(err => console.log(err));
      }

    renderTableRows = () => {
        return this.state.users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>{user.mobileno}</td>
                    <td>{`${user.address}, ${user.city}, ${user.state}, ${user.country}`}</td>
                    <td>
                        <img src={edit} style={{ height: "25px" }} onClick={() => this.setState({ id: user.id, username: user.username, role: user.role })}></img>
                        &nbsp;&nbsp;
                        <img src={del} style={{ height: "25px" }} onClick={() => this.setState({ deleteId: user.id }, () => this.delete())}></img>
                    </td>
                </tr>
            )
        })
    }

    rendervisitorDashboard = () => {
        var total = 0;
        this.state.visitorDashboard.map(visitorDashboards => {
            total = total + visitorDashboards.visitorsCount

        })

        return this.state.visitorDashboard.map(visitorDashboards => {
            var Percentage = 100*visitorDashboards.visitorsCount/total;
            return (
                <tr style={{ height: Percentage + "%" }}>
                    <th scope="row">{this.handleMonth(visitorDashboards["month(in_date)"])}</th>
                    <td><span>{Percentage + "%"}</span></td>
                </tr>
            )
        })
    }

    renderservicesDashboard = () => {
        var total = 0;
        this.state.servicesDashboard.map(servicesDashboards => {
            total = total + servicesDashboards.servicesCount
    
        })

        return this.state.servicesDashboard.map(servicesDashboards => {
            var Percentage = 100*servicesDashboards.servicesCount/total;
            return (
                <tr style={{ height: Percentage + "%" }}>
                    <th scope="row">{servicesDashboards.service_type}</th>
                    <td><span>{Percentage + "%"}</span></td>
                </tr>
            )
        })
    }

    render() {
        const { users, isLoading, isError } = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }

        if (isError) {
            return <div>Error</div>
        }

        return (

            <div>
                <div style={{ float: 'left;', width: '30%' }}>
                    <table className="graph">
                        <caption style={{ marginTop: "10px;" }}>Visitor Percent per month</caption>
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.rendervisitorDashboard()}
                        </tbody>
                    </table>
                </div>
                <div className="graph-div">
                    <table className="graph">
                        <caption style={{ marginTop: "10px;" }}>Services Per Apartment</caption>
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderservicesDashboard()}
                        </tbody>
                    </table>
                </div>
                <br></br>
                <br></br>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                    
                </table>
                
                <div className="welcome-text" style={{ height: "50%" }}>
                    <h1>
                        <span>Edit User Information</span>
                    </h1>
                    <form className="loginbox" id="login" name="login" >
                        <input
                            value={this.state.username}
                            name="username"
                            onChange={(e) => this.handleInput(e)}
                            placeholder="username" hidden>
                        </input>
                        <br></br>
                        <input
                            value={this.state.id}
                            name="id"
                            onChange={(e) => this.handleInput(e)}
                            placeholder="id" hidden>
                        </input>
                        <br></br>
                        <input
                            value={this.state.role}
                            name="role"
                            onChange={(e) => this.handleInput(e)}
                            placeholder="Role">
                        </input>
                        <br></br>
                        
                        <button className="login-button" type="button" id="submit" onClick={this.edit(this.state.id,this.state.username, this.state.role)}>
                            Update</button>
                    </form>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );

    }
}



export default Admin;

