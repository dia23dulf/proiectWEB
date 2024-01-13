import React from 'react'
import Navbar from './layout/Navbar';
import Dia from './images/Dia.jpg';
import Sergiu from './images/Sergiu.jpg';
import Eve from './images/Eve.jpg';
import Szilvia from './images/Szilvia.jpg';
import Voicu from './images/Voicu.jpg';
import { Link } from 'react-router-dom';

export default function bc() {
  return (
     
<div className='container'>
        <div className='py-4'>
      <Navbar/>
      <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Biroul de conducere</h5>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Presedinte - Evelin Pop</h5>
                  <img src={Eve} alt="Eve"  width="200" height="200"/> 

            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center mt-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Secretar general - Szilvia Deak</h5>
                <img src={Szilvia} alt="Szilvia"  width="200" height="200"/> 
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center mt-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Vicepresedinte HR - Diana-Geanina Dulf</h5>
                <Link to="/mainhub">
                <img src={Dia} alt="Dia" width="200" height="200" />
                </Link>
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center mt-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Vicepresedinte Proiecte - Sergiu Balla</h5>
                <img src={Sergiu} alt="Sergiu"  width="200" height="200"/> 
            </div>
        </div>
    </div>
</div>
<div class="row justify-content-center mt-4">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Vicepresedinte It & Imagine - Voicu Babiciu</h5>
                <img src={Voicu} alt="Voicu"  width="200" height="200"/> 
            </div>
        </div>
    </div>
</div>




        </div>
    </div>
   
  )
}
