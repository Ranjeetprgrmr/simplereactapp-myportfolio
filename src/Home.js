import React  from "react";

import "./Home.css";

export default function Home() {
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  })

  
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="container">
          <div className="home__content" >
            <div className="home__meta">
              <h1 className="home__text pz__10">WARM GREETINGS!</h1>
              <h2 className="home__text pz__10">I am Ranjeet Singh</h2>
              <h3 className="home__text sweet pz__10">
                 MERN Stack Developer.
              </h3>
              <h4 className="home__text pz__10">From Kathmandu. </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
