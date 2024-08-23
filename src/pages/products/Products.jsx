import React from 'react'
import Urunler from "../../components/urunler/Urunler"
import { Link } from 'react-router-dom'
import "./products.scss"
import tarimMakina from "./assets/genel/tarimmakina.jpg"

const Products = () => {
  
  return (
    <div className='Products'>
      <img src={tarimMakina} alt="yaman_tarim" style={{width: "100%", height: "400px", objectFit: "cover"}}/>
      <div className='categoryBar'>
            <Link to="/HomePage" style={{
              textDecoration: "none", 
              color: "#aaa", 
              marginRight: "10px", 
              padding: "0px 20px 0px 0 ", 
              borderRight: "1px solid #aaa"
              }}>Anasayfa</Link>
            <Link to="" style={{
              textDecoration: "none", 
              color: "black", 
              padding: "0px 10px"}}>Ürünler</Link>
      </div>
      <div style={{margin: "50px 0"}}>
        <Urunler />
      </div>
    </div>
  )
}

export default Products