USE crud_database;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_picture` varchar(255) DEFAULT NULL,
  `product_price` INT DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB;

INSERT INTO product(product_id, product_name, product_picture, product_price, created_at,id_user) VALUES
("1", "Kursi", NULL, 20000, CURRENT_TIMESTAMP,"325ef718-4574-447f-8849-839f91af2b39"),
("2", "Meja", NULL, 150000, CURRENT_TIMESTAMP,"325ef718-4574-447f-8849-839f91af2b39"),
("3", "Lampu", NULL, 10000, CURRENT_TIMESTAMP,"325ef718-4574-447f-8849-839f91af2b39"),
("4", "Kasur", NULL, 400000, CURRENT_TIMESTAMP,"325ef718-4574-447f-8849-839f91af2b39");