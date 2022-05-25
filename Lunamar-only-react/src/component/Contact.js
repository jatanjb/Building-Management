import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const form = useRef();
     
    function sendEmail(event) {
        event.preventDefault();
        console.log('You clicked submit.');
        emailjs.sendForm('service_eupvrzc', 'template_ad365lm', form.current, 'user_CbJZrFwBtDetw36qqsMdw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset();
      }
    return (
        <div>
            <div className="contactUsBox" ><span ><h1 style={{color: "#2C81B8"}}>Contact Us</h1></span></div>

            <div className="contact-text">
                <p style={{marginTop: "180px"}}>Get in touch with our staff to hear more about what it's like to live at Lunamer.Call us today!</p>

                <form ref={form} className="contact-box" autocomplete="off" onSubmit={sendEmail}>
                    <input className="inputStyle" placeholder="First name" type="text" id="firstname" required></input>
                    <input className="inputStyle" placeholder="Last name" type="text" id="lastname" required></input>
                    <input className="inputStyle" placeholder="Phone No" type="number" id="phoneno" required></input>
                    <input className="inputStyle" placeholder="Email" name="email" type="email" id="email" required></input>
                    <textarea className="formTextArea" id="query" name="query" placeholder="Query" ></textarea>
                    <div className="subBtnDiv">
                    <button type="submit" className="subBtn" >Submit</button>
                </div>

                </form>

                

            </div>

        </div>
  );
}

export default Contact;