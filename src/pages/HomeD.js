import React from 'react'
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
        <div className='py-4'>

        
        <div class="imageContainer"> 
        <img src={logo} alt="LSPV logo"  width="500" height="500"/>
        
            </div>
            <div class="button-container">
            <Link href="#" class="button" to="/mainhub" id="login-button">Login</Link>
             <a href="#" class="button" id="register-button">Register</a>
            </div>
            


        </div>
    </div>
  )
}
