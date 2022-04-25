import React from 'react';
import './Info.css';
import { FcBullish, FcAssistant, FcInTransit, FcInspection } from "react-icons/fc";

function Info() {
  return (
    <div className="infoContainer">
      <div className="infoTitle">
        <h3>ideal para ti</h3>
        <h1>Conoce un poco más</h1>

        <div className="detalleContainer">

          <div className="detalle">
            <div className="detalleIcon">
              <FcBullish style={{fontSize: 50}} />
            </div>
            <h1 className="detalleTitle">Rendimiento</h1>
            <p className="detalleDescripcion">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
            </p>
            <a href="#">+ información</a>
          </div>
          
          <div className="detalle">
            <div className="detalleIcon">
              <FcInTransit style={{fontSize: 50}} />
            </div>
            <h1 className="detalleTitle">Hasta tu casa</h1>
            <p className="detalleDescripcion">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
            </p>
            <a href="#">+ información</a>
          </div>

          <div className="detalle">
            <div className="detalleIcon">
              <FcAssistant style={{fontSize: 50}} />
            </div>
            <h1 className="detalleTitle">Aclara tus dudas</h1>
            <p className="detalleDescripcion">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
            </p>
            <a href="#">+ información</a>
          </div>

          <div className="detalle">
            <div className="detalleIcon">
              <FcInspection style={{fontSize: 50}} />
            </div>
            <h1 className="detalleTitle">Cumple tu meta</h1>
            <p className="detalleDescripcion">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
            </p>
            <a href="#">+ información</a>
          </div>

          

        </div>
      </div>


    </div>
  )
}

export default Info