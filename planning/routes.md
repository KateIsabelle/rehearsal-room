# Routes

## Routes Handled by React's Router

| HTTP method | URL pattern       | Usage                                          |
|-------------|-------------------|------------------------------------------------|
| GET         | /                 | Landing page, select a city                    |
| GET         | /:city            | Browse/search/filter Spaces for specified city |
| GET         | /:city/spaces/:id | View an individual Space                       |
| GET         | /dashboard        | User views their profile page                  |

## Routes Handled by Express

| HTTP method | URL pattern                       | Usage                                                                                 |
|-------------|-----------------------------------|---------------------------------------------------------------------------------------|
| POST        | /api/login                        | Log in a user                                                                         |
| POST        | /api/users                        | Create a new user                                                                     |
| POST        | /api/hosts                        | Create a new host                                                                     |
| POST        | /api/spaces                       | Create a new Space listing. Returns data: the new Space listing                       |
| PUT         | /api/spaces/:id                   | Update an existing Space listing. Returns data: the updated Space listing.            |
| GET         | /api/search/spaces?[parameters]   | Returns data: Spaces that match the search parameters                                 |
| GET         | /api/search/bookings?[parameters] | Returns data: Bookings that match the search parameters (user, status, upcoming, etc) |