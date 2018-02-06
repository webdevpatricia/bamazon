# bamazon

Bamazon
This project is a CLI application that places orders for the Bamazon web store.

Prerequisites
	The following npm packages must be installed and can be found here:  https://www.npmjs.com/

	-- inquirer
	-- mysql
	-- console.table

	An instance of mySQL must be running on your maching.  You will be running scripts that will create a database and load tables.

	mySQL can be found here:  https://www.mysql.com/
	Download the following scripts from the git repository to create the database and table.

		schema.sql
		seed.sql

Installing

MySQL - Install as per directions on https://www.mysql.com/.  This must be done first.

Inside the MySQL app open the following and scripts and run them:
	schema.sql
	seed.sql

In the directory where you application resides, run the following to install the above npm packages

	npm install inquirer
	npm install mysql
	npm install console.table


Executing the Application
	- On the command line in the directory where your application resides type in node and the full name of the application.

	example: node bamazonCustomer.js

	- Answer the prompts

Built With
MySQL - database
NPM Packages: mysql, inquirer, console.table

Versioning
We do not user versioning at this time

Authors
Patiricia Carlson - Initial work
See also the list of contributors who participated in this project.

License
This project is not licensed

Acknowledgments
Thanks to Victoria for helping me get past the inquirer prompt issues!  You Rock!