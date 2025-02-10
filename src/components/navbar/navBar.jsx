//import React from 'react'
// Style
import './navBar.css'
//Logo
import Logo from './logo/Logo'
// Links
import { Link, useLocation } from 'react-router-dom'
import SideBar from './sideBar/SideBar'
// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// hooks
import UseMobileScreen from '../../hooks/useMobile'
import { useState } from 'react'

const navBar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isMobile = UseMobileScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();


  return (
    <header className='NavBar-main'>
      <Logo />

      <div className='nav-sidebar'>
        {isMobile && (
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <AiOutlineClose /> : <HiMenuAlt3 />}
          </button>
        )}

      </div>
      {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
      <nav className="navBar-container-links">
        <ul className="links">
          <li><Link to={"/home"} className={location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}>Home</Link>
          </li>
          <li><Link to={"/about"} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li><Link to={"/team"} className={location.pathname === '/team' ? 'active' : ''}>Team</Link>
          </li>
          <li><Link to={"/process"} className={location.pathname === '/process' ? 'active' : ''}>Process</Link>
          </li>
          <li><Link to={"/pricing"} className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
          </li>
          <li><Link to={"/blog"} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          </li>
        </ul>

        <div className="navBar-btn">
          <Link to={"/contact"}><button>Contact Us</button></Link>
        </div>

      </nav>

    </header>
  )
}

export default navBar