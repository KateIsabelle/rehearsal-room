# Routes

## Routes Handled by React's Router

|Prioritize?| URL pattern       | Usage                                          |
|-----------|-------------------|------------------------------------------------|
|⭐         | /                 | Landing page, select a city                    |
|⭐         | /spaces/:city     | Browse/search/filter Spaces for specified city |
|⭐         | /space/:space_id  | View an individual Space                       |
|           | /dashboard        | Render the profile page                        |
|           | /login            | Render the login form                          |
|           | /register         | Render the registration form                   |

## Routes Handled by Express

|Prioritize?| HTTP method | URL pattern                       | Usage                                                                                 |
|-----------|-------------|-----------------------------------|---------------------------------------------------------------------------------------|
|           | POST        | /api/login                        | Log in a user                                                                         |
|           | POST        | /api/authenticate                        | Check to see if a user is logged in or not                                                                         |
|           | POST        | /api/users                        | Create a new user                                                                     |
|           | PUT        | /api/users/:user_id                        | Update user data                                                                     |
|⭐         | POST        | /api/spaces                       | Create a new Space listing. Returns data: the new Space listing                       |
|⭐         | POST        | /api/bookings                     | Create a new Booking. Returns data: the new Booking data                              |
|⭐         | PUT         | /api/spaces/:space_id                   | Update an existing Space listing. Returns data: the updated Space listing.            |
|⭐         | GET         | /api/spaces   | Returns data: All spaces                                 |
|⭐         | GET         | /api/spaces/:city_name   | Returns data: Spaces in the specified city (takes parameters to refine search)                                 |
|           | GET         | /api/bookings | Returns booking data (takes in parameters to refine search) |