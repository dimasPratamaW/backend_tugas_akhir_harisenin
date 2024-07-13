USE crud_database;

CREATE TABLE `orders` (
  `id_order` varchar(36) NOT NULL,
  `id_item` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `quantity_item` INT DEFAULT NULL,
  `item_price` INT DEFAULT NULL,
  `total_price` INT DEFAULT NULL,
  `id_user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_order`)
) ENGINE=InnoDB;

INSERT INTO orders (id_order, id_item, item_name, quantity_item, item_price, total_price, id_user) VALUES
("O_1", "1", "Kursi", 1, 20000, 20000, "325ef718-4574-447f-8849-839f91af2b39"),
("O_2", "2", "Meja", 2, 150000, 300000, "325ef718-4574-447f-8849-839f91af2b39"),
("O_3", "3", "Lampu", 2, 10000, 20000, "325ef718-4574-447f-8849-839f91af2b39"),
("O_4", "4", "Kasur", 1, 400000, 400000, "325ef718-4574-447f-8849-839f91af2b39");
