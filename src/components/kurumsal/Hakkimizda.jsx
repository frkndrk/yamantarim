import "./hakkimizda.scss"
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import greenwave from "./assets/green_wave.png";
import romork from "./assets/romorklar.jpeg";

const Hakkimizda = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className="hakkimizda" id="hakkimizda">
       <div className="wave">
            <img src={greenwave} />
        </div>
        <div className="container top">
            <div className="text">
                <h1 data-aos="fade-up"
                    data-aos-offset="-150"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">Hakkımızda</h1>
                <p data-aos="fade-up"
                    data-aos-offset="-200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">Erbaa Yaman Tarım, zirai tarım aletleri ve tüm ekipman çeşitlerinde geniş bir ürün yelpazesi sunmaktadır. Avrupa Birliği TKDK projesi kapsamında yapılacak tarım ilçe projelerinde yüzde elli hibe desteği sağlamaktadır. Tüm ekipmanlarımız, satış, yedek parça ve teknik servis hizmetleriyle birlikte sunulmaktadır. Ayrıca, çiftçilerimizin ihtiyaçlarına göre 3 yıl zirai krediye uygun durumdadır. Erbaa ...</p>
                <button data-aos="fade-up"
                    data-aos-offset="-300"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center"><Link to="/AboutUs">Devamını Oku</Link></button>
            </div>
            <div className="image-container">
                <div className="image" data-aos="fade-left"
                data-aos-offset="-200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">
                    <img src={romork} alt="yaman_tarim_romork"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hakkimizda