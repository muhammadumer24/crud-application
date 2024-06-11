import store from "../stores/notesStore"
function App() {
  const handleSubmit = store((s) => s.handleSubmit)
  const formNote = store((s) => s.formNote)
  const handleInput = store((s) => s.handleInput)
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create</h2>
      <label htmlFor="title">Your title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formNote.title}
        onChange={handleInput}
      />
      <label htmlFor="content">Your message</label>
      <input
        type="text"
        id="content"
        name="content"
        value={formNote.content}
        onChange={handleInput}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
export default App
