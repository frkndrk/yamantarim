import "./home.scss";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect, useState } from "react";
import arrow from "./assets/genel/arrow.png"



const Home = () => {

  const [currentState, setCurrentState] = useState(0)
  const bgImageStyle = {
    backgroundImage: `url(${homePageImages[currentState].img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentState === 4) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  return (
    <div className="home" id="home">
      <div className="bgImg" style={bgImageStyle}>
      </div>
      <div className="contact-icons">
        <a href=""><PhoneEnabledIcon className="phone"/></a>
        <a href="" ><WhatsAppIcon className="whatsapp"/></a>
        <a href=""><InstagramIcon className="instagram"/></a>
        <a href="https://www.facebook.com/cemal.yavan.18/" target="_blank"><FacebookIcon className="facebook"/></a>
      </div>
      <div className="arrow">
        <img src={arrow} alt="arrow"/>
      </div>
    </div>
  )
}

export default Home