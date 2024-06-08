const jwt = require('jsonwebtoken');

//Middleware para TODO lo que entra
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    // Verificacion de seguridad del header para auth
    //if (!authHeader) return res.sendStatus(401);
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    console.log("HOla");
    const token = authHeader.split(' ')[1];
    console.log(token)
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //Token invalido
            req.user = decoded.username;
            next();
        }
    );
}

module.exports = verifyJWT