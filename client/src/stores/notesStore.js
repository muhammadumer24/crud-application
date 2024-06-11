import create from "zustand"
import axios from "axios"
const notesStore = create((set) => ({
  notes: [],
  forceRender: 0,
  fetchNotes: async () => {
    const { data } = await axios.get("http://localhost:3000/notes")
    set({ notes: data })
    set({ formNote: { title: "", content: "" } })
    set({ updateNote: { title: "", content: "", _id: null } })
  },
  formNote: { title: "", content: "" },
  handleInput: (e) => {
    const { name, value } = e.target
    set((state) => ({ formNote: { ...state.formNote, [name]: value } }))
  },
  handleSubmit: async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        "http://localhost:3000/notes",
        notesStore.getState().formNote
      )
      alert("done")
      notesStore.getState().fetchNotes()
    } catch (err) {
      alert("An error occur")
      console.log(err)
    }
  },
  deleteNote: async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`)
      alert("deleted")
      notesStore.getState().fetchNotes()
    } catch (err) {
      alert("something went wrong")
      console.log(err)
    }
  },
  updateNote: { title: "", content: "", _id: null },
  handleInputUpdate: (e) => {
    const { name, value } = e.target
    set((state) => ({
      updateNote: { ...state.updateNote, [name]: value },
    }))
  },
  updateNoteFunction: (note) => {
    set({ updateNote: note })
  },
  handleSubmitUpdate: async (e) => {
    e.preventDefault()
    try {
      const { updateNote, fetchNotes } = notesStore.getState()
      await axios.put(
        `http://localhost:3000/notes/${updateNote._id}`,
        updateNote
      )
      alert("updated")
      fetchNotes()
    } catch (err) {
      console.log(err)
      alert("something went wrong")
    }
  },
}))

export default notesStore
