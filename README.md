![CF](http://i.imgur.com/7v5ASc8.png) LAB 36
=================================================

## Github OAuth

### Author: Katherine & Emery & George 

### Links and Resources
* [repo](https://github.com/ksmith10309/lab-36)

### Setup
#### auth-server `.env` requirements
* `PORT` - 8080
* `MONGODB_URI` - mongodb://localhost:27017/lab-36

#### web-server `.env` requirements
* `PORT` - 3000

#### Running the app
* Run `npm install` in `auth-server` and `web-server`
* Run `npm start` in `auth-server` and `web-server`
* Run `mongod --dbpath=[path to database folder]` to start the database server
* Endpoint: `/oauth`
  * Returns a JSON web token
