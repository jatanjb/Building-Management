import React ,{Component}from 'react';
import axios from 'axios';

class GetMedia extends Component {

  constructor(props) {
    super(props)
    this.state = {
      media: []
    }
  }

  async componentDidMount() {

    var data = new FormData();
    var sessiondata = sessionStorage.getItem('userData');
    var jsonsession = JSON.parse(sessiondata);
    var username = jsonsession.username;
    console.log(username);
    data.append("username", username);
    const url = "http://ae9f-129-107-80-62.ngrok.io/api/getFile";
    axios.post(url, data)
      .then(res => {
        console.log(res.data);
        const media = res.data;
        this.setState({ media, isLoading: false })
      })
      .catch(err => console.log(err));

  }

  renderMedia = () => {
    console.log(this.state.media);
    return this.state.media.map(medias => {
      return (
        <img 
      src={medias}
      alt="img"
      />
      )
    })
  }

  render(){
    return(
        <main>
        <div className="contactUsBox" style={{ top: "270px" ,backgroundColor:"white"}}>
        {this.renderMedia()}
        </div>
        </main>
    );
  }
}

export default GetMedia;
