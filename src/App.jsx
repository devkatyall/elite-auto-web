import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Terms from "./pages/Terms"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/policy" element={<Terms />} />
    </Routes>
  )
}

export default App
