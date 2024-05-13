require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mariadb = require('mariadb');
//const connectDB = require('./config/dbConn');  //Aqui ira la conexion con mariadb
const PORT = process.env.PORT || 3500;

// Se llamara al metodo de dbConn a MariaDB
//connectDB();

// Verifica credentials en el header de cada entrada
app.use(credentials);

// Cross Origin Resource Sharing, resuelve errores en el front de COR
app.use(cors(corsOptions));

// Express formateo de las URLs
app.use(express.urlencoded({ extended: false }));
// Las pasa a json 
app.use(express.json());

//Middleware para cookies
app.use(cookieParser());

//serve static files
//app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
//app.use('/register', require('./routes/register'));  //TODO, mejor implementarlo para agregar y hashear pass de nuevos users
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

//Otro middleware para los web tokens, necesario para quitar o no sesion
//en caso de querer hacer request ya deslogeado
app.use(verifyJWT);  

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

//TODO: Encerrar esto en una promesa q se hace solo si se conecto bien a mariadb
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));