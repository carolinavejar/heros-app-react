import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/pages/Login"
import { HerosRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
        <Routes> 
            <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<Login />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            
            <Route path="/*" element={
              <PrivateRoute>
                <HerosRoutes />
              </PrivateRoute>
            } />
           

        </Routes>
    
    </>
  )
}
