import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NewIdea } from '../components/Iconimg';
import { Contact } from '../components/Iconimg';
import Footerwave from '../assets/images/png/footer-wave.png';



function Faq() {
    return (
        <div className='position-relative pb_faq'>
            <img src={Footerwave} alt="Footerwave" className='w-100 position-absolute bottom-0 end-0' />
            <Container>
                <h4 className='fs_48 fw-medium ff_roboto text-black m-0 pb-4 text-lg-start text-center'>FAQ’s</h4>
                <Row className='align-items-center justify-content-lg-between justify-content-center pt-2'>
                    <Col lg={7} data-aos="fade-right">
                        <div class="accordion accordion-flush pt-3" id="accordionFlushExample" data-aos="zoom-in-up"
                            data-aos-easing="linear" data-aos-duration="1000">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed ff_neue fw-medium fs_20 text-black" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Do you have a mobile app?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne"
                                    class="accordion-collapse collapse ff_neue fw-lighter fs_16 text_grey mw_596"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed ff_neue fw-medium fs_20 text-black" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Do you support start-up business?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo"
                                    class="accordion-collapse collapse ff_neue fw-lighter fs_16 text_grey mw_596"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed ff_neue fw-medium fs_20 text-black" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        I’ve used up all my monthly SMS credits, can I buy more?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree"
                                    class="accordion-collapse collapse ff_neue fw-lighter fs_16 text_grey mw_596"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed ff_neue fw-medium fs_20 text-black" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                        aria-controls="flush-collapseFour">
                                        What do I need to access the system?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour"
                                    class="accordion-collapse collapse ff_neue fw-lighter fs_16 text_grey mw_596"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed ff_neue fw-medium fs_20 text-black" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                        aria-controls="flush-collapseFive">
                                        Can you import my data?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive"
                                    class="accordion-collapse collapse ff_neue fw-lighter fs_16 text_grey mw_596"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Yes, our mobile app is available to premier and premier plus subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </Col>
                    <Col lg={4} className='col-10 pt-4 pt-lg-0' data-aos="fade-left">
                        <div className="help_box">
                            <p className="ff_roboto fs_32 lh_111 fw-medium text-black text-center mb-0 pb-2">
                                Need help?
                            </p>
                            <p className="fs_16 ff_neue lh_150 opacity_8 text-black fw-lighter text-center mb-0 pb-3">
                                Ask our support team
                            </p>
                            <div className="help_btn d-flex gap-2 align-items-center justify-content-center">
                                <NewIdea />
                                <p className="text-white fs_20 fw-normal ff_roboto mb-0 text-nowrap">
                                    New Idea?
                                </p>
                            </div>
                            <div className="help_btn d-flex gap-2 align-items-center justify-content-center mt-3">
                                <Contact />
                                <p className="text-white fs_20 fw-normal ff_roboto mb-0 text-nowrap">
                                    New Idea?
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Faq
