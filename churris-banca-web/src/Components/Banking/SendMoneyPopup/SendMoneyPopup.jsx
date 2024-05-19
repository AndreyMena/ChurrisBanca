import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Menu,
  MenuItem,
} from "@mui/material";
import "./SendMoneyPopup.css";

const contacts = ["contacto1", "contacto2"]; // Borrar después

const SendMoneyPopup = ({ openPopup, handleClosePopup }) => {
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
    <Dialog open={openPopup} onClose={handleClosePopup}>
      <DialogTitle>Select a contact</DialogTitle>
      <DialogContent>
        <div id="dropdown-button-container">
          <Button onClick={handleOpenDropdown}>{selectedContact}</Button>
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
          <Button id="button-next">Next</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SendMoneyPopup;
