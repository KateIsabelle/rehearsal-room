DROP TABLE IF EXISTS spaces CASCADE;

CREATE TABLE spaces(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

    title VARCHAR(255) NOT NULL,
    description TEXT,
    thumbnail_photo_url VARCHAR(255),
    cover_photo_url VARCHAR(255), 

    country VARCHAR(255) NOT NULL, 
    street VARCHAR(255) NOT NULL, 
    city VARCHAR(255) NOT NULL, 
    province VARCHAR(255) NOT NULL, 
    post_code VARCHAR(255) NOT NULL,

    price_per_day INTEGER NOT NULL,
    price_per_hour INTEGER NOT NULL,

    wifi BOOLEAN DEFAULT FALSE,
    sound_proofing BOOLEAN DEFAULT FALSE,
    sprung_floor BOOLEAN DEFAULT FALSE,
    kitchenette BOOLEAN DEFAULT FALSE,
    mirrors BOOLEAN DEFAULT FALSE,
    sound_system BOOLEAN DEFAULT FALSE,
    bathroom BOOLEAN DEFAULT FALSE,
    indoor_space BOOLEAN DEFAULT FALSE,
    outdoor_space BOOLEAN DEFAULT FALSE,
    bike_parking BOOLEAN DEFAULT FALSE,
    street_parking BOOLEAN DEFAULT FALSE,
    private_parking BOOLEAN DEFAULT FALSE,
    piano BOOLEAN DEFAULT FALSE,
    natural_light BOOLEAN DEFAULT FALSE,
    air_conditioning BOOLEAN DEFAULT FALSE,
    ten_ft_plus_ceiling BOOLEAN DEFAULT FALSE,
    private BOOLEAN DEFAULT FALSE,
    semi_private BOOLEAN DEFAULT FALSE,
    wheelchair_accessible BOOLEAN DEFAULT FALSE,
    self_entry BOOLEAN DEFAULT FALSE,

    active BOOLEAN NOT NULL DEFAULT TRUE
);



  


  
