
import { useState } from 'react'


function Skills({ skills }) {
    
    return (
      <div className="box">
        <h2><i className="fas fa-tasks ico"></i> Compétences</h2>
        {
        skills.map((skill) => {
            return (
                <div className="skills clearfix">
                <div className="item-skills">
                    {skill.name}
                    <span className="skill-level">{skill.level}</span>
                </div>
                <div className="col-sm-offset-1 col-sm-12 clearfix">
                    {skill.keywords.map((element) => {
                        return (<span className= "skill badge">{element}</span>)
                    })}
                    
                </div>
                </div>
        
            )
        })}
      </div>

    );
  }

export default Skills
