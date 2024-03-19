
# Idia Clan Social Media

Develop a Social Media API using NodeJS, ExpressJS, and GraphQL. The API will simulate basic functionalities of a social media platform, such as user registration, posting content, and following other users.

## Features

- Login/Register
- Graphql Query
- Follow User


## Development Setup

Clone This project to you local machine by following this commands

```bash
  git clone https://github.com/gopal24-colab/IdiaClan-SolcialMedia.git
  cd IdiaClan-SolcialMedia
```
    
## Install packages with yarn or npm

```bash
    npm install
```
or
```bash
    yarn
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` as you like, example ``` 3000 ```

`MONGODB_URI` your local mongodb url or mongodb atlas url



## 🔗 MongoDB altas Link
Create your personal account and add url  into ``` .env ``` file
```
https://www.mongodb.com/atlas/database
```


``` JWT_SECRET_KEY  ```
Add any 32 digit length secret key
or use below command
```bash
openssl rand -base64 32
```

``` SESSION_SECRET_KEY  ```
Add any 32 digit length secret key
or use below command
```bash
openssl rand -base64 32
```

## Quick start with 
``` 
npm run dev
 ```
## API Reference

#### Home route

```http
GET http://localhost:3000

```

#### Registration route 

```http
  POST /api/v2/user/register
```

#### Registeration Data format

```javascript
{
    "username": "Gopal Sasmal",
    "email": "gopalsasmal@gmail.com",
    "password": "12321312"
}

```


#### Login route
```http
    POST /api/v2/user/login
```
#### Login Data format

```js
{
    "email": "gopal@gmail.com",
    "password": "12321312"
}
```

## Below all protected Routes

#### After you login to the server then create new Post

```http
    POST /api/v2/post/create
```

#### Post Data format

```js
{
    "data": "Ability to request nested data in a single query, simplifying client-side data handling"
}
``` 

#### Get all posts

```http
    GET /api/v2/post/allPost
```

#### Follow user
```http
    POST /api/v2/user/followUser
```

#### Follow request data format
```js
{
    "userId": "65f9174a458b5a2f45769ba0"
}
```
provide userId that you wants to follow


## Live Replit URL Link
```http
    https://03298ff0-677c-4127-b9e5-a2dcd8dbfd49-00-1aauyq2xjbtu5.worf.replit.dev/
```

## Github Link
```http
    [Github](https://github.com/gopal24-colab/IdiaClan-SolcialMedia)
```

## Replit Join Link
```http
    https://replit.com/join/newluiqxqy-shadowxkrishna
```

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Connect

For query please connect , email: gopalsasmal1806@gmail.com or 



[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gopal-sasmal/)

[Github](https://github.com/gopal24-colab/)

