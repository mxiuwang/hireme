import React from "react";

import "./PeopleCard.css";

export const PeopleCard = ({ person: { title, imageSrc, skills } }) => {
  return (
    <div className={"person-container"}>
      <img className={"person-image"} src={imageSrc} alt={`Pic of person`} />
      <h3 className="person-title">{title}</h3>
      <ul className={"person-skills"}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={"person-skill"}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
