import React from "react";

const SearchEngine = ({ text, id }) => {
  return <input placeholder={text} id={id} />;
};

export default SearchEngine;
