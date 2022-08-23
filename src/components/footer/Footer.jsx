import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {

  return (
    <footer>
       <a href="/#" className='footer-logo'>Rahul Pant</a>

       <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>

       <div className="footer-socials">
        <a href="https://m.me/rahulpant614/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com/rahulpant07" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/rahul-pant-148a77230/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/apexrahul" target="_blank" rel="noreferrer"><BsGithub /></a>
       </div>

       <div className="hr-line" style={{ borderTop: "2px solid #db7d0a ", }}>
       <div className="footer-copyright">
        <h3>&copy; Rahul Pant. All rights reserved.</h3>
       </div>
       </div>

    </footer>
  )
}

export default Footer