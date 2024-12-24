import "./ContactForm.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pz5n4nn", "template_js4b9h2", form.current, {
        publicKey: "tG9zpqUnke4rii1gW",
      })
      .then(
        () => {
          toast.success("E-mail sent!");

          console.log("SUCCESS!");
        },
        (error) => {
          toast.error(response.data.message);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <section className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contact Me</h2>

          <p>
            I welcome you to reach out if you're interested in my skills. Please
            feel free to send me an e-mail here or you can also message me or
            call me at <a href="tel:630-639-2772 ">(630) 639-2772</a>
          </p>

          <div className="inputBox">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="from_name"
              required
            />
          </div>

          <div className="inputBox">
            <label>Email Address</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your e-mail"
              name="from_email"
              required
            />
          </div>

          <div className="inputBox">
            <label>Message</label>
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
