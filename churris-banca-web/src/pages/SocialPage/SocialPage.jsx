import React from "react";
import Box from "@mui/material/Box";
import CreatePost from "../../Components/Social/CreatePost/CreatePost";
import Container from "@mui/material/Container";
import Header from "../../Components/Header/Header";
import Post from "../../Components/Social/Post/Post";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";

const SocialPage = () => {
  return (
    <ClientServerProvider>
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
    </ClientServerProvider>
  );
};

export default SocialPage;
