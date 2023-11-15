import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dogimg from '../assets/images/png/dog-img.png';
import blackdog from '../assets/images/png/black-dog.png';
import fivestar from '../assets/images/png/5-star-img.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LeftArrow } from '../components/Iconimg';
import { RightArrow } from '../components/Iconimg';
import Greenellips from '../assets/images/png/green-ellips.png';
function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centreMode: true,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        <div id='freetrial' className='position-relative'>
            <img src={Greenellips} alt="Greenellips" className='position-absolute end-0 bottom-0 d-none d-md-block' />
            <Container className='py_testimonial'>
                <h4 className='ff_roboto fw-medium fs_48 text-black text-center pb_50' data-aos="fade-down">Testimonial</h4>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6} data-aos="fade-right">
                        <img src={Dogimg} alt="Dogimg" className='w-100 mw_577' />
                    </Col>
                    <Col lg={6} className='' data-aos="fade-left">
                        <Slider {...settings}>
                            <div>
                                <img src={blackdog} alt="blackdog" />
                                <p className='ff_neue fs_20 fw-lighter text_grey mw_533 m-0 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                <img src={fivestar} alt="fivestar" />
                                <p className='ff_neue fw-bold fs_30 text_blue m-0 pt-3'>Mathew Spry</p>
                                <p className='ff_neue fw-medium fs_18 text-black m-0 pb-4'>Director @ BArkingham, UK</p>
                                <LeftArrow />
                                <RightArrow />
                            </div>
                            <div>
                                <img src={blackdog} alt="blackdog" />
                                <p className='ff_neue fs_20 fw-lighter text_grey mw_533 m-0 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                <img src={fivestar} alt="fivestar" />
                                <p className='ff_neue fw-bold fs_30 text_blue m-0 pt-3'>Mathew Spry</p>
                                <p className='ff_neue fw-medium fs_18 text-black m-0 pb-4'>Director @ BArkingham, UK</p>
                                <LeftArrow />
                                <RightArrow />
                            </div>
                            <div>
                                <img src={blackdog} alt="blackdog" />
                                <p className='ff_neue fs_20 fw-lighter text_grey mw_533 m-0 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                <img src={fivestar} alt="fivestar" />
                                <p className='ff_neue fw-bold fs_30 text_blue m-0 pt-3'>Mathew Spry</p>
                                <p className='ff_neue fw-medium fs_18 text-black m-0 pb-4'>Director @ BArkingham, UK</p>
                                    <LeftArrow />
                                    <RightArrow />
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Testimonials
