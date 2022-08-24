import { useRef } from "react";
import Heading from "../components/Heading";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contact = () => {
  const titleRef = useRef();
  return (
    <section className="contact" id="contact">
      <Heading title="Lets work together!" titleRef={titleRef} />
      <div className="container">
        <div className="content">
          <div className="sub">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mayar.mosaad591@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-envelope-fill text-main fs-2"></i>
              <span className="contact-text">mayar.mosaad591@gmail.com</span>
            </a>
          </div>
          <div className="sub">
            <a href="tel:+201288111591">
              <i className="bi bi-telephone-fill text-main fs-2"></i>
              <span className="contact-text">01288111591</span>
            </a>
          </div>
          <div className="sub">
            <a href="https://www.linkedin.com/in/mayar-mosaad591/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin text-main fs-2"></i>  
              <span className="contact-text">mayar-mosaad591</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
