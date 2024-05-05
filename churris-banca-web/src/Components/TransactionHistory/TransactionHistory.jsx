import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  return (
    <div id="transaction-history">
      <div className="card">
        <div id="coin">
          <FaArrowRight />
          <text>&nbsp;Ch</text>
        </div>
        <div id="summary">
          <text className="green-text">Transferencia recibida</text>
          <text>1924372</text>
          <text>User 2</text>
          <text id="smaller-text">Hace 2 días</text>
        </div>
        <div id="amount">
          <text className="green-text">+&nbsp;Ch15,500.00</text>
        </div>
      </div>
      <div className="div-line" />
      {/*Borrar despues*/}
      <div className="card">
        <div id="coin">
          <FaArrowLeft />
          <text>&nbsp;Ch</text>
        </div>
        <div id="summary">
          <text className="red-text">Transferencia realizada</text>
          <text>2924372</text>
          <text>User 3</text>
          <text id="smaller-text">Hace 3 días</text>
        </div>
        <div id="amount">
          <text className="red-text">+&nbsp;Ch15,500.00</text>
        </div>
      </div>
      <div className="div-line" />
      {/*Borrar despues*/}
      <div className="card">
        <div id="coin">
          <FaArrowLeft />
          <text>&nbsp;Ch</text>
        </div>
        <div id="summary">
          <text className="red-text">Transferencia realizada</text>
          <text>3924372</text>
          <text>User 3</text>
          <text id="smaller-text">Hace 3 días</text>
        </div>
        <div id="amount">
          <text className="red-text">+&nbsp;Ch15,500.00</text>
        </div>
      </div>
      <div className="div-line" />
      {/*Borrar despues*/}
      <div className="card">
        <div id="coin">
          <FaArrowRight />
          <text>&nbsp;Ch</text>
        </div>
        <div id="summary">
          <text className="green-text">Transferencia recibida</text>
          <text>4924372</text>
          <text>User 4</text>
          <text id="smaller-text">Hace 4 días</text>
        </div>
        <div id="amount">
          <text className="green-text">+&nbsp;Ch30,100.00</text>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
