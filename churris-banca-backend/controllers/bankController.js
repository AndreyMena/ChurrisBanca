const { response } = require("express");

const bankAccounts = [
  // Borrar después
  { id: 1, userName: "jose.castro", accountStatus: 1550000, currency: "Ch" },
  { id: 2, userName: "maria.hernandez", accountStatus: 150000, currency: "€" },
];

const getBankAccountById = (req, res = response) => {
  const idBankAccount = parseInt(req.params.idBankAccount, 10);

  const bankAccount = bankAccounts.find(
    (bankAccount) => bankAccount.id === idBankAccount
  );

  if (bankAccount) {
    return res.status(200).json({
      bankAccount: bankAccount,
    });
  }

  res.status(400).json({
    message: "Bank account not found",
  });
};

module.exports = { getBankAccountById };
