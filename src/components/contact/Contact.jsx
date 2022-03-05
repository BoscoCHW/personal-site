import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          formRef.current.reset();
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 672 999 6739
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              bosco.chw@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Vancouver, British Columbia, Canada
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Planning your next project?</b> I would love to hear about it and see how I can help!
          </p>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#FFF"}} type="text" placeholder="Name" name="name" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#FFF"}} type="text" placeholder="Subject" name="subject" />
            <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#FFF"}} type="text" placeholder="Email" name="email" />
            <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "#FFF"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you! I will get in touch soon!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
