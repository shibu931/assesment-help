import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer widget-footer clearfix">
            {this.props.children}

                <div className="second-footer ttm-textcolor-white bg-img2">
                <div className="container-xl">
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget widget_text  clearfix">
                            <img src='./images/logo-white.webp'/>
                        <div className="textwidget widget-text mt-20">
                            <h3 className='widget-title mb-2'>Reach Out To Us</h3>
                            <a href='mailto:info@thestudenthelpline.co.in'>info@thestudenthelpline.co.in</a>
                            <p>Whatsapp: <a href="https://api.whatsapp.com/send?phone=+447882466599&amp;text=Hey!%20I%20need%20help">+447882466599</a></p>
                        </div>
                        <div className="quicklink-box">
                            {/*  featured-icon-box */} 
                            <div className="featured-icon-box left-icon">
                            <div className="featured-icon">{/*  featured-icon */} 
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                <span className="flaticon flaticon-clock" />{/*  ttm-icon */} 
                                </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                                <div className="featured-desc">{/*  featured-desc */}
                                <p>Talk To Our Support</p>
                                </div>
                                <div className="featured-title">{/*  featured-title */}
                                <h5>+44 7418 343403</h5>
                                </div>
                            </div>
                            </div>{/*  featured-icon-box END */}
                        </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                        <div className="widget link-widget clearfix">
                        <h3 className="widget-title">Information</h3>
                        <ul id="menu-footer-services">
                            <li><a >Assignment Order</a></li>
                            <li><a >Student review</a></li>
                            <li><a >Academic Writing Offers</a></li>
                            <li><a >Contact Us</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-991-mb-40 res-767-mb-0">
                    <div className="widget link-widget clearfix">
                        <h3 className="widget-title">Assignment Services</h3>
                        <ul id="menu-footer-services">
                            <li><a href='#'>Nursing Assignment Help</a></li>
                            <li><a href='#'>Management Assignment Help</a></li>
                            <li><a href='#'>Accounting Assignment Help</a></li>
                            <li><a href='#'>Marketing Assignment Help</a></li>
                            <li><a href='#'>Finance Assignment Help</a></li>
                            <li><a href='#'>Programming Assignment Help</a></li>
                            <li><a href='#'>TAFE Assignment Help</a></li>
                            <li><a href='#'>MATLAB Assignment Help</a></li>
                            <li><a href='#'>Law Assignment Help</a></li>
                            <li><a href='#'>Engineering Assignment Help</a></li>
                            <li><a href='#'>All Assignment Help</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-767-mb-40">
                        <div className="widget flicker_widget clearfix">
                        <h3 className="widget-title">Special Offers</h3>
                        <div className="textwidget widget-text">
                            <div className='p-3 rounded mb-2'>
                                <h4 className='widget-title'>Book Your Assignment Now!</h4>
                                <p >Book 1 + 1 Assignment and Get 50% Off on 2nd Assignment</p>
                                <a className='btn btn-warning'>Book Now</a>
                            </div>
                            <h5>Follow Us On</h5>
                            <div className="social-icons circle social-hover">
                            <ul className="list-inline">
                                <li className="social-facebook"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                <li className="social-twitter"><a className="tooltip-top rounded-circle" target="_blank" data-tooltip="Twitter"><i className="fab fa-twitter" /></a></li>
                                <li className="social-flickr"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="flickr"><i className="fab fa-flickr" /></a></li>
                                <li className="social-linkedin"><a className=" tooltip-top rounded-circle" target="_blank" data-tooltip="aedIn"><i className="fab fa-linkedin-in" /></a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <hr className='bg-white'/>
                    <p className='text-center'>Disclaimer: The reference papers offered by Assessment Help act as sample papers for students and are not to be presented as it is. These papers are only meant to be utilized for study and reference.</p>
                <hr className='mb-0 pb-0 bg-white'/>
                </div>
                
                <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white pt-3">
                <div className="container-xl">
                    <div className="row copyright align-items-center res-767-text-center">
                    <div className="col-md-6">
                        <div>
                        <span>Copyright © 2023&nbsp;<a to="/">Assesment Help</a></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right res-767-mt-10">
                        <div className="d-lg-inline-flex">
                            <ul id="menu-footer-menu" className="footer-nav-menu">
                            </ul>
                            <div className="float-md-right ml-20 res-767-ml-0">
                            <img data-src="images/footer-payment-img.png" alt="payment-img" src="images/footer-payment-img.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}