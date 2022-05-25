function Profile() {
    return (
      <main>
        <div className="welcome-text" style={{height:"150%"}}>
        <a href="javascript:history.back()"><strong>Go Back</strong></a>
        <h1>
            <span>Profile</span>
        </h1>
        <form className="loginbox" autocomplete="off">
            <input placeholder="Email" type="email" id="email" value="jatan@gmail.com" required readonly></input>
            <br></br>
            <input placeholder="First name" type="text" id="firstname" value="Jatan" required></input>
            <br></br>
            <input placeholder="Last name" type="text" id="lastname" value="Bhatt" required></input>
            <br></br>
            <div style={{width:"50%",height:"40px",marginLeft:"100px"}}>
                <span style={{color:"#fff"}}>Gender</span>
                <input type="radio" id="male" name="Gender" value="male" checked style={{all: "revert"}}></input>
                <label for="male" style={{color: "#fff"}}>Male</label>
                <input type="radio" id="female" name="Gender" value="female" style={{all: "revert"}}></input>
                <label for="female" style={{color: "#fff"}}>Female</label>
            </div>
            <input placeholder="Phone Number" type="text" id="phonenumber" value="1234567891" required></input>
            <br></br>
            <input placeholder="Address" type="text" id="address" value="Street 1" required></input><br></br>
            <input placeholder="City" type="text" id="city" value="Arlington" required></input><br></br>
            <input placeholder="State" type="text" id="state" value="Texas" required></input><br></br>
            <input placeholder="Country" type="text" id="country" value="USA" required></input><br></br>
            <input placeholder="Zip Code" type="text" id="zipcode" value="76010" required></input>
            <br></br>
            <button type="submit" id="register" style={{width:"20%"}}>Update</button>
            <button type="Submit" id="logout" style={{width:"20%",marginLeft:"60px"}}>Logout</button>
        </form>
        </div>
        </main>
    );
}

export default Profile;
