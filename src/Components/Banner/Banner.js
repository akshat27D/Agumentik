import React from "react";
import "./Banner.scss";
import logo from "../../Assets/logo.webp";
import global from '../../Assets/global.svg'
import botlogo from '../../Assets/bottomlogo.webp'
function Banner() {
  return (
    <div className="banner">
      <div className="bg-gradient-esalink">
        <div className="navbar">
          <div className="left">
            EsaLink<span>DataIntegration</span>
          </div>
          <div className="mid center">
            <ul className="lst">
              <li className="btn">Facturation Electronique 2024</li>
              <li>Expertise</li>
              <li>Solutions</li>
              <li>Services</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="right center">
            <ul className="lst">
              <li>Connexion TMA</li>
              <li className="btn2">Obteneir UNE DEMO</li>
              <select>
                <option>FR</option>
                <option>EN</option>
                <option>HI</option>
              </select>
            </ul>
          </div>
        </div>
        <div className="hero">
          <div className="left">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="heading">
              Dematerialization at the service of your business
            </div>
            <p className="para">
              Esalink supports you in the digitalization of your B2B flows
            </p>
            <div className="btns">
              <div className="btn2">Find your EDI solution</div>
              <div className="btn2">Switch to electronic invoicing</div>
            </div>
            <div className="botlogo">
            <img src={botlogo}/>
            </div>
           
          </div>
          <div className="right">
            <div className="right-img">
            <img src={global}/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 606.81 602.42"><defs><style>.cls-1{fill:#fff;}</style></defs></svg> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
