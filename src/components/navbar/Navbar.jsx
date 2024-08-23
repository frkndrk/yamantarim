import "./navbar.scss"
import { Link } from "react-router-dom"
import logo from "./assets/logo-4.png"

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className="navbar">
        <Link to="/HomePage"><img src={logo} /></Link>
        <ul className="menuBar">
            <li className="menu"><div className="menuList"><Link to="/HomePage">ANASAYFA</Link></div></li>
            <li className="menu"><div className="menuList"><Link to="/AboutUs">HAKKIMIZDA</Link></div></li>
            <li className="menu"><div className="menuList"><Link to="/Products">ÜRÜNLER</Link></div></li>
            <li className="menu"><div className="menuList"><Link to="/Contact">İLETİŞİM</Link></div></li>
        </ul>
        <div className="contact">
          <p id="bizi_arayin">Bizi arayın</p>
          <label htmlFor="bizi_arayın">0542 815 97 39</label>
        </div>
        <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
            <ul className="hambList">
              <span className="hamb"></span>
              <span className="hamb"></span>
              <span className="hamb"></span>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar