import "./about.css";
import Math1 from "../../img/math1.jpg";
import Math2 from "../../img/math2.jpg";
import { skills } from "../../data";

const About = () => {


  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">
          <img
            src={Math2}
            alt=""
            className="a-img"
          />
        </div>
        <div className="a-card">
          <img
            src={Math1}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <div className="a-about-me-wrapper">
          <h1 className="a-title">About Me</h1>
     
          <p className="a-desc">
            I have a strong problem-solving orientation. I like to approach and think about problems in different ways.
            I like studying mathematics and data structures because they allow us to conceptualize problems in ways that
            make solving them funner and easier.
          </p>
        </div>
        <div className="a-skills-wrapper">
          <h1 className="a-title">Skills</h1>
          <div className="a-skill-icons-wrapper">
            {skills.map(skill => (
              <div key={skill.name} className="a-skill-icon">
                <i className={skill.class}></i>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <button><a href="https://drive.google.com/file/d/1bQ67Ve2j88Y6G-xjYbj8xhQBjy5zdp0A/view" target="_blank" rel="noreferrer">Download my resume!</a></button>
        </div>
      </div>
    </div>
  );
};

export default About;
