CREATE TABLE USUARIO (
    Nickname VARCHAR(20) PRIMARY KEY,
    Contrasena VARCHAR(255) NOT NULL,
    Nombre VARCHAR(25) NOT NULL,
    Apellidos VARCHAR(25) NOT NULL,
    Imagen BLOB NULL,
    Email VARCHAR(40) NOT NULL,
    Celular CHAR(8) NULL,
    RefreshToken VARCHAR(255) NULL
);

INSERT INTO USUARIO (Nickname, Contrasena, Nombre, Apellidos, Email, Celular)
VALUES ('mi_nickname', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Nombre', 'Apellidos', 'prueba', NULL);

