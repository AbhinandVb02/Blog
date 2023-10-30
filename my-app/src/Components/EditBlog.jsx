import { MDBCol, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Footer from './Footer'
import { newcontext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditBlog() {
    
    const [Name, SetBlogName, Images, SetImage, Discription, SetDiscription, Catagories, SetCategories] = useContext(newcontext);

    const nav = useNavigate();

    const params = useParams()

    const handeledit = async () => {
        const data = { id: params.id, Name,Images,Discription,Catagories }
        console.log(data, "data console");
        axios.post('http://localhost:5005/update', data)
            .then(res => {
                console.log(res, 31);
                nav('/userhome')
            })
            .catch(err => {
                console.log(err, 35);
            })
        console.log(data, 37)
    }


  return (
    <div style={{ backgroundColor: '#2b3035' }}>
    <div className='content-header'>
        <div className='content-maindiv'>
            <span className='content-maindiv-span'>
                <p>Edit Posts</p>
                <hr />
            </span><br />
            <br />

            <div className='input'>
                <form onSubmit={(e)=>{e.preventDefault()}}>
                    <MDBRow>
                        <MDBCol>
                            <label>Enter Image Link here</label>
                            <MDBInput id='Image' type='text' value={Images} onChange={(e) => { SetImage(e.target.value) }} />
                        </MDBCol>
                    </MDBRow><br />
                    <MDBRow>
                        <MDBCol>
                            <label>Enter Category here</label>
                            <MDBInput id='categories' type='text' value={Catagories} onChange={(e) => { SetCategories(e.target.value) }} />
                        </MDBCol>
                    </MDBRow><br />
                    <MDBRow>
                        <MDBCol>
                            <label>Enter Name here</label>
                            <MDBInput id='name' value={Name} onChange={(e) =>  SetBlogName(e.target.value) }/>
                        </MDBCol>
                    </MDBRow><br />
                    <MDBRow>
                        <MDBCol>
                            <label>Enter Discription here</label>
                            <MDBTextArea id='Discription' type='text' value={Discription} onChange={(e) => { SetDiscription(e.target.value) }} />
                        </MDBCol>
                    </MDBRow>
                </form>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Button variant='light' onClick={handeledit}>Add</Button>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default EditBlog