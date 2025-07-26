const express = require('express')
const { Router } = require('express')
const path = require('path')
const { getMessageById } = require('../controllers/messagesController.js')

const messagesDetailsRouter = Router()

messagesDetailsRouter.get("/:messageId", getMessageById)

module.exports = messagesDetailsRouter