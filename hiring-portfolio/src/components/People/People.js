import React from "react";

import "./People.css";
import people from "./people.json";
import { PeopleCard } from "./PeopleCard";

export const People = () => {
  return (
    <section className={"people-container"} id="people">
      <h2 className={"people-title"}>
        Why I think I'll get along with the team
      </h2>
      <div className={"people-details"}>
        {people.map((people, id) => {
          return <PeopleCard key={id} person={people} />;
        })}
      </div>
    </section>
  );
};
