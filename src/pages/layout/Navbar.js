import React from 'react'
import { Link } from 'react-router-dom'
import logo_lung from './images/logo_lung.png';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <img src={logo_lung} alt="LSPV logo"  width="300" height="75"/>

    <div class="button-container">
    <Link href="#" class="button" to ="/mainhub" id="login-button">Hub</Link>
    <Link href="#" class="button" to ="/" id="login-button">Logout</Link>
    </div>
  </div>
</nav>
    </div>
  )
}
