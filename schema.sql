DROP DATABASE IF EXISTS great_bay;
CREATE DATABASE great_bay;

USE great_bay;

CREATE TABLE items(
id INT NOT NULL AUTO_INCREMENT
,item VARCHAR(20)
,current_bid DECIMAL(10,2)
,sold BOOLEAN DEFAULT false
,PRIMARY KEY (id)
);

SELECT * FROM items