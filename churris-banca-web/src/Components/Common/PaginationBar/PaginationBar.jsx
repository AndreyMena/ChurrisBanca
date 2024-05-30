import React from "react";
import Pagination from "@mui/material/Pagination";

import "./PaginationBar.css";

const PaginationBar = () => {
  return (
    <div id="pagination-container">
      <Pagination count={5} variant="outlined" color="primary" />
    </div>
  );
};

export default PaginationBar;
