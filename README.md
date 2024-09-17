# SBA_319
Project Overview: Blogging Platform API
This project is a RESTful API for a blogging platform that allows users to manage posts, comments, and user profiles. The API is built using Node.js and Express, with a MongoDB database for data storage.

Key Features:
1-User Management:

*-Users can be created, updated, and deleted.
*-Validation for user inputs such as username, email, and password.

2-Post Management:

*-Users can create, edit, and delete blog posts.
*-Each post is linked to a user (author) and includes a title and body.
*_Validation for post inputs such as title and body length.

3-Comment Management:

*-Users can comment on posts.
*-Comments are linked to both posts and users.
*-Validation for comment input such as text length.

4-Error Handling:

*-404 errors for undefined routes.
*-Graceful handling of internal server errors with proper messages.

Technologies Used:

*-Node.js: Server-side JavaScript runtime.
*-Express.js: Web framework for handling routes and HTTP requests.
*-MongoDB: NoSQL database for storing user, post, and comment data.
*-Mongoose: Object Data Modeling (ODM) library for MongoDB.
*-Postman: Used for testing API endpoints.

How It Works:
1-User Management:

*-Users can register by providing a username, email, and password.
*-Endpoints include:
-GET /users: Retrieves all users.
-POST /users: Creates a new user.
-PUT /users/:id: Updates an existing user.
-DELETE /users/:id: Deletes a user by ID.

2-Post Management:

*-Authenticated users can create blog posts.
*-Each post is linked to a user (author) and includes a title and body.
*-Endpoints include:
-GET /posts: Retrieves all posts.
-POST /posts: Creates a new post.
-PUT /posts/:id: Updates an existing post.
-DELETE /posts/:id: Deletes a post by ID.

3-Comment Management:

*-Users can comment on posts.
*-Each comment is linked to a specific post and user.
*-Endpoints include:
-GET /comments: Retrieves all comments.
-POST /comments: Creates a new comment.
-PUT /comments/:id: Updates an existing comment.
-DELETE /comments/:id: Deletes a comment by ID.
