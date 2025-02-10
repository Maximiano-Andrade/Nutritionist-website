//import React from 'react'
//Style 
import './Banner.css'
// img
import imgMulher from '../../../assets/bannerHome/imageMulher.png'
import ImgPerfilUm from '../../../assets/bannerHome/perfilsImg/Image01.png'
import ImgPerfilDois from '../../../assets/bannerHome/perfilsImg/Image02.png'
import ImgPerfilTres from '../../../assets/bannerHome/perfilsImg/Image03.png'

const Banner = () => {
  return (
    <div className='banner-main'>
      <div className="banner-container">
        <div className="banner-img">
          <img src={imgMulher} alt="" />
        </div>
        <div className="banner-infos">
          <div className="container-banner-info">
            <div className="container-title-descri-btns">
              <div className="banner-title-descri">
                <div className="banner-subTitle">
                  <div className="banner-sub">
                    <h2>Transform Your ❤️ Health with</h2>
                  </div>
                  <h1>Personalized Nutrition Coaching</h1>
                </div>
                <div className="banner-descri">
                  <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support.
                    Home
                    About
                    Team
                    Process
                    Pricing
                    BlogStart your transformation today and experience the power of personalized nutrition coaching.</p>
                </div>
              </div>
              <div className="banner-btns">
                <button className='btn-today'>Get Starter Today</button>
                <button className='btn-demo'>Book a Demo</button>
              </div>
            </div>
            <div className="banner-perfils">
              <div className="banner-container-perfil">
              <div className="banner-perfil">
                <div className="perfil pf-1">
                  <img src={ImgPerfilUm} alt="Mulher" />
                </div>
                <div className="perfil pf-2">
                  <img src={ImgPerfilDois} alt="Mulher" />
                </div>
                <div className="perfil pf-3">
                  <img src={ImgPerfilTres} alt="Mulher" />
                </div>
              </div>
              </div>
              <p><span>430+</span> Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner