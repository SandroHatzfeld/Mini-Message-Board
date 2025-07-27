class UserStorage {
	constructor() {
		this.storage = {}
		this.id = 0
	}

	addUser({firstName, lastName, eMail, birthday, bio}) {
		const id = this.id
		this.storage[id] = {id, firstName, lastName, eMail, birthday, bio}
		this.id++
	}

	getUsers() {
		return Object.values(this.storage)
	}

	getUser(id) {
		return this.storage[id]
	}

	updateUser(id, {firstName, lastName, eMail, birthday, bio}) {
		this.storage[id] = {id, firstName, lastName, eMail, birthday, bio}
	}

	deleteUser(id) {
		delete this.storage[id]
	}
}

module.exports = new UserStorage()