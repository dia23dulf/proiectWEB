import React from 'react'
import Navbar from './layout/Navbar';
import { Link } from 'react-router-dom';

export default function MainHub() {
  return (
  
<div className='container'>
        <div className='py-4'>
      <Navbar/>
            <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <Link href="#" class="button" to="/despre">Despre LSPV</Link>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <Link href="#" class="button" to="/bc">Biroul de conducere</Link>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <Link href="#" class="button" to= "https://docs.google.com/spreadsheets/d/1lR0jpdeZ0oBd-mvnbUFRMqF44VlYDz-3AvR6tooYbCM/edit#gid=16682194">Program sediu</Link>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <Link href="#" class="button" to="https://docs.google.com/spreadsheets/d/1X31L3YPVclHw7zlaTkNFgoy2Ckas7TMbN2i5i2ZRgdA/edit#gid=0">Mentorat</Link>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <Link href="#" class="button" to="/proiecte" >Proiecte</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>



        </div>
    </div>
   
  )
}
