import './ManagerDashboard.css';

import React, { Component } from 'react';
import axios from 'axios';

class ManagerDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      servicesDashboard: [],
      visitorDashboard: [],
    }
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

    const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewServicesDashboard";
    axios.post(url)
      .then(res => {
        const servicesDashboard = res.data;
        this.setState({ servicesDashboard, isLoading: false })
        console.log(servicesDashboard)
        console.log(res.data);
        const url = "http://ae9f-129-107-80-62.ngrok.io/api/viewVisitorDashboard";
        axios.post(url)
          .then(res => {
            const visitorDashboard = res.data;
            this.setState({ visitorDashboard, isLoading: false })
            console.log(visitorDashboard)
            console.log(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));



  }


  rendervisitorDashboard = () => {
    var total = 0;
    this.state.visitorDashboard.map(visitorDashboards => {
      total = total + visitorDashboards.visitorsCount

    })

    return this.state.visitorDashboard.map(visitorDashboards => {
      var Percentage = 100 * visitorDashboards.visitorsCount / total;
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
      var Percentage = 100 * servicesDashboards.servicesCount / total;
      return (
        <tr style={{ height: Percentage + "%" }}>
          <th scope="row">{servicesDashboards.service_type}</th>
          <td><span>{Percentage + "%"}</span></td>
        </tr>
      )
    })
  }
  render() {
    return (
      <>
        <div style={{ float: "left", width: "30%", marginTop: "150px", marginLeft: "150px" }}>
          <table className="graph1">
            <caption style={{ marginTop: "10px" }}>Visitor Percent per month</caption>
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
        <div style={{ float: "left", width: "40%", marginLeft: "350px", alignItems: "right", marginTop: "150px" }}>
          <table className="graph1">
            <caption style={{ marginTop: "10px" }}>Services Per Apartment</caption>
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
      </>
    );

  }

}


// function ManagerDashboard() {
//     return (
//   <>
//   <div style={{float:"left",width:"30%",marginTop:"150px",marginLeft:"150px"}}>
//   <table className="graph1">
//     <caption style={{marginTop:"10px"}}>Visitor Percent per month</caption>
//     <thead>
//       <tr>
//         <th scope="col">Item</th>
//         <th scope="col">Percent</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr style={{height:"85%"}}>
//         <th scope="row">Jan.</th>
//         <td><span>85%</span></td>
//       </tr>
//       <tr style={{height:"23%"}}>
//         <th scope="row">Feb.</th>
//         <td><span>23%</span></td>
//       </tr>
//       <tr style={{height:"7%"}}>
//         <th scope="row">Mar.</th>
//         <td><span>7%</span></td>
//       </tr>
//       <tr style={{height:"38%"}}>
//         <th scope="row">Apr.</th>
//         <td><span>38%</span></td>
//       </tr>
//       <tr style={{height:"35%"}}>
//         <th scope="row">May.</th>
//         <td><span>35%</span></td>
//       </tr>
//       <tr style={{height:"30%"}}>
//         <th scope="row">Jun.</th>
//         <td><span>30%</span></td>
//       </tr>
//       <tr style={{height:"5%"}}>
//         <th scope="row">Jul.</th>
//         <td><span>5%</span></td>
//       </tr>
//       <tr style={{height:"20%"}}>
//         <th scope="row">Aug.</th>
//         <td><span>20%</span></td>
//       </tr>
//       <tr style={{height:"20%"}}>
//         <th scope="row">Sep.</th>
//         <td><span>20%</span></td>
//       </tr>
//       <tr style={{height:"20%"}}>
//         <th scope="row">Oct.</th>
//         <td><span>20%</span></td>
//       </tr>
//       <tr style={{height:"20%"}}>
//         <th scope="row">Nov.</th>
//         <td><span>20%</span></td>
//       </tr>
//       <tr style={{height:"20%"}}>
//         <th scope="row">Dec.</th>
//         <td><span>20%</span></td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// <div style={{float:"left", width:"40%", marginLeft:"350px",alignItems: "right", marginTop: "150px"}}>
//   <table className="graph1">
//     <caption style={{marginTop: "10px"}}>Services Per Apartment</caption>
//     <thead>
//       <tr>
//         <th scope="col">Item</th>
//         <th scope="col">Percent</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr style={{height:"85%"}}>
//         <th scope="row">Gas</th>
//         <td><span>85%</span></td>
//       </tr>
//       <tr style={{height:"23%"}}>
//         <th scope="row">Electricity</th>
//         <td><span>23%</span></td>
//       </tr>
//       <tr style={{height:"7%"}}>
//         <th scope="row">Internt</th>
//         <td><span>7%</span></td>
//       </tr>
//       <tr style={{height:"38%"}}>
//         <th scope="row">Water</th>
//         <td><span>38%</span></td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// </>
//     );
// }

export default ManagerDashboard;
