import React from 'react';
import './Multimedia.css';
import video from '../../assets/video.mp4'

function Multimedia() {
  return (
    <div className="multimediaContainer">
      <div className="multimediaInfo">
        <div className="videoMultimedia">
          <iframe className="video" 
            src={video}>
          </iframe>
        </div>
        <div className="videoDescripcion">
          <h1>Como funcionan los suplementos</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form humour the 
            and randomised words which don't look even slightly believable. 
            If you are is going to use a passage of Lorem Ipsum.<br /><br />

            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form humour the 
            and randomised words which don't look even slightly believable. 
            If you are is going to use a passage of Lorem Ipsum.
          </p>
          <a href="#">+ información</a>

        </div>

      </div>
    </div>
  )
}

export default Multimedia