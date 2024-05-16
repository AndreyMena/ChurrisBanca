//TODO Cambiar por la base mariaDB
const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');  //Encriptador y desemcriptador
const jwt = require('jsonwebtoken');  //Tokens para la sesion
const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = usersDB.users.find(person => person.username === user);  //TODO Cambiar por operacion a mariaDB
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    
    // Evalua password 
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {

        // TODO
        //const roles = Object.values(foundUser.roles).filter(Boolean);

        // Create JWTs
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }  // Cambiar a 15min, osea '15m'
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '50m' }
        );
        
        // Guarda refreshToken del usuario
        // TODO: por ahora escribe en JSON, luego cambiar a la Base
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = { ...foundUser, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        // Se crea el cookie con el refreshtoken, httpOnly para que no lo saquen con
        // JS, el calculo del max age es para 1 dia.
        //Quitar secure si probamos con postman o thunderclient, pero hay q volverlo a poner
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        // TODO: Acordarme de no guardar el token en el storage del front, si no en memoria
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };