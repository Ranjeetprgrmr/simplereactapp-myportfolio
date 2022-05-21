import React from "react";
import "./About.css";
import aboutImg from "./images/about1.jpg";

function About() {
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About" style={{ padding: "3px"}}>
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hello there, Myself Ranjeet Singh.I am a freelance programer.
                Having interest in coding, this passion of mine took to me the
                next level of programming.After doing several practice projects,
                it paved me the away to do a full web development course.I did
                MERN FULL STACK developer course from Boradway Infosys.Now what
                is API with CRUD operation,with endpoint is a question ,I can
                understand.It is something wear the real coder flourishes.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="a">
                  <button className="about btn pointer">Download C.V</button>
                </a>
                <a href="a">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
