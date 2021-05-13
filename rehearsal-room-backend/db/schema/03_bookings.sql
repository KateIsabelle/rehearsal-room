DROP TABLE IF EXISTS bookings CASCADE;
CREATE TABLE bookings(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
    start_time VARCHAR(255) NOT NULL,
    end_time VARCHAR(255)NOT NULL,
    date VARCHAR(255) NOT NULL,
    status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
    usage_description TEXT,
    used_before BOOLEAN,
    multi_day_rental BOOLEAN,
    alternative_payment BOOLEAN
);

