# Dating-App
It is a backend application that provides an API for matching users based on their hobbies. It allows users to retrieve potential matches by sending a GET request to the appropriate API endpoint.

# Prerequisites
Node.js 
npm 

# API Endpoints
Get Potential Matches
Returns a list of potential matches for a user based on their hobbies.
URL: /match/:user_id
Method: GET
URL Parameters: user_id 
Success: An array of potential matches with their details, sorted by compatibility.
Error :{ "error": "User not found" }
