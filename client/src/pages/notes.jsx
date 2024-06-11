import { useEffect } from "react"
import store from "../stores/notesStore"
import CreateForm from "../components/create"
import UpdateForm from "../components/update"
import Notes from "../components/notes"

function App() {
  const { _id } = store((s) => s.updateNote)
  const notes = store((s) => s.notes)
  const fetchNotes = store((s) => s.fetchNotes)
  //useState
  //useEffect
  useEffect(() => {
    fetchNotes()
  }, [])
  //functions
  //component
  return (
    <>
      <h1>React App</h1>
      {!_id ? <CreateForm /> : <UpdateForm />}
      {notes.length > 0 ? <Notes /> : <h2>nothing to show</h2>}
    </>
  )
}

export default App
