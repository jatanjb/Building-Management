import React ,{Component}from 'react';
import ReactS3 from 'react-s3';
import axios from 'axios';

class UploadMedia extends Component{

state = {
  file: null
}

handleFile(e){
  console.log(e.target.files, "$$$$");
  console.log(e.target.files[0], "$$$$");
  let file = e.target.files[0];
  this.setState({file: file});
}

handleSubmit = e =>{
e.preventDefault();
console.log(this.state, "THE SATE ---- $$$$");

let formData = new FormData();
formData.append('file',this.state.file);

const url = "http://ae9f-129-107-80-62.ngrok.io/api/uploadFile";
axios.post(url,formData)
.then(res=>
{
  console.log(res.data);
}
)
.catch(err=> console.log(err));

}


async componentDidMount() {
  var data = new FormData();
  var sessiondata = sessionStorage.getItem('userData');
  var jsonsession = JSON.parse(sessiondata);
  var username = jsonsession.username;
  console.log(username);
  data.append("username", username);
  const url = "http://ae9f-129-107-80-62.ngrok.io/api/ReadMedia.php";
  axios.post(url, data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
}


  render(){
    return(
        <main>
        <div className="welcome-text">
        <a href="resident-page.html">Resident's Home Page</a>
        <h1>
        <span>Upload Images & Videos</span>
        </h1>
        <form className="loginbox" autocomplete="off" onSubmit={this.handleSubmit}>
        <div style={{width: "75%", height: "40px",marginLeft: "75px"}}>
        <input type="file" name="file" onChange={(e)=>this.handleFile(e)}></input>
        <button type="submit" id="submit" style={{width: "20% ;"}}>Submit</button>
        </div>
        </form>
        </div>
        </main>
    );
  }
}

export default UploadMedia;
