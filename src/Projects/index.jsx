import { useState } from 'react'


function Projects({ projects }) {
    return (
      <div className="box">
      <h2><i className= "fas fa-code-branch ico"></i> Projets</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <span sx="font-weight:bold">Globe Trotter</span>: Notre projet de fin de formation développé avec 3 camarades de classes en autonomie. L'objectif était d'appliquer un maximum de concepts étudiés en formation. Cet outil permet à chaque personne se sentant l'âme d'un Travel Leader, d'organiser le voyage de ses rêves par lui-même et de le partager avec sa famille, amis, collègues de travail qui voyageront avec lui.
          <br></br>
          <a href="https://youtu.be/yRnSeJcDcPs?t/3970">https:/;youtu.be/;yRnSeJcDcPs?t3970</a>
        </li>
      </ul>
    </div>
    );
  }

export default Projects
