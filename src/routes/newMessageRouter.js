const express = require('express')
const { Router } = require('express')
const path = require('path')
const { getAllMessages, pushNewMessage } = require('../controllers/messagesController.js')

const newMessageRouter = Router()

newMessageRouter.get("/", (req, res) => {
	res.render("form", { messages: getAllMessages })
})
newMessageRouter.post("/", (req, res) => {
	pushNewMessage(req.body.message, req.body.username)
	res.redirect("/")
})

module.exports = newMessageRouter