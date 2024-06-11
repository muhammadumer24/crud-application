const router = require("express").Router()
const {
  getAllNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote,
} = require("../controllers/notes")

router.route("/").get(getAllNotes).post(addNote)
router.route("/:id").get(getNote).delete(deleteNote).put(updateNote)

module.exports = router
