CREATE DATABASE dio_bot;
USE dio_bot;
CREATE TABLE `users` (
    id INT NOT NULL AUTO_INCREMENT,
    username varchar(80) NOT NULL,
    tg_username varchar(80) NOT NULL,
    token varchar(255), PRIMARY KEY (`id`)
);

SELECT count(*)
FROM information_schema.TABLES
WHERE (TABLE_SCHEMA = 'dio_bot') AND (TABLE_NAME = 'users')