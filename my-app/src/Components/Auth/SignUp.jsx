import React, { useState } from 'react'
import './login.css'
import { MDBRow, MDBCol, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';


function SignUp({ Firstname, SetFname, Secoundname, SetSname, Email, SetEmail, Password, SetPassword }) {


    const nav = useNavigate();


    const reguser = async () => {

        try {
            const config = {
                headers: {
                    'content-type': "application/json"
                },
            }

            const values = await axios.post("http://localhost:5005/user", { Firstname, Secoundname, Email, Password }, config)

            console.log(values.data);
            localStorage.setItem('user', JSON.stringify(values.data))
            nav('/userhome');
            handlehide()
        }
        catch (error) {
            console.log("couldn't signup", error);
            alert("User already exist")
        }

    }


    const [hidenav, sethidenav] = useState(false);

    const handlehide = () => {
        sethidenav(true)
    }


    return (
        <div>
            {hidenav ? null : <HomeNav />}
            <div className='sideimage'>
            </div>
            <div className='logstyle'>
                <div className='logIntro'>
                    <h1>Welcome to WeBlog </h1>
                    <p>Please sign-in to your account and start the adventure</p>
                </div>
                <div className='tabdiv'>
                    <form onSubmit={(e) => e.preventDefault()}>

                        <MDBRow className='mb-4 signupname'>
                            <MDBCol>
                                <label>First name :</label>
                                <MDBInput id='ufname' onChange={(e) => { SetFname(e.target.value) }} />
                            </MDBCol>
                            <MDBCol>
                                <label>Last name :</label>
                                <MDBInput id='ulname' onChange={(e) => { SetSname(e.target.value) }} />
                            </MDBCol>
                        </MDBRow>
                        <label>Email address :</label>
                        <MDBInput className='mb-4' type='email' id='uemail' onChange={(e) => { SetEmail(e.target.value) }} />
                        <label>Password :</label>
                        <MDBInput className='mb-4' type='password' id='upassword' onChange={(e) => { SetPassword(e.target.value) }} />

                        <MDBRow className='mb-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form7Example3' label='Remember me' />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <div className='loginbutton'>
                            <Button onClick={reguser} type='submit' className='mb-4' block>
                                SignUp
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

export default SignUp