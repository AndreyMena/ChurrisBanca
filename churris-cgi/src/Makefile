CXX = g++
CXXFLAGS = -Wall -std=c++11
LIBS = -lmysqlclient -lpthread
TARGET = cgi
SRC = cgi.cpp

# Make
$(TARGET): $(SRC)
	$(CXX) $(CXXFLAGS) -o $(TARGET) $(SRC) $(LIBS)

# Make clean
clean:
	rm -f $(TARGET)
