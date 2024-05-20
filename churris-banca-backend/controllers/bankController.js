const { response } = require("express");

// Borrar después
const bankAccounts = [
  { id: 1, userName: "jose.castro", accountStatus: 1550000, currency: "Ch" },
  { id: 2, userName: "maria.hernandez", accountStatus: 150000, currency: "€" },
  {
    id: 2,
    userName: "roberto.chavez.madriz",
    accountStatus: 150000,
    currency: "Ch",
  },
];

// Elimminar despues
const transactionsExamples = [
  {
    transactionID: "87654321",
    originAccount: "paulina.rodriguez.jimenez", // Me lo envió
    targetAccount: "roberto.chavez.madriz",
    transactionType: "received",
    transactionDate: "11-04-2024",
    transactionTime: "13:08",
    transactionAmount: 5500,
  },
  {
    transactionID: "56781234",
    originAccount: "roberto.chavez.madriz", // Lo envío
    targetAccount: "paulina.rodriguez.jimenez",
    transactionType: "sent",
    transactionDate: "12-02-2022",
    transactionTime: "12:12",
    transactionAmount: 2000,
  },
  {
    transactionID: "43215678",
    originAccount: "ramina.chavez.gonzalez", // Me lo envió
    targetAccount: "roberto.chavez.madriz",
    transactionType: "received",
    transactionDate: "12-03-2021",
    transactionTime: "10:25",
    transactionAmount: 2500,
  },
  {
    transactionID: "13572468",
    originAccount: "roberto.chavez.madriz", // Lo envío
    targetAccount: "mario.bermudez.fuentes",
    transactionType: "sent",
    transactionDate: "15-02-2023",
    transactionTime: "09:09",
    transactionAmount: 1200,
  },
  {
    transactionID: "97531246",
    originAccount: "maria.rodriguez.hernandez", // Me lo envió
    targetAccount: "roberto.chavez.madriz",
    transactionType: "received",
    transactionDate: "12-10-2022",
    transactionTime: "15:20",
    transactionAmount: 1400,
  },
  {
    transactionID: "11223344",
    originAccount: "roberto.chavez.madriz", // Lo envío
    targetAccount: "josefo.villareal.sanchez",
    transactionType: "sent",
    transactionDate: "07-01-2020",
    transactionTime: "18:00",
    transactionAmount: 10000,
  },
  {
    transactionID: "12356748",
    originAccount: "fernando.villareal.sibaja",
    targetAccount: "josefo.villareal.sanchez",
    transactionType: "received",
    transactionDate: "01-04-2021",
    transactionTime: "20:20",
    transactionAmount: 10200,
  },
];

const getTransactionsByUserName = (req, res = response) => {
  const userName = req.params.userName;

  const transactions = transactionsExamples.filter(
    (transaction) =>
      transaction.originAccount === userName ||
      transaction.targetAccount === userName
  );

  if (transactions.length > 0) {
    return res.status(200).json({
      transactions: transactions,
    });
  }

  res.status(400).json({
    message: "No transactions found for this bank account",
  });
};

const getBankAccountUsernames = (req, res = response) => {
  bankAccountUsernames = bankAccounts.map((account) => account.userName);

  if (bankAccountUsernames) {
    return res.status(200).json({
      bankAccountUsernames: bankAccountUsernames,
    });
  }

  res.status(400).json({
    message: "No bank account usernames found",
  });
};

module.exports = {
  getTransactionsByUserName,
  getBankAccountUsernames,
};
