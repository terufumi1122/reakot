CREATE TABLE `parents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) DEFAULT '???????',
  `password` varchar(45) DEFAULT NULL COMMENT '8-24',
  `gender` int NOT NULL DEFAULT '0' COMMENT '0:unknown, 1:male, 2:female',
  `birthday` datetime DEFAULT NULL,
  `insert_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_count` int NOT NULL DEFAULT '0',
  `delete_flg` int NOT NULL DEFAULT '0' COMMENT '0: not deleted, 1: deleted',
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
