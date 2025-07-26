const { Router } = require('express')
const { getAllMessages } = require('../controllers/messagesController.js')

const indexRouter = Router()

indexRouter.get("/", getAllMessages)

module.exports = indexRouter