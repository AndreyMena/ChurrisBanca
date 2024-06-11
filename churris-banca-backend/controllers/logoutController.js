const pool = require('../config/dbConnection');

const handleLogout = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    // Busca el refreshToken en la base?
    const sqlQuery = 'SELECT Email FROM USUARIO WHERE RefreshToken=?';
    const foundUser = await pool.query(sqlQuery, refreshToken);
    if (!foundUser || foundUser.length === 0) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }
    
    // Borra el refreshToken de la DB
    const deleteRefreshToken = "UPDATE USUARIO SET RefreshToken = '' WHERE Email = ?";
    await pool.query(deleteRefreshToken, foundUser[0].Email);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}

module.exports = { handleLogout }