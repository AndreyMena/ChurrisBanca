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


const SearchUserPopup = ({ openPopup, handleClosePopup }) => {
  const { startLoadingAccounts, accounts, setAccounts } = useSocialStore();
  const { auth } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

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
    handleCloseDropdown();
  };

  useEffect(() => {
    startLoadingAccounts();
  }, []);
  
  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogTitle align="center">Who are you looking for?</DialogTitle>
      <DialogContent>
      <Button onClick={handleOpenDropdown}>Select user</Button>
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
