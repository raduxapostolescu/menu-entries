import React, { Component } from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import "../styles/navbar.css";
import * as AiIcons from "react-icons/ai";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <IconContext.Provider value={{ color: "#f5f5f5", size: "1.5em" }}>
          <nav className="navbar navbar-light navbar-top bg-dark rounded-bottom shadow-lg">
            <div className="w-25 justify-content-start">
              <div className="m-2">
                <FaIcons.FaAlignJustify
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    document
                      .getElementById("sidebar-root")
                      .classList.add("active");
                  }}
                />
              </div>
            </div>
          </nav>
          <nav className="nav-menu" id="sidebar-root">
            <ul className="nav-menu-items">
              <li className="nav-bar-toggle">
                <a href="#top" className="menu-bars">
                  <AiIcons.AiOutlineClose
                    style={{ cursor: "pointer", height: "2rem" }}
                    onClick={() => {
                      document
                        .getElementById("sidebar-root")
                        .classList.remove("active");
                    }}
                  />
                </a>
              </li>
              {this.props.sidebar.map((item, index) => {
                return (
                  <li key={index} className="nav-text">
                    <a href="#top">
                      {item.icon}
                      <span className="mx-2">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </React.Fragment>
    );
  }
}

export default NavBar;
