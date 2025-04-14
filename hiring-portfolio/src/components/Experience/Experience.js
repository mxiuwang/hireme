import React from "react";

import "./Experience.css";
import history from "./history.json";
import skills from "./skills.json";

export const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <h2 className="experience-title">Things I worked on</h2>
      <div className="experience-content">
        <div className="experience-skills">
          {/* JSON array of skills with fields [skill, imageSrc] */}
          {skills.map((skill, id) => {
            return (
              <div className="experience-skill" key={id}>
                <div className="skill-image-container">
                  <img src={`Images/${skill.imageSrc}`} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="experience-history">
          {/* map() function pulls out components from history, id is automatically generated */}
          {history.map((historyItem, id) => {
            return (
              <li className="experience-history-item" key={id}>
                <img
                  src={`Images/${historyItem.imageSrc}`}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className="experience-history-item-details">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
