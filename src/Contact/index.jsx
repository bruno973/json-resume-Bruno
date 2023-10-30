import { useState } from 'react'


function Contact({ contact }) {
    
    return (
        <div className="box clearfix">
        <h2><i className="fas fa-bullseye ico"></i> Contact</h2>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fas fa-map-marker fa-fw"></span></div>
          <div className="title pull-right">{contact.location.address}</div>
          <div className="title  pull-right">{contact.location.city} {contact.location.postalCode} {contact.location.countryCode}</div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fas fa-phone fa-fw"></span></div>
          <div className="title only pull-right"><a href={"tel:".concat(contact.phone)}>{contact.phone.replace("+594","0")}</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fas fa-envelope fa-fw"></span></div>
          <div className="title only pull-right"><a href="mailto:bruno.sosin@beatitude973.fr" target="_blank">bruno.sosin@beatitude973.fr</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fas fa-globe fa-fw"></span></div>
          <div className="title only pull-right"><a href="https://tech.beatitude973.fr/" target="_blank">https://tech.beatitude973.fr/</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fab fa-linkedin fa-fw"></span></div>
          <div className="title pull-right">LinkedIn</div>
          <div className="description pull-right"><a href="https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;sosin-bruno-19640b68&#x2F;" target="_blank">Bruno Sosin</a></div>
        </div>
        <div className="contact-item">
          <div className="icon pull-left text-center"><span className="fab fa-github fa-fw"></span></div>
          <div className="title pull-right">Github</div>
          <div className="description pull-right"><a href="https:&#x2F;&#x2F;github.com&#x2F;bruno973&#x2F;" target="_blank">Bruno973</a></div>
        </div>
      </div>

    );
  }

export default Contact




{/* <div className="box clearfix">
          <h2><i className="fas fa-bullseye ico"></i> Contact</h2>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fas fa-map-marker fa-fw"></span></div>
            <div className="title pull-right">rue de la sucrière</div>
            <div className="title  pull-right">Matoury, French Guiana 97351 GF</div>
          </div>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fas fa-phone fa-fw"></span></div>
            <div className="title only pull-right">+594694090422</div>
          </div>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fas fa-envelope fa-fw"></span></div>
            <div className="title only pull-right"><a href="mailto:bruno.sosin@beatitude973.fr" target="_blank">bruno.sosin@beatitude973.fr</a></div>
          </div>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fas fa-globe fa-fw"></span></div>
            <div className="title only pull-right"><a href="https:&#x2F;&#x2F;github.com&#x2F;bruno973" target="_blank">https:&#x2F;&#x2F;github.com&#x2F;bruno973</a></div>
          </div>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fab fa-linkedin fa-fw"></span></div>
            <div className="title pull-right">LinkedIn</div>
            <div className="description pull-right"><a href="https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;sosin-bruno-19640b68&#x2F;" target="_blank">Bruno Sosin</a></div>
          </div>
          <div className="contact-item">
            <div className="icon pull-left text-center"><span className="fab fa-github fa-fw"></span></div>
            <div className="title pull-right">Github</div>
            <div className="description pull-right"><a href="https:&#x2F;&#x2F;github.com&#x2F;bruno973&#x2F;" target="_blank">Bruno973</a></div>
          </div>
        </div> */}