const notesModel = require("../models/notes")
const addNote = async (req, res) => {
  const { title, content } = req.body
  const note = await notesModel.create({ title, content })
  res.send(note)
}
const getAllNotes = async (req, res) => {
  const notes = await notesModel.find()
  res.send(notes)
}
const getNote = async (req, res) => {
  const { id } = req.params
  const note = await notesModel.findById({ _id: id })
  res.send(note)
}
const deleteNote = async (req, res) => {
  const { id } = req.params
  await notesModel.findByIdAndDelete({ _id: id })
  res.send("done", 200)
}
const updateNote = async (req, res) => {
  const { id } = req.params
  const note = await notesModel.findByIdAndUpdate(id, req.body)
  res.send(note)
}
module.exports = { getAllNotes, getNote, addNote, deleteNote, updateNote }
