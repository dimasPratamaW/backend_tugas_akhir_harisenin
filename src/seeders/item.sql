USE crud_database;

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  `id_item` varchar(36) NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_picture` varchar(255) DEFAULT NULL,
  `harga_item` INT DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB;

INSERT INTO items(id_item, item_name, item_picture, harga_item, created_at) VALUES
("1", "Kursi", NULL, 20000, CURRENT_TIMESTAMP),
("2", "Meja", NULL, 150000, CURRENT_TIMESTAMP),
("3", "Lampu", NULL, 10000, CURRENT_TIMESTAMP),
("4", "Kasur", NULL, 400000, CURRENT_TIMESTAMP);