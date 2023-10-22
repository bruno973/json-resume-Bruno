
import { useState } from 'react'


function Education({ educationData }) {
    
    return (
        <div className="box">
          <h2><i className="fas fa-university ico"></i> Formation</h2>
          <ul id="education" className="clearfix">
            {educationData.map((school) => {
                return (
                    <li>
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
                    <div>Compétences acquises<ul className="list-group">
                    {school.courses.map((course) => {return ( <li className="list-group-item">{course}</li>)})}
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


