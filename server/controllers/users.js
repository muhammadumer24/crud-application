const userModel = require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const login = async (req, res) => {
  try {
    const { email, password } = req.body
    let user = await userModel.findOne({ email })
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw new Error("wrong password")
    }
    user = user.toObject()
    const token = jwt.sign(user, process.env.secret)
    res.cookie("token", token)
    res.sendStatus(201)
  } catch (err) {
    res.sendStatus(400)
    console.log(err)
  }
}
const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashed = bcrypt.hashSync(password, 8)
    await userModel.create({ email, password: hashed })
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    console.log(req.body)
  }
}
const logout = async (req, res) => {}
module.exports = { login, logout, signup }
