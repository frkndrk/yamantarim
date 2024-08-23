import "./urunGruplari.scss"
import UrunCard from "../urunCard/UrunCard"
import { categories } from "../../data"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const UrunGruplari = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="urunGruplari top">
      <h1>Ürün Grupları</h1>
      <div className="productCards">
      {categories.map((item,i) => (
        <div key={i}
        data-aos="fade-up" 
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          <UrunCard key={i} id={item.id} img={item.img} desc={item.name}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default UrunGruplari