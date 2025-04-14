import React from "react";
import "./Perks.css";

export const Perks = () => {
  return (
    //     <h2 className="perks-bad-title">Things I'm bad at </h2>
    //     <div className="perks-bad-container">
    //       <img src={"/Images/Perks/badat2.jpg"} alt="passed out" />
    //       <ul className="perks-bad-items">
    //         <li className="perks-bad-item">
    //           <img src="/Images/Perks/thumb-down.png" alt="thumbs down" />
    //           <p>{"Drawing UIs (I am not an artist)"}</p>
    //         </li>
    //         <li className="perks-bad-item">
    //           <img src="/Images/Perks/thumb-down.png" alt="thumbs down" />
    //           <p>Making pasta</p>
    //         </li>
    //         <li className="perks-bad-item">
    //           <img src="/Images/Perks/thumb-down.png" alt="thumbs down" />
    //           <p>Excel</p>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </section>
    <section className={"container"} id="perks">
      <h2 className={"title"}>Things I'm good at</h2>
      <div className={"content"}>
        <img src={"/Images/Perks/goodat.jpg"} alt="Me in the mountains" />
        <ul className={"aboutItems"}>
          <li className={"aboutItem"}>
            <img src={"/Images/Perks/thumbs-up.png"} alt="thumbs up icon" />
            <div className={"aboutItemText"}>
              <h3>Building Websites</h3>
              <p>
                I can build dumb stuff like landing pages, messaging tools,
                landing pages, etc. I'm alright at React.
              </p>
            </div>
          </li>
          <li className={"aboutItem"}>
            <img src={"/Images/Perks/thumbs-up.png"} alt="thumbs up icon" />
            <div className={"aboutItemText"}>
              <h3>Making friends</h3>
              <p>
                Some would say I have a few of them. I can talk to them too,
                which is rare for a developer.
              </p>
            </div>
          </li>
          <li className={"aboutItem"}>
            <img src={"/Images/Perks/thumbs-up.png"} alt="thumbs up icon" />
            <div className={"aboutItemText"}>
              <h3>Running very far</h3>
              <p>
                Sometimes when I feel like a software engineer and don't want to
                talk to anyone, I go on a really long run.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
