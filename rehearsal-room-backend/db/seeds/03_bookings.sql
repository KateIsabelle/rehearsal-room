INSERT INTO --with organization_name
bookings(user_id, space_id, start_time, end_time, date, status, usage_description, used_before, multi_day_rental, alternative_payment)
VALUES
(5,
1,
-- TO_TIMESTAMP('05/10/2021 12:00:00', 'MM/DD/YYYY HH24:MI:SS'),
-- TO_TIMESTAMP('05/10/2021 2:00:00', 'MM/DD/YYYY HH24:MI:SS'),
'12:00',
'14:00',
'2021-05-10',
'confirmed',
'Free-form dance - just need an open area to try out some ideas',
false,
false,
false
),

(5,
1,
'12:00',
'14:00',
'2021-05-17',
'confirmed',
'Free-form dance - just need an open area to try out some ideas',
true,
false,
false
),

(5,
1,
'12:00',
'14:00',
'2021-05-24',
'rejected',
'Heavy metal band practice. We will be VERY, VERY LOUD and obnoxious. We may break things.',
true,
false,
false
),

(5,
2,
'08:00',
'12:00',
'2021-07-01',
'pending',
'Free-form dance routine practice',
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

(3,
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