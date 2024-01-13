import React, { useEffect, useState } from 'react'
import logo from './images/logo.png';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  return (
    <div className='container'>
       <div className='py-4'>

        
<div class="imageContainer"> 
<img src={logo} alt="LSPV logo"  width="500" height="500"/>
</div>

        <Link className='btn btn-primary mx-2' to="/login">Login</Link>
        <Link className='btn btn-primary mx-2' to="/register">Register</Link>

  
    </div>
    </div>
  )
}
