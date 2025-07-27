const { Router } = require('express')
const { pushNewMessage, getAllMessages } = require('../controllers/messagesController.js')

const indexRouter = Router()

indexRouter.get("/", getAllMessages)
indexRouter.post("/", pushNewMessage)

module.exports = indexRouter