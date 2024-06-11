import store from "../stores/notesStore"
function App() {
  const handleSubmitUpdate = store((s) => s.handleSubmitUpdate)
  const updateNote = store((s) => s.updateNote)
  const handleInputUpdate = store((s) => s.handleInputUpdate)
  return (
    <form onSubmit={handleSubmitUpdate}>
      <h2>Update</h2>
      <input
        type="text"
        value={updateNote.title}
        onChange={handleInputUpdate}
        name="title"
      />
      <input
        type="text"
        value={updateNote.content}
        onChange={handleInputUpdate}
        name="content"
      />
      <button type="submit">Update</button>
    </form>
  )
}
export default App
