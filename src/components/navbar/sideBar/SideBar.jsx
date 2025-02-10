//import React from 'react'
// Style
import './SideBar.css'
// Links
import { Link, useLocation } from 'react-router-dom'

const SideBar = () => {

    const location = useLocation()

    return (
        <div className='Sidebar-main'>
            <nav className="Siderbar-container-links">
                <ul className="links">
                    <li><Link to={"/home"} className={location.pathname === '/' || location.pathname === '/home' ? 'active': ''}>Home</Link></li>
                    <li><Link to={"/about"} className={location.pathname ==='/about' ? 'active' :'' }>About</Link></li>
                    <li><Link to={"/team"} className={location.pathname === '/team' ? 'active' : ''}>Team</Link></li>
                    <li><Link to={"/process"} className={location.pathname === '/process' ? 'active' : ''}>Process</Link></li>
                    <li><Link to={"/pricing"} className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link></li>
                    <li><Link to={"/blog"} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                </ul>
                <div className="navBar-btn">
                    <Link to={"/contact"}><button>Contact Us</button></Link>
                </div>

            </nav>
        </div>
    )
}

export default SideBar