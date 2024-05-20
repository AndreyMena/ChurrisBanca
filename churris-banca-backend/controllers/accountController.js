const { response } = require("express");

// Borrar después
const accounts = [
  {
    id: 1,
    userName: "jose.castro.rojas",
    name: "Jose",
    lastName: "Castro Rojas",
    email: "jose.castro.rojas@gmail.com",
    phoneNumber: "12345678",
    accountStatus: 1550000,
    currency: "Ch",
  },
  {
    id: 2,
    userName: "maria.hernandez.sanchez",
    name: "Maria",
    lastName: "Hernandez Sanchez",
    email: "maria.hernandez.sanchez@gmail.com",
    phoneNumber: "34567890",
    accountStatus: 150000,
    currency: "€",
  },
  {
    id: 2,
    userName: "roberto.chavez.madriz",
    name: "Roberto",
    lastName: "Chavez Madriz",
    email: "roberto.chavez.madriz@gmail.com",
    phoneNumber: "56789043",
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
