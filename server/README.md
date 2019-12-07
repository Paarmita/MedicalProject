## Installation Instructions
 
### Backend
* Clone or download the repo. into any fresh temporary folder.
```
git clone https://github.com/Paarmita/MedicalProject
```
* Cd into that root folder you just cloned locally.
```
cd MedicalProject && cd server
```
* Open terminal in the current folder and to install all dependencies type and 
```
npm install
```
* Now typing to start client 
``` 
 npm run server
 ```
* Server will start at http://localhost:8080/api/
* Hosted URl  https://medical-umbrella.herokuapp.com

## Description
* A restful Api built for serving as a Backend for a Medical Councelling app.
* Built a rest Api in Node.js by leveraging below-mentioned Node.js modules.
* Web server using the Express framework that supports a REST API and use Express router
* Express middlewares- Morgan for logging, Body Parser to parse the body of the message
* Used JSON web tokens for token-based user authentication
* Used Passport module together with passport-local and passport-local-mongoose for setting up local authentication within server.
* Used Mongoose population to cross-reference users within a comment as ORM.
* Configured a secure server in Node using the core HTTPS module.
* Generated the private key and public certificate and configure the HTTPS server.

### How it works !
* Checks if a verified ordinary user also has admin privileges.
* Allow an ordinary user to perform GET,POST,DELETE,MODIFY operations
* Only allows Admin to perform operations to POST other static details.
* Only allows Admin to be able to GET all the registered users' information from the database

### DB Used (MongoDB)
* MLab's MongoDB hosting platform is the fastest growing cloud Database-as-a-Service in the world. Get started with a free database and expert support.

### Package Manager Used (NPM)
* NPM is the default package manager for the JavaScript runtime environment Node.js.

### Package.json (dependencies)
* For dependencies refer Package.json.

### For Testing (Postman)
* Postman extension can be used for testing !
* Supercharge your API workflow with Postman! Build, test, and document your APIs faster.
* You can now fire up postman and then perform several operations on the REST API


GET<-->READ
POST<-->CREATE
PUT<-->UPDATE
DELETE<-->DELETE