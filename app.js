const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const post = require("./routes/post")
const views = require("./routes/views")
const userRoute = require("./routes/users")
const imageroute = require("./routes/image")
const {sequelize} = require("sequelize")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.use('/upload', express.static('upload'))
// app.use(cors())

app.use('/apis', post)
app.use('/views', views)
app.use('/user', userRoute)
app.use('/image', imageroute)
app.use('/post', post)

app.use('/test', async (req, res) => {
    let roleCheck = await sequelize.query(
        'SELECT * FROM users where name = \'Danish\' ', {
          type:sequelize.QueryTypes.SELECT
      });
      console.log(roleCheck)
})

module.exports = app