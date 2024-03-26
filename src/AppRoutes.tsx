import { Route, Routes } from "react-router-dom"
import Layouts from "./layouts/Layouts"
import HomePage from "./pages/HomePage"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Layouts><HomePage /></Layouts>}/>
    </Routes>

  )
}

export default AppRoutes