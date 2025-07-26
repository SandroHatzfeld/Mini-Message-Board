const express = require('express')
const { Router } = require('express')
const path = require('path')
const { getAllMessages } = require('../controllers/messagesController.js')

const indexRouter = Router()

indexRouter.get("/", getAllMessages)

module.exports = indexRouter