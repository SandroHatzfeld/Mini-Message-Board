const { randomUUID } = require('crypto')

const messages = [
	{
		id: randomUUID(),
		text: "Hi there!",
		user: "Amanda",
		added: new Date()
	},
	{
		id: randomUUID(),
		text: "Hello my friend!",
		user: "Samuel",
		added: new Date()
	}
]

async function getMessageById(id) {
	return messages.find(messages => messages.id === id) 
}

async function getAllMessages() {
	return messages
}

async function pushNewMessage(text, user) {
	messages.push({id: randomUUID(),text:text, user:user, added: new Date()})
}

module.exports = { getAllMessages, getMessageById, pushNewMessage }