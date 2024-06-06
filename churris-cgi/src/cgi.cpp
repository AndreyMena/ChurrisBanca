#include <iostream>
#include <string>
#include <sstream>
#include <chrono>
#include <thread>
#include <mysql/mysql.h>

using namespace std;

const char* HOST = "localhost";
const char* USERNAME = "churris_cgi";
const char* PASSWORD = "Abc123$%";
const char* SCHEMA = "churris_banking";


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
			
        }else if(argument[i] == '+'){
            decoded += ' ';
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

string checkQuery(string query) {
    // Separar los datos por comas
    std::vector<std::string> params = split(query, ',');

    // Determinar el tipo de transacción
    char transactionType = params[0][0];
    std::string resultQuery;
    switch (transactionType) {
        case 'd': {
            //Para hacer depositos:
            //d,300,moneda(C para churrumines, E para euros),usuario1,usuario2
            if (params.size() == 5) {
                std::string amount = params[1];
                std::string currency = params[2];
                std::string user1 = params[3];
                std::string user2 = params[4];

                // Construir la query para dejar registro de la transacción
                std::string query = "INSERT INTO Transacciones (Id, IdCuentaOrigen, IdCuentaDestino, Monto, Fecha, Hora) VALUES ('" + user1 + "', '" + user1 + "', '" + amount + "', '" + /*fecha*/ + "', '" + /*hora*/  + "')";

                // Falta restar a las 2 cuentas.
                std::string query = "INSERT INTO Transacciones (Id, IdCuentaOrigen, IdCuentaDestino, Monto, Fecha, Hora) VALUES ('" + user1 + "', '" + user1 + "', '" + amount + "', '" + /*fecha*/ + "', '" + /*hora*/  + "')";
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

                // Construir la query la query para ver transacciones del usuario
                std::string query = "SELECT * FROM Transacciones WHERE IdCuentaOrigen = '" + user + "' OR IdCuentaDestino = '" + user + "'";
            } else {
                std::cerr << "Error: Invalid parameters for viewing transactions"; << endl;
            }
            break;
        }
        case 'b': {
            //Ver balance, aunque tambien q traiga los otros datos del usuario cm nombre etc:
            //b,usuario
            if (params.size() == 2) {
                std::string user = params[1];

                // Construir la query la query para ver el balance del usuario y demas datos
                std::string query = "SELECT balance, name, other_details FROM users WHERE username = '" + user + "'";
            } else {
                std::cerr << "<html><body><h1>Error: Invalid parameters for viewing balance</h1></body></html>";
            }
            break;
        }
        default:
            std::cerr << "<html><body><h1>Error: Unknown transaction type</h1></body></html>";
            break;
    }
}

void submitQuery(const string& query)
{
    // Validaciones
    if( query.empty() )
    {
        cout << getCgiReply("Empty query...");
    }
    else
    {
        //cout << "\t+ Query received: " << query << endl;

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

        // Execute query
        const std::string consulta = checkQuery(query);
        if (mysql_query(sqlConnection, consulta.c_str()) != 0)
        {
            cerr << "\t+ Error while querying: " << mysql_error(sqlConnection) << endl;
            mysql_close(sqlConnection);
            return;
        }

        // Store result
        MYSQL_RES* result = mysql_store_result(sqlConnection);

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

int main()
{
    string query;
    getline(cin, query);
    
    // We must read 'input_data' from the URL
    string::size_type pos = query.find("input_data=");
    
    if (pos != string::npos) {
        query = decodeUriArgument(query.substr(pos + 11));
    }else{
        query = "";
    }
    
    submitQuery(query);

    return 0;
}
