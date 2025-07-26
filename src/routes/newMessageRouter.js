const express = require('express')
const { Router } = require('express')
const path = require('path')
const { getAllMessages, pushNewMessage, addNewMessage } = require('../controllers/messagesController.js')

const newMessageRouter = Router()

newMessageRouter.get("/", addNewMessage)

newMessageRouter.post("/", pushNewMessage)

module.exports = newMessageRouter