import React from 'react';
import { Container } from 'react-bootstrap';
import Timelinebell1 from "../assets/images/png/timeline1.png";
import Timelinebell2 from "../assets/images/png/timeline2.png";
import Timelinebell3 from "../assets/images/png/timeline3.png";
import Timelinebell4 from "../assets/images/png/timeline4.png";
import { YellowLock } from '../components/Iconimg';
import { Key } from '../components/Iconimg';
import { Customise } from '../components/Iconimg';
import { Done } from '../components/Iconimg';


function Howitworks() {
    return (
        <div>
            <div className="py_work">
                <Container>
                    <h4 className="fs_48 text-black ff_roboto fw-medium lh_111 text-lg-start text-center">
                        How It Work
                    </h4>
                    <p className="mw_585 fs_16 fw-light lh_160 mb-0 pb-3 text-lg-start text-center">
                        ShakeYourTail is an online scheduling and CRM service & is super easy
                        to use, you can trial our premier service free for 30 days.
                    </p>
                    <div className="timeline position-relative d-flex pt-5 flex-lg-row flex-column">
                        <div className="Container1 d-flex justify-content-lg-center justify-content-start">
                            <div className="content position-relative">
                                <YellowLock />
                                <p className="fs_20 fw-medium lh_111 ff_roboto text-black mb-0 pt_12">
                                    Register
                                </p>
                                <p className="fs_16 ff_neue lh_150 mb-0 text-black opacity_07 pt-2">
                                    Create a account
                                </p>
                                <div className="timeline_bell1">
                                    <img src={Timelinebell1} alt="Timelinebell1" />

                                </div>
                                <p className='fs_76 ff_neue fw-bold lh_150 op_12 text_yell position-absolute work-text mb-0'>01</p>
                            </div>
                        </div>
                        <div className="Container1 d-flex justify-content-lg-center justify-content-start">
                            <div className="content position-relative">
                                <Key />
                                <p className="fs_20 fw-medium lh_111 ff_roboto text-black mb-0 pt_12">
                                    Login
                                </p>
                                <p className="fs_16 ff_neue lh_150 mb-0 text-black opacity_07 pt-2">
                                    Create a account
                                </p>
                                <div className="timeline_bell1">
                                    <img src={Timelinebell2} alt="Timelinebell2 " />
                                </div>
                                <p className='fs_76 ff_neue fw-bold lh_150 op_12 text_Sky position-absolute work-text mb-0'>02</p>
                            </div>
                        </div>
                        <div className="Container1 d-flex justify-content-lg-center justify-content-start">
                            <div className="content position-relative">
                                <Customise />
                                <p className="fs_20 fw-medium lh_111 ff_roboto text-black mb-0 pt_12">
                                    Customise
                                </p>
                                <p className="fs_16 ff_neue lh_150 mb-0 text-black opacity_07 pt-2 mw_172">
                                    Customise your emails, SMS & settings.
                                </p>
                                <div className="timeline_bell2">
                                    <img src={Timelinebell3} alt="Timelinebell3" />
                                </div>
                                <p className='fs_76 ff_neue fw-bold lh_150 op_12 text_Blue position-absolute work-text1 mb-0'>03</p>
                            </div>
                        </div>
                        <div className="Container1 d-flex justify-content-lg-center justify-content-start">
                            <div className="content position-relative">
                                <Done />
                                <p className="fs_20 fw-medium lh_111 ff_roboto text-black mb-0 pt_12">
                                    Done
                                </p>
                                <p className="fs_16 ff_neue lh_150 mb-0 text-black opacity_07 pt-2 mw_200">
                                    You're Ready to Rock! Add clients & start booking appointments.
                                </p>
                                <div className="timeline_bell2">
                                    <img src={Timelinebell4} alt="Timelinebell4" />
                                </div>
                                <p className='fs_76 ff_neue fw-bold lh_150 op_12 text_Red1 position-absolute work-text2 mb-0'>04</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default Howitworks
