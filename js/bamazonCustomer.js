var inquirer = require('inquirer');
var mysql = require('mysql');
const cTable = require('console.table');

// create db connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Iamnumber1",
  database: "bamazon"
});

// connect to db
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readProducts();
  });

// display items for sale
function readProducts() {
	connection.query("SELECT item_id, product_name, price FROM products", function(err, res){if (err) throw err;
		    // Log all results of the SELECT statement
		    console.table(res);
		    getData();
  		});
};

function getData (){
inquirer
	.prompt([
	  	// prompt user for id of item to buy
	  	{
	      type: "input",
	      message: "Please enter the Item_id of the product you would like to purchase: ",
	      name: "item_id"
	    },
	    {
	      type: "input",
	      message: "Please enter the quantity: ",
	      name: "quantity"
	    },
	    {
	      type: "confirm",
	      message: "Are you sure:",
	      name: "confirm",
	      default: true
	    }
	 ])
	.then(function(inquirerResponse) {
		if(inquirerResponse.confirm){
			getCurrentStock(inquirerResponse.item_id, inquirerResponse.quantity);
		} else {
			console.log("\nThat's okay, come again when you are more sure.\n");
		};
	});
};

function getCurrentStock(item, quantity) {
	console.log("Checking inventory........\n")
	var query = connection.query("SELECT * FROM products WHERE ?",
	    [{item_id:item}],
	    function(err, res) {
	    	var newQuantity = res[0].stock_quantity - quantity;
	    	var balance = res[0].price * quantity;
	    	if (newQuantity >= 0) {
	    		updateStockQuantity(newQuantity, item);
	    		console.log("\nYour order has been placed. Your balance is $" + balance +".\n\n Thank you for ordering with Bamazon!\n\n");
	    	} else {
	    		console.log("\nSorry, we do not have enough stock for your order.\n")
	    	}
	    	connection.end();
	    });
};

function updateStockQuantity(newQuantity, item){
	console.log("\nEntering order...........\n");
	var query = connection.query("UPDATE products SET ? WHERE ?",
		[{stock_quantity:newQuantity}, {item_id:item}]);
}


