import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdPage from "./AdPage";
import LoginControl from "./LoginControl";
import LoginButton from "./LoginButton";
import bellVetLogo from "../img/BellVet.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img
              style={{ width: "154px", height: "30px" }}
              src={bellVetLogo}
              alt="로고"
            />
          </Link>
          <ul>
            <li>
              <Link className="header-nav-item" to={"/pages/Movies"}>
                영화
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to={"/pages/TV"}>
                TV 프로그램
              </Link>
            </li>
            <li>
              <Link className="header-nav-item" to={"/pages/Celebrity"}>
                인물
              </Link>
            </li>
          </ul>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
