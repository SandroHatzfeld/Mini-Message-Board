const db = require('../messageDB.js')
const CustomNotFoundError = require('../errors/CustomNotFoundError.js')

async function getMessageById(req, res) {
	const { messageId } = req.params
	
	const message = await db.getMessageById(messageId)

	if (!message) {
		throw new CustomNotFoundError(`There is no message with the ID: ${messageId}`)
	}

	res.render("messageDetails", { message: message })
}

async function getAllMessages(req, res,) {
	const messages =	await db.getAllMessages()

	if (!messages) {
		throw new CustomNotFoundError("The list of messages is empty")
	}
	res.render("index", { messages: messages })
}

async function addNewMessage(req, res) {
	const messages =	await db.getAllMessages()

	res.render("form", { messages: messages })
}
async function pushNewMessage(req, res) {
	db.pushNewMessage(req.body.message, req.body.username)
	res.redirect("/")
}

module.exports = { getMessageById, getAllMessages, addNewMessage, pushNewMessage }