const http = require("http")
const app = require("./app")
require('dotenv').config()
// const sequelize = require('sequelize')
const { sequelize } = require('./models');

const port = process.env.port || 1000

const server = http.createServer(app)

// server.listen(port)

// {
//     "titel": "asdfasdf",
//     "content": "asdfasdf",
//     "imageurl": "asdfasdf",
//     "category": "dsfasdfa",
//     "userid": "asdfasdf"
//   }

server.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`)
    try {
        //await sequelize.sync({force: true});
        console.log('DATABASE SYNCED!');
    } catch (error) {
        console.log(error);
    }
})
// server.listen(port)