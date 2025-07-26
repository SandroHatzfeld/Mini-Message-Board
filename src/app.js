// Import env file, install dotenv npm package first
require("dotenv").config()

const { randomUUID } = require('crypto')
// Import express Server
const express = require('express')
const app = express()
const path = require('path')
const messagesDetailsRouter = require('./routes/messageDetailsRouter.js')
const {messages} = require('./messageDB.js')

app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname, "views"))
app.set("view engine", "ejs")

// const indexRouter = require('./routes/indexRouter.js')
// const newMessageRouter = require('./routes/newMessageRouter.js')



app.get("/", (req, res) => {
	res.render("index", {messages: messages})
})
app.use("/messages", messagesDetailsRouter)
app.get("/new", (req, res) => {
	res.render("form", {messages: messages})
})
app.post("/new", (req, res) => {
	messages.push({id: randomUUID(),text:req.body.message, user:req.body.username, added: new Date()})
	res.redirect("/")
})


// app.use("/new", newMessageRouter)

// load PORT from env and set fallback port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}!`)
})