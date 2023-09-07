import React, { Component } from "react";
import { MDBAnimation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow } from
"mdbreact";
import Form from "./Form";

export class CarouselPage2 extends Component {
    render() {
        return (
            <MDBContainer fluid>
            <MDBRow>
            <MDBCarousel
            activeItem={1}
            length={1}
            showControls={false}
            showIndicators={false}
            id="Home_banner2"
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                <MDBView>
                    <img className="d-block w-100" src="./images/bg-image/slider-mainbg-003.jpg" alt="First slide" />
                </MDBView>
                <MDBCarouselCaption>
                    <div className="container-xl" id="home">
                        <div className="row align-items-center">
                            <div className="col-lg-7 ">
                            <div className="carousel-caption-inner pt-0 pt-lg-5">
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <h2 className="ttm-textcolor-darkgrey">BEST <strong className="ttm-textcolor-skincolor">ASSESSMENT HELP</strong><br/> FOR STUDENTS - NO. 1 <br/> WRITING SERVICE PROVIDER</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p className="text">TRUSTED BRAND FOR ASSESSMENT ANSWERS</p>
                            <ul className="ttm-textcolor-darkgrey fs-20 effect">
                                    <li>24x7 Online assessment Help.</li>
                                    <li>250+ Subject matter experts.</li>
                                    <li>100% On-time assessment delivery.</li>
                                    <li>Get better grades in you assessments.</li>
                                    <li>Recommended by 10,000+ international students.</li>
                                    <li>Plagiarism free assignments, share turnitin report</li>
                                </ul>
                            </MDBAnimation>                       
                        </div>
                            </div>
                            <div className="col-lg-5 pt-0 pt-lg-5 px-lg-5">
                            <div className="d-inline-block mt-4 mt-lg-0 mx-auto position-relative w-100">
                            <Form/>
                        </div>
                            </div>
                        </div>


                    </div>
                </MDBCarouselCaption>
                </MDBCarouselItem>
            </MDBCarouselInner>
            </MDBCarousel>
            </MDBRow>
            </MDBContainer>
        );
    }
}

export default CarouselPage2;