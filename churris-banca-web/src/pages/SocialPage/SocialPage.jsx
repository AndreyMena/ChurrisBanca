import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CreatePost from "../../Components/Social/CreatePost/CreatePost";
import Header from "../../Components/Common/Header/Header";
import PostsList from "../../Components/Social/PostsList/PostsList";

const SocialPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <CreatePost />
      </div>
      <Container maxWidth="xl" style={{ height: "100vh", overflowY: "auto" }}>
        <Box>
          <PostsList />
        </Box>
      </Container>
    </div>
  );
};

export default SocialPage;
