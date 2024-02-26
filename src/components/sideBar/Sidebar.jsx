import React, { Fragment } from "react";
import first from "../../assets/img/icons/sideBar/1.svg";
import second from "../../assets/img/icons/sideBar/2.svg";
import third from "../../assets/img/icons/sideBar/3.svg";
import fourth from "../../assets/img/icons/sideBar/4.svg";
import fifth from "../../assets/img/icons/sideBar/5.svg";
import sixth from "../../assets/img/icons/sideBar/6.svg";
import seventh from "../../assets/img/icons/sideBar/7.svg";
import eighth from "../../assets/img/icons/sideBar/8.svg";

import "./index.css";

const Sidebar = () => {
  return (
    <Fragment>
      <aside>
        <div className="sidebar-menu">
          <div className="menu-item item-1">
            <img src={first} alt="first" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-2">
            <img src={second} alt="second" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-3">
            <img src={third} alt="third" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-4">
            <img src={fourth} alt="fourth" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-5">
            <img src={fifth} alt="fifth" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-6">
            <img src={sixth} alt="sixth" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-7">
            <img src={seventh} alt="seventh" className="sidebar-icon" />
          </div>
          <div className="menu-item small-item item-8">
            <img src={eighth} alt="eighth" className="sidebar-icon" />
          </div>
        </div>
      </aside>
    </Fragment>
  );
};

export default Sidebar;
