const userStorage = require("../storages/userStorage.js")
const { body, validationResult } = require("express-validator")

const alphaErr = "must only contain letters."
const lengthErr = "must be between 1 and 10 charakters."

const validateUser = [
	body("firstName").trim()
		.isAlpha().withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
	body("lastName").trim()
		.isAlpha().withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
]


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
exports.usersCreatePost = [
	validateUser,
	(req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).render("createUser", {
				title: "Create a new user",
				errors: errors.array()
			})
		}

		const { firstName, lastName } = req.body
		userStorage.addUser({ firstName, lastName })
		res.redirect("/users")
	}
]

exports.usersUpdateGet = (req, res) => {
	const user = userStorage.getUser(req.params.id)
	res.render("updateUser", {
		title: "Update user",
		user: user
	})
}
exports.usersUpdatePost = [
	validateUser,
	(req, res) => {
		const user = userStorage.getUser(req.params.id)
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).render("updateUser", {
				title: "Update user",
				user: user,
				errors: errors.array()
			})
		}

		const { firstName, lastName } = req.body
		userStorage.updateUser(req.params.id, { firstName, lastName })
		res.redirect("/users")
	}
]

// module.exports = userController