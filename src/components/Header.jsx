import { useState } from 'react';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mobile from "../assets/images/png/header-phn.png";
import Navlogo from "../assets/images/png/nav-logo.png";
import mobileboximg1 from '../assets/images/png/monile-box img1.png';
import { Greenstart } from '../components/Iconimg';


function Header() {
  const [show, setshow] = useState(true)
  return (
    <div className='overflow-hidden'>
      <div className='header_bg_img pb-5'>
        <Container>
          <div className='d-flex align-items-center justify-content-between py-3 position_fixed start-0 end-0 z-3 px-3 px-sm-5 bg_yellow'>
            <div>
              <img src={Navlogo} alt="Navlogo" className='w-100 mw_175' />
            </div>
            <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
              <li className='position-relative'><a href='#home' onClick={() => setshow(!show)} className='fs_16 ff_neue fw-medium text-white nav_link'>Home</a></li>
              <li className='position-relative'><a href='#features' onClick={() => setshow(!show)} className='fs_16 ff_neue fw-medium text-white nav_link'>Features</a></li>
              <li className='position-relative'><a href='#pricing' onClick={() => setshow(!show)} className='fs_16 ff_neue fw-medium text-white nav_link'>Pricing</a></li>
              <li className='position-relative'><a href='#freetrial' onClick={() => setshow(!show)} className='fs_16 ff_neue fw-medium text-white nav_link'>Free Trial</a></li>
              <a href='' className='sign_btn ff_roboto fs_20 fw-normal text-white text-nowrap'>Sign In</a>
            </ul>
            <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navline`}>
              <span className='crl-1'></span>
              <span className='crl-2'></span>
              <span className='crl-3'></span>
            </div>
          </div>
        </Container>

        <Container id='home' className='pt_85'>
          <Row className='align-items-center justify-content-center'>
            <Col lg={6} className='col-12 d-flex flex-column pt-5 pt-lg-0' data-aos="fade-right">
              <h1 className='fs_80 fw-bold ff_roboto text-white mw_530 m-0 text-lg-start text-center'>Smart, Simple Software</h1>
              <p className='mw_558 text-white fw-medium fs_20 ff_neue m-0 pb-4 text-lg-start text-center'>Dog Grooming Software, helping to reduce 'no shows' with appointment confirmations, reminders & more.</p>
              <div className='d-flex gap-3 mt-2 justify-content-center align-items-center justify-content-lg-start'>
                <a href='' className='free_btn text-white ff_roboto fw-normal fs_20'>Free Trial</a>
                <a href='' className='explore_btn text-white fs_20 fw-normal ff_roboto'>Explore More</a>
              </div>
            </Col>
            <Col lg={6} className='col-12 d-flex justify-content-center align-items-center  z-2' data-aos="fade-left">
              <div className='position-relative mw_411'>
                <img src={mobile} alt="mobile" className='w-100 ' />
                <div className='mobile_box d-flex align-items-center gap-2 mobile_box1' >
                  <img src={mobileboximg1} alt="mobileboximg1" className='' />
                  <div>
                    <p className='ff_neue fw-bold fs_12 text-black m-0'>Esther Howard</p>
                    <p className='m-0 ff_neue fs_8 fw-lighter text-black'>Manager</p>
                  </div>
                </div>
                <div className='img_box d-flex align-items-center gap-2 img_box1'>
                  <Greenstart />
                  <div>
                    <p className='ff_neue fw-bold fs_12 text-black m-0'>Theresa Webb</p>
                    <p className='m-0 ff_neue fs_8 fw-lighter text-black'>CEO</p>
                  </div>
                </div>
                </div>
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default Header
