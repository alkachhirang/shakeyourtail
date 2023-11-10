import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Client } from '../components/Iconimg';
import { Notifications } from '../components/Iconimg';
import { Schedule } from '../components/Iconimg';
import Sheduleimg from '../assets/images/png/shedule-img.png';

function Mainfeatures() {
    return (
        <div className='bg-white py_mainfeatures'>
            <Container>
                <Row className='align-items-center flex-column-reverse flex-lg-row '>
                    <Col lg={3} className='col-12' data-aos="fade-right">
                            <div className='client_card mb-4 cursor_pointer'>
                                <Client />
                                <h3 className='ff_roboto fw-medium fs_20 text-black m-0 pb-2 pt-2'>Clients & Pets</h3>
                                <p className='ff_neue fs_16 fw-lighter text_grey m-0 lh_150 mw_240'>Managing your Clients and their Pets is effortless; Record their details, add emergency contacts, Medical Notes, Grooming notes, view their appointment history, set alerts and much more…</p>
                            </div>
                            <div className='notification_card mt-2 mb-4 mb-lg-0 cursor_pointer'>
                                <Notifications />
                                <h3 className='ff_roboto fw-medium fs_20 text-black m-0 pb-2 pt-2'>Notifications & Reminders</h3>
                                <p className='ff_neue fs_16 fw-lighter text_grey m-0 lh_150 mw_240'>We’ll take the strain by automatically sending your Clients, their appointment reminders, confirmations, ‘Miss You’s and No Shows, by text or email.</p>
                            </div>
                        </Col>
                    <Col lg={3} className='col-md-12' data-aos="fade-right">
                        <div className='schedule_card mb-4 mt-2 cursor_pointer position-relative'>
                            <img src={Sheduleimg} alt="Sheduleimg" className='position-absolute shedule_img' />
                                <Schedule />
                                <h3 className='ff_roboto fw-medium fs_20 text-black m-0 pb-2 pt-2'>Schedule</h3>
                                <p className='ff_neue fs_16 fw-lighter text_grey m-0 lh_150 mw_240'>Powerful and easy to use, book appointments to your team members and view your colour coded schedule, ‘at a glance’.</p>
                            </div>
                        </Col>
                    <Col lg={6} className='d-flex flex-column justify-content-end align-items-center pb-5 pb-lg-0' data-aos="fade-left">
                        <div className=''>
                            <h4 className='ff_roboto fs_48 fw-medium text-black text-lg-start text-center'>Main Features</h4>
                            <p className='ff_neue fw-lighter fs_16 text_grey mw_480 lh_150 m-0 pt-3 '>ShakeYourTail is an trusted dog grooming software based in the cloud; Client, appointment, scheduling and document management service.</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey mw_480 lh_150 m-0 pt-2'>Great for Salons & Groomers on the move; Run it on your PC, laptop, Ipad, Tablet or Mobile with a standard internet connection.</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey lh_150 m-0 pt-2 '>Store everything in one place and leave the tech stuff to us.</p>
                            <p className='ff_neue fw-lighter fs_16 text_grey lh_150 m-0 mw_480 pt-2'>We provide a complete service solution, giving you peace of mind, we support, secure, update and keep your data, all safely backed up.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Mainfeatures;
