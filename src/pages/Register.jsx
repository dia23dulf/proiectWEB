import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {


    let navigate = useNavigate();

    const [membru, setMembru]=useState({
        email:"",
        parola:""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const{email,parola}=membru;

    const onInputChange=(e)=>{
        setMembru({...membru,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/register",membru);
            navigate("/login");
        } catch(error){
            setErrorMessage("Adresa de Email introdusă nu se găsește în baza de date.");
            console.error("Eroare la autentificare:", error.message);
        }
        
    }

    return <div className='container'>
        <div className='row'>



            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'style={{ color: 'white' }}>Înregistrare Membru</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label' style={{ color: 'white' }}>Email</label>
                    <input type='text' className='form-control'
                        placeholder='Enter your email' name='email'
                        value={email} onChange={(e) => onInputChange(e)}></input>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Password' className='form-label' style={{ color: 'white' }}>Password</label>
                    <input type='password' className='form-control'
                        placeholder='Enter your password' name='parola'
                        value={parola} onChange={(e) => onInputChange(e)}></input>
                </div>

                <button type='submit' className='btn btn-outline-primary'>Register</button>

                <Link className='btn btn-outline-danger mx-2' to="/">
                    Cancel</Link>
                </form>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>  

        </div>
    </div>
}
