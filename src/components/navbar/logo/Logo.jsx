//import React from 'react'
// Style
import './Logo.css'
// lOGO
import LogoImg from '../../../assets/PetalsLogo.png'
// lINK
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    < >
      <Link className='Logo-main' to={"/"}>
        <div className="logo">
          <img src={LogoImg} alt="Logo Nutritionist" />
        </div>
        <h1>Nutritionist</h1>
      </Link>
    </>
  )
}

export default Logo