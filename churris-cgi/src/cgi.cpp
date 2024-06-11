#include <iostream>
#include <string>
#include <sstream>
#include <chrono>
#include <thread>
#include <vector>
#include <mysql/mysql.h>
#include <ctime>
#include <cstdlib> // Para getenv
#include <fstream> // Para ifstream
#include <algorithm>
#include <regex>

using namespace std;

string decodeUriArgument(const string& argument)
{
    string decoded;
    char ch;
    long unsigned int i; 
    int j;
	
    for (i = 0; i < argument.length(); i++) 
	{
        if (int(argument[i]) == 37)
		{
            sscanf(argument.substr(i + 1, 2).c_str(), "%x", &j);
            ch = static_cast<char>(j);
            decoded += ch;
            i = i + 2;
			
        }else{
            decoded += argument[i];
        }
    }
    return decoded;
}

string getCgiReply(string reply)
{
    ostringstream cgiReply;
    cgiReply << "Content-type: text/html\n\n";
    cgiReply << "<html>\n";
    cgiReply << "<head>\n";
    cgiReply << "<title>TITULO</title>\n";
    cgiReply << "</head>\n";
    cgiReply << "<body>\n";
    cgiReply << "<h1>ENCABEZADO</h1>\n";
    cgiReply << "<p>\n";
    cgiReply << reply;
    cgiReply << "\n</p>\n";
    cgiReply << "</body>\n";
    cgiReply << "</html>\n";

    return cgiReply.str();
}

std::vector<std::string> split(const std::string &s, char delimiter) {
    std::vector<std::string> tokens;
    std::string token;
    std::istringstream tokenStream(s);
    while (std::getline(tokenStream, token, delimiter)) {
        tokens.push_back(token);
    }
    return tokens;
}

bool isNumber(const std::string& s) {
    bool hasDecimal = false;
    for (char c : s) {
        if (!std::isdigit(c)) {
            if (c == '.' && !hasDecimal) {
                hasDecimal = true;
            } else {
                return false;
            }
        }
    }
    return !s.empty();
}

bool isValidSignature(const std::string& signature) {
    // Expresión regular para permitir letras, números y los caracteres =, +, /
    std::regex pattern("[A-Za-z0-9=+/.,_!@\\$%^&(){}\\[\\]\":;`~]*[^-'#*\\\\/]*");

    // Comprueba si la firma coincide con el patrón
    return std::regex_match(signature, pattern);
}

string checkQuery(string query) {
    // Separar los datos por comas
    std::vector<std::string> params = split(query, ',');
    // Lista de usuarios permitidos
    std::vector<std::string> allowedUsers = {
        "maria.andres", "gerardo.camposbadilla", "jeremy.espinozamadrigal",
        "richard.garita", "genesis.herreraknyght", "esteban.leonrodriguez", "randall.lopezvarela",
        "andrey.menaespinoza", "brandon.moraumana", "valery.murcia", "jason.murillo",
        "cristian.ortegahurtado", "carlos.ramirezmasis", "yordi.robles", "sebastian.rodrigueztencio",
        "carlos.sanchezblanco", "david.sanchezlopez", "dylan.tenorio", "eithel.vega",
        "ricardo.villalon", "andre.villegas", "emilia.viquez"
    };

    // Determinar el tipo de transacción
    char transactionType = params[0][0];
    std::string resultQuery;
    switch (transactionType) {
        case 'd': {
            //Para hacer depositos:
            //d,300,moneda(C para churrumines, E para euros),usuario1,usuario2,transaccion
            if (params.size() == 6) {
                std::string amount = params[1];
                std::string currency = params[2];
                std::string user1 = params[3];
                std::string user2 = params[4];
                std::string firma = params[5];

                // Validar que amount sea un número
                if (!isNumber(amount)) {
                    std::cerr << "<html><body><h1>Error: Amount must be a number</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                // Validar que currency sea "C" o "E"
                if (currency != "C" && currency != "E") {
                    std::cerr << "<html><body><h1>Error: Currency must be 'C' or 'E'</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                // Validar que user1 y user2 sean diferentes
                if (user1 == user2) {
                    std::cerr << "<html><body><h1>Error: User1 cannot be the same as User2</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                // Validar que user1 y user2 estén en la lista de usuarios permitidos
                if (std::find(allowedUsers.begin(), allowedUsers.end(), user1) == allowedUsers.end() ||
                    std::find(allowedUsers.begin(), allowedUsers.end(), user2) == allowedUsers.end()) {
                    std::cerr << "<html><body><h1>Error: User1 and User2 must be one of the allowed users</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                if (!isValidSignature(firma)) {
                    std::cerr << "<html><body><h1>Error: Invalid characters in the signature</h1></body></html>";
                    return ""; // Retorna una cadena vacía para indicar error
                }

                if (firma.size() >= 345) {
                    std::cerr << "<html><body><h1>Error: Signature must not exceed 345 characters</h1></body></html>";
                    return ""; // Devuelve una cadena vacía para indicar un error
                }

                //Deposito a la cuenta
                resultQuery = "UPDATE CUENTA SET Monto = Monto + " + amount + " WHERE Nickname = '" + user2 + "' AND Moneda = '" + currency + "';_";  //Importante el espacio
                
                //Resta a la cuenta que transfiere
                resultQuery += "UPDATE CUENTA SET Monto = Monto - " + amount + " WHERE Nickname = '" + user1 + "' AND Moneda = '" + currency + "';_";
                
                //Se toma hora actual
                time_t now = time(0);
                tm *ltm = localtime(&now);
                char datetime[20];
                strftime(datetime, 20, "%Y-%m-%d %H:%M:%S", ltm);

                // Se deja egistro de la transacción
                resultQuery += "INSERT INTO TRANSACCION (CuentaOrigen, CuentaDestino, Monto, Firma, FechaHora) VALUES ('"
                    + user1 + "', '"
                    + user2 + "', "
                    + amount + ", '"
                    + firma + "', '"
                    + datetime + "');";   
            } else {
                std::cout << "<html><body><h1>Error: Invalid parameters for transaction</h1></body></html>";
            }
            break;
        }
        case 't': {
            //Ver transacciones del usuario:
            //t,usuario
            if (params.size() == 2) {
                std::string user = params[1];

                if (std::find(allowedUsers.begin(), allowedUsers.end(), user) == allowedUsers.end()) {
                    std::cerr << "<html><body><h1>Error: User1 and User2 must be one of the allowed users</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                // Construir la resultQuery la resultQuery para ver transacciones del usuario
                resultQuery = "SELECT * FROM TRANSACCION WHERE CuentaOrigen = '" + user 
                  + "' OR CuentaDestino = '" + user 
                  + "' ORDER BY FechaHora DESC";
            } else {
                std::cerr << "Error: Invalid parameters for viewing transactions" << endl;
            }
            break;
        }
        case 'b': {
            //Ver balance, aunque tambien q traiga los otros datos del usuario cm nombre etc:
            //b,usuario,C (de cuenta en churruminos, E de cuenta en Euros)
            if (params.size() == 3) {
                std::string user = params[1];
                std::string currency = params[2];

                if (std::find(allowedUsers.begin(), allowedUsers.end(), user) == allowedUsers.end()) {
                    std::cerr << "<html><body><h1>Error: User1 and User2 must be one of the allowed users</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }

                // Validar que currency sea "C" o "E"
                if (currency != "C" && currency != "E") {
                    std::cerr << "<html><body><h1>Error: Currency must be 'C' or 'E'</h1></body></html>";
                    return ""; // Regresa una cadena vacía para indicar error
                }                

                // Obtiene balance y de paso los otros datos para validar
                resultQuery = "SELECT * FROM CUENTA WHERE Nickname = '" + user + "' AND Moneda = '" + currency + "';";
            } else {
                std::cerr << "<html><body><h1>Error: Invalid parameters for viewing balance</h1></body></html>";
            }
            break;
        }
        default:
            std::cerr << "<html><body><h1>Error: Unknown transaction type</h1></body></html>";
            break;
    }
    return resultQuery;
}

void submitQuery(const string& query, const char* HOST, const char* USERNAME, const char* PASSWORD, const char* SCHEMA)
{
    // Validaciones
    if( query.empty() ) {
        cout << getCgiReply("Empty query...");
    } else {
        // Initialize connection
        MYSQL* sqlConnection = mysql_init(nullptr);

        if (sqlConnection == nullptr)
        {
            cerr << "\t+ Error initializing MySQL connection." << endl;
            return;
        }

        // Attempt connection
        if (mysql_real_connect(sqlConnection, HOST, USERNAME, PASSWORD, SCHEMA, 0, nullptr, 0) == nullptr)
        {
            cerr << "\t+ Error connecting to database: " << mysql_error(sqlConnection) << endl;
            mysql_close(sqlConnection);
            return;
        }


        // Check and build query
        const std::string consulta = checkQuery(query);
        
        // Split query by semicolon
        std::vector<std::string> queries = split(consulta, '_');

        if (consulta == "") {
            mysql_close(sqlConnection);

            cout << getCgiReply("Error, check logs for more details (if u can ;D)");
            return;
        }
        // Execute each query
        for (const auto& singleQuery : queries) {
            // Execute query
            if (singleQuery.size() == 1) {
                continue;
            }else{
                if (mysql_query(sqlConnection, singleQuery.c_str()) != 0)
                {
                    cerr << "\t+ Error while querying: " << mysql_error(sqlConnection) << endl;
                    mysql_close(sqlConnection);
                    return;
                }
            }
        }

        // Store result
        MYSQL_RES* result = mysql_store_result(sqlConnection);

        if (query[0] == 'd') {  //Caso donde no debe retornar nada ya que no hace select
            if (result != nullptr) {
                cerr << "\t+ Error while storing query result: " << mysql_error(sqlConnection) << endl;
                mysql_close(sqlConnection);
                cout << getCgiReply("Error, revisar cgi");  //Con errores
                return;
            }else{
                mysql_close(sqlConnection);
                cout << getCgiReply("Ok");  //Sin errores
            }
        } else {
            //En este caso si se hizo un select como balance o ver transacciones
            if (result == nullptr)
            {
                cerr << "\t+ Error while storing query result: " << mysql_error(sqlConnection) << endl;
                mysql_close(sqlConnection);
                return;
            }

            // Translate result to rows
            MYSQL_ROW row;
            ostringstream resultData;

            while ((row = mysql_fetch_row(result)))
            {
                // Show result rows
                for (unsigned int i = 0; i < mysql_num_fields(result); ++i)
                {
                    if (i > 0) 
                        resultData << ", ";
                    resultData << row[i];
                }
                resultData << endl;
            }

            // Release resources & close connection
            mysql_free_result(result);
    
            mysql_close(sqlConnection);

            // Finally reply to output in CGI format
            //cout << "\t+ Replying the following content: " << endl;
            cout << getCgiReply(resultData.str());
        }
    }
}

// Función para leer el archivo de configuración
void loadConfig(const string& filename, string& host, string& username, string& password, string& schema) {
    ifstream configFile(filename);
    if (!configFile) {
        cerr << "Error opening config file." << endl;
        exit(1);
    }
    
    string line;
    while (getline(configFile, line)) {
        istringstream iss(line);
        string key, value;
        if (getline(iss, key, '=') && getline(iss, value)) {
            if (key == "DB_HOST") host = value;
            else if (key == "DB_USERNAME") username = value;
            else if (key == "DB_PASSWORD") password = value;
            else if (key == "DB_SCHEMA") schema = value;
        }
    }
}

int main()
{    
    string query;
    getline(cin, query);

    std::string host, username, password, schema;
    loadConfig("db_config.txt", host, username, password, schema);

    const char* HOST = host.c_str();
    const char* USERNAME = username.c_str();
    const char* PASSWORD = password.c_str();
    const char* SCHEMA = schema.c_str();

    // We must read 'input_data' from the URL
    string::size_type pos = query.find("input_data=");
    
    if (pos != string::npos) {
        query = decodeUriArgument(query.substr(pos + 11));
    }else{
        query = "";
    }
    
    // Verificar que el primer elemento del input sea 'd', 'b' o 't'
    if (query.empty() || (query[0] != 'd' && query[0] != 'b' && query[0] != 't')) {
        cerr << "Error: First element of input must be 'd', 'b', or 't'." << endl;
        return 1;
    }

    submitQuery(query, HOST, USERNAME, PASSWORD, SCHEMA);

    return 0;
}
