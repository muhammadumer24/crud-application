//express app
const express = require("express")
const app = express()
//dependencies
const cors = require("cors")
const cp = require("cookie-parser")
require("dotenv").config()
//functions
const cnt = require("./db/connect")
const notes = require("./routers/notes")
const users = require("./routers/users")
const checkAuth = require("./controllers/checkAuth")
const requireAuth = require("./middlewares/checkAuth")

//cors
app.use(cors("*"))
//cookie-parser
app.use(cp())
//making the app configure json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//routes
app.use("/notes", notes)
app.use("/users", users)
app.get("/check-auth", requireAuth, checkAuth)
//connect to database
cnt(process.env.db_url)

//starting the app
app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})
