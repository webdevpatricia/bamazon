
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE `bamazon` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `department_name` varchar(100) DEFAULT NULL,
  `price` float NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

