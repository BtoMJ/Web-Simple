import React from 'react';
import './Home.css';
import image from '../../assets/slider-img.jpg';
import bote from '../../assets/bote.png';

function Home() {
  return (
    <div className="homeContainer">
        <div className="homeImage">
          <div className="title">
            <h1>Poder en acción</h1>
            <p>
              Comer proteína no solo ayuda a prevenir la degradación muscular, 
              sino que también puede ayudar a desarrollar y fortalecer los músculos. 
              La combinación de ejercicio regular con un alto consumo de proteínas 
              ayuda a promover elcrecimiento muscular y el fortalecimiento.
            </p>
            <a href="#">+ información</a>
          </div>
          <div className="titleImage">
            <img src={image} alt="slider image"/>
          </div>

        </div>
        <div className="homeBanner">
          <div className="homeBannerInfo">
            <img src={bote} alt="producto" />
          </div>
          <p>
            El suplemento con mayores nutrientes en una sola fórmula. 
          </p>
          <a href="#">+ información</a>

        </div>
    </div>
  )
}

export default Home