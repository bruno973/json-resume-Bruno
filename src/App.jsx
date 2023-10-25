import { useState } from 'react'
import './App.css'
import resumeData from './assets/bruno-resume.json';
import Projects from "./Projects"
import Contact from "./Contact"
import Education from "./Education"
import Skills from "./Skills"
import Hobbies from "./Hobbies"
import Works from "./Works"
import About from "./About"

import qrCode from "./assets/QR_image.png"

function App() {
 
  return (
    <>
      
    <div className="container">
      <About aboutme={resumeData.basics} qr={qrCode}></About>
      <div className='row'>
      <div className="col-xs-12 col-sm-7">
      <div className="box">
          <h2><i className="fas fa-user ico"></i> A propos</h2>
          <p>{resumeData.basics.summary}</p>
        </div>
        <Works works={resumeData.work}> </Works>
        <Projects projects={resumeData.work} />
      </div>
      <div className="col-xs-12 col-sm-5">
        <Contact contact={resumeData.basics} />
        <Education educationData={resumeData.education} />
        <Skills skills={resumeData.skills} />
        <Hobbies hobbies={resumeData.interests} />
      </div>
      
      </div>
      
    </div>
  

      
    </>
  )
}

export default App
