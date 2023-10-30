import { MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Aside from './Aside'
import axios from 'axios'

function CatDetail() {

    const [CatData,SetCatData] = useState([])

    useEffect(()=>{
        getDataByCat()
    })

    const params = useParams()

    const getDataByCat = ()=>{

        const Catagories = params.Catagories;

        axios.get(`http://localhost:5005/userdata/${Catagories}`)
        .then((res)=>{
            SetCatData(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div className='content-header'>
            <div className='content-maindiv'>
                <span className='content-maindiv-span'>
                    <p>Recent Posts</p>
                    <hr />
                </span>
                <div className='content-card-div'>
                    {CatData.map((data) => {
                        return (
                            <MDBCard className='content-card'>
                                <MDBCardImage overlay src={data.Images} alt='...' />
                                <MDBCardOverlay>
                                    <Link to={`/userhome/${data._id}`}><Button variant="light">View</Button></Link>
                                    <MDBCardTitle>{data.Name}</MDBCardTitle>
                                    <MDBCardText>Last updated 3 mins ago</MDBCardText>
                                </MDBCardOverlay>
                            </MDBCard>
                        )
                    })}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Button variant='light'>View More</Button>
                </div>
            </div>
            <Aside />
        </div>
    </div>
  )
}

export default CatDetail