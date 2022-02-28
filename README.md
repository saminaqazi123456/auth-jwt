# auth-jwt

Minimal full-stack MERN app with authentication using passport and JWTs

Screencast  https://recordit.co/ufmeHgjJ7z


This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Redux](https://redux.js.org/basics/usagewithreact) for state management between React components

## Configuration

- Make sure to add your own `MONGOURI` from your [mLab](http://mlab.com) database in `config/keys.js`
- Update the secretOrKey value

```javascript
module.exports = {
  mongoURI: "YOUR_MONGO_URI_HERE",
  secretOrKey: "secret"
};
```

## Quick Start

```javascript
// Install dependencies for server & client
npm install && npm run client-install

// Run client & server with concurrently
npm run dev

To create a production build, use npm run build.
// Server runs on http://localhost:4000 and client on http://localhost:3000

To run on docker, see documentation 
```


## Accessing the app

After starting the services, we can access auth-jwt app server on

http://localhost:4000

And auth-jwt app client on

http://localhost:3000


## Documentation 

https://bit.ly/3hDqnu5 

