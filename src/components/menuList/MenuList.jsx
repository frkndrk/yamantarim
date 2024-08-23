import "./menuList.scss"
import { Link } from "react-router-dom"

const MenuList = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menuListList " + (menuOpen && "active")} id="menuList">
      <ul>
        <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/HomePage">ANASAYFA</Link></li>
        <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/AboutUs">HAKKIMIZDA</Link></li>
        <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Products">ÜRÜNLER</Link></li>
        <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Contact">İLETİŞİM</Link></li>
      </ul>
    </div>
  )
}

export default MenuList