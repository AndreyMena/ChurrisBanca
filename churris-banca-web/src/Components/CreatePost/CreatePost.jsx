import React from "react";
import { CgProfile } from "react-icons/cg";
import SearchEngine from "../Tags/SearchEngine";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div id="create-post">
      <div id="profile-picture">
        <CgProfile />
      </div>
      <SearchEngine text="¿Qué estás pensando, User?" id="search-engine" />
    </div>
  );
};

export default CreatePost;
