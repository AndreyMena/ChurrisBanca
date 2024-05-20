import React, { useState } from "react";
import { Dialog } from "@mui/material";
import ContactsDropdown from "./ContactsDropdown";
import "./SendMoneyPopup.css";
import MoneyAmount from "./MoneyAmount";

const SendMoneyPopup = ({ openPopup, handleClosePopup, accountBalance }) => {
  const [stage, setStage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handlePrevStage = (contact) => {
    setSelectedContact(contact);
    setStage(stage - 1);
  };

  const handleSelectedContact = (contact) => {
    setSelectedContact(contact);
    handleNextStage();
  };

  const renderContent = () => {
    switch (stage) {
      case 1:
        return <ContactsDropdown handleNextStage={handleSelectedContact} />;
      case 2:
        return (
          <MoneyAmount
            contact={selectedContact}
            accountBalance={accountBalance}
            handlePrevStage={handlePrevStage}
            handleNextStage={handleNextStage}
          />
        );
      case 3:
        return <h1>Certificado</h1>;
    }
  };

  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      {renderContent()}
    </Dialog>
  );
};

export default SendMoneyPopup;
