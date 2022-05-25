import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ProtectedRoute} from './protectedRoute';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Register from './component/Register';
import About from './component/About';
import Service from './component/Service'
import Contact from './component/Contact';
import Chat from './component/Chat';
import AddGardenInformation from './component/AddGardenInformation';
import AddPoolInformation from './component/AddPoolInformation';
import AddBuildingInformation from './component/AddBuildingInformation';
import IncidentRequestForm from './component/IncidentRequestForm';
import SubscriberForm from './component/SubscriberForm';
import AddVisitorInformation from './component/AddVisitorInformation';
import Search from './component/Search';
import ViewBuildingInfo from './component/ViewBuildingInfo';
import ViewOwnerInfo from './component/ViewOwnerInfo';
import ViewGardenInfo from './component/ViewGardenInfo';
import ViewPoolInfo from './component/ViewPoolInfo';
import ViewVisitorInfo from './component/ViewVisitorInfo';
import ViewSubscriberInfo from './component/ViewSubscriberInfo';
import ViewIncidentInfo from './component/ViewIncidentInfo';
import ViewGardenVisitorInfo from './component/ViewGardenVisitorInfo';
import Admin from './component/Admin';
import Sidenav from './component/Sidenav';
import Profile from './component/Profile';
import ManagerDashboard from './component/ManagerDashboard';
import AddOwnerInformation from './component/AddOwnerInformation';
import AddVisitorGarden from './component/AddVisitorGarden';
import HeaderNormal from './component/HeaderNormal';
import HeaderResident from './component/HeaderResident';
import HeaderVisitor from './component/HeaderVisitor';
import IncidentRequestFormVisitor from './component/IncidentRequestFormVisitor';
import ViewIncidentInfoVisitor from './component/ViewIncidentInfoVisitor';
import UploadMedia from './component/UploadMedia';
import GetMedia from './component/GetMedia';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/UploadMedia" exact>
          <HeaderResident></HeaderResident>
          <UploadMedia></UploadMedia>
        </Route>
        <Route path="/" exact>
          <HeaderNormal></HeaderNormal>
        <Login></Login>
        </Route>
        <Route path="/register" >
        <HeaderNormal></HeaderNormal>
        <Register></Register>
        </Route>
      <Route path="/about" >
        <HeaderNormal></HeaderNormal>
        <About></About>
        </Route>
        <Route path="/contact" >
        <HeaderNormal></HeaderNormal>
        <Contact></Contact>
        </Route>
        <Route path="/chat" >
        <Header></Header>
        <Chat></Chat>
        </Route>
        <Route path="/addGardenInformation" >
        <Header></Header>
        <AddGardenInformation></AddGardenInformation>
        </Route>
        <Route path="/addPoolInformation" >
        <Header></Header>
        <AddPoolInformation></AddPoolInformation>
        </Route>
        <Route path="/addBuildingInformation" >
        <Header></Header>
        <AddBuildingInformation></AddBuildingInformation>
        </Route>
        <Route path="/services" >
          <HeaderNormal></HeaderNormal>
        <Service></Service>
        </Route>
        <Route path="/IncidentRequestForm" >
        <HeaderResident></HeaderResident>
        <IncidentRequestForm></IncidentRequestForm>
        </Route>
        <Route path="/SubscriberForm" >
          <HeaderResident></HeaderResident>
        <SubscriberForm></SubscriberForm>
        </Route>
        <Route path="/AddVisitorInformation" >
          <HeaderVisitor></HeaderVisitor>
        <AddVisitorInformation></AddVisitorInformation>
        </Route>
        <Route path="/Search" >
        <Search></Search>
        </Route>
        <Route path="/ViewBuildingInfo" >
        <Header></Header>
        <ViewBuildingInfo></ViewBuildingInfo>
        </Route>
        <Route path="/ViewOwnerInfo" >
        <Header></Header>
        <ViewOwnerInfo></ViewOwnerInfo>
        </Route>
        <Route path="/ViewGardenInfo" >
        <Header></Header>
        <ViewGardenInfo></ViewGardenInfo>
        </Route>
        <Route path="/ViewPoolInfo" >
        <Header></Header>
        <ViewPoolInfo></ViewPoolInfo>
        </Route>
        <Route path="/ViewVisitorInfo" >
          <HeaderResident></HeaderResident>
        <ViewVisitorInfo></ViewVisitorInfo>
        </Route>
        <Route path="/ViewSubscriberInfo" >
          <HeaderResident></HeaderResident>
        <ViewSubscriberInfo></ViewSubscriberInfo>
        </Route>
        <Route path="/ViewIncidentInfo" >
        <HeaderResident></HeaderResident>
        <ViewIncidentInfo></ViewIncidentInfo>
        </Route>
        <Route path="/ViewGardenVisitorInfo" >
          <Header></Header>
        <ViewGardenVisitorInfo></ViewGardenVisitorInfo>
        </Route>
        <Route path="/Admin" >
        <Header></Header>
        <Sidenav></Sidenav>
        <Admin></Admin>
        </Route>
        <Route path="/Sidenav" >
        <Sidenav></Sidenav>
        </Route>
        <Route path="/Profile" >
        <Header></Header>
        <Profile></Profile>
        </Route>
        <Route path="/ManagerDashboard" >
        <Header></Header>
          <Sidenav></Sidenav>
        <ManagerDashboard></ManagerDashboard>
        </Route>
        <Route path="/AddOwnerInformation" >
        <Header></Header>
        <AddOwnerInformation></AddOwnerInformation>
        </Route>
        <Route path="/AddVisitorGarden" >
          <HeaderVisitor></HeaderVisitor>
        <AddVisitorGarden></AddVisitorGarden>
        </Route>
        <Route path="/IncidentRequestFormVisitor" >
          <HeaderVisitor></HeaderVisitor>
        <IncidentRequestFormVisitor></IncidentRequestFormVisitor>
        </Route>
        <Route path="/ViewIncidentInfoVisitor" >
          <HeaderVisitor></HeaderVisitor>
        <ViewIncidentInfoVisitor></ViewIncidentInfoVisitor>
        </Route>
        <Route path="/GetMedia" >
          <HeaderResident></HeaderResident>
        <GetMedia></GetMedia>
        </Route>


      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
