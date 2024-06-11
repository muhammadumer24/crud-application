const router = require("express").Router()
const { login, logout, signup } = require("../controllers/users")
router.post("/signup", signup)
router.post("/login", login)
router.get("/logout", logout)
module.exports = router
