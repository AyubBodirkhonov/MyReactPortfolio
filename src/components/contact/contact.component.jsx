import "./contact.style.scss";
import Me from "../../assets/content-img/me.jpeg";
import Form from "../form/form.component";
const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Get In Touch!</h2>
      <p>It will be nice to meet you and work together as a team!</p>
      <div className="row">
        <div className="column">
          <img src={Me} alt="Ayub Bodirkhonov" />
        </div>
        <div className="column">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
