import { useState , useEffect, createContext, useContext } from 'react'
import './App.css'
import resumeDataFR from './assets/bruno-resume-FR.json';
import resumeDataEN from './assets/bruno-resume-EN.json';
import Projects from "./Projects"
import Contact from "./Contact"
import Education from "./Education"
import Skills from "./Skills"
import Hobbies from "./Hobbies"
import Works from "./Works"
import About from "./About"

import qrCode from "./assets/QR_Image.png"

export let LanguageContext = createContext("fr");

function App() {
  
  let [language, setLanguage] = useState("fr")
  let [resumeData , setResumeData] = useState(resumeDataFR)
  
  useEffect(() => {
    

    let lang = new URLSearchParams(window.location.search)
  
    if (lang.has("lang") === true) {
      if (lang.get("lang") === "en") {
        setLanguage("en")
        setResumeData(resumeDataEN)
      } else if (lang.get("lang") === "fr") {
        return
      } else {
        window.location.href = "/"
      }
      
       
    } else {
      
    }
  },[])
  
  

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
    <div className="container">
      <About aboutme={resumeData.basics} qr={qrCode}></About>
      <div className='row'>
      <div className="col-xs-12 col-sm-7">
      <div className="box">
          <h2><i className="fas fa-user ico"></i> {language === "fr" ? "A propos" : "about me"}</h2>
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
  
    </LanguageContext.Provider>
      
    </>
  )
}

export default App
