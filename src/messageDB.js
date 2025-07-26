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

module.exports = { messages}