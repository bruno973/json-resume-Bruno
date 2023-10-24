import { useState } from 'react'


function Works({ works }) {
    console.log(works)
    return (
      
<div className="box">
<h2><i className= "fas fa-suitcase ico"></i>Expériences professionnelles</h2>
  {
    works.map((work) => {
        return (
        <div className={work.id === "applause1" || work.id === "everg2" ? "job clearfix" + " hideWorkExp" : "job clearfix"}>
    <div className="row">
      <div className="details">
        <div className="where">
          {work.company}
          <div className="pull-right">
          {work.city ? work.city : "Ville"}
          </div>
        </div>
        <div className="description">
        {work.summary ? work.summary : "resumé du poste"}
        </div>
        <div className="year">{work.startDate} – {work.endDate}</div>
      </div>
    </div>
    <div className="row">
      <div className="job-details col-xs-11">
        <div className="profession">{work.position}</div>
        <div className="description">
          
          <div className="highlights">Faits marquants</div>
          <ul className="list-group">
            {
                work.highlights.map((element) =>  <li className="list-group-item">{element}</li>)
            }
            
          </ul>
        </div>
      </div>
    </div>
  </div>)
    })
  }
 
</div>
    );
  }

export default Works

