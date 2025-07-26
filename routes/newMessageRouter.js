const { Router } = require('express')
const { pushNewMessage, addNewMessage } = require('../controllers/messagesController.js')

const newMessageRouter = Router()

newMessageRouter.get("/", addNewMessage)

newMessageRouter.post("/", pushNewMessage)

module.exports = newMessageRouter