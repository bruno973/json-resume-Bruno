
import { useState,useContext } from 'react'
import { LanguageContext } from '../App';

function Skills({ skills }) {
  let { language, setLanguage } = useContext(LanguageContext);
    return (
      <div className="box">
        <h2><i className="fas fa-tasks ico"></i> {language === "fr" ? "Compétences" : "Skills"}</h2>
        {
        skills.map((skill,index) => {
            return (
                <div key={index} className="skills clearfix">
                <div className="item-skills">
                    {skill.name}
                    <span className="skill-level">{skill.level}</span>
                </div>
                <div className="col-sm-offset-1 col-sm-12 clearfix">
                    {skill.keywords.map((element, indexSpan) => {
                        return (<span key={indexSpan} className= "skill badge">{element}</span>)
                    })}
                    
                </div>
                </div>
        
            )
        })}
      </div>

    );
  }

export default Skills
