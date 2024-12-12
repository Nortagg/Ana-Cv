import "./about.styles.scss";
import { IoIosSchool } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { BsPerson, BsPersonGear } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { GiPaintBrush } from "react-icons/gi";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="title">
        <span className="skew"></span>
        <h1 className="about-title">About Me</h1>
      </div>
      <div className="info-container">
        <div className="education-container">
          <span className="edu-ico">
            <IoIosSchool />
          </span>
          <h2 className="education-header">Education History</h2>
          <div className="div-edu">
            <p>"Dr. Milenko Hadžić" Medical School, Niš | 2016 - 2020</p>
            <p>Pediatric nurse-technician</p>
            <span className="line-1"></span>
            <p>Faculty of Philosophy, Niš | 2020 - now </p>
            <p>Graduate journalist</p>
          </div>
        </div>
        <div className="languages-hobbies-and-pp-we">
          <div className="languages-hobbies-container">
            <div className="languages-container">
              <span className="lang-ico">
                <IoLanguageOutline />
              </span>
              <h2 className="languages-header">Languages</h2>
              <div className="div-lang">
                <p>Serbian - Native</p>
                <p>English - Advanced</p>
              </div>
            </div>
            <span className="line-2"></span>
            <div className="hobbies-container">
              <span className="hob-ico">
                <GoBook />
              </span>
              <h2 className="hobbies-header">Hobbies</h2>
              <div className="div-hob">
                <span className="reading-ico">
                  <p>Reading -</p>
                  <FaBookReader />
                </span>
                <span className="painting-ico">
                  <GiPaintBrush />
                  <p>- Painting</p>
                </span>
              </div>
            </div>
          </div>
          <div className="personal-profile-skill-summary-container">
            <div className="personal-profile-container">
              <span className="personal-p-ico">
                <BsPerson />
              </span>
              <h3 className="personal-profile-title">Personal Profile</h3>
              <p>
                A dedicated journalist always ready to uncover and share the
                most compelling stories, with a passion for helping others in
                need. Committed to delivering the best narratives and keeping
                the public informed.
              </p>
            </div>
            <span className="line-3"></span>
            <div className="skill-summary-container">
              <span className="skill-s-ico">
                <BsPersonGear />
              </span>
              <h3 className="skill-summary-title">Skill Summary</h3>
              <div className="skills">
                <div className="left-skills">
                  <p>Communication skills</p>
                  <p>Problem-solving skills</p>
                  <p>Time management skills</p>
                </div>
                <div className="right-skills">
                  <p>Microsoft Office</p>
                  <p>Active Listening</p>
                  <p>Providing first aid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-container">
        <span className="about-me-ico"></span>
        <h2 className="about-me-title">About Me</h2>
        <p>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
        </p>
      </div>{" "}
      {/* <div className="about-me-container">
        <span className="about-me-ico"></span>
        <h2 className="about-me-title">About Me</h2>
        <p>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text texttext text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text texttext text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
        </p>
      </div> */}
    </div>
  );
};

export default AboutPage;
