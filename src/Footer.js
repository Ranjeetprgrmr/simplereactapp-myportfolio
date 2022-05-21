import React from "react";
import footerImg from "./images/logol2.png";

export default function Footer() {
  return (
    <div
      className="footer d__flex align__items__center justify__content__space__between pz-10" style={{ padding: "10px 290px", zIndex: "100" }} >

        <div>
             <img src={footerImg} alt="" className="footer__img pointer" />
        </div>

        <span className="copyrightMessage" style={{ color: "#c6c9d8", fontsize: "4px", opacity: "0.25"}}>
          Copyright &copy; MERN STACK DEVELOPER RANJEET SINGH. ALL RIGHTS RESERVED.
        </span>
    </div>
  );
}
