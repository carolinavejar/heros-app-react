import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { HerosRoutes } from "../heroes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="login" element={<Login />} />

          <Route path="/*" element={< HerosRoutes />} />
      </Routes>
   
        
  </>
  )
}
