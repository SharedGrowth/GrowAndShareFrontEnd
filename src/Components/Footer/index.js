import React from 'react'
import FacebookIcon from '../../assets/Images/Facebook'
import LinkedInIcon from '../../assets/Images/LinkedIn'
import InstaIcon from '../../assets/Images/Insta'
import TwitterIcon from '../../assets/Images/Twitter'
import { Link } from 'react-router-dom'
import MailIcon from '../../assets/Images/Mail'
import PhoneIcon from '../../assets/Images/phone'
import DashboardLogo from '../../assets/Images/DashboardLogo'
import SendMailIcon from '../../assets/Images/SendMail'
import FooterLocationIcon from '../../assets/Images/FooterLocation'
const AppFooter = () => {
    return (
        <>
            <div className="app-footer ">
                <div className="container mx-auto">
                    <div className="row m-0 ps-12 pe-12">
                        <div className="col-md-5 col-lg-4 col-sm-12 ps-0 pe-md-5 mb-lg-0 mb-5">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <DashboardLogo />
                                <h3 className='font-18-100 font-weight-700 text-white'>GROW AND SHARE</h3>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec vulputate lectus, in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.  in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.  in accumsan leo. Aliquam tempor orci sed ex facilisis vestibulum.
                            </p>
                            <div className="row mt-md-5 mt-3 m-0">
                                <div className='col-2 ps-0'>
                                    <FacebookIcon />
                                </div>
                                <div className='col-2 ps-0'>
                                    <LinkedInIcon />
                                </div>
                                <div className='col-2 ps-0'>
                                    <InstaIcon />
                                </div>
                                <div className='col-2 ps-0'>
                                    <TwitterIcon />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mb-lg-0 mb-5 ps-0 ">
                            <h6 className="footer-heading">Quick Links</h6>
                            <ul>
                                <li><Link>Seeds</Link></li>
                                <li><Link>Buds</Link></li>
                                <li><Link>Dispensary</Link></li>
                                <li><Link>Cannabis Lounge</Link></li>
                                <li><Link>Head Shop</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 col-xl-2 col-lg-3 col-sm-6 ps-0 mb-lg-0 mb-5">
                            <h6 className="footer-heading">Contact Us</h6>
                            <ul>
                                <li><PhoneIcon />+1 234 56789</li>
                                <li><MailIcon />yourmail@mail.com </li>
                                <li><FooterLocationIcon />Your address goes here</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-xl-4 col-lg-3 col-sm-12 p-0 ">
                            <h6 className="footer-heading mb-4 pb-1">Newsletter</h6>
                            <p>For news and update subscribe our Newsletter</p>
                            <div className=' mt-3 newsletter'>
                                <input type='email' className='border-0 outline-0 w-100' placeholder='Enter Your Email' />
                                <SendMailIcon />
                            </div>
                        </div>
                        <div className="col-12 p-0">
                            <pre className='copyright mt-5'>
                                Copyright © 2023. All Rights Reserved.
                            </pre>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AppFooter
