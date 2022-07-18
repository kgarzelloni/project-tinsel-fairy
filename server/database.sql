-- register/login 
CREATE DATABASE dgtue9kr9mtm6;


-- download extention on other users end
-- run in comand line under created DB    create extension if not exists "uuid-ossp"; 
CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name VARCHAR(90) NOT NULL,
  user_email VARCHAR(90) NOT NULL,
  user_password VARCHAR(30) NOT NULL
);

--fake users to test DB
INSERT INTO users (user_name, user_email, user_password)
VALUES ('Kim', 'kim@gmail.com', 'kim1234');