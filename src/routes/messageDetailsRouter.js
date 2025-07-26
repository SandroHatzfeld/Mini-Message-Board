const express = require('express')
const { Router } = require('express')
const path = require('path')

const messagesDetailsRouter = Router()

messagesDetailsRouter.get("/:messageId", (req, res) => {
	console.log(req.params);
	
})

module.exports = messagesDetailsRouter