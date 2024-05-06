import React from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import "./Posts.css";

const Reactions = () => {
  return (
    <div>
      <div id="amount-reactions">
        <div className="reaction">
          <AiFillLike />
          <text>541</text>
        </div>
        <div className="reaction">
          <AiFillDislike />
          <text>500</text>
        </div>
      </div>

      <div className="div-line" />

      <div id="buttons-reactions">
        <div className="reaction">
          <AiOutlineLike />
          <text>Me gusta</text>
        </div>
        <div className="reaction">
          <AiOutlineDislike />
          <text>No me gusta</text>
        </div>
      </div>
    </div>
  );
};

export default Reactions;
