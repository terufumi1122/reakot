CREATE TABLE `babies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int NOT NULL COMMENT 'Id From parents table',
  `name` varchar(45) DEFAULT '????????',
  `gender` int DEFAULT '0' COMMENT '0: unknown, 1: male, 2: female',
  `birthday` datetime DEFAULT NULL COMMENT 'YYYYMMDD',
  `insert_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `update_datetime` datetime DEFAULT CURRENT_TIMESTAMP,
  `delete_flg` int DEFAULT '0' COMMENT '0: not deleted, 1: deleted',
  PRIMARY KEY (`id`,`parent_id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
