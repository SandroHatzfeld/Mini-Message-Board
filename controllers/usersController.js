const userStorage = require("../storages/userStorage.js")

exports.usersListGet = (req, res) => {
	res.render("listUsers", {
		title: "List of all users",
		users: userStorage.getUsers()
	})
}
exports.usersCreateGet = (req, res) => {
	res.render("createUser", {
		title: "Create a new user"
	})
}
exports.usersCreatePost = (req, res) => {
	const { firstName, lastName } = req.body
	userStorage.addUser({firstName, lastName})
	res.redirect("/users")
}
exports.usersUpdateGet = (req, res) => {}
exports.usersUpdatePost = (req, res) => {}

// module.exports = userController