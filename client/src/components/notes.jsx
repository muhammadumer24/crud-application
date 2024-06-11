import store from "../stores/notesStore"
function App() {
  const notes = store((s) => s.notes)
  const deleteNote = store((s) => s.deleteNote)
  const updateNoteFunction = store((s) => s.updateNoteFunction)
  return notes.map((note) => {
    return (
      <div key={note._id}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button onClick={() => deleteNote(note._id)}>Delete</button>
        <button onClick={() => updateNoteFunction(note)}>Edit</button>
      </div>
    )
  })
}
export default App
