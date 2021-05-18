INSERT INTO --with organization_name
users(first_name, last_name, organization_name, email, phone, password, photo, description, is_host)
VALUES
    ('Mabel', 
    'Golden', 
    'The Cultch', 
    'mabel.g@ythecultch.ca', 
    '16045551234', 
    'password', 
    'https://res.cloudinary.com/davik/image/upload/v1621366590/rehearsal_room/ac2n75odkueutpykiss1.png',
    'Professional snowboarder, firefighter, and grandmother. No, I don''t know YOUR grandma.',
    true);

INSERT INTO --without organization_name
users(first_name, last_name, email, phone, password, photo, description, is_host)
VALUES
    ('Declan',
    'Vazquez',
    'dv1234@gmail.com',
    '16045559201',
    'password',
    'http://www.magicmatt.ca/images/toronto-magician-magic-matt-sitting.jpg',
    'Nice little clouds playing around in the sky. We''ll make some happy little bushes here. You''re the greatest thing that has ever been or ever will be. You''re special. You''re so very special.',
    false
    ),
    ('Bob',
    'Ross',
    'the_man422@hotmail.com',
    '16045554912',
    'password',
    'https://static-cdn.jtvnw.net/jtv_user_pictures/bobross-profile_image-0b9dd167a9bb16b5-300x300.jpeg',
    'There are no limits in this world. Every time you practice, you learn more. There we go. With something so strong, a little bit can go a long way. Work that paint. Be so very light. Be a gentle whisper. You can do it. It takes dark in order to show light. Put your feelings into it, your heart, it''s your world.',
    true
    ),
    ('Derrick',
    'Zoolander',
    'blue.steel@gmail.com',
    '16045556767',
    'password',
    'https://cedwardpitt.files.wordpress.com/2016/01/zoolander.jpg?w=670&h=670',
    'We tell people sometimes: we''re like drug dealers, come into town and get everybody absolutely addicted to painting. It doesn''t take much to get you addicted. Only God can make a tree - but you can paint one. You can''t make a mistake. Anything that happens you can learn to use - and make something beautiful out of it.',
    false
    ),
     ('Petunia',
    'Smith',
    'petty_s123@gmail.com',
    '16045553342',
    'password',
    'https://res.cloudinary.com/davik/image/upload/v1621366462/rehearsal_room/wifg0iygkccoy6c74k0e.png',
    'I''m Petunia, the co-author of Cicada Uprising (currently in-between projects)! I''m a Vancouver-based painter, dancer, and amateur taxidermist. It''s nice to meet you!',
    false
    )


  