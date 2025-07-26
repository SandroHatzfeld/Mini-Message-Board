// Import env file, install dotenv npm package first
require("dotenv").config()

const { randomUUID } = require('crypto')
// Import express Server
const express = require('express')
const app = express()
const path = require('path')
const messagesDetailsRouter = require('./routes/messageDetailsRouter.js')
const newMessageRouter = require('./routes/newMessageRouter.js')
const indexRouter = require('./routes/indexRouter.js')

app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// const indexRouter = require('./routes/indexRouter.js')
// const newMessageRouter = require('./routes/newMessageRouter.js')


app.use("/", indexRouter)
app.use("/messages", messagesDetailsRouter)
app.use("/new", newMessageRouter)



// app.use("/new", newMessageRouter)

// load PORT from env and set fallback port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}!`)
})