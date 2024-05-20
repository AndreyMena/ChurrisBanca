import React, { useState, useEffect } from "react";
import {
  Button,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import "./SendMoneyPopup.css";
import { useBankStore } from "../../../hooks/useBankStore";
import useAuth from "../../../hooks/useAuth";

const ContactsDropdown = ({ handleNextStage }) => {
  const {
    startLoadingBankAccountUsernames,
    bankAccountUsernames,
    setBankAccountUsernames,
  } = useBankStore();
  const { auth } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContact, setSelectedContact] = useState("Contacts");

  const handleOpenDropdown = (event) => {
    setAnchorEl(event.currentTarget);

    const updatedBankAccountUsernames = bankAccountUsernames.filter(
      (userName) => userName !== auth.user
    );
    setBankAccountUsernames(updatedBankAccountUsernames);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    handleCloseDropdown();
  };

  useEffect(() => {
    startLoadingBankAccountUsernames();
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
          {bankAccountUsernames.map((userName) => (
            <MenuItem
              key={userName}
              onClick={() => handleSelectContact(userName)}
            >
              {userName}
            </MenuItem>
          ))}
        </Menu>
        <Button
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
