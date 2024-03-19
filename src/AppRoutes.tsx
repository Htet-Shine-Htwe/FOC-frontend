import { Route, Routes } from "react-router-dom"
import Layouts from "./layouts/Layouts"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/"  element={<Layouts><span>Home</span></Layouts>}/>
    </Routes>

  )
}

export default AppRoutes