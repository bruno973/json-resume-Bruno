
import { useState,useContext } from 'react'
import { LanguageContext } from '../App';

function Education({ educationData }) {

  let { language, setLanguage } = useContext(LanguageContext);
    
    return (
        <div className="box">
          <h2><i className="fas fa-university ico"></i>{language === "fr" ? "Formation" : "education"}</h2>
          <ul id="education" className="clearfix">
            {educationData.map((school,index) => {
                return (
                    <li key={index}>
              <div className="year pull-left">{school.startDate} {school.endDate}</div>
              <div className="description pull-right">
                <h3>{school.institution}</h3>
                <div className="where"></div>
                <div className="address">
                  <a href={school.url} target= "_blank"><i className="fas fa-globe ico"></i> {school.url}</a>
                </div>
                <p><i className= "fas fa-graduation-cap ico"></i> {school.studyType}</p>
                <p>{school.area}</p>
                  
                  
                  {
                    school.courses ? 
                    <div>{language === "fr" ? "Compétences acquises" : "Acquired skills"}<ul className="list-group">
                    {school.courses.map((course,indexLi) => {return ( <li key={indexLi} className="list-group-item">{course}</li>)})}
                  </ul></div> : null
                  }
                  
              </div>
            </li>
                )
            })}
            
           
          </ul>
        </div>

    );
  }

export default Education


