import React from "react";
import "./Monday.scss";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineMan,
} from "react-icons/ai";
function Monday() {
  return (
    <div className="monday center">
      <div className="top">
        <div className="one">
          <ul className="list">
            <li className="title">
              monday<span>.com</span>
            </li>
            <li>Pricing</li>
            <li>Contacts</li>
            <li>Templates</li>
            <li>SMB</li>
            <li>Enterprise</li>
            <li>Non profits</li>
            <li>App marketplace</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div className="two">
          <ul className="list">
            <li className="title">Features</li>
            <li>Docs</li>
            <li>Integration</li>
            <li>Automations</li>
            <li>Files</li>
            <li>profits</li>
          </ul>
        </div>
        <div className="three">
          <ul className="list">
            <li className="title">Monday products</li>
            <li>Marketing</li>
            <li>Project</li>
            <li>Sales</li>
            <li>Developers</li>
            <li>Non profits</li>
            <li>HR</li>
            <li>IT Operations</li>
          </ul>
        </div>
        <div className="four">
          <ul className="list">
            <li className="title">Use cases</li>
            <li>About us</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="five">
          <ul className="list">
            <li className="title">Company</li>
            <li>Contacts</li>
            <li>Templates</li>
            <li>SMB</li>
            <li>Enterprise</li>
            <li>Non profits</li>
            <li>App marketplace</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div className="six">
          <ul className="list">
            <li className="title">Resources</li>
            <li>Pricing</li>
            <li>Contacts</li>
            <li>Templates</li>
            <li>SMB</li>
            <li>Enterprise</li>
            <li>Non profits</li>
            <li>App marketplace</li>
            <li>24/7 Support</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="icons">
            <AiFillRedditCircle className="ic"/>
            <AiFillLinkedin className="ic"/>
            <AiFillFacebook className="ic"/>
            <AiFillTwitterCircle className="ic"/>
            <AiFillYoutube className="ic"/>
          </div>
          <div className="links">
            <ul className="list">
             
              <li>Security</li>
              <li>Terms and Privacy</li>
              <li>Privacy Policy</li>
              <li>Cookie Settings</li>
              <li>Status</li>
              
            </ul>
          </div>
        </div>
        <div className="right">
          Accesibilty Statement
          <AiOutlineMan />
        </div>
      </div>
    </div>
  );
}

export default Monday;
