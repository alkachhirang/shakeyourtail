import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Googlepay from '../assets/images/png/google-pay.png';
import Appstore from '../assets/images/png/app-store.png';
import yellowmobile from '../assets/images/png/yellow-mobile.png';
import { Founded } from '../components/Iconimg';
import { Product } from '../components/Iconimg';
import { Pet } from '../components/Iconimg';
import { Subscription } from '../components/Iconimg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Purpleflower, Greenflower, Orangeflower, Blueflower } from "../components/Iconimg";

function Downloadapp() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centreMode: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div id='aboutus' className='download_bg_img download_bg-img pt_250 pt_70'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} data-aos="fade-right">
                        <h4 className='fw-medium fs_48 text-white m-0 pb-2 text-lg-start text-center'>Download App</h4>
                        <p className='fw-lighter ff_neue fs_16 text-white mw_393 pb-lg-4 pb-3 text-lg-center text-center'><span className='d-block'>Are you a mobile groomer or just want to access your appointments and client on the go?</span>
                            Try our app, available to Premier or Premier Plus subscribers.</p>
                        <div className='d-flex gap-3 pt-lg-1 justify-content-lg-start justify-content-center'>
                            <img src={Googlepay} alt="Googlepay" className='' />
                            <img src={Appstore} alt="Appstore" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className='py_download'>
                <h4 className='ff_roboto fw-medium fs_48 text-white text-center m-0' data-aos="fade-down">About Us</h4>
                <div className='d-flex justify-content-center align-items center' data-aos="fade-down">
                    <p className='ff_neue fs_16 fw-lighter text-white mw_775 text-center pb-lg-5 pb-4'> <span className="
                        d-block">Software developed by groomers for groomers</span>
                        Our team has a wealth of experience, over 30 years combined working in dog grooming salons and over 45 years combined in working in software development.</p>
                </div>

                <Slider {...settings}>
                    <div className='px_12'>
                        <div className='about_card1 cursor_pointer cardbox position-relative' data-aos="zoom-in">
                            <div className='position-absolute purple-flower'>
                                <Greenflower/>
                            </div>
                            <Founded />
                            <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Founded</h2>
                            <p className='ff_neue fw-medium fs_16 text_green m-0 pt-2'>Dec 2009</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                        </div>
                    </div>
                    <div className='px_12'>
                        <div className='about_card2 position-relative cursor_pointer cardbox' data-aos="zoom-in">
                            <div className='position-absolute purple-flower'>
                                <Purpleflower/>
                            </div>
                            <Product />
                            <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Product Launch</h2>
                            <p className='ff_neue fw-medium fs_16 text_purple m-0 pt-2'>July 2010</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey'>We released our first product 'Border' and made our first sales into 3 different countries.</p>
                        </div>
                    </div>
                    <div className='px_12'>
                        <div className='about_card3 cursor_pointer cardbox position-relative' data-aos="zoom-in">
                            <div className='position-absolute purple-flower'>
                                <Orangeflower />
                            </div>
                            <Pet />
                            <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Pet Schedule Released</h2>
                            <p className='ff_neue fw-medium fs_16 text_red m-0 pt-2'>Dec 2012</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey'>Our new Web based platform was created and released.</p>
                        </div>
                    </div>
                    <div className='px_12'>
                        <div className='about_card3 cursor_pointer cardbox position-relative' data-aos="zoom-in">
                            <div className='position-absolute purple-flower'>
                                <Blueflower />
                            </div>
                            <Subscription />
                            <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Subscription Service</h2>
                            <p className='ff_neue fw-medium fs_16 text_sky m-0 pt-2'>Aug 2013</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey'>We released our first premier subscription to the market</p>
                        </div>
                    </div>
                </Slider>
                <div className='d-flex justify-content-center align-items-center mt_60' data-aos="fade-down">
                    <a href='' className='view_btn ff_roboto fw-normal fs_20 text-white'>View All</a>
                </div>
            </Container>
        </div>
    )
}

export default Downloadapp
