import "./productPage.scss"
import { Link, useParams } from "react-router-dom"
import { ShopContext } from "../../context/shopContext"
import { useContext } from "react";
import arazi1 from "../src/assets/genel/tarim_arazi_3.jpeg";
import facebook from "../src/assets/genel/facebook3.png";
import whatsapp from "../src/assets/genel/whatsapp3.png";
import instagram from "../src/assets/genel/instagram3.png";
import phone from "../src/assets/genel/phone5.png";

const ProductPage = () => {
  const {products} = useContext(ShopContext)
  const {productId} = useParams()

  
  const categoryName = () => {
      if(productId < 7) {
        return "TEK DİNGİLLİ GERİYE DAMPERLİ RÖMORKLAR"
      }
      else if (productId > 6 && productId <= 13){
        return "ÇİFT DİNGİL ( TANDEM ) GERİYE DAMPERLİ RÖMORKLAR"
      }
      else if (productId > 13 && productId <= 21){
        return "DÖRT TEKERLİ ÇEKİLİ GERİYE DAMPERLİ RÖMORKLAR"
      }
      else if (productId > 21 && productId <= 24){
        return "CARGO GERİYE DAMPERLİ RÖMORKLAR"
      }
      else if (productId > 24 && productId <= 27){
        return "YURTDIŞI ÖZEL ÜRETİM RÖMORKLAR"
      }
      else if (productId > 27 && productId <= 30){
        return "GÜBRE DAĞITMA MAKİNESİ"
      }
      else if (productId > 30 && productId <= 33){
        return "HASAT TABLALARI"
      }
      else if (productId > 33 && productId <= 37){
        return "BALYA MAKİNELERİ"
      }
      else if (productId > 37 && productId <= 39){
        return "TAŞ MAKİNELERİ"
      }
      else if (productId > 39 && productId <= 40){
        return "İLAÇLAMA ALETLERİ"
      }
      else if (productId > 40 && productId <= 41){
        return "YEM KARMA MAKİNESİ"
      }
      else if (productId > 41 && productId <= 46){
        return "SU TANKERLERİ"
      }
      else if (productId > 46 && productId <= 47){
        return "MEYVE TOPLAMA RÖMORKU"
      }
  }

  return (
    <div className='productPage'>
        <img src={arazi1} alt="yaman_tarim" style={{width: "100%", height: "400px", objectFit: "cover"}}/>
        <div className='categoryBar'>
            <Link to="/HomePage" style={{
              textDecoration: "none", 
              color: "#aaa",
              padding: "0px 20px", 
              borderRight: "1px solid #ddd",
              outline: "none"
              }}>Anasayfa</Link>
            <Link to="/Products" style={{
              textDecoration: "none", 
              color: "#aaa", 
              padding: "0px 20px",
              borderRight: "1px solid #ddd",
              outline: "none"}}>Ürünler</Link>
            <Link style={{
              textDecoration: "none", 
              color: "black", 
              padding: "0px 20px",
              outline: "none",
              textAlign: "center"}}>{products[productId - 1].desc}</Link>
        </div>
        <div className="container">
          <div className="imgCont">
            <img src={products[productId - 1].img}/>
          </div>
          <div className="descCont">
            <div className="insideCont">
              <div className="new">
                <h4>Yeni</h4>
              </div>
              <div className="headerCont">
                <h2>{products[productId - 1].desc}</h2>
              </div>
              <div className="desc">
                <ul>
                  <li>Kategori: <Link style={{textDecoration: "none", color: "black", fontWeight: "600"}} >{categoryName()}</Link></li>
                  <li>Stok: <span className="stock">VAR</span></li>
                </ul>
              </div>
              <div className="connects">
                <Link to={"https://www.facebook.com/cemal.yavan.18/"} target="_blank"><img src={facebook}/></Link>
                <Link><img src={whatsapp}/></Link>
                <Link><img src={instagram}/></Link>
                <Link><img src={phone}/></Link>
              </div>
            </div>
          </div>
        </div>
        {
          (products[productId - 1].specTech) 
          &&
          <div className="techSpec">
            <div className="descHead">
              <h3>Ürün Özellikleri</h3>
            </div>
            <div className="techCont">
              <h4>Teknik Özellikler</h4>
              <ul>
                {((products[productId - 1]).specTech).map((item,i) => (
                    <li key={i}>{item}</li>
                  ))
                }
              </ul>
              <h4>OPSİYONEL ÖZELLİKLER</h4>
              <ul>
                {((products[productId - 1]).specOpt).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        }

          
          
    </div>
  )
}

export default ProductPage