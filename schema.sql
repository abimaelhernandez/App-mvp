DROP DATABASE IF EXISTS review;

CREATE DATABASE review;

USE review;

CREATE TABLE WeightTable (
  id int NOT NULL AUTO_INCREMENT,
  Height_cm integer NOT NULL,
  Name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO WeightTable (Height_cm, Name) VALUES (185, "joseph");
INSERT INTO WeightTable (Height_cm, Name) VALUES (166, "marco");
INSERT INTO WeightTable (Height_cm, Name) VALUES (145, "miri");
INSERT INTO WeightTable (Height_cm, Name) VALUES (187, "abi");
