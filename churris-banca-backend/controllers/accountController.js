const { response } = require("express");

const getAccountByUsername = async (req, res = response) => {
  const userName = req.params.accountUsername;

  const sqlQuery =
    "SELECT Nombre, Apellidos, Email, Celular FROM USUARIO WHERE NickName=?";
  const account = await pool.query(sqlQuery, userName);

  if (account) {
    return res.status(200).json({
      account: account[0],
    });
  }

  res.status(400).json({
    message: "Accounts not found",
  });
};

module.exports = {
  getAccountByUsername,
};
