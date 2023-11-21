Development Challenge -  Node.js
This service is designed to handle GET requests with a parameter in the query string. The parameter should be a value, and the service will return a list containing the first 5 countries whose names contain the specified value. However, there is a condition: the value provided must be at least 3 characters long. If the value doesn't meet this criterion, the service will respond with a status code 204 (No Content).

Endpoint:

Method: GET
Endpoint: /countries
Query Parameter:
searchTerm: The value to search for in the country names.
Response:

If the searchTerm is at least 3 characters long:

The service will respond with a JSON array containing the details of the first 5 countries whose names contain the provided value.

Prerequisites
Make sure you have the following installed:

Node.js
MongoDB
Setup
Clone the Repository:

git clone https://github.com/manriquebale/countries-backend.git

Install Dependencies:

Open a terminal in the root folder of your project and run the following command to install the dependencies: npm install

Configure Environment Variables:
Create a .env file in the project's root with the appropriate configuration. Here's an example:

DB_URI = 'mongodb://localhost:27017/countries'
PORT = 3000

Usage To run the application, use the following command:
npm start

The application will run at http://localhost:3000 by default.