const userStorage = require("../storages/userStorage.js")
const { body, validationResult } = require("express-validator")

const alphaErr = "must only contain letters."
const lengthErr = "must be between 1 and 10 charakters."
const mailErr = "Please enter a valid e-Mail adress."
const ageErr = "You must be 18 or older."

function calcAge() {
	const today = new Date()
	today.setFullYear(today.getFullYear() - 18)
	return today.toISOString().split('T')[ 0 ]
}

const validateUser = [
	body("firstName").trim()
		.isAlpha().withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
	body("lastName").trim()
		.isAlpha().withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
	body("eMail").trim().isEmail().withMessage(mailErr),
	body("birthday")
		.optional({ checkFalsy: true })
		.isBefore(calcAge()).withMessage(ageErr),
	body("bio").escape()
]


exports.usersListGet = (req, res) => {
	res.render("listUsers", {
		title: "List of all users",
		users: userStorage.getUsers()
	})
}
exports.userListDetailsGet = (req, res) => {
	res.render("userDetails", {
		user: userStorage.getUser(req.params.id)
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

		const { firstName, lastName, eMail, birthday, bio } = req.body
		userStorage.addUser({ firstName, lastName, eMail, birthday, bio })
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

		const { firstName, lastName, eMail, birthday, bio } = req.body
		userStorage.updateUser(req.params.id, { firstName, lastName, eMail, birthday, bio })
		res.redirect("/users")
	}
]

exports.usersDeletePost = (req, res) => {
	userStorage.deleteUser(req.params.id)
	res.redirect("/users")
}

exports.usersSearchGet = (req, res) => {
	const query = req.query.searchQuery
	const userBase = userStorage.getUsers()

	const searchResult = userBase.find(user => user.firstName === query || user.lastName === query || user.eMail === query)

	console.log(searchResult);
	
	if (!searchResult) {
		return res.status(404).render("listUsers", {
			title: "Search User",
			errors: ["No user was found"]
		})
	}

	res.render("listUsers", {
		title: "Search User",
		users: userStorage.getUsers()
	})
}

// module.exports = userController