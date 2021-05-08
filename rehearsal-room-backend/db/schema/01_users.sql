DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    organization_name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    phone INTEGER,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR,
    description TEXT,
    is_host BOOLEAN
);

-- Table users {
--   id integer [primary key]
--   first_name varchar [not null]
--   last_name varchar [not null]
--   organisation_name varchar
--   email varchar [unique, not null]
--   phone int
--   photo varchar
--   description text
--   is_host boolean
  
-- }