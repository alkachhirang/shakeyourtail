import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Righttickicon } from '../components/Iconimg';
import { Togglebtn } from '../components/Iconimg';

function Pricing() {
    return (
        <div id='pricing' className='price-padd'>
            <Container>
                <h4 className='mb-0 ff_roboto fs_48 fw-medium lh-111 text-center text-black' data-aos="fade-down">Pricing Plan</h4>
                <p className='mb-0 ff_neue fs_16 fw-light lh-160 text-center text-black mw-509 pt-2' data-aos="fade-down">Our Subscriptions, simple, flexible and designed for your business needs.</p>
                <div className='d-flex align-items-center justify-content-center gap-3 pt-3 card-padd' data-aos="fade-down">
                    <p className='mb-0 ff_roboto fs_4md fw-bold text_blue5'>£ GBP</p>
                    <div>
                        <input type="checkbox" className="checkbox" id="checkbox" hidden />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <span className="ball"></span>
                        </label>
                    </div>
                    <p className='mb-0 ff_roboto fs_4md fw-normal text-black op_07'>$ USD</p>
                </div>
                <Row className='justify-content-center'>
                    <Col xl={3} lg={4} sm={6} className='col-12 px-0 px-2 d-flex align-items-center justify-content-center' data-aos="fade-up-right">
                        <div className='pricewhite-card d-flex justify-content-between flex-column'>
                            <div className=''>
                                <h3 className='mb-0 ff_roboto fs_3md fw-medium text-black lh-111 pb-1'>Free</h3>
                                <p className='mb-0 ff_neue fs_16 fw-light text-black op_07'>Great To Get You Started</p>
                                <p className='mb-0 ff_roboto fs_2lg fw-bold text-black col-hov lh-111 pt-4 pb-3 tr-linear'>£0<span className='mb-0 fs_16 fw-normal'>/per month</span></p>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Single User</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Single Resource</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>150 Clients</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Unlimited Appointments</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center btn_padd'>
                                <button className='btn-get ff_roboto fs_3md fw-normal text-black w-100 d-flex align-items-center justify-content-center'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='pt-sm-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center' data-aos="fade-up-right">
                        <div className='pricewhite-card yell-box position-relative d-flex justify-content-between flex-column'>
                            <div className=''>
                                <h3 className='mb-0 ff_roboto fs_3md fw-medium text-black lh-111 pb-1'>Starter Plus</h3>
                                <p className='mb-0 ff_neue fs_16 fw-light text-black op_07'>Business Essentials</p>
                                <p className='mb-0 ff_roboto fs_2lg fw-bold text-black col-hov lh-111 pt-3 pb-3 tr-linear'>£15<span className='mb-0 fs_16 fw-normal'>/per month</span></p>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Single User</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Single Resource</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Single User</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Unlimited Appointments</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Custom Pet Breeds</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>SMS Reminders</p>
                                </div>
                                <p className='mb-0 ff_neue fs_13 fw-bold lh-130 ls-65 text-black pt-3'>100 SMS Credits</p>
                            </div>
                            <div className='d-flex justify-content-center btn_padd'>
                                <button className='btn-get ff_roboto fs_3md fw-normal text-black w-100 d-flex align-items-center justify-content-center'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='pt-lg-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center' data-aos="fade-up-right">
                        <div className='pricewhite-card yell-box position-relative d-flex justify-content-between flex-column'>
                            <div className=''>
                                <h3 className='mb-0 ff_roboto fs_3md fw-medium text-black lh-111 pb-1'>Premier</h3>
                                <p className='mb-0 ff_neue fs_16 fw-light text-black op_07'>Ideal For Busy Businesses</p>
                                <p className='mb-0 ff_roboto fs_2lg fw-bold text-black col-hov lh-111 pt-3 pb-3 tr-linear'>£25<span className='mb-0 fs_16 fw-normal'>/per month</span></p>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Multi User</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Multi Resource</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-130 ls-65 text-black op_07'>Unlimited Clients</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Unlimited Appointments</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Custom Pet Breeds</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Email Confirmations & Reminders</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Email Marketing</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Online Booking</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Electronic Contracts</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Mobile App</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Reporting</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Support</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center btn_padd'>
                                <button className='btn-get ff_roboto fs_20 fw-normal text-black w-100 d-flex align-items-center justify-content-center'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} lg={4} sm={6} className='pt-xl-0 pt-4 px-0 px-2 d-flex align-items-center justify-content-center' data-aos="fade-up-right">
                        <div className='pricewhite-card yell-box position-relative d-flex justify-content-between flex-column'>
                            <div className=''>
                                <h3 className='mb-0 ff_roboto fs_3md fw-medium text-black lh-111 pb-1'>Premier Plus</h3>
                                <p className='mb-0 ff_neue fs_16 fw-light text-black op_07'>Unlimited Possibilities</p>
                                <p className='mb-0 ff_roboto fs_2lg fw-bold text-black col-hov lh-111 pt-3 pb-3 tr-linear'>£37<span className='mb-0 fs_16 fw-normal'>/per month</span></p>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Multi User</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Multi Resource</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Unlimited Clients</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Unlimited Appointments</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Custom Pet Breeds</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Email Confirmations & Reminders</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Email Marketing</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Online Booking</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Electronic Contracts</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Mobile App</p>
                                </div>
                                <div className='d-flex align-items-center gap-2 pb-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Reporting</p>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <Righttickicon />
                                    <p className='mb-0 ff_neue fs_13 fw-light lh-1 ls-65 text-black op_07'>Support</p>
                                </div>
                                <p className='mb-0 ff_neue fs_13 fw-bold lh-1 ls-65 text-black pt-3'>100 SMS Credits</p>
                            </div>
                            <div className='d-flex justify-content-center btn_padd'>
                                <button className='btn-get ff_roboto fs_3md fw-normal text-black w-100 d-flex align-items-center justify-content-center'>Get Started</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pricing
