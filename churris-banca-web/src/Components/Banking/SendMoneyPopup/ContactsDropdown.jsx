import React, { useState, useEffect } from "react";
import {
  Button,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import useSocialStore from "../../../hooks/useSocialStore";
import "./SendMoneyPopup.css";

const ContactsDropdown = ({ handleNextStage, selectedContact, setSelectedContact }) => {
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

  const handleSelectContact = (name, surnames) => {
    setSelectedContact(name + " " + surnames);
    handleCloseDropdown();
  };

  useEffect(() => {
    startLoadingAccounts();
  }, []);

  return (
    <>
      <DialogTitle>Select a contact</DialogTitle>
      <DialogContent id="dropdown-button-container">
        <Button id="contact" onClick={handleOpenDropdown}>
          {selectedContact}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseDropdown}
        >
          {accounts.map((account) => (
            <MenuItem
              key={account.Nombre}
              onClick={() =>
                handleSelectContact(account.Nombre, account.Apellidos)
              }
            >
              {account.Nombre + " " + account.Apellidos}
            </MenuItem>
          ))}
        </Menu>
        <Button
          variant="contained"
          id="btn-contacts-dropdown"
          onClick={() => handleNextStage(selectedContact)}
          disabled={selectedContact === "Contacts"}
        >
          Next
        </Button>
      </DialogContent>
    </>
  );
};

export default ContactsDropdown;
