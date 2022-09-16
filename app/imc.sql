DROP DATABASE IF EXISTS imc;

CREATE DATABASE imc;

USE imc;

CREATE TABLE users (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    heigth DECIMAL(1,2) NOT NULL,
    weigth DECIMAL(1,2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

INSERT INTO imc.users (name, heigth, weigth) VALUES
    ("Lilian Azevedo", 1.60, 61.0),
    ("Gabriel Leite", 1.70, 70.0);

