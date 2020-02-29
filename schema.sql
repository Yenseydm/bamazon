DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL (10,4),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (001, "floor mop", "Household", 3.45, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (125, "Double stroller", "baby", 150.85, 150);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (342, "Contact solution", "Pharmacy", 3.45, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (031, "iPad Pro", "Electronics", 1200.00, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (235, "Ceramic pot", "Garden", 29.99, 23);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (042, "Party hats", "Party Supplies", 1.23, 34);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (002, "clock", "Home", 12.34, 145);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (340, "stove", "Appliances", 435.12, 112);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (089, "Charlie's Angels", "Movies", 30.00, 7);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (003, "pet bed", "Pets", 14.99, 14);

SELECT * FROM products;