const {Router} = require("express")
const usersRouter = Router()
const userController = require('../controllers/usersController.js')

usersRouter.get("/", userController.usersListGet)
usersRouter.get("/create", userController.usersCreateGet)
usersRouter.post("/create", userController.usersCreatePost)
usersRouter.get("/:id/update", userController.usersUpdateGet)
usersRouter.post("/:id/update", userController.usersUpdatePost)

module.exports = usersRouter