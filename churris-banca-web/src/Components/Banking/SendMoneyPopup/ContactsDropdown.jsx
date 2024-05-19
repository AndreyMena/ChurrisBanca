import React, { useState } from "react";
import {
  Button,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import "./SendMoneyPopup.css";

const contacts = ["contacto1", "contacto2"]; // Borrar después

const ContactsDropdown = ({ handleNextStage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContact, setSelectedContact] = useState("Contacts");

  const handleOpenDropdown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    handleCloseDropdown();
  };

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
          {contacts.map((contact) => (
            <MenuItem
              key={contact}
              onClick={() => handleSelectContact(contact)}
            >
              {contact}
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
