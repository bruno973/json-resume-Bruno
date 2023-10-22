import { useState } from 'react'


function About({ about }) {
    return (
       
        <div className="row">
          <div className="col-xs-12">
            <div id="photo-header" className="text-center">
              
              <div id="photo">
                <img src="https:&#x2F;&#x2F;media-exp1.licdn.com&#x2F;dms&#x2F;image&#x2F;C5603AQEOAtWqKT2pOQ&#x2F;profile-displayphoto-shrink_200_200&#x2F;0&#x2F;1581595273757?e&#x3D;1611792000&amp;v&#x3D;beta&amp;t&#x3D;b2IWNM2Icp5UoC7kwzqsMPnblve_AycnXnzztfhW4ts" alt="avatar"></img>
              </div>
              <div id="text-header" >
                <h1>Bruno Sosin<br></br><span>Développeur web</span></h1>
              </div>
            </div>
          </div>
        </div>
        
    );
  }

export default About