# Configuración y Ejecución del Proyecto C++/CGI

Este README demuestra cómo correr el proyecto y los pasos necesarios para conectarse a la base de datos MariaDB utilizando utilizando el archivo de configuracion.

## Requisitos

- GCC (compilador de C++)
- Cliente de MariaDB (`mysql`)
- Biblioteca MySQL para C++ (`libmysqlclient-dev` en Debian/Ubuntu, `mysql-connector-c++` en otros sistemas)

## Paso 1: Configuración de Variables de Entorno

A continuación, se describen los pasos para configurar las variables de las credenciales para la base.

### 1. Abrir el archivo llamado db_config.txt

`nano db_config.txt`

### 2. Editar el archivo de configuración

Una vez abierto agregarle las credenciales correspondientes a la base de datos personal:

### 4. Correr el programa

Para ello se debe ejecutar el comando `make`, posteriormente `./cgi` y se puede introducir el formato de los datos como `input_data=t,usuario` par ver las transacciones, `b,usuario,C (de cuenta en churruminos, E de cuenta en Euros)` para ver el balance y `b,usuario,C (de cuenta en churruminos, E de cuenta en Euros)` para ver el balance y `d,300,moneda(C para churrumines, E para euros),usuario1,usuario2,transaccion` para hacer un deposito