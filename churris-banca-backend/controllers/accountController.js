const { response } = require("express");

// Borrar después
const accounts = [
  { id: 1, userName: "jose.castro", accountStatus: 1550000, currency: "Ch" },
  { id: 2, userName: "maria.hernandez", accountStatus: 150000, currency: "€" },
  {
    id: 2,
    userName: "roberto.chavez.madriz",
    accountStatus: 150000,
    currency: "Ch",
  },
];

const getAccountByUsername = (req, res = response) => {
  const userName = req.params.accountUsername;

  const account = accounts.find((account) => account.userName === userName);

  if (account) {
    return res.status(200).json({
      account: account,
    });
  }

  res.status(400).json({
    message: "Accounts not found",
  });
};

module.exports = {
  getAccountByUsername,
};
