import './Sidenav.css';
import './Header.css';

function Sidenav() {
    const header = {
            width: '100%',
            height: '150px',
            margin: 'auto',
      };
    return (
        
        <div className=".header-class" >
            <nav className="side-bar"style={{marginTop: "140px"}}>
            <li>Manage Visitor
                    <ul>
                      <li><a href="/AddVisitorInformation">Add Visitor Information</a></li>
                      <li><a href="/IncidentRequestForm"> Add Incident</a></li>
                      <li><a href="/ViewIncidentInfoVisitor"> View Incident</a></li>
                      <li><a href="/AddVisitorGarden"> Add Garden Visitor</a></li>
                      <li><a href="/ViewGardenVisitorInfo"> View Garden Visitor</a></li>
                    </ul>
                  </li>
                  
                  <li>Manage Gardens and Surroundings
                    <ul>
                      <li><a href="/addGardenInformation">Add Garden</a></li>
                      <li><a href="/ViewGardenInfo"> View Garden</a></li>
                      <li><a href="/addPoolInformation"> Add Pool</a></li>
                      <li><a href="/ViewPoolInfo"> View Pool</a></li>
                    </ul>
                  </li>
                  <li>Manage Resident
                    <ul>
                      <li><a href="/ViewVisitorInfo">View Visitor Information</a></li>
                      <li><a href="/SubscriberForm"> Subscribe Services</a></li>
                      <li><a href="/ViewSubscriberInfo"> View Subscribe Services</a></li>
                      <li><a href="/IncidentRequestForm"> Add Incident</a></li>
                      <li><a href="/ViewIncidentInfo"> View Incident</a></li>
                    </ul>
                  </li>
                  <li>Manage Building
                    <ul>
                      <li><a href="/addBuildingInformation">Add Building Information</a></li>
                      <li><a href="/ViewBuildingInfo">View Building Information</a></li>
                      <li><a href="/AddOwnerInformation">Add Owner Information</a></li>
                      <li><a href="/ViewOwnerInfo">View Owner Information</a></li>
                    </ul>
                  </li>
                
            </nav>
        </div>
    );
}

export default Sidenav;