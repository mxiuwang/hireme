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
        <h3 className="footer">
          {
            "Thanks for reading this far. If u wanna hire me pls let me know thanks:)"
          }
          <br></br> <br></br>
          {
            "Contact section coming soon!! It's currently 2am and I'm too tired to do it."
          }
        </h3>
      </div>
    </section>
  );
};
