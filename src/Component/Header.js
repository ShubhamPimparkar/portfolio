import React from 'react';
import { NavLink } from 'react-router-dom';
import oldpc from "../Static/old-computer.png";
import "../Static/oldpc.css"
export default function Sidebar() {
  return (
    <div>

      <nav>
        <ul>

          {/* class="button-one"><a href="#">About</a> */}

          <li>
            <NavLink className="buttons button-one" to={"/about"}>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="buttons button-two" to={"/project"}>
              <span>Project</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="buttons button-three" to={"/contact"}>
              <span>Contact</span>
            </NavLink>
          </li>

          <img className="port logo" src={oldpc} alt="logo" />
  
          <span className='port'>Portfolio Website</span>
        </ul>
      </nav>

    </div>
  )
}









{/*
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Static/one.css"
export default function Header() {
    return (
        <div>
              
            <ul>
                <li>
                <span className='title'>Portfolio</span>

                </li>
                <li>
            <NavLink className="nav-link"to={"/home"}>
          Me <span class="sr-only">(current)</span>
          </NavLink>
          </li>
                <li>
            <NavLink className="nav-link"to={"/about"}>
          About <span class="sr-only"></span>
          </NavLink>
          </li>
                <li>
            <NavLink className="nav-link"to={"/edu"}>
          Education <span class="sr-only"></span>
          </NavLink>
          </li>
            
            </ul>

        </div>



    )
}
*/}