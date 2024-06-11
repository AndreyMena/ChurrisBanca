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

const SearchUserPopup = ({ openPopup, handleClosePopup, }) => {
  const { auth } = useAuth();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ selectedUser, setSelectedUser ] = useState("Select user");
  const { startLoadingAccounts, accounts, setAccounts, friendship, checkFriendship, sendNewFollow, sendRemoveFollow, viewOnlyUserProfile, getViewOnlyUserProfile } = useSocialStore();
  const [ isFollowButtonVisible, setIsFollowButtonVisible ] = useState(false);
  const [ isSeeProfileButtonVisible, setIsSeeProfileButtonVisible ] = useState(false);
  const [ isUnfollowButtonVisible, setIsUnfollowButtonVisible ] = useState(false);

  const { firstFriendship, secondFriendship } = friendship;
  const { Nombre, Apellidos, Email, Celular, Imagen } = viewOnlyUserProfile;

  const [payload, setPayload] = useState(null);
  const [readyToUpdateUI, setReadyToUpdateUI] = useState(false);

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

  const handleSelectUser = async (name, surnames, nickname) => {
    setSelectedUser(name + " " + surnames);
    const newPayload = {
      followed: nickname,
      follower: auth.user,
    };
    setPayload(newPayload);
    await checkFriendship(newPayload);
    setReadyToUpdateUI(true);
    handleCloseDropdown();
  };

  useEffect(() => {
    if (readyToUpdateUI) {
      if (firstFriendship === 1 && secondFriendship === 1) {
        setIsFollowButtonVisible(false);
        setIsUnfollowButtonVisible(true);
        setIsSeeProfileButtonVisible(true);
      } else if (firstFriendship === 1 && secondFriendship === 0) {
        setIsFollowButtonVisible(false);
        setIsUnfollowButtonVisible(true);
        setIsSeeProfileButtonVisible(false);
      } else {
        setIsFollowButtonVisible(true);
        setIsUnfollowButtonVisible(false);
        setIsSeeProfileButtonVisible(false);
      }
      setReadyToUpdateUI(false);
    }
  }, [firstFriendship, secondFriendship, readyToUpdateUI]);

  const handleFollow = () => {
    sendNewFollow(payload);
  }

  const handleUnfollow = () => {
    sendRemoveFollow(payload);
  }

  const handleSeeProfile = () => {
    getViewOnlyUserProfile(payload.followed);
    console.log(viewOnlyUserProfile);
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
                handleSelectUser(account.Nombre, account.Apellidos, account.Nickname)
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
