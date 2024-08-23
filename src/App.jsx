import HomePage from "./pages/homePage/HomePage"
import Iletisim from "./components/iletisim/Iletisim"
import Navbar from "./components/navbar/Navbar"
import "./app.scss"
import { Route, Routes } from "react-router-dom"
import AboutUs from "../src/pages/about-us/AboutUs"
import Products from "./pages/products/Products"
import Contact from "./pages/contact/Contact"
import ProductList from "./pages/productList/ProductList"
import ProductPage from "./pages/productPage/ProductPage"
import { useState } from "react"
import MenuList from "./components/menuList/MenuList"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MenuList menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/HomePage" element={<HomePage />}/>
            </Route>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/Products" element={<Products />} />
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/ProductList" element={<ProductList />}>
              <Route path=":categoryId" element={<ProductList />}/>
            </Route>
            <Route path="/ProductPage" element={<ProductPage />}>
              <Route path=":productId" element={<ProductPage />}/>
            </Route>
        </Routes>
        <Iletisim />
      </div>
  )
}

export default App
