var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "n/a",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  search();
});

function search() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "See all items.",
        "What would you like to purchase?",
        "Exit"
      ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "See all items.":
          allItems();
          break;
  
        case "What would you like to purchase?":
          itemID();
          break;

        case "Exit":
        connection.end();
          break;
        }
      });
    }
  
  function allItems(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
    
        for (var i = 0; i < res.length; i++) {
          console.log(
            "ID: " +
              res[i].item_id +
              "  , product: " +
              res[i].product_name +
              "  , Price: $" +
              res[i].price 
          );
        }
        search();
  });

  }

  function itemID() {
    inquirer
    .prompt({
      name: "item_id",
      type: "input",
      message: "Input Product ID"
    })
    .then(function(answer) {
    
    connection.query("SELECT price FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
        if (err) throw err;
        inquirer
        .prompt({
          name: "amount",
          type: "input",
          message: "How many units would you like to purchase?"
        })
        .then(function(quantity) {
               connection.query("SELECT price,stock_quantity FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
                 if (err) throw err;
         
                 for (var i = 0; i < res.length; i++) {  
                 if(res[i].stock_quantity > 0){
                    console.log(
                        "Your total is $" + (quantity.amount * res[i].price)
                    )
                    // connection.query("SELECT price,stock_quantity FROM products WHERE ?", { item_id: answer.item_id }, function(err, res) {
                        search();

                } else if (res[i].stock_quantity <= 0){
                    console.log("OUT of STOCK");
                    search()
                 }
                 }
               });

        });
      });
    });
}

