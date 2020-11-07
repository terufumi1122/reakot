CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `insert_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_count` int NOT NULL DEFAULT '0',
  `delete_flg` int NOT NULL DEFAULT '0' COMMENT '0: not deleted, 1: deleted',
  PRIMARY KEY (`id`,`parent_id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
