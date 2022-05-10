import React from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contactoContainer">
      <div className="contactoForm">
        <h3>tienes dudas</h3>
        <h1>Pónte en contacto con nosotros</h1>
        <form className="Form">
          <div className="formContainer">
            <div className="Letrero">Nombre:</div>
            <input type="text" className="Caja" />
          </div>

          <div className="formContainer">
            <div className="Letrero">Correo:</div>
            <input type="mail" className="Caja" />
          </div>

          <div className="formContainer">
            <div className="Letrero">Teléfono:</div>
            <input type="tel" className="Caja" />
          </div>

          <div className="formContainerArea">
            <div className="Letrero">Mensaje:</div>
            <textarea></textarea>
          </div>
          
          <div className="formContainer">
            <input type="submit" className="btnSend" value="Enviar" />
          </div>
        </form>
      </div>
        
    </div>
  )
}

export default Contacto