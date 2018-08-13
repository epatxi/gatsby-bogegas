import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      
      <div className="navbar-start">
        <Link className="navbar-item" to="/sobre-domaines-lupier">
          Sobre nosotros
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            <img src="/img/logo-lupier.png" alt="Bodegas Domaines Lupier" />
        </Link>
      </div>
      </div>
      
     
    </div>
  </nav>
)

export default Navbar
