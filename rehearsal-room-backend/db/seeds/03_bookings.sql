INSERT INTO --with organization_name
bookings(user_id, space_id, start_time, end_time, num_hours, status, usage_description, special_requests, used_before)
VALUES
(2,
1,
--('2021-05-10 12:00:00'::timestamp, 'P'),
--('2021-05-10 2:00:00'::timestamp, 'P'),
TO_TIMESTAMP('05/10/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS'),
TO_TIMESTAMP('05/10/2021 2:00:00', 'MM/DD/YYYY HH24:MI:SS')
2,
'confirmed',
'Description of why I need the space: Working it up and down, back and forth. Maybe, just to play a little, we''ll put a little tree here. Here''s another little happy bush',
'Special requests that I have for the owner: You can bend rivers. But when I get home, the only thing I have power over is the garbage. Just beat the devil out of it. Clouds are free they come and go as they please. Just make a decision and let it go.',
false
),

(2,
1,
TO_TIMESTAMP('05/17/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS'),
TO_TIMESTAMP('05/17/2021 2:00:00', 'MM/DD/YYYY HH24:MI:SS')
2,
'confirmed',
'Description of why I need the space - second time: We''ll put a happy little sky in here. See there how easy that is. Let''s make some happy little clouds in our world.',
'Special requests that I have for the owner - second time: Every day I learn. Poor old tree. Play with the angles. Put light against light - you have nothing. Put dark against dark - you have nothing. It''s the contrast of light and dark that each give the other one meaning.',
true
),

(2,
1,
TO_TIMESTAMP('05/24/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS'),
TO_TIMESTAMP('05/24/2021 2:00:00', 'MM/DD/YYYY HH24:MI:SS')
2,
'confirmed',
'Description of why I need the space - third time',
'Special requests that I have for the owner - third time',
true
),

(2,
2,
TO_TIMESTAMP('07/01/2021 08:00:00', 'MM/DD/YYYY HH24:MI:SS'),
TO_TIMESTAMP('07/01/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS')
4,
'pending',
'Description of why I need the space',
'Special requests that I have for the owner',
false
),

(3,
3,
TO_TIMESTAMP('07/02/2021 16:00:00', 'MM/DD/YYYY HH24:MI:SS'),
TO_TIMESTAMP('07/02/2021 20:00:00', 'MM/DD/YYYY HH24:MI:SS')
4,
'pending',
'Description of why I need the space',
'Special requests that I have for the owner',
false
)