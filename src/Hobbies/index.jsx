
import { useState } from 'react'


function Hobbies({ hobbies }) {
    
    return (
        <div className="box">
          <h2><i className="fas fa-heart ico"></i> Hobbies</h2>
          {hobbies.map((hobbie) => {
            return (
                <div className="interests clearfix">
            <div className="item-interests">
                {hobbie.name}
            </div>
            <div className="col-sm-offset-1 col-sm-12 clearfix">
            </div>
          </div>
            )
          })}
        </div>

    );
  }

export default Hobbies



