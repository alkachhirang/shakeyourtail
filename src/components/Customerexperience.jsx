import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Experienceimg from '../assets/images/png/experience-img.png';
import { FeatureSchedule } from '../components/Iconimg';
import { Featureclient } from '../components/Iconimg';
import { Report } from '../components/Iconimg';
import { Services } from '../components/Iconimg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Purpleflower, Greenflower, Orangeflower, Blueflower } from "../components/Iconimg";


function Customerexperience() {
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
    <div className='customer_bg_img py_customer' >
      <Container>
        <Row className='align-items-center justify-content-center py_experience'>
          <Col lg={5} data-aos="fade-right">
            <h4 className='ff_roboto fw-medium fs_48 text-black mw_471 m-0 pb-1 text-lg-start text-center'>Let your customer experience shine</h4>
            <p className='fw-lighter fs_16 ff_neue text_black mw_409 m-0 pt-2 pb-4 text-lg-start text-center'>Automated client rating, provides instant feedback on client booking history, partner this with your own Loyalty program.</p>
            <div className='d-flex justify-content-center justify-content-lg-start'>
              <a href='' className='free_trial_btn ff_roboto fw-normal fs_20 text-white'>Free Trial</a>
            </div>
          </Col>
          <Col lg={7} className='pt-4 pt-lg-0' data-aos="fade-left">
            <div className='position-relative'>
              <img src={Experienceimg} alt="Experienceimg" className='w-100' />
              <div className='white_imgbox position-absolute white_img d-none d-sm-block'>
                <div className='yellow_imgbox'>
                  <p className='ff_neue fs_12 fw-medium text-black m-0'>1:00 - 7:00</p>
                  <p className='ff_neue fs_10 fw-medium text-black m-0'>Half Day</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id='Features' className='py_feature'>
        <h4 className='ff_roboto fs_48 fw-medium text-center text-white m-0 pb-1' data-aos="fade-down">Features</h4>
        <div className='d-flex justify-content-center align-items-center pt-2 pb-5' data-aos="fade-down">
          <p className='ff_neue fw-lighter fs_16 text-white text-center m-0 mw_555'>ShakeYourTail provides your business with the following key features to run an successful dog grooming business.</p>
        </div>
        <Slider {...settings}>
          <div className='px_12'>
            <div className='feature_box1 cursor_pointer cardbox position-relative' data-aos="zoom-in">
              <div className='position-absolute purple-flower'>
                <Greenflower />
              </div>
              <FeatureSchedule />
              <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Schedule</h2>
              <p className='ff_neue fs_16 fw-lighter text_grey m-0 pt-2'>Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.</p>

            </div>
          </div>
          <div className='px_12'>
            <div className='feature_box2 position-relative cursor_pointer cardbox' data-aos="zoom-in">
              <div className='position-absolute purple-flower'>
                <Purpleflower />
              </div>
              <Featureclient />
              <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Clients & Pets</h2>
              <p className='ff_neue fs_16 fw-lighter text_grey m-0 pt-2 mw_227'>Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.</p>
            </div>
          </div>
          <div className='px_12'>
            <div className='feature_box3 cursor_pointer cardbox position-relative' data-aos="zoom-in">
              <div className='position-absolute purple-flower'>
                <Orangeflower />
              </div>
              <Report />
              <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Reports</h2>
              <p className='ff_neue fs_16 fw-lighter text_grey m-0 pt-2'>Report and export client details, appointments, marketing, no shows and more..</p>

            </div>
          </div>
          <div className='px_12'>
            <div className='feature_box4 cursor_pointer cardbox position-relative' data-aos="zoom-in">
              <div className='position-absolute purple-flower'>
                <Blueflower />
              </div>
              <Services />
              <h2 className='ff_roboto fs_20 fw-medium text-black m-0 pt-2'>Schedule</h2>
              <p className='ff_neue fs_16 fw-lighter text_grey m-0 pt-2 mw_227'>Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.</p>

            </div>
          </div>
        </Slider>
        <div className='d-flex justify-content-center mt_60' data-aos="fade-down">
          <a href='' className='free_trial_btn ff_roboto fs_20 fw-normal text-white'>View All Features</a>
        </div>
      </Container>
    </div >
  )
}

export default Customerexperience
