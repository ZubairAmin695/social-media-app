import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
// fake api data.......
import CurrentUser from "../../FakeApis/CurrentUserData";

// components........

import DarkMood from "../darkmode/DarkMood";

// fontawesome.....
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">

        {/* left nav area ......... */}
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">RootAlpha</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>
{/* nav area right */}
        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faBell} />
          </Link>

          <DarkMood/>
          <Link to="/">
            <FontAwesomeIcon icon={faBars} />
          </Link>

          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
        <h4>Beck </h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
