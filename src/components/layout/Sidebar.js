import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
      <nav className="sidebar">
        <div className="row">
          <ul className="">
              <li><NavLink className="color" exact to = "/" activeStyle={style.activeStyle}>Home</NavLink></li>
              <li><NavLink className="color" to = "/about" activeStyle={style.activeStyle}>About</NavLink></li>
              <li><NavLink className="color" to = "/contact" activeStyle={style.activeStyle}>Contact</NavLink></li>
              <li><NavLink className="color" to = "/data"  activeStyle={style.activeStyle}>Data</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }

  export default Sidebar

  const style = {
    activeStyle : {
      color: "aqua",
      fontWeight: "bold"
  }
  }