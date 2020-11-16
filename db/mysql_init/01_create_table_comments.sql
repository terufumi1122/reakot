CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_id` int NOT NULL,
  `text` varchar(45) NOT NULL,
  `insert_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_count` int NOT NULL DEFAULT '0',
  `delete_flg` int NOT NULL COMMENT '0: not deleted, 1: deleted',
  PRIMARY KEY (`id`,`post_id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
