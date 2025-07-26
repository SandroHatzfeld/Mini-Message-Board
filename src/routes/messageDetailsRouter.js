const express = require('express')
const { Router } = require('express')
const path = require('path')

const messagesDetailsRouter = Router()

messagesDetailsRouter.get("/:messageId", (req, res) => {
	const {messages} = require('../messageDB.js')

	const message = messages.find(message => message.id.toString() === req.params.messageId)
	
	res.render("messageDetails", {message:message})
})

module.exports = messagesDetailsRouter