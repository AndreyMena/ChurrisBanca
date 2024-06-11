import React, { useState } from "react";
import { Dialog } from "@mui/material";
import ContactsDropdown from "./ContactsDropdown";
import MoneyAmount from "./MoneyAmount";
import ValidateTransaction from "./ValidateTransaction";
import "./SendMoneyPopup.css";

const SendMoneyPopup = ({ openPopup, handleClosePopup, accountBalance, handleNewTransaction }) => {
  const [stage, setStage] = useState(1);
  const [selectedContact, setSelectedContact] = useState("Contacts");
  const [amount, setAmount] = useState("");

  const handleNextStage = () => {
    setStage(stage + 1);
  };

  const handlePrevStage = () => {
    setStage(stage - 1);
  };

  const handleResetStage = () => {
    setStage(1);
  }

  const handleSelectedContact = (contact) => {
    setSelectedContact(contact);
    handleNextStage();
  };

  const renderContent = () => {
    switch (stage) {
      case 1:
        return <ContactsDropdown handleNextStage={handleSelectedContact} selectedContact={selectedContact} setSelectedContact={setSelectedContact} />;
      case 2:
        return (
          <MoneyAmount
            contact={selectedContact}
            accountBalance={accountBalance}
            handlePrevStage={handlePrevStage}
            handleNextStage={handleNextStage}
            amount={amount}
            setAmount={setAmount}
          />
        );
      case 3:
        return (
          <ValidateTransaction 
            selectedContact={selectedContact} 
            amount={amount} 
            handlePrevStage={handlePrevStage}
            handleNewTransaction={handleNewTransaction}
            handleResetStage={handleResetStage}
          />
        );
    }
  };

  return (
    <Dialog open={openPopup} onClose={handleClosePopup}>
      {renderContent()}
    </Dialog>
  );
};

export default SendMoneyPopup;
