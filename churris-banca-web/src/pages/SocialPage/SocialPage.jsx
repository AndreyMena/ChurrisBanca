import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CreatePost from "../../Components/Social/CreatePost/CreatePost";
import Header from "../../Components/Header/Header";
import Post from "../../Components/Social/Post/Post";

const SocialPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <CreatePost />
      </div>
      <Container maxWidth="xl" style={{ height: '100vh', overflowY: 'auto' }}>
        <Box>
          <Post />
          <Post />
          <Post />
        </Box>
      </Container>
    </div>
  );
};

export default SocialPage;
