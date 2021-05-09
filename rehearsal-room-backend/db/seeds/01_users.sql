INSERT INTO --with organization_name
users(first_name, last_name, organization_name, email, phone, password, photo, description, is_host)
VALUES
    ('Mabel', 
    'Golden', 
    'The Cultch', 
    'mabel.g@ythecultch.ca', 
    '16045551234', 
    'password', 
    'https://image.shutterstock.com/image-photo/funny-grandmother-portraits-senior-old-260nw-1522642592.jpg',
    'Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. If we''re going to have animals around we all have to be concerned about them and take care of them. This is your world. It''s cold, but it''s beautiful.',
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
    'https://uploads0.wikiart.org/images/pablo-picasso/woman-with-hat-olga-1935.jpg!Large.jpg',
    'Maybe there''s a little something happening right here. It''s all a game of angles. It''s a super day, so why not make a beautiful sky?',
    false
    )


  