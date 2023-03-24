import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DC, Marvel, Search, Hero } from "../pages"

export const HerosRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<DC />} />

                { /*Searh, HeroById */}
                <Route path="/" element={<Navigate to="marvel" />} />

                <Route path="search" element={<Search />} />
                <Route path="hero" element={<Hero />} />
            </Routes>
        </div>
        
    </>
  )
}
