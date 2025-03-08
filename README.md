# Basic-Node-Template-File

This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything. 
src→ Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder) 
Lets take a look inside the src folder 
-config In this folder anything and everything regarding any configurations o setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the server-config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 
routes In the routes folder, we register a route and the corresponding middleware and controllers to it