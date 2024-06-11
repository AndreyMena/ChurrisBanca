const pool = require('../config/dbConnection');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const sqlQuery = 'SELECT Email, Nickname FROM USUARIO WHERE RefreshToken=?';
    const foundUser = await pool.query(sqlQuery, refreshToken);
    if (foundUser.length === 0 || !foundUser) return res.sendStatus(403); //Forbidden 

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser[0].Email !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "username": decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            );
            const user = foundUser[0].Nickname;
            const email = foundUser[0].Email;
            res.json({ user, accessToken, email })
        }
    );
}

module.exports = { handleRefreshToken }