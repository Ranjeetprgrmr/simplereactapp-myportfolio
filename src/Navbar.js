import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./images/logol.png";


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
        <div className="header d__flex align__items__center pxy__10">
          <div className="logo" style={{ padding: "15px 25px"}}>
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="/">
                <li className="nav__items mx__15"><Link to="/">Home</Link></li>
              </a>
              <a href="/about">
                <li className="nav__items mx__15"><Link to="/about">About</Link></li>
              </a>
              <a href="/service">
                <li className="nav__items mx__15"><Link to="/service">Service</Link></li>
              </a>
              <a href="/blog">
                <li className="nav__items mx__15"><Link to="/blog">Blog</Link></li>
              </a>
              <a href="/project">
                <li className="nav__items mx__15"><Link to="/project">Project</Link></li>
              </a>
              <a href="/contact">
                <li className="nav__items mx__15"><Link to="/contact">Contact</Link></li>
              </a>
            </ul>
          </div>
        </div>
    </div>
  )
}
