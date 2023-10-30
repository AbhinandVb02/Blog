import React, { useContext } from 'react'
import Aside from './Aside'
import { MDBCard, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit'
import { Button } from 'react-bootstrap'
import { newcontext } from '../App'
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

function Contents() {

    const [BlogData,Name, SetBlogName, Images, SetImage, Discription, SetDiscription, Catagories, SetCategories] = useContext(newcontext)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(BlogData);

    const DeleteFun = (id) => {
        axios.post("http://localhost:5005/deleteblog", { id })
            .then((data) => {
                alert(data.data.Data);
                console.log(data);
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    


    return (
        <div className='content-header'>
            <div className='content-maindiv'>
                <span className='content-maindiv-span'>
                    <p>Recent Posts</p>
                    <hr />
                </span>
                <div className='content-card-div'>
                    {BlogData.map((data) => {
                        return (
                            <MDBCard className='content-card'>
                                <MDBCardImage overlay src={data.Images} alt='...' />
                                <MDBCardOverlay>
                                    <Link to={`/userhome/${data._id}`}><Button variant="light">View</Button></Link>&nbsp;
                                    <Button variant='success' ><Link to={`/edit/${data._id}`} className='linkstyle'><AiFillEdit /></Link></Button>&nbsp;
                                    <Button variant='danger' onClick={() => { DeleteFun(data._id) }}><AiFillDelete /></Button>
                                    <MDBCardTitle>{data.Name}</MDBCardTitle>
                                    <MDBCardText>Last updated 3 mins ago</MDBCardText>
                                </MDBCardOverlay>
                            </MDBCard>
                        )
                    })}
                </div>
                <div className='Pageination'>
                    <nav aria-label='Page navigation example'>
                        <MDBPagination className='mb-0'>
                            <MDBPaginationItem>
                                <MDBPaginationLink href='#' aria-label='Previous'>
                                    <span aria-hidden='true'>«</span>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                            <MDBPaginationItem>
                                <MDBPaginationLink href='#'>1</MDBPaginationLink>
                            </MDBPaginationItem>
                            <MDBPaginationItem>
                                <MDBPaginationLink href='#'>2</MDBPaginationLink>
                            </MDBPaginationItem>
                            <MDBPaginationItem>
                                <MDBPaginationLink href='#'>3</MDBPaginationLink>
                            </MDBPaginationItem>
                            <MDBPaginationItem>
                                <MDBPaginationLink href='#' aria-label='Next'>
                                    <span aria-hidden='true'>»</span>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                        </MDBPagination>
                    </nav>
                </div>
            </div>
            <Aside />
        </div>
    )
}

export default Contents