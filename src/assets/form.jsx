import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [skills, setSkills] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [projects, setProjects] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const addSkill = () => {
    const newSkill = prompt("Enter a skill:");
    if (newSkill) {
      setSkills([...skills, newSkill]);
    }
  };

  const addQualification = () => {
    const newQualification = prompt("Enter an academic qualification:");
    if (newQualification) {
      setQualifications([...qualifications, newQualification]);
    }
  };

  const addProject = () => {
    const newProject = prompt("Enter a project:");
    if (newProject) {
      setProjects([...projects, newProject]);
    }
  };

  return (
    <>
      <div id="form">
        <div id="contact">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="tel"
            placeholder="Your Phone No."
            value={tel}
            onChange={handleTelChange}
          />
        </div>
        <div id="skills">
          <button onClick={addSkill}>Add Skill</button>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div id="degrees">
          <button onClick={addQualification}>Add Academic Qualification</button>
          <ul>
            {qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        <div id="projects">
          <button onClick={addProject}>Add Project</button>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>
      <div id="resume">
        <div id="rIntro">
          <h2 id="name">{name}</h2>
          <p id="contacts">
            {email} {tel}
          </p>
        </div>
        <hr />
        <hr />
        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3>Academic Qualifications:</h3>
        <ul>
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
        <h3>Projects:</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Form;
