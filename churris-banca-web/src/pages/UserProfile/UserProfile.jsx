import React from "react";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";
import ClientServerProvider from "../../Components/Providers/ClientServerProvider";

const UserProfile = () => {
  return (
    <ClientServerProvider>
      <div>
        <Header />
        <Profile />
      </div>
    </ClientServerProvider>
  );
};

export default UserProfile;
