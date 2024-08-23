import { useContext, useState } from "react"
import { ShopContext } from "../../context/shopContext"
import { useParams } from "react-router-dom"
import "./productList.scss"
import { Link } from "react-router-dom"
import ProductCategory from "../../components/productCategory/ProductCategory"
import arazi1 from "./assets/genel/tarim_arazi_3.jpeg"

const ProductList = () => {
  const {categories} = useContext(ShopContext)
  const {categoryId} = useParams()
  const [openCat, setOpenCat] = useState(false)
  const [selectId, setSelectId] = useState()
  const [subSelectId, setSubSelectId] = useState()
  
  return (  
    <div className="productList">
        <img src={arazi1} alt="yaman_tarim" style={{width: "100%", height: "400px", objectFit: "cover"}}/>
        <div className='categoryBar'>
            <Link to="/HomePage" style={{
              textDecoration: "none", 
              color: "#aaa",
              padding: "0px 20px", 
              borderRight: "1px solid #aaa",
              outline: "none"
              }}>Anasayfa</Link>
            <Link to="/Products" style={{
              textDecoration: "none", 
              color: "#aaa", 
              padding: "0px 20px",
              borderRight: "1px solid #aaa",
              outline: "none"}}>Ürünler</Link>
            <Link style={{
              textDecoration: "none", 
              color: "black", 
              padding: "0px 20px",
              outline: "none"}}>{categories[categoryId - 1].name}</Link>
        </div>
        <div className="containerCategory">
          <div className="categories">
            <div className="ct">
              <ul className="ct1">
                {categories.map((item) => (
                    <Link to={`${item.id}`} style={{textDecoration: "none"}} key={item.id}>
                      <li className={(selectId === item.id) ? "ct2 active" : "ct2" }  
                          key={item.id} 
                          onClick={() => (
                            ((item.kind).map((k) => (k.cesit) ? setOpenCat(!openCat) : (setOpenCat(false), setSubSelectId(0)))), setSelectId(item.id))} >
                        {item.name}
                        <div className="subCat">
                          {(item.kind).map((c, t) => (
                            (c.cesit) &&
                            <div key={t} style={{display: !openCat && "none" }} className="subCategories">
                              <ul className="sc1">
                                <li className="sc2" key={t} onClick={() => (setSubSelectId(c.id))}>{c.desc}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </li></Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="category-products">
                {(subSelectId > 0)
                ?
                (<div style={{display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
                  <div className="containerHeader">
                    <h4>{(categories[selectId - 1].kind[subSelectId - 1].desc)}</h4>
                  </div>
                  <div style={{display:"flex", flexWrap: "wrap"}}>
                    {(categories[selectId - 1].kind[subSelectId - 1].cesit).map((item, i) => (
                      <div key={i} id={item.id} className="container" style={{marginBottom: (!item.cesit) && "0"}}>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "start", alignItems:"center"}}>
                          {
                            <div className="containerList" style={{display: "flex"}}>
                              <div key={i} className="listProducts" style={{display: "flex"}}>
                                <ProductCategory key={i} id={item.id} img={item.img} desc={item.desc}/>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </div>)
                :
                (
                    <div className="container" style={{display: "flex", flexWrap: "wrap", justifyContent: "start", alignItems:"start",flexDirection: "column"}}>
                      {(categoryId > 1) 
                      &&
                      <div className="containerHeader2" style={{display: "flex"}}>
                        <h4>{categories[categoryId - 1].name}</h4>
                      </div>
                      }
                      <div style={{display: "flex", flexWrap: "wrap"}}>
                      {((categories[categoryId - 1]).kind).map((item, i) => (
                        <div key={i} className="cont" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems:"center", marginBottom: (item.cesit) && "70px"}}>
                          {
                              (item.cesit) 
                              ?
                              <div>
                                <div className="containerHeader2">  
                                  <h4>{item.desc}</h4>
                                </div>
                                <div className="containerList" style={{display: "flex"}}>
                                  <div key={i} className="listProducts" style={{display: "flex", justifyContent: "start", alignItems: "center", flexWrap: "wrap"}}>
                                      {(item.cesit).map((c, v) => (
                                        <ProductCategory key={v} id={c.id} img={c.img} desc={c.desc}/>
                                      ))}
                                  </div>
                                </div>
                              </div>
                              :
                              <div className="listProducts" style={{display: "flex"}}>
                                <ProductCategory key={i} id={item.id} img={item.img} desc={item.desc} />
                              </div>
                              
                          }
                        </div>
                      ))}
                      </div>
                    </div>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default ProductList