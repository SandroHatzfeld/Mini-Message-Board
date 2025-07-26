// Import env file, install dotenv npm package first
require("dotenv").config()

// Import express Server
const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended:true}))
app.set("views",path.join(__dirname, "views"))
app.set("view engine", "ejs")

// const indexRouter = require('./routes/indexRouter.js')
// const newMessageRouter = require('./routes/newMessageRouter.js')

const messages = [
	{
		text: "Hi there!",
		user: "Amanda",
		added: new Date()
	},
	{
		text: "Hello my friend!",
		user: "Samuel",
		added: new Date()
	}
]

app.get("/", (req, res) => {
	res.render("index", {messages: messages})
})
app.get("/new", (req, res) => {
	res.render("form", {messages: messages})
})
app.post("/new", (req, res) => {
	messages.push({text:req.body.message, user:req.body.username, added: new Date()})
	res.redirect("/")
})

// app.use("/new", newMessageRouter)

// load PORT from env and set fallback port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`My first Express app - listening on port ${PORT}!`)
})