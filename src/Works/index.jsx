import { useState,useContext } from 'react'
import { LanguageContext } from '../App';

function Works({ works }) {
    // console.log(works)
    const {language,setLanguage} = useContext(LanguageContext)
    let todayDate = new Date()
    const moisFrancais = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const moisAnglais = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

    return (
      
<div className="box">
<h2><i className= "fas fa-suitcase ico"></i>{language === "fr" ? "Expériences professionnelles" : "Professionals Experiences"}</h2>
  {
    works.map((work,index) => {
        return (
        <div key={index} className={work.id === "applause1" || work.id === "everg2" ? "job clearfix" + " hideWorkExp" : "job clearfix"}>
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
        <div className="year">
    {(language === "fr" ? moisFrancais[new Date(work.startDate).getMonth()] : moisAnglais[new Date(work.startDate).getMonth()]) + " " + new Date(work.startDate).getFullYear()} - { " " } 
    {work.endDate === "active" ? 
        (() => {
            const adjustedDate = new Date();
            adjustedDate.setMonth(adjustedDate.getMonth() - 1);
            return (language === "fr" ? moisFrancais[adjustedDate.getMonth()] : moisAnglais[adjustedDate.getMonth()]) + " " + adjustedDate.getFullYear();
        })() : 
        (language === "fr" ? moisFrancais[new Date(work.endDate).getMonth()] : moisAnglais[new Date(work.endDate).getMonth()]) + " " + new Date(work.endDate).getFullYear()
    }
</div>

      </div>
    </div>
    <div className="row">
      <div className="job-details col-xs-11">
        <div className="profession">{work.position}</div>
        <div className="description">
          
          <div className="highlights">{language === "fr" ? "Faits marquants" : "Highlights"}</div>
          <ul className="list-group">
            {
                work.highlights.map((element,index) =>  <li key={index} className="list-group-item">{element}</li>)
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

