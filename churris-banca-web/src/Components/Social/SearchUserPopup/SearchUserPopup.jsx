import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";


const SearchUserPopup = ({ openPopup, handleClosePopup, selectedUser, setSelectedUser }) => {
  const { auth } = useAuth();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const { startLoadingAccounts, accounts, setAccounts, viewOnlyUserProfile, sendNewFollow, sendRemoveFollow, getSeeProfileUser } = useSocialStore();
  const [ isFollowButtonVisible, setIsFollowButtonVisible ] = useState(false);
  const [ isSeeProfileButtonVisible, setIsSeeProfileButtonVisible ] = useState(false);
  const [ isUnfollowButtonVisible, setIsUnfollowButtonVisible ] = useState(false);

  const payload = {
    followed: auth.user,
    follower: selectedUser, // TODO nombre + "." + apellidos
  };

  const handleOpenDropdown = (event) => {
    setAnchorEl(event.currentTarget);

    const updatedAccounts = accounts.filter(
      (account) => account.Nickname !== auth.user
    );
    setAccounts(updatedAccounts);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleSelectUser = (name, surnames) => {
    setSelectedUser(name + " " + surnames);
    setIsFollowButtonVisible(true);
    setIsSeeProfileButtonVisible(true);
    handleCloseDropdown();
  };

  const handleFollow = () => {
    sendNewFollow(payload);
  }

  const handleUnfollow = () => {
   sendRemoveFollow(payload);
  }

  const handleSeeProfile = () => {
    getSeeProfileUser(selectedUser);
  }

  useEffect(() => {
    startLoadingAccounts();
  }, []);
  
  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogTitle align="center">Who are you looking for?</DialogTitle>
      <DialogContent>
        <Button onClick={handleOpenDropdown}>
          {selectedUser}
        </Button>
        {isFollowButtonVisible && (
          <Button variant="contained" onClick={handleFollow}>Follow</Button>
        )}
        {isUnfollowButtonVisible && (
          <Button variant="contained" onClick={handleUnfollow}>Unfollow</Button>
        )}
        {isSeeProfileButtonVisible && (
          <Button variant="contained" onClick={handleSeeProfile}>See profile</Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseDropdown}
        >
          {accounts.map((account) => (
            <MenuItem
            key={account.Nombre}
            onClick={() =>
              handleSelectUser(account.Nombre, account.Apellidos)
            }
          >
            {account.Nombre + " " + account.Apellidos}
          </MenuItem>
        ))}
        </Menu>
      </DialogContent>
    </Dialog>
  );
};

export default SearchUserPopup;
