import { Link } from "react-router-dom"
import { useState } from "react"
import "./aboutUs.scss"
import disCekim0 from "./assets/dis_cekim/0.jpeg"
import disCekim1 from "./assets/dis_cekim/1.jpeg"
import disCekim2 from "./assets/dis_cekim/2.jpeg"
import disCekim3 from "./assets/dis_cekim/3.jpeg"
import disCekim4 from "./assets/dis_cekim/4.jpeg"
import disCekim5 from "./assets/dis_cekim/5.jpeg"
import disCekim6 from "./assets/dis_cekim/6.jpeg"
import disCekim7 from "./assets/dis_cekim/7.jpeg"
import disCekim8 from "./assets/dis_cekim/8.jpeg"
import disCekim9 from "./assets/dis_cekim/9.jpeg"
import disCekim10 from "./assets/dis_cekim/10.jpeg"
import disCekim11 from "./assets/dis_cekim/11.jpeg"
import disCekim12 from "./assets/dis_cekim/12.jpeg"
import disCekim13 from "./assets/dis_cekim/13.jpeg"
import disCekim14 from "./assets/dis_cekim/14.jpeg"
import disCekim15 from "./assets/dis_cekim/15.jpeg"
import disCekim16 from "./assets/dis_cekim/16.jpeg"
import disCekim17 from "./assets/dis_cekim/17.jpeg"
import disCekim18 from "./assets/dis_cekim/18.jpeg"
import disCekim19 from "./assets/dis_cekim/19.jpeg"
import disCekim20 from "./assets/dis_cekim/20.jpeg"
import disCekim21 from "./assets/dis_cekim/21.png"
import disCekim22 from "./assets/dis_cekim/22.png"
import arazi from "./assets/genel/tarim_arazi_3.jpeg"
import video from "./assets/dis_cekim/discekim.mp4"
import arrow1 from "./assets/genel/arrow1.png"



const AboutUs = () => {


  const [currentSlide, setCurrentSlide] = useState(0)

  const galery = [
    {
        id: "1",
        img: disCekim0
    },
    {
        id: "2",
        img: disCekim1
    },
    {
        id: "3",
        img: disCekim2
    },
    {
        id: "4",
        img: disCekim3
    },
    {
        id: "5",
        img: disCekim4
    },
    {
        id: "6",
        img: disCekim5
    },
    {
        id: "7",
        img: disCekim6
    },
    {
        id: "8",
        img: disCekim7
    },
    {
        id: "9",
        img: disCekim8
    },
    {
        id: "10",
        img: disCekim9
    },
    {
        id: "11",
        img: disCekim10
    },
    {
        id: "12",
        img: disCekim11
    },
    {
        id: "13",
        img: disCekim12
    },
    {
        id: "14",
        img: disCekim13
    },
    {
        id: "15",
        img: disCekim14
    },
    {
        id: "16",
        img: disCekim15
    },
    {
        id: "17",
        img: disCekim16
    },
    {
        id: "18",
        img: disCekim17
    },
    {
        id: "19",
        img: disCekim18
    },
    {
        id: "20",
        img: disCekim19
    },
    {
        id: "21",
        img: disCekim20
    },
    {
        id: "22",
        img: disCekim21
    },
    {
        id: "23",
        img: disCekim22
    }
]

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < galery.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="aboutUs">
      <img className="sunset" src={arazi} alt="yaman_tarim"/>
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
              color: "#aaa", 
              padding: "0px 10px"}}>Hakkımızda</Link>
      </div>
      <div className="cont1">
        <div className="mediaContainer">
          <video className="video" width="700px" controls>
            <source src={video} type="video/mp4" ></source>
          </video>
        </div>
        <div className="aboutText">
          <div className="abtTxt">
            <h4>Hakkımızda</h4>
            <p>Erbaa Yaman Tarım, zirai tarım aletleri ve tüm ekipman çeşitlerinde geniş bir ürün yelpazesi sunmaktadır. Avrupa Birliği TKDK projesi kapsamında yapılacak tarım ilçe projelerinde yüzde elli hibe desteği sağlamaktadır. Tüm ekipmanlarımız, satış, yedek parça ve teknik servis hizmetleriyle birlikte sunulmaktadır. Ayrıca, çiftçilerimizin ihtiyaçlarına göre 3 yıl zirai krediye uygun durumdadır. Erbaa Yaman Tarım, tüm çiftçilerimize 2 yıl garantili ve kaliteli hizmet sunmaktadır.</p>
            <p>Müşterilerimizin beklentilerine kalite ve istikrarla karşılık vermek ilk önceliğimizdir. Ürünlerimize sahip çıkmak ve satış sonrasında da müşterilerimizin yanında olmak görevimizdir. Kalitede, hizmette ve müşteri ilişkilerimizde en iyi olmak ve bu imajı korumak ilk hedefimizdir. </p>
            <p>Kaliteye verdiğimiz önem ve hassasiyet bizleri bu günlere büyüyerek ve güçlenerek getirmiştir. TÜRKİYE’nin her yerine kendi servis filomuz ile nakliye işlemi yapmaktayız. Sattığımız ürünlerin her türlü tamir ve servis işlemini de tecrübeli personelimizle yapmaktayız.</p>
          </div>
        </div>
      </div>
      <div className="galery"> 
        <div className="g1">
          <h4>Galeri</h4>
        </div>
        <div className="works">
          <div className="slider">
            {galery.map(d => (
              <div className="container" key={d.id} style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <div className="item">
                  <div className="imgContainer">
                    <img src={d.img}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <img 
            src={arrow1}
            alt=""
            className="leftArrow"
            onClick={() => handleClick("left")}
          />
          <img 
            src={arrow1}
            alt=""
            className="rightArrow"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs