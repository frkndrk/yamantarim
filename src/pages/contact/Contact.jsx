import "./contact.scss"
import { Link } from "react-router-dom"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";
import coffee from "./assets/genel/cup-coffee2.jpg"

const Contact = () => {
  const [icon, setIcon] = useState(<TelegramIcon />)
  const [btn, setBtn] = useState("Gönder")
  const [btnState, setBtnState] = useState(false)
  const [focused, setFocused] = useState(false)

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleClick = (e) => {
    e.preventDefault()

    if(values.phone === "" || values.email ==="") {
      alert("Lütfen istenilen bilgileri doldurunuz!")
    } else {
      setBtnState(true)
      setIcon(<WorkspacesIcon />)
      setBtn("Gönderiliyor..")
      setTimeout(() => {
        setIcon(<DoneIcon />)
        setBtn("Gönderildi")
        setBtnState(false)
        setValues({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: ""
        })
      }, 3000)
    
    const formData = new FormData(e.target)
    const payLoad = Object.fromEntries(formData)

    }
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='contactPage' style={{position: "relative"}}>
        <div className='tea-coffee'>
          <div className="descCont">
            <h1>SİZLERİ GÖRMEKTEN MUTLULUK DUYARIZ</h1>
            <h1>ÇAY KAHVE İÇMEYE BEKLİYORUZ</h1>
          </div>
          <div className="coffee">
            <img src={coffee}/>  
          </div>
        </div>
        <div className='categoryBar'>
              <Link to="/HomePage" style={{
                textDecoration: "none", 
                color: "#aaa",
                padding: "0px 20px", 
                borderRight: "1px solid #aaa",
                outline: "none"
                }}>Anasayfa</Link>
              <Link to="/Contact" style={{
                textDecoration: "none", 
                color: "#aaa", 
                padding: "0px 20px",
                outline: "none"}}>İletişim</Link>
          </div>
        <div className="contactInfo">
          <div className="contInfo1">
            <h2>İLETİŞİM BİLGİLERİMİZ</h2>
            <div className="contInfo2">
              <div className="icon"><LocalPhoneIcon style={{fontSize: "40px", color: "rgba(25, 140, 25, 0.9)"}} /></div>
              <div className="info">
                <h4>Telefon</h4>
                <p>0542 815 97 39</p>
              </div>
            </div>
            <div className="contInfo2">
              <div className="icon"><FaxIcon style={{fontSize: "40px", color: "rgba(0, 0, 0, 0.5)"}}/></div>
              <div className="info">
                <h4>Fax</h4>
                <p>0256 715 34 56</p>
              </div>
            </div>
            <div className="contInfo2">
              <div className="icon"><EmailIcon style={{fontSize: "40px", color: "rgba(25, 140, 25, 0.9)"}}/></div>
              <div className="info">
                <h4>E-Posta</h4>
                <p>info@yamantarimaletleri.com</p>
              </div>
            </div>
            <div className="contInfo2">
              <div className="icon"><LocationOnIcon style={{fontSize: "40px", color: "rgba(0, 0, 0, 0.5)"}}/></div>
              <div className="info">
                <p>Evyaba Mah. D.100 Karayolu Girişi Erbaa/TOKAT</p>
              </div>
            </div>
          </div>
          <div className="formInfo">
              <form onSubmit={handleClick}>
                <h2>FİYAT TEKLİFİ VE SERVİS FORMU</h2>
                <div className="inputArea">
                  <div className="input">
                    <input className="inputs" onChange={onChange} value={values.name} name="name" id="1" type="text" placeholder="Adınız/Soyadınız" ></input>
                    <span>Lütfen Adınızı/Soyadınızı giriniz!</span>
                  </div>
                  <div className="input">
                    <input className="inputs" onChange={onChange} value={values.phone} name="phone" id="2" type="tel" placeholder="Telefon numaranız" pattern="^[0-9]{11}$" onBlur={handleFocus} focused={focused.toString()}></input>
                    <span>Başında sıfır olmadan 10 haneli olarak giriniz!</span>
                  </div>
                  <div className="input">
                    <input className="inputs" onChange={onChange} value={values.email} name="email" id="3" type="email" placeholder="E-Posta adresiniz" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onBlur={handleFocus} focused={focused.toString()}></input>
                    <span>Lütfen geçerli bir e-mail adresi giriniz!</span>
                  </div>
                  <div className="input">
                    <input className="inputs" onChange={onChange} value={values.subject} name="subject" id="4" type="text" placeholder="Konu" ></input>
                    <span>Lütfen görüşmek istediğiniz konuyu giriniz!</span>
                  </div>
                  <textarea name="message" onChange={onChange} value={values.message} id=""  rows="10" style={{resize: "none"}}></textarea>
                </div>
                <button><span className={"icons " + (btnState && "fullTour")}>{icon}</span>{btn}</button>
              </form>
          </div>
        </div>
        <div className="address">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2177522942534!2d36.50308982827897!3d40.69120168766735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407d7bbfd7038d9b%3A0x1fed7956a8f49009!2sYAMAN%20TARIM%20ALETLER%C4%B0!5e0!3m2!1str!2str!4v1698931659597!5m2!1str!2str" 
              width="100%" 
              height="500"
              style={{border: "0"}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>
  )
}

export default Contact