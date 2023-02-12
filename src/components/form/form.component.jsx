import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../UI/button.component";
import "./form.styles.scss";

const Form = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2g9du59",
        "template_likrscq",
        form.current,
        "RsipXI45s_e3aoAim",
        formData
      )
      .then((response) => {
        console.log(response.data);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="form">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message . . ."
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
