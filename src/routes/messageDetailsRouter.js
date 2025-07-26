const { Router } = require('express')
const { getMessageById } = require('../controllers/messagesController.js')

const messagesDetailsRouter = Router()

messagesDetailsRouter.get("/:messageId", getMessageById)

module.exports = messagesDetailsRouter