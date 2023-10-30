import React, { useContext, useState } from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { newcontext } from '../App'

function NavBar() {

    const [BlogData, SetBlogData] = useContext(newcontext)

    const [Search, SetSearch] = useState('')

    const nav = useNavigate()

    // const brandfilter = []

    // BlogData.forEach((item) => {
    //   if (!brandfilter.includes(item.Catagories)) {
    //     brandfilter.push(item.Catagories);
    //   }
    // });

    // console.log(brandfilter);

    const handleSearch = () => {
        const lowerCaseQuery = Search.toLowerCase();
        const searchResults = BlogData.filter((item) => item.Name.toLowerCase().includes(lowerCaseQuery));

        SetBlogData(searchResults);
        console.log(searchResults);
    }

    const HandleLogout = () =>{
        window.localStorage.clear()
        nav('/')
    }


    return (
        <div>
            <div className='titlehead'>
                <h1>WeBlog</h1>
                <hr className='hrstyle' />
            </div>
            <div>
                <Navbar expand='lg' bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3 nav-main py-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-lg`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                            placement="end"
                            className='offcanvas'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                    Navigation
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className=" flex-grow-1">
                                    <Link className='linkstyle' to='/userhome'><Nav.Link href="#action1">Home</Nav.Link></Link>
                                    <NavDropdown
                                        title="Categories"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                        className='dropdown'
                                    >
                                        <NavDropdown.Item></NavDropdown.Item>
                                        <NavDropdown.Item></NavDropdown.Item>
                                        <NavDropdown.Item></NavDropdown.Item>
                                        <NavDropdown.Item></NavDropdown.Item>
                                        <NavDropdown.Item></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Blog"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                        className='dropdown'
                                    >
                                        
                                    <Link to='/create' className='linkstyle'><Nav.Link href="#action3">Create Blog</Nav.Link></Link>
                                    <Link to='/create' className='linkstyle'><Nav.Link href="#action3">Edit Blog</Nav.Link></Link>
                                    </NavDropdown>
                                    <NavDropdown
                                        title="Account"
                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                        className='dropdown'
                                    >
                                        <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                        <NavDropdown.Item onClick={HandleLogout} >LogOut</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action2">About</Nav.Link>
                                    <Nav.Link href="#action3">Help</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={Search}
                                        onChange={(e) => { SetSearch(e.target.value) }}
                                    />
                                    <Button variant="outline-light" onClick={handleSearch}>Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar