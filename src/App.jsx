import { Navigation } from "./components/NavBar/Navigation"
import { Route, Routes } from "react-router"
import { HomePage } from "./pages/Home/HomePage"



function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  )
}

export default App
