import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Pagination.css";

const Pagination = () => {
  return (
    <div id="pagination">
      <div className="arrows">
        <IoIosArrowBack />
        <text>Anterior</text>
      </div>
      <text className="numbers">&nbsp;1</text>
      <text className="numbers">&nbsp;2</text>
      <text className="numbers">&nbsp;3</text>
      <text className="numbers">&nbsp;...</text>
      <text className="numbers">&nbsp;99</text>
      <div className="arrows">
        <text>&nbsp;Siguiente</text>
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default Pagination;
