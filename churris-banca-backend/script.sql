CREATE TABLE USUARIO (
    Nickname VARCHAR(25) PRIMARY KEY,
    Contrasena VARCHAR(255) NOT NULL,
    Nombre VARCHAR(25) NOT NULL,
    Apellidos VARCHAR(25) NOT NULL,
    Imagen VARCHAR(255) NULL,
    Email VARCHAR(40) NOT NULL,
    Celular CHAR(8) NULL,
    RefreshToken VARCHAR(255) NULL
);

INSERT INTO USUARIO (Nickname, Contrasena, Nombre, Apellidos, Imagen, Email, Celular, RefreshToken)
VALUES
	('maria.andres', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'María Fernanda', 'Andres Monge', NULL, 'maria.andres@ucr.ac.cr', 12345678, NULL),
	('gerardo.camposbadilla', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Gerardo Josué', 'Campos Badilla', NULL, 'gerardo.camposbadilla@ucr.ac.cr', 12345678, NULL),
	('jeremy.espinozamadrigal', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Jeremy Jose', 'Espinoza Madrigal', NULL, 'jeremy.espinozamadrigal@ucr.ac.cr', 12345678, NULL),
	('richard.garita', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Richard Alberto', 'Garita Aguilar', NULL, 'richard.garita@ucr.ac.cr', 12345678, NULL),
	('genesis.herreraknyght', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Génesis Monserrath', 'Herrera Knyght', NULL, 'genesis.herreraknyght@ucr.ac.cr', 12345678, NULL),
	('esteban.leonrodriguez', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Esteban Alonso', 'León Rodríguez', NULL, 'esteban.leonrodriguez@ucr.ac.cr', 12345678, NULL),
	('randall.lopezvarela', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Randall Esteban', 'López Varela', NULL, 'randall.lopezvarela@ucr.ac.cr', 12345678, NULL),
	('andrey.menaespinoza', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Andrey Esteban', 'Mena Espinoza', NULL, 'andrey.menaespinoza@ucr.ac.cr', 12345678, NULL),
	('brandon.moraumana', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Brandon Alonso', 'Mora Umaña', NULL, 'brandon.moraumana@ucr.ac.cr', 12345678, NULL),
	('valery.murcia', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Valery Maeva', 'Murcia Meléndez', NULL, 'valery.murcia@ucr.ac.cr', 12345678, NULL),
	('jason.murillo', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Jason Josué', 'Murillo Madrigal', NULL, 'jason.murillo@ucr.ac.cr', 12345678, NULL),
	('cristian.ortegahurtado', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Cristian Guillermo', 'Ortega Hurtado', NULL, 'cristian.ortegahurtado@ucr.ac.cr', 12345678, NULL),
	('carlos.ramirezmasis', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Carlos Alberto', 'Ramírez Masis', NULL, 'carlos.ramirezmasis@ucr.ac.cr', 12345678, NULL),
	('yordi.robles', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Yordi Guillermo', 'Robles Siles', NULL, 'yordi.robles@ucr.ac.cr', 12345678, NULL),
	('sebastian.rodrigueztencio', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Sebastian', 'Rodríguez Tencio', NULL, 'sebastian.rodrigueztencio@ucr.ac.cr', 12345678, NULL),
	('carlos.sanchezblanco', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Carlos Antonio', 'Sánchez Blanco', NULL, 'carlos.sanchezblanco@ucr.ac.cr', 12345678, NULL),
	('david.sanchezlopez', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'David', 'Sánchez López', NULL, 'david.sanchezlopez@ucr.ac.cr', 12345678, NULL),
	('dylan.tenorio', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Dylan Gabriel', 'Tenorio Rojas', NULL, 'dylan.tenorio@ucr.ac.cr', 12345678, NULL),
	('eithel.vega', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Eithel José', 'Vega Robles', NULL, 'eithel.vega@ucr.ac.cr', 12345678, NULL),
	('ricardo.villalon', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Ricardo', 'Villalón Fonseca', NULL, 'ricardo.villalon@ucr.ac.cr', 12345678, NULL),
	('andre.villegas', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Andre', 'Villegas Gallardo', NULL, 'andre.villegas@ucr.ac.cr', 12345678, NULL),
	('emilia.viquez', '$2b$10$33Q9jtAoaXC4aUX9Bjihxum2BHG.ENB6JyoCvPjnuXpITtUd8x8/y', 'Emilia', 'Viquez Mora', NULL, 'emilia.viquez@ucr.ac.cr', 12345678, NULL);

INSERT INTO MENSAJE (Nickname, Contenido, Imagen) 
VALUES 
	("cristian.ortegahurtado", "Este es un mensaje de prueba.\nOjalá todo salga bien :)", "https://res.cloudinary.com/churris-banca/image/upload/v1717375978/react-churris-banca/juocijzxbw7rhhj2g9tq.png");
	("andre.villegas", "Este es mi primer post", "https://res.cloudinary.com/churris-banca/image/upload/v1717375978/react-churris-banca/juocijzxbw7rhhj2g9tq.png");

INSERT INTO LIKES (IdMensaje, Nickname)
VALUES 
	(4, "andre.villegas")
	(5, "cristian.ortegahurtado");

INSERT INTO DISLIKES (IdMensaje, Nickname) 
VALUES 
	(5, "andrey.menaespinoza");
