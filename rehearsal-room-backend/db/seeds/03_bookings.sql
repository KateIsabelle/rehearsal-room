INSERT INTO --with organization_name
bookings(user_id, space_id, start_time, end_time, date, status, usage_description, used_before, multi_day_rental, alternative_payment)
VALUES
(2,
1,
-- TO_TIMESTAMP('05/10/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS'),
-- TO_TIMESTAMP('05/10/2021 2:00:00', 'MM/DD/YYYY HH24:MI:SS'),
'12:00',
'14:00',
'2021-05-10',
'confirmed',
'Description of why I need the space: Working it up and down, back and forth. Maybe, just to play a little, we''ll put a little tree here. Here''s another little happy bush',
false,
false,
false
),

(2,
1,
'12:00',
'14:00',
'2021-05-17',
'confirmed',
'Description of why I need the space - second time: We''ll put a happy little sky in here. See there how easy that is. Let''s make some happy little clouds in our world.',
true,
false,
false
),

(2,
1,
'12:00',
'14:00',
'2021-05-24',
'confirmed',
'Description of why I need the space - third time',
true,
false,
false
),

(2,
2,
'08:00',
'12:00',
'2021-07-01',
'pending',
'Description of why I need the space',
false,
false,
false
),

(3,
3,
'16:00',
'20:00',
'2021-07-02',
'pending',
'Description of why I need the space',
false,
false,
false
),

(5,
1,
'15:00',
'16:00',
'2021-05-10',
'pending',
'I need a place to practice my sick hooping skills',
false,
false,
false
)