import React, { useState } from 'react'
import './login.css'
import { MDBRow, MDBCol, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';

function LogIn() {

    const [Email, setemail] = useState('')
    const [Password, setpassword] = useState('')
    const [error, setError] = useState('')

    const nav = useNavigate();


    const userlogin = async () => {
        setError('');

        try {

            const response = await axios.post('http://localhost:5005/login', { Email, Password });

            console.log(response);

            if (response.data.message === 'Login successful') {
                console.log('Login successful');
                localStorage.setItem('userId', response.data.userId)
                localStorage.setItem('token', response.data.token)
                handlehide()
                nav('/userhome');
            } else {
                setError('Invalid email or password');
                console.log('Invalid email or password');
            }
        } catch (error) {
            setError('Invalid email or password...!');
            console.log('Invalid email or password...!');
        }
    };

    //--------------------------------------------------------

    const [hidenav, sethidenav] = useState(false);

    const handlehide = () => {
        sethidenav(true)
    }

    return (
        <div>
            {hidenav ? null : <HomeNav />}
            <div className='logstyle'>
                <div className='logIntro'>
                    <h1>Welcome to WeBlog </h1>
                    <p>Please sign-in to your account and start the adventure</p>
                </div>
                <div className='tabdiv'>
                    <form onSubmit={(e) => e.preventDefault()}>

                        <label>Email :</label>
                        <MDBInput className='mb-4' type='email' id='form1Exampl1' value={Email} onChange={(e) => { setemail(e.target.value) }} />
                        <label>Password :</label>
                        <MDBInput className='mb-4' type='password' id='form1Example2' value={Password} onChange={(e) => { setpassword(e.target.value) }} /><p style={{ color: "red", fontFamily: "serif" }}>{error}</p>

                        <MDBRow className='mb-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form7Example3' label='Remember me' />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <div className='loginbutton'>
                            <Button onClick={userlogin} type='submit' className='mb-4' block>
                                Login
                            </Button>
                        </div>

                        <div className='text-center'>
                            <p>
                                Not a member? <a href='#!'>Register</a>
                            </p>

                            <span style={{ display: 'flex' }}>
                                <hr />
                                <p>or</p>
                                <hr />
                            </span>

                            <div>
                                <Button floating color="secondary" className='mx-1 iconbutton1'>
                                    <FaFacebookF size={20} />
                                </Button>

                                <Button floating color="secondary" className='mx-1 iconbutton2'>
                                    <AiOutlineGoogle size={20} />
                                </Button>

                                <Button floating color="secondary" className='mx-1 iconbutton3'>
                                    <AiOutlineTwitter size={20} />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn