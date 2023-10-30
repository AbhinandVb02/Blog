import React, { useEffect, useState } from 'react'
import './Detail.css'
import Aside from './Aside'
import NavBar from './NavBar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Detailpage() {

    const [DetailData, setDetailData] = useState([])

    const params = useParams()

    useEffect(() => {
        getdatabyid()
    }, [])

    const getdatabyid = () => {

        const id = params.id

        axios.get(`http://localhost:5005/getblogbyid/${id}`)
            .then((res) => {
                setDetailData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(DetailData);


    return (
        <div style={{ backgroundColor: '#2b3035' }}>
            <NavBar />
            <div className='Detail-main'>
                <div className='Detail-sub'>
                    <img src={DetailData.Images} alt="" />

                    <h4>{DetailData.Name}</h4>
                    <p>{DetailData.Discription}</p>
                    <p>{DetailData.Discription}</p>
                    <p>{DetailData.Discription}</p>


                    <div className='Comment-main'>
                        <span className='content-maindiv-span'>
                            <p>Comment :</p>
                            <hr />
                        </span>
                    </div>
                </div>
                <Aside />
            </div>
            <Footer />
        </div>
    )
}

export default Detailpage