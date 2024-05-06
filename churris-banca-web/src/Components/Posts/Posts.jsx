import React from "react";
import Head from "./Head";

const Posts = () => {
  return (
    <div id="posts">
      <Head />

      <div id="description">
        <text>Insert text here</text>
        <br />
        <text className="blue-text">#tagOne #tagTwo #tagThree</text>
        <br />
        <text className="blue-text">https://enter-url.com</text>
      </div>
    </div>
  );
};

export default Posts;
