const bcrypt = require("bcrypt"); //Encriptador y desemcriptador
const jwt = require("jsonwebtoken"); //Tokens para la sesion
const pool = require("../config/dbConnection");

const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const sqlQuery =
    "SELECT Nickname, Email, Contrasena, RefreshToken FROM USUARIO WHERE Email=?";
  const foundUser = await pool.query(sqlQuery, email);
  if (!foundUser) return res.sendStatus(401); //Unauthorized

  // Evalua password
  const match = await bcrypt.compare(pwd, foundUser[0].Contrasena);
  if (match) {
    // Create JWTs
    const accessToken = jwt.sign(
      { username: foundUser[0].Email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" } // Cambiar a 15min, osea '15m'
    );
    const refreshToken = jwt.sign(
      { username: foundUser[0].Email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "50m" }
    );

    // Guarda refreshToken del usuario
    const sqlQuery = "UPDATE USUARIO SET RefreshToken = ? WHERE Email = ?";
    await pool.query(sqlQuery, [refreshToken, foundUser[0].Email]);

    // Se crea el cookie con el refreshtoken, httpOnly para que no lo saquen con
    // JS, el calculo del max age es para 1 dia.
    // Quitar secure si probamos con postman o thunderclient, pero hay q volverlo a poner
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const user = foundUser[0].Nickname;
    // Send authorization roles and access token to user
    res.json({ accessToken, user });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
