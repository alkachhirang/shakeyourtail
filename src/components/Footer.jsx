import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import footerlogo from '../assets/images/png/footer-logo.png';
import { Facebook } from '../components/Iconimg';
import { Twitter } from '../components/Iconimg';
import { Instagram } from '../components/Iconimg';
import { In } from '../components/Iconimg';
import { Telegram } from '../components/Iconimg';


function Footer() {
    return (
        <div className='footer_bg_img mt_10 mb-0'>
            <Container>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6}>
                        <img src={footerlogo} alt="footerlogo" />
                        <p className='ff_neue fs_16 fw-lighter text-white mw_397 m-0 pt-4'>Rutrum mauris vitae at vitae augue placerat arcu in. Vel in elementum tempor enim accumsan enim a magna at. Dolor lorem nisi dignissim nulla.</p>
                        <div className='d-flex gap-3 pt-4'>
                            <div className='svg_circle nav_icon d-flex justify-content-center align-items-center'>
                                <Facebook />
                            </div>
                            <div className='svg_circle nav_icon d-flex justify-content-center align-items-center'>
                                <Twitter />
                            </div>
                            <div className='svg_circle nav_icon d-flex justify-content-center align-items-center'>
                                <Instagram />
                            </div>
                            <div className='svg_circle nav_icon d-flex justify-content-center align-items-center'>
                                <In />
                            </div>
                            <div className='svg_circle nav_icon d-flex justify-content-center align-items-center'>
                                <Telegram />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='pt-5 pt-lg-0'>
                        <div className='d-flex justify-content-lg-end justify-content-center align-items-lg-start align-items-center'>
                            <Col lg={4} className='col-6'>
                                <ul className='d-flex gap-2 flex-column p-0'>
                                    <li><a href='' className='ff_neue fw-medium fs_16 text-white'>Important Links</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>About Us</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>Features</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>Pricing</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>How It Work</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>New Features</a></li>
                                </ul>
                            </Col>
                            <Col lg={4} className=' col-6'>
                                <ul className='d-flex gap-2 flex-column p-0'>
                                    <li><a href='' className='ff_neue fw-medium fs_16 text-white'>Other Links</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative nav_link'>Testimonials</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>Features</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>FAQs</a></li>
                                    <li><a href='' className='ff_neue fw-lighter fs_16 text-white opacity_8 position-relative  nav_link'>Contact Us</a></li>
                                </ul>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='footerline pt-5'>
            </div>
            <a href='https://www.petstar.co.uk/#' target='blank'>
                <p className='text-center ff_neue fs_16 fw-lighter text-white py-3'>Made with Powered by Petstar -<span className='text-decoration-underline'> DOG GROOMING BUSINESSES & PET SERVICES</span></p>
            </a>
        </div>
    )
}

export default Footer
