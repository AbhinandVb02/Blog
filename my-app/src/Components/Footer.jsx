import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div className='footer-main'>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span style={{paddingLeft:'6rem'}}>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="facebook-f" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="twitter" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="google" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="instagram" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="linkedin" />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon fab icon="github" />
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    WeBlog
                                </h6>
                                <p>
                                    Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua..
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Sports
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Game
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Cars
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Technology
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Music
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Quick links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Categories
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    About
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Contact
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                    Help
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    WeBlog@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + xx xxxxxxxxxx
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + xx xxxxxxxxxx
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                        WeBlog.com
                    </a>
                </div>
            </MDBFooter></div>
    )
}

export default Footer