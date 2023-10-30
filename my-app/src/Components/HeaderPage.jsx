import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import Contents from './Contents';
import Footer from './Footer';
import axios from 'axios'

function HeaderPage() {


    useEffect(() => {
        userdata()
    },)

    const nav = useNavigate()

    const userdata = async () => {

        const token = localStorage.getItem('token')

        axios.post('http://localhost:5005/userdata', { token: token })
            .then((res) => {
                console.log(res);

                if (res.data.message === 'token expired') {
                    window.localStorage.clear();
                    nav('/')
                }
            })
    }


    return (
        <div style={{ backgroundColor: '#2b3035' }}>
            <NavBar />
            <Contents />
            <Footer />
        </div>
    )
}

export default HeaderPage