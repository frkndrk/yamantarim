import "./iletisim.scss"
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Iletisim = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div className="iletisim top" id="iletisim">
      <div className="contact top" data-aos="fade-up"
                    data-aos-offset="-300"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
        <div className="cont-1 ct">
          <h4><span>YAMAN</span> TARIM</h4>
          <p>Tokat Erbaa ve çevre bölgelerde römork ve tarım aletleri satışında lider firması olan Yaman Tarım Aletleri; Cemal Yavan tarafından kurulmuş olup uzun bir süredir çiftçilerimize hizmet vermektedir.</p>
          <ul className="icons">
            <li><a href=""><PhoneEnabledIcon className="phone" fontSize="large"/></a></li>
            <li><a href="" ><WhatsAppIcon className="whatsapp" fontSize="large"/></a></li>
            <li><a href=""><InstagramIcon className="instagram" fontSize="large"/></a></li>
            <li><a href="https://www.facebook.com/cemal.yavan.18/" target="_blank"><FacebookIcon className="facebook" fontSize="large"/></a></li>
          </ul>
        </div>
        <div className="cont-2 ct">
          <h4>KURUMSAL</h4>
          <ul>
            <li>Hakkımızda</li>
            <li>Vizyon&Misyon</li>
          </ul>
        </div>
        <div className="cont-3 ct">
          <h4>ÜRÜNLER</h4>
          <ul>
            <li>Römork</li>
            <li>Tanker</li>
            <li>Yem Kırma</li>
            <li>Gübre Dağıtma</li>
            <li>Pulluk</li>
            <li>Biçer Döver</li>
          </ul>
        </div>
        <div className="cont-4 ct">
          <h4>BİZE ULAŞIN</h4>
          <ul>
            <li><span><LocationOnIcon /></span> Evyaba Mah. D.100 Karayolu Girişi Erbaa/TOKAT</li>
            <li><span><PhoneIcon /></span> 0 542 815 97 39 - 0 542 815 97 30</li>
          </ul>
        </div>
      </div>
      <div className="footer top" data-aos="fade-up"
                    data-aos-offset="-450"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
        <p><span className="title">YAMAN TARIM ALETLERİ</span> © 2019-2023. Her Hakkı Saklıdır. kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir.</p>
        <div className="signature">
          <p className="designer">Designer: <a className="name" href="https://www.linkedin.com/in/frkndrk/" target="_blank" >Furkan DURAK </a></p>
          <a className="linkedin" href="https://www.linkedin.com/in/frkndrk/" target="_blank" ><LinkedInIcon className="iconLi"/></a>
        </div>
      </div>
    </div>
  )
}

export default Iletisim