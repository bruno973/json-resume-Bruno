import { useState } from 'react'


function About({ aboutme,qr }) {
    return (
       
        <div className="row">
          <div className="col-xs-12">
            <div><img src={qr} alt="Mon QR Code" className="qr-code showOnPrint" /></div>
            <div id="photo-header" className="text-center">
            
              <div id="photo">
                <img src="https://res.cloudinary.com/dgk0pz3jp/image/upload/c_crop,g_auto,h_800,w_800/RESUME-BRUNO/ryuunewchmhdcajswcz4.jpg" alt="avatar"></img>
              </div>
              <div id="text-header" >
                <h1>{aboutme.name}<br></br><span>{aboutme.label}</span></h1>
              </div>
            </div>
          </div>
        </div>
        
    );
  }

export default About
