import Notes from "./pages/notes"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./index.css"
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<Notes />}></Route>
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
