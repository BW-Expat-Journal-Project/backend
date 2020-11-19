# Expat Journal BACKEND API

## Documentation 

Base URL for deployed API: https://bw-expat-journal-web.herokuapp.com/

## LINK FOR DOCUMENTATION AND ENDPOINTS ON POST MAN :

API Endpoints for BW Expat Journal Project : https://documenter.getpostman.com/view/13492253/TVeqc6bz

## **Endpoints**

| Method | URL                  | Description                                                                               | Requires Token | Requires Admin |
| ------ | -------------------- | ----------------------------------------------------------------------------------------- | -------------- | -------------- |
| POST   | /api/auth/register   | register a new user                                                                       | -              | -              |
| POST   | /api/auth/login      | login as existing user                                                                    | -              | -              |
| POST   | /api/                | create a new post                                                                         | X              | -              |
| GET    | /api/posts           | get information of all posts                                                              | X              | -              |
| GET    | /api/posts/:id       | get a specific posts by id                                                                | X              | -              |
| GET    | /api/users/:id/posts | get posts created by users with specified ID                                              | -              | -              |
| PUT    | /api/posts/:id       | edit a posts(this is a new feature for DELETE a story or a photo associated with a post ) | X              | X              |
| DELETE | /api/posts/:id       | delete a posts from database                                                              | X              | X              |

### `POST /api/auth/register`
https://bw-expat-journal-web.herokuapp.com/api/auth/register

Request body

```
{
    "firstname": "Hello",
    "lastname": "World",
    "username": "admin",
    "password": "lambdaschool"
}
```
 Return

```
{
   "message": "You are successfully registered!",
    "data": {
        "id": 5,
        "firstname": "Hello",
        "lastname": "World",
        "username": "admin",
        "password": "$2a$08$D3br1Q1UDpdwjyTivYN1B.ljSxnhc2OmxOH72WW8FSPXjj6Tdtfbi"
}
```

`### POST /api/auth/login`
https://bw-expat-journal-web.herokuapp.com/api/auth/login

Request Body
```
{
    "username": "admin",
    "password": "lambdaschool"
}
```

Return
```
{
    "message": "Welcome to Expat Journal!",
    "user": {
        "id": 5,
        "username": "admin",
        "password": "$2a$08$D3br1Q1UDpdwjyTivYN1B.ljSxnhc2OmxOH72WW8FSPXjj6Tdtfbi"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjA1NTU0NzE3LCJleHAiOjE2MDU2NDExMTd9.nO40dHdKQBF7h9Wc6S7JJois9G6yf5-QiQ_NNYHdoMU"
}
```
