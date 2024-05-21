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

void submitQuery(const string& query)
{
    // Validaciones
    if( query.empty() )
    {
        //cout << "\t- ERROR: Input was empty" << endl;
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
        if (mysql_query(sqlConnection, query.c_str()) != 0)
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

    while (true)
    {
        while (cin.peek() == EOF) {
            // Esperar 100 milisegundos antes de intentar de nuevo
            this_thread::sleep_for(chrono::milliseconds(100));
        }

        getline(cin, query);
        submitQuery(query);
    }

    return 0;
}