import './Chat.css';

function Chat() {
  return (
    <div>
      <div className="split left">
        <div style={{paddingTop: "20px;", backgroundColor: "#2C81B8;", color: "#fff;"}}>
            <h2>People</h2>
            <hr></hr>
        </div>
        <div style={{marginTop: "20px;"}}>
            <h4>Jatan</h4>
            <hr></hr>
        </div>
        <div style={{marginTop: "20px;"}}>
            <h4>Siddhesh</h4>
            <hr></hr>
        </div>
        <div style={{marginTop: "20px;"}}>
            <h4>Deepak</h4>
            <hr></hr>
        </div>
    </div>

    <div className="split right">
        <div className="chatbox-header">
            <span className="chatbox-title-text"><h2>Chat</h2></span>
        </div>
        <div className="chatbox-body">
            <div className="chatbox-overlay">
            </div>
            <div className="chat-logs">
            </div>
        </div>
        <div className="chat-input">
            <form>
                <input type="text" id="chat-input" placeholder="Send a message..." />
                <button type="submit" className="chat-button" id="chat-button">Send</button>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Chat;