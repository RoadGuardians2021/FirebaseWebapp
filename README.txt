-Anything not mentioned is auto-generated from either initializing the firebase project or installing it's dependencies, and was left unmodified.

Read using this legend
-----------------------------------------------------
-[Directory or file in root folder]: [Details]
	-[File under above directory]: [Details]
-----------------------------------------------------

-functions: The directory that contains files related to firebase cloud functions
	-index.js: The main node.js script for our cloud functions
	-package.json: auto-generated json file with parameters for the cloud functions. Modified to include mysql as a dependency.
-functionsOld: Contains unfinished work regarding the REST API implementation (https://www.youtube.com/watch?v=sSDHdWrSqLY)
-helloworld-nodejs: Directory that contains containerized app made when following firebase documentation on creating a containerized app (https://firebase.google.com/docs/hosting/cloud-run)
-public: The directory that contains files related to firebase hosting
	-styles: Folder containing css scripts for the hosted pages
		-styles.css: style script for the main page
	-index.html: Main html file for the firebase hosted webpage
	-index.js: Script created while following tutorial for making cloud functions (https://firebase.google.com/docs/functions/get-started)
	-index.php: Copy of database developers php file to interact with the mysql database. Used for reference during development
	-main.js: Script for trying to modify cloud functions to desired functionality
	-myfirst.js: Script used to test connection to the mysql database from machine (https://www.w3schools.com/nodejs/nodejs_mysql.asp)
	-test.js: Script likely testing a firebase feature
	-test.php: Script attempting to use php with the html webpage
-showtable-nodejs: Contains latest progress made towards making a custom containerized app to use for the hosted webapp
	-index.js: file containing attempt to make mysql connection from within a containerized app
-cloud_sql_proxy.exe: The binary that can be used for connecting to the mysql database (likely unusable now)
-firebase.json: Main json file that contains parameters regarding to all firebase components
