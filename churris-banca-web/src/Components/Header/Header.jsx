import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <div id="header">
      <div id="logo-search">
        <text>
          <b>Churris Banca</b>
        </text>
        <input placeholder={`Search`} id="searchEngine" />
      </div>
      <div id="menu">
        <div className="icon">
          <IoHomeOutline />
        </div>
        <div className="icon">
          <FaMoneyBillWave />
        </div>
      </div>
      <div id="profile-image">
        <FaMoneyBillWave />
      </div>
    </div>
  );
}
