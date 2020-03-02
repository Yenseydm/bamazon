# bamazon

This is a storefront application which allows users to see the items available for purchase at the store. 
It then gives the user the option to purchase an item by entering its ID. As well as the amount they would like to purchase of each item.
If in stock, it proceeds to give the user the total. Otherwise, it notifies the user that we are out of stock of the current item and proceeds to return the user to home where they are again asked if they'd like to see the items, purchase and item, or exit the application.

All of this is tied to mysql workbench where the inventory is kept. The item ID is used to locate wether we have items in stock. If so the item id is used to locate the item's price and calculates the total depending on the amount the user wants of the item.

At the home, the user will be able to choose wether they'd like to an purchase item, view all items, or exit the application. 

If the user chooses view all items:
![view-items](https://github.com/Yenseydm/liri-node-app/blob/master/concert-this.gif)

If they have a successful purchase:
![successful-purchase]()

If the item is out of stock:
![Out-of-stock]()

If they choose to Exit:
![exit-app]()

Mysql workbench:
![mysql-workbench]()

