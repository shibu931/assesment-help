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
                    <div className="container-xl d-flex">
                        <div className="carousel-caption-inner">
                            <MDBAnimation className="slideInUp" count={1} delay="2.5s" >
                            <h2 className="ttm-textcolor-darkgrey">BEST <strong className="ttm-textcolor-skincolor">ASSESSMENT HELP</strong> FOR STUDENTS - NO. 1 WRITING SERVICE PROVIDER</h2>
                            </MDBAnimation>
                            <MDBAnimation className="slideInUp" count={1} delay="3s" >
                            <p className="text">TRUSTED BRAND FOR ASSESSMENT ANSWERS</p>
                            <ul className="ttm-textcolor-darkgrey fs-20">
                                    <li>250+ Subject matter subjects.</li>
                                    <li>Better grades in you assessments.</li>
                                    <li>24x7 online assessment Help.</li>
                                    <li>Plagiarism free assignments, share Turnitin report</li>
                                    <li>Recommended by 10,000+ international students.</li>
                                    <li>On-time assessment delivery.</li>
                                </ul>
                            </MDBAnimation>                       
                        </div>
                        <div className="d-inline-block effect position-relative">
                            <Form/>
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