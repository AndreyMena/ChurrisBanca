import React from "react";
import Pagination from "@mui/material/Pagination";

import "./PaginationBar.css";

const PaginationBar = ({totalPages, currentPage, handlePageChange}) => {
  return (
    <div id="pagination-container">
      <Pagination 
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => handlePageChange(value)} 
        variant="outlined" 
        color="primary" />
    </div>
  );
};

export default PaginationBar;
