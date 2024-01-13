import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

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
        try {
            await axios.post("http://localhost:8080/login", membru);
            navigate("/mainhub");
        } catch (error) {
            setErrorMessage("Email sau parolă incorecte");
            console.error("Eroare la autentificare:", error.message);
        }
    }

    return <div className='container'>
        <div className='row'>

            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4' style={{ color: 'white' }}>Logare Membru</h2>
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

                <button type='submit' className='btn btn-outline-primary'>Login</button>

                <Link className='btn btn-outline-secondary mx-2' to="/register">
                    Don't have an account? Click here</Link>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>

        </div>
    </div>
}
