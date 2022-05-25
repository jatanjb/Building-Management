import { Route,Redirect} from "react-router-dom";

export const ProtectedRoute = ({path,component,...props}) => {

const isAuth = JSON.parse( sessionStorage.getItem('userData'))?.loginStatus;

console.log({isAuth})

  return <Route render={
    props=>{
      return <Redirect to={{
        pathname:"/contact",
        state:{
          from:props.location
        }
      }} />
    }
  } />
  return <Route path={path} {...props} />
}
