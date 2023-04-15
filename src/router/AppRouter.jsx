import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { HerosRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="login" element={<Login />} />

          <Route path="/*" element={
              <PrivateRoute>
                <Route path="/*" element={< HerosRoutes />} />
              </PrivateRoute>
          }>

          </Route>
          
      </Routes>
   
        
  </>
  )
}
