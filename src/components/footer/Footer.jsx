import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div  className="copy__footer">
    <p>  {year} © Admin-panel. Všechna práva vyhrazena. </p>
    <span className='design'>Vytvořeno <Link to='https://jh-design.cz'>JH-design.cz</Link></span>
  </div>
  )
}

export default Footer
