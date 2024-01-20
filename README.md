# employeemanagement


Description
This repository contains the code for an Employee Management System implemented using Node.js, Express, MongoDB, and JWT authentication.

Setup
Ensure you have Node.js and MongoDB installed on your machine.

Install dependencies: npm install

How to Run  <br>
Run the following command to start the server: npm run server



  <br>



Endpoint: POST /employees
Authorization: Requires a valid JWT token in the headers.
Payload Example:
json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "dateOfBirth": "1990-01-01",
  "department": "IT",
  "position": "Developer"
}
##Get All Employees

## Endpoint: GET /gett
Authorization: Requires a valid JWT token in the headers.
Get Employee by ID

## Endpoint: GET /:employeeId
Authorization: Requires a valid JWT token in the headers.
Filter, Sort, and Paginate Employees

## Endpoint: GET /
http://localhost:1212/emp?page=1&limit=3&sort=desc&position=marketing
Query Parameters:
page: Page number (default: 1)
limit: Number of items per page (default: 10)
sort: Sorting order ("asc" or "desc")
position: Filter by employee position
Authorization: Requires a valid JWT token in the headers.




## Endpoint: PUT /:employeeId
Authorization: Requires a valid JWT token in the headers.
Payload Example:
json
Copy code
{
  "firstName": "UpdatedFirstName",
  "lastName": "UpdatedLastName",
  "email": "updated.email@example.com",
  "dateOfBirth": "1990-01-01",
  "department": "UpdatedDepartment",
  "position": "UpdatedPosition"
}




## Endpoint: DELETE /:employeeId
Authorization: Requires a valid JWT token in the headers.
Authentication Endpoints
Admin Signup


## Endpoint: POST /signup
Payload Example:
json
Copy code
{
  "email": "admin@example.com",
  "password": "admin123",
  "position": "Admin"
}


##  Endpoint: POST /login
Payload Example:
json
Copy code
{
  "email": "admin@example.com",
  "password": "admin123"
}
