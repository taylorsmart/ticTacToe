-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

DROP DATABASE IF EXISTS FARM5;
create database FARM5;

USE FARM5;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
  `id` integer  auto_increment,
  `name` varchar(256),
  `description` varchar(256),
  primary key (`id`)
)

insert cows values (1,'bessie','this one')