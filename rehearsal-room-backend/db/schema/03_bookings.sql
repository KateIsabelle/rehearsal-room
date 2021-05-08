DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE bookings(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    space_id INTEGER NOT NULL REFERENCES spaces(id) ON DELETE CASCADE,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    num_hours INTEGER NOT NULL,
    status VARCHAR(255) DEFAULT 'pending', --pending,confirmed,rejected
    usage_description TEXT,
    special_requests TEXT,
    used_before BOOLEAN
);

