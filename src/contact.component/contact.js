import "./contact.styles.scss";
import {
  BiMobileVibration,
  BiHome,
  BiLogoFacebookCircle,
  BiLogoInstagram,
} from "react-icons/bi";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <img src="/pictures/contact.png" className="contact-img" />
      <div className="title-contact">
        <span className="skew-contact"></span>
        <h1 className="contact-title">Contact Me</h1>
      </div>
      <div className="container-small-info">
        <iframe
          className="map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d737.0366210709899!2d21.700662868859446!3d43.54129225308255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d43.541294099999995!2d21.7009217!5e1!3m2!1ssr!2srs!4v1698259018620!5m2!1ssr!2srs"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="personal-info-container">
          <span className="icon-text-phone">
            <BiMobileVibration />
            <p>+381 61 6804 928</p>
          </span>
          <span className="icon-text-home">
            <BiHome />
            <p>Deligradska 10, 18220 - Aleksinac, Srbija </p>
          </span>
          <div className="socials">
            <a
              className="facebook-ico"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ana.stojanovic.01"
            >
              <BiLogoFacebookCircle /> ana.stojanovic.01
            </a>
            <a
              className="instagram-ico"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/piskaraloo/"
            >
              <BiLogoInstagram /> piskaraloo
            </a>
          </div>
        </div>
        <img className="ana-picture" src="/pictures/ana.jpg" alt="me" />
      </div>
    </div>
  );
};

export default ContactPage;
