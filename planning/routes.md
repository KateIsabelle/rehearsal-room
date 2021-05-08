# Routes

## Routes Handled by React's Router

|Prioritize?| URL pattern       | Usage                                          |
|-----------|-------------------|------------------------------------------------|
|⭐         | /                 | Landing page, select a city                    |
|⭐         | /spaces/:city     | Browse/search/filter Spaces for specified city |
|⭐         | /space/:space_id  | View an individual Space                       |
|           | /dashboard        | User views their profile page                  |

## Routes Handled by Express

|Prioritize?| HTTP method | URL pattern                       | Usage                                                                                 |
|-----------|-------------|-----------------------------------|---------------------------------------------------------------------------------------|
|           | POST        | /api/login                        | Log in a user                                                                         |
|           | POST        | /api/hosts                        | Create a new host                                                                     |
|           | POST        | /api/users                        | Create a new user                                                                     |
|⭐         | POST        | /api/spaces                       | Create a new Space listing. Returns data: the new Space listing                       |
|⭐         | POST        | /api/bookings                     | Create a new Booking. Returns data: the new Booking data                              |
|⭐         | PUT         | /api/spaces/:id                   | Update an existing Space listing. Returns data: the updated Space listing.            |
|⭐         | GET         | /api/search/spaces?[parameters]   | Returns data: Spaces that match the search parameters                                 |
|           | GET         | /api/search/bookings?[parameters] | Returns data: Bookings that match the search parameters (user, status, upcoming, etc) |