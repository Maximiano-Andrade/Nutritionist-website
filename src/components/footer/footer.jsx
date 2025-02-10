//import React from 'react'
import Logo from '../../components/navbar/logo/Logo'
// Style
import './footer.css'
// icons
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
// Links
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <div className='footer-main'>
      <div className="footer-conatiner">

        <div className="footer-infos">
          <Logo />
          <nav className="footer-links">
            <lu className="links">
              <li><Link to={'/home'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/team'}>Team</Link></li>
              <li><Link to={'/process'}>Process</Link></li>
              <li><Link to={'/pricing'}>Pricing</Link></li>
              <li><Link to={'/blog'}>Blog</Link></li>
            </lu>
          </nav>

          <div className="footer-gotTop">
            <p>Got To Top</p>
            <button><HiOutlineArrowSmUp /></button>
          </div>
        </div>
        <div className="footer-contact">
          <div className="contact-info">
            <div className="contact-container-icons">
              <div className="email">
               <MdEmail/> <p>hello@squareup.com</p>
              </div>
              <div className="telefone">
               <IoCall/> <p>+91 91813 23 2309</p>
              </div>
              <div className="localizar">
                <FaLocationDot/><p>Somewhere in the World</p>
              </div>
            </div>
            <div className="footer-copy">
              <p>© 2023 Nutritionist. All rights reserved.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default footer