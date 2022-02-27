import React from 'react';

import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-icon">
        <img src={require('./css/images/phone.png')} alt="ett telefonsymbol"/>
        <p><strong>Mobil</strong><br />072 150 53 53</p>
    </div>
    <div className="footer-icon">
        <img src={require('./css/images/mail.png')} alt="ett mailsymbol"/>
        <p><strong>E-mail</strong><br />Olivia.Walter.28@gmail.com</p>
        <p className="mail-text"></p>
    </div>
    <div className="footer-icon">
        <a href="https://www.linkedin.com/in/olivia-walter-49b758224/">
            <img src={require('./css/images/linkedin.png')} alt="ett LinkedInsymbol"/>
        </a>
        <p className="linkedIn"><strong>LinkedIn</strong></p>
    </div>
</footer>
  )
}

export default Footer