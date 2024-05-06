import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import "./Header.css";
import SearchEngine from "../Tags/SearchEngine";

export default function Header() {
  return (
    <div id="header">
      <div id="logo-search">
        <text>
          <b>Churris Banca</b>
        </text>
        <SearchEngine text="Buscar" id="search-engine" />
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
