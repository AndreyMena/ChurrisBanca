#include <iostream>
#include <string>
#include <chrono>
#include <thread>
#include <mysql/mysql.h>

using namespace std;

const char* HOST = "localhost";
const char* USERNAME = "churris_cgi";
const char* PASSWORD = "Abc123$%";
const char* SCHEMA = "churris_banking";

void submitQuery(const string& query)
{
    cout << "\t+ Query received: " << query << endl;

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

    while ((row = mysql_fetch_row(result)))
    {
        // Show result rows
        for (unsigned int i = 0; i < mysql_num_fields(result); ++i)
        {
            if (i > 0) 
                cout << ", ";
            cout << row[i];
        }
        cout << endl;
    }

    mysql_free_result(result); // Release resources
    mysql_close(sqlConnection);
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
