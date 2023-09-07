import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FadeIn from 'react-fade-in';
import ReviewCard from './ReviewCard';
// import { Accordion, AccordionItem,Accordion.Header, Accordion.Body } from 'react-accessible-accordion';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home2_mainpage extends Component {
  render() {
    var universityImage = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17', 'c18']
    var university_slider = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed:0,
      cssEase: 'linear',
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [{

        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {

        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    };
    var slick_slider = {
      dots: false,
      arrow: false,
      infinite: true,
      autoplay:true,
      speed: 5000,
      slidesToShow: 4,
      autoplaySpeed:0,
      cssEase: 'linear',
      slidesToScroll: 1,

      responsive: [{

        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {

        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    const data = [{
      title: "Order code :AH2343",
      name: "SUMIT",
      subject: "Engineering",
      content: "I seek their help on an engineering assignment and received a flawless project. This is undoubtedly among the greatest companies offering the best assignment help. The task was well-designed with a strong focus on getting thedes you need and appropriate terminology. Highly advised to use this service, of excellent customer support. The customer support got in touch with me quickly and finished the job while staying within my budget. "
    },
    {
      title: "Order code :AH4322",
      name: "Naif Muskan",
      subject: "Statistics",
      content: "I’m Busy with Numbers and calculations, So I needed help with my statistics assignment help. Assessment Help did an amazing work for me. The Assignment was well written and correct, it even had tables and graphs. The writer was very professional as you can see that he is an expert  in his field. Of Course! I got an best assignment help with Assessment Help. Thanks you helped me a lot! Highly recommended!."
    },
    {
      title: "Order code :AH3233",
      name: "Ashneer",
      subject: "Marketing",
      content: "I have been working with Assessment Help for the past couple of months, and I have to say I am very impressed. They are a one-stop-shop for all your tuition needs, from essay writing to assignment editing. Their customer service is top notch, and they are always in contact with me whenever I need help. They provide more than just tuition help."
    },
    {
      title: "Order code :AH2321",
      name: "SUMIT",
      subject: "Accounting",
      content: "Subjects like accounting is totally based on definite sections and the methods which it uses while balancing the books are in fact cannot be manipulated. When I decided to pursue my further academics in this filed I was aware of the hurtles that I may come across. During this time I got to know about taking assistance from the experts of Assessment Help."
    },
    {
      title: "Order code :AH6342",
      name: "Jass",
      subject: "Nursing",
      content: "As a student, I have been struggling to get through my nursing assessment all through my college. Assessment Help is accessed from the internet and is a great resource for students in need of help. It offers not only academic assistance but also emotional guidance, which is important in managing the stresses of college.I would highly recommend it to anyone looking for help on their assessments."
    },
    {
      title: "Order code :AH3454",
      name: "Justica",
      subject: "Finance",
      content: "Assessment Help is the best way to find out the best assessment help. There are so many options out there but I am really glad I stumbled upon this one. The customer service is awesome and they helped me find a fantastic tutor who fit into my tight budget.It's so easy to get in touch with them too, it doesn't matter what time of day. "
    },
    {
      title: "Order code :AH1232",
      name: "Prashant",
      subject: "Business",
      content: "Assessment Help is the best business assessment help service. Whenever I need help, they are always a text away, and they can come up with great ideas on the fly. They have a team of experienced writers who know their stuff and are experts in all areasf business.I can't recommend them enough."
    },
    {
      title: "Order code :AH2322",
      name: "Jyorge",
      subject: "LAW",
      content: "Assessment Help is the most reliable law assessment help I've found. They are always available for a consultation, even late at night and on weekends. I am so grateful to them for helping me stay on track with my case study without having to worry about plagiarism or anything else!. "
    },

    ]
    return (
      <div className="site-main" >
        <section className="ttm-row aboutus-section-style2 clearfix">
          <div className="container-xl">
            <div className="row no-gutters align-items-center">{/* row */}
              <div className="col-lg-6 res-991-text-center res-991-mb-40">
                {/* ttm_single_image-wrapper */}
                <div className="ttm_single_image-wrapper">
                  <img className="img-fluid" src="./images/download.png" title="single-img-two" alt="single-img-two" />
                </div>{/* ttm_single_image-wrapper end */}
              </div>
              <div className="col-lg-6">
                <div className="spacing-4 ttm-bgcolor-grey">
                  {/* section title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>Assessment Help:</h5>
                      <h2 className="title">Overview, Types, Guidelines & Instructions</h2>
                    </div>
                    <div className="title-desc">
                      <p>Struggling to complete your assessments on time? Are you worried about getting poor grades on your assessments? Seeking for best assessment writers near me? Look no further! We provide online assessment help to students who are seeking to get their tasks done by experts. With our assessment writing services, you can be sure that each task will be delivered with meticulously conducted research, enabling you to attain high scores.</p>
                      <p>The most beneficial feature of our professional help with assessments is the certainty of providing stellar solutions. We have gained a reputation as the best assessment writing services in the UK over a decade by assisting countless students in fabricating successful assessments and staying at the forefront. Our team of assessment experts is committed to advancement, meeting the requirements of our students and providing them with customized assessment help services.</p>
                    </div>
                  </div>{/* section title end */}

                </div>
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
            </div>{/* row end*/}
          </div>
        </section>
        <section className="element-row element-style clearfix mb-5">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title clearfix">
                  <h2 className="title">Facts In Digits</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="ttm-row  ttm-bgcolor-darkgrey ttm-bg clearfix py-3">
            <div className="container-xl">
              {/* row */}
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  {/*  ttm-icon */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                        <img src="./images/orders.webp" width={50} />{/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                      <h4>
                        <CountUp start={22550} end={25500} duration={30} />+
                      </h4>
                      <h3 className="ttm-fid-title">Assesment Delivered</h3>{/*  ttm-fid-title */}
                    </div>{/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*  ttm-icon */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                        <img src="./images/happy.webp" width={50} />{/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                      <h4>
                        <CountUp start={8540} end={10000} duration={30} />+
                      </h4>
                      <h3 className="ttm-fid-title">Happy Students</h3>{/*  ttm-fid-title */}
                    </div>{/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*  ttm-icon */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                        <img src="./images/experts.webp" width={50} />{/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                      <h4>
                        <CountUp start={0} end={250} duration={30} />+
                      </h4>
                      <h3 className="ttm-fid-title">Team of Experts</h3>{/*  ttm-fid-title */}
                    </div>{/* ttm-fid-contents end */}
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  {/*  ttm-icon */}
                  <div className="ttm-fid inside ttm-fid-view-topicon">
                    <div className="ttm-fid-icon-wrapper">
                      <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                        <img src="./images/rating.webp" width={50} />{/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="ttm-fid-contents">{/*  ttm-fid-contents */}
                      <h4>
                        <CountUp start={0} end={4} duration={5} />/5
                      </h4>
                      <h3 className="ttm-fid-title">Customer Ratings</h3>{/*  ttm-fid-title */}
                    </div>{/* ttm-fid-contents end */}
                  </div>
                </div>
              </div>
              {/* row end*/}
            </div>
          </div>

        </section>
        <section className="ttm-row bottomzero-padding-section bg-img6 position-relative z-1 clearfix" id="services">
          <div className="container-xl">
            <div className="row no-gutters">
              <div className="col-lg-10 mb_80 res-991-mb-0">
                <div className="ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner"></div>
                  </div>
                  <div className="layer-content">
                    <div className="spacing-5">
                      {/* section title */}
                      <div className="section-title mb-4 clearfix">
                        <div className="title-header">
                          <h2 className="title">Assessment Writing Services on <span>All Listed Subjects</span></h2>
                        </div>
                        <div className="title-desc">
                          <table>
                            <tbody>
                              <tr>
                                <td>Nursing Assignment</td>
                                <td>Accounting Assesment</td>
                              </tr>
                              <tr>
                                <td>Marketing Assignment</td>
                                <td>Finance Assesment</td>
                              </tr>
                              <tr>
                                <td>Economics Assignment</td>
                                <td>Law Assesment</td>
                              </tr>
                              <tr>
                                <td>Engineering Assignment</td>
                                <td>Statistics Assesment</td>
                              </tr>
                              <tr>
                                <td>Computer Science Assignment</td>
                                <td>TAFE Assesment</td>
                              </tr>
                              <tr>
                                <td>Management Assignment</td>
                                <td>Programming Assesment</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>{/* section title end */}
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service section   */}
        <section className="ttm-row services-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes bg-img7 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
          <div className="container-xl">
            <div className="row">{/* row */}
              <div className="col-lg-6 offset-lg-3">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h2 className="title">Why choose us</h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
              <div className=" mb-20 col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left res-767-mb-20">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-intelligent" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Plagiarism-Free Assessments</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Our assessment tutors utilize authentic plagiarism checker software, Turnitin, to triple-check our completed assessments for any instances of plagiarism after drafting, rewriting, and proofreading.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className=" mb-20 col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left res-767-mb-20">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-analytics" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>A Myriad of Services</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Regardless if you are a first-year undergraduate student or completing your last project for a Ph.D., our online assessment help can offer you competent writing help on almost any subject at any stage.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className=" mb-20 col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-analysis" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Customized Assessments</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Our assessment writers don't believe in giving our clients subpar work that won't get them the highest grades. Our diligent staff of best assessment experts won't give up till your task is completed with the utmost perfection. We put our customers first in every aspect.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className="col-lg-4 col-md-4 mb-20">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-clock" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Timely Delivery</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Regardless of how near or far your deadline is, our online assessment help have you covered. All of our assessment helper are skilled in their disciplines and carry out their duties with efficiency and standardization.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className="col-lg-4 col-md-4 mb-20">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-24h" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>24x7 Assesment Assistance</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Stay in touch with us 24*7 and reap the benefits of our round-the-clock assessment help online. Contacting our assessment writing services is convenient at any time by live chat, mail, or call.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className="col-lg-4 col-md-4 mb-20">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-data-analytics" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>100% Satisfaction</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>You won't be displeased with the quality of work that we can legitimately offer, as evidenced by the assessment writing testimonies that our clients have left behind. Our principle is to produce the magnum opus work.</p>
                    </div>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
            </div>{/* row end*/}
          </div>
        </section>
        {/* service section end  */}
        <section className="ttm-row zero-padding-section mt_95 res-991-mt-0 res-991-pb-0 clearfix">
          <div className="container-xl">
            <div className="row no-gutters">
              <div className="col-lg-12">
                <div className="ttm-bgcolor-skincolor ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                  <div className="layer-content position-relative">
                    <div className="spacing-6 py-5 ttm-textcolor-white">
                      <div className='row'>
                        <div className='col-md-4 mx-auto mb-4 mb-md-0'>
                          <div className='d-flex'>
                            <img src="./images/confidentiality.webp" width={95} />
                            <div>
                              <h4 className='mb-0 mt-3'><strong>24x7 Support</strong></h4>
                              <p>Call, Chats and WhatsApp Available</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 mx-auto mb-4 mb-md-0'>
                          <div className='d-flex'>
                            <img src="./images/chats.webp" width={95} />
                            <div>
                              <h4 className='mb-0 mt-3'><strong>100% Confidentiality</strong></h4>
                              <p>confidentiality is our priority</p>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4 mx-auto mb-md-0'>
                          <div className='d-flex'>
                            <img src="./images/guaranteed.webp" width={95} />
                            <div>
                              <h4 className='mb-0 mt-3'><strong>100% Security</strong></h4>
                              <p>Guaranteed secure & safe transition</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* tab section */}
        <section className="ttm-row tab-section clearfix pb-3">
          <div className="row">
            <div className="col-md-12">
              {/* section title */}
              <div className="section-title text-center with-desc clearfix">
                <div className="title-header">
                  <h2 className="title">Assesment Help For <span>Universities </span></h2>
                </div>
              </div>{/* section title end */}
            </div>
          </div>
          <Slider className="row slick_slider ttm-boxes-spacing-10px" {...university_slider} slidesToShow={8}>
            {universityImage.map((name, index) => (
              <div className="ttm-box-col-wrapper">
                <div className="featured-imagebox featured-imagebox-portfolio style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" alt="" src={`./images/universities/${name}.webp`} />
                  </div>{/* featured-thumbnail end*/}
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* tab section end */}
        {/* testimonial section */}
        <section className="ttm-row bottomzero-padding-section ttm-bgcolor-grey ttm-bg ttm-bgimage-yes bg-img8 clearfix" id="writinghelp">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl pb-5">
            <div className="row">{/* row */}
              <div className="col-lg-6">
                <div className="position-relative z-1">{/* spacing-2 */}
                  {/* section title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>Assesment Help Online:</h5>
                      <h2 className="title">Diversified & Imperative Assessment Writing Service</h2>
                    </div>
                  </div>{/* section title end */}
                  <p>
                    Are you looking for someone to do my assessment? Our assessment help online take immense pride in providing a broad spectrum of services that meet the requirements of every single customer, rendering us the biggest assessment help company and service provider. We are cognizant of the fact that different clients have different requirements, thereby, our primary motive is to endeavour to accommodate every single client's requirements. Our doctorate-level professionals are well known for their erudition which assists to comprehend the multiple demands of clients easily.
                  </p>
                  <p>
                    So whenever you search for someone to write my assessment? Our acclaimed staff of customer service representatives is simultaneously equipped to assist you and recommend you the most ideal deal as per your requirements. We offer a broad range of services such as assessment help, dissertation help, coursework help, homework help, thesis help, TAFE help, case study help, proofreading help, research paper help, referencing help, etc.
                  </p>
                </div>{/* spacing-2 END */}
              </div>
              <div className="col-lg-6">
                <div className="position-relative res-991-mt-30">
                  {/* ttm_single_image-wrapper */}
                  <div className="ttm_single_image-wrapper text-right">
                    <img className="img-fluid" src="./images/image1.webp" title="single-img-four" alt="single-img-four" />
                  </div>{/* ttm_single_image-wrapper end */}

                </div>
              </div>
            </div>{/* row end */}
            <div className='row mt-4'>
              <div className='col-sm-6 mb-5'>
                <div className='border rounded shadow box-size-10 p-5 bg-white'>
                  <div className='d-flex pb-4'>
                    <img src='./images/AcademicWritingService.webp' width={72} height={72} className='mr-4' />
                    <h4>Can Someone Do My Assessment For Me?</h4>
                  </div>
                  <p>
                    Yes, you can pay someone to do your assessment in Australia, UK. We provide assessment help for those who may be struggling with a lack of time or confidence in their abilities or wants to hire someone who can do assessment before submission deadline. We are here to solve your all queries like "can someone write my assessment for me". So don't hesitate to take advantage of them and get your job done quickly and successfully.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 mb-5'>
                <div className='border rounded shadow box-size-10 p-5 bg-white'>
                  <div className='d-flex pb-4'>
                    <img src='./images/Online-Exams-.webp' width={72} height={72} className='mr-4' />
                    <h4>Why I Have To Choose Assessment Help?</h4>
                  </div>
                  <p>
                    One of the best advantages of getting help with assessment from experts at AssessmentHelp is the guarantee of good grades in your assignment task. They ensure that they offer efficient work so students can obtain high marks on their tasks and projects. In order to make progress academically. Although, Students often have a lot of assignments to complete in a short amount of time, and may need help managing their workload. Also, With multiple assignments due at the same time, students may need help in order to meet all of their deadlines and avoid falling behind in their assessment. We can understand your problems, that's why we are here to help you with assessment.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 mb-5'>
                <div className='border rounded shadow box-size-10 p-5 bg-white'>
                  <div className='d-flex pb-4'>
                    <img src='./images/Research-Paper.webp' width={72} height={72} className='mr-4' />
                    <h4>What Are The Details Required To Complete My Assessment Order?</h4>
                  </div>
                  <p>
                    You should to provide specifications related to your assessment task, plus further information such as appraisal criteria, complementary materials like case studies, handbooks, lecture notes, etc. So that our assessment helper will complete your assessment perfectly.
                  </p>
                </div>
              </div>
              <div className='col-sm-6 mb-5'>
                <div className='border rounded shadow box-size-10 p-5 bg-white'>
                  <div className='d-flex pb-4'>
                    <img src='./images/AcademicWritingService.webp' width={72} height={72} className='mr-4' />
                    <h4>Can You Guarantee Plagiarism Free Assessment?</h4>
                  </div>
                  <p>
                    Yes, our assessment experts will write your assignment, homework or paper from the stretch accoding tp the university guidelines, referencing and formatting. We offer 100% money back guarantee if our work is found plagiarized. Although If we provide free mulitple revision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial section end */}

        <section className="ttm-row tab-section clearfix pb-0" id="faqs">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>FAQs</h5>
                    <h2 className="title">Frequently Asked <span>Questions </span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="ttm-tabs  ttm-tab-style-classic style1">
                  <Tabs defaultIndex={2} onSelect={index => console.log(index)}>{/* tabs */}
                    <TabList className="tabs">
                      <Tab className="tab" title="Hi-Tech"><span><i className="flaticon flaticon-system" /> General FAQs</span></Tab>
                      <Tab className="tab" title="Industrial"><span><i className="flaticon flaticon-online-library" /> Payment FAQs</span></Tab>
                      <Tab className="tab" title="Media"><span><i className="flaticon flaticon-process" /> Assesment FAQs</span></Tab>
                    </TabList>
                    <div className="box-shadow content-tab">
                      <FadeIn>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-12">
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      What is Assessment Help?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Assessment Help is known as a best assessment service provider in Australia, UK. We offers a wide array of topics, ranging from assignments to dissertation, enabling students to develop the skills they need to score good marks in their academics. Yet many students continue to struggle with researching and producing assignments of a high quality; this is where we are here to help you.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>

                                      Will you offer assessment help that is plagiarism free?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Absolutely, a Turnitin report is issued with every assessment submission. This will guarantee that your content is entirely unique.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                      How do you distinguish yourself from other companies that offer assessment writing services?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>All of our assessment writers received their education from prestigious colleges and possess doctoral degrees. Our customer service professionals are skilled at offering you individualized support whenever you need it. The goal of assessment help service is to completely satisfy you while we serve you.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                      Who evaluates the quality standard of assessment help I ordered?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Our quality control squad monitors the caliber of the work. As was already said, we provide the assessment help on time, so you may confirm it on your own and get in touch with us if the task isn't up to par. Ensure that you submit your request for revisions no later than seven days after work is delivered.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                      Is the privacy of my identification protected by Assessment Help?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>In the absence of a legal requirement, we never divulge that you have used our service. You don't need to be concerned if you utilised our assessment service appropriately.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                      Are your assessments resold again?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Not at all! Every document delivered by our assessment help online is individually composed for the client in accordance with their instructions. You must relax knowing that nobody else has seen your assessment before, and no one will ever see it again.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-12">
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      Do you provide discounts on professional assessment help?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      Yes, we do provide discounts, but only as part of certain deals.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                      What methods of payment are accessible to acquire help with assessment?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Debit/Credit cards and the Payment Gateway are two important payment methods.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                      Can I make easy monthly payments toward the entire amount?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>You can choose to pay one-half of the cost of your assessment up front to get it begun, and the other half when it is delivered.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                      What's your policy on refunds?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Our return policy is simple to understand. Only in the event that a student failed in his assessment will we start the refund process. It all relies on management and how they decide to handle refunds.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                      Which fiat money is accepted?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>
                                        We take all national currencies, including the USD, GBP, AUD, SGD, and NZD
                                      </p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                      When should I pay for assessment help online?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Complete our brief online purchase form and provide us with the relevant details about your task. Payment for the order will be required, and you may use our protected gateway to do so. You will be emailed with an order confirmation as immediately as the payment procedure is finished at the email account you provided. Please be aware that we don't accept checks.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner active">
                            <div className="row">
                              <div className="col-lg-12">
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      Can you please email me my assessment?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Absolutely, the assessment will be emailed to you prior to or on the delivery date.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                      What kind of assessment services do you offer?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>We offer the students annotated bibliographies, article summaries, reports, case studies, dissertations, essays, and presentations. We have a devoted group of assessment writers that can easily handle these assessments because they are professional authors and are knowledgeable in their respective fields.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                      Could I speak with my assessment expert?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Yes, we can set up a conference call with your expert so you can get answers to all of your questions and solve all of your issues.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                      What information is required to complete the assessment?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>The following information must be sent to us with your assessment task: word count, subject deadline, and reference design amount of references used as a measurement.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                      Can you still do my assessment if I can't find my topic in your library?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <p>Since our collection is centered on the most popular and in-demand topics, one could not discover their field there. However, we complete assessments on every topic imaginable. There is currently no subject for which we are unable to or have not yet provided assessments.</p>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                      </FadeIn>
                    </div>
                  </Tabs>  {/* tabs end*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* our-partner-section */}
        <section className="ttm-row our-partner-section  res-991-mt-0 res-991-p-0 clearfix">
          <div className="container-xl">
            {/* section title */}
            <div className="section-title text-center with-desc clearfix">
              <div className="title-header">
                <h2 className="title">Want To Know About<span> Assesment Help</span></h2>
              </div>
            </div>{/* section title end */}
            <div className="row">
              <div className="col-12">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Online Assessment Help: Common Mistakes to Avoid While Writing Assessments</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Creating assessments is the most arduous job. How so? Because it necessitates a significant amount of focus, attention, and commitment. Nevertheless, even practicing all of this, there's still a probability that you may make errors while composing your assessments according to our assessment writers. No one can afford to commit errors and receive worse grades. The students must adhere to the necessary safeguards in advance in order to steer clear of such mistakes and achieve HD scores. Our assessment experts recommend university students to be mindful of the following tips to simplify their lives and err on the common mistakes:
                      </p>
                      <p>
                        <ul>
                          <li><strong>Insufficient proofreading before submission</strong>: To fulfil the assessment writing standards, you should meticulously revise your composing assessments. As per assessment writers, before submitting the assessment to the professor, make sure you've read it through.</li>
                          <li><strong>Absence of clarity in the introduction</strong>: Each task you do must include a compelling introduction. The opening paragraphs must clarify whatever you intend to describe in the content of the assessment. Many students struggle to get great scores since they don't properly address introduction in their assessments.
                            Questionable Referencing: It is mandatory to study the description of the task to figure out the right style of references to employ. The majority of the time, professors will provide instructions on the permissible type of references. When working on tasks, it will be simple to achieve exceptional results if you adhere to the correct referencing style.
                          </li>
                          <li><strong>Questionable Referencing</strong>: It is mandatory to study the description of the task to figure out the right style of references to employ. The majority of the time, professors will provide instructions on the permissible type of references. When working on tasks, it will be simple to achieve exceptional results if you adhere to the correct referencing style. </li>
                          <li><strong>Insufficient research</strong>: The most prevalent issue students commit as per our assessment experts is that while composing assessments is insufficient knowledge of the subject and neglect to conduct adequate research before composing it. Additionally, they overlook to use of appropriate sources when conducting their study. </li>
                          <li><strong>Information Redundancy</strong>: While writing the assessment, scholars should strive to avoid repeating similar content multiple times across different sections. Students frequently utilize the same sentences repeatedly in their assessments, which could cost them substantially low grades. </li>
                        </ul>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Best Assessment Experts Offering Tips To Avoid Plagiarism In The Assessments</Accordion.Header>
                    <Accordion.Body>
                      <p>
                        Students might feel intimidated when writing assessments, and this inclination may cause them to copy other people's work. The internet has rendered written materials more accessible, and students might not be completely aware of what comprises plagiarism in all of their respective courses (whether due to ignorance or because of discrepancies with prior experience).
                      </p>
                      <p>
                        <ul className='list-style-disc'>
                          <li>Never, under any circumstances, copy material from someone else's work, no matter how minor. It indicates that you are less committed to writing your project.</li>
                          <li>To utilize a study that is copyright protected you need to initially get the proprietors' consent. Content may only be used when you acquire copyright ownership.</li>
                          <li>Try to always cite sources when utilizing someone else's words or thoughts in your composition because doing so will stop infringement from occurring.</li>
                          <li>Always write carefully and deliberately when completing your work. Do not rush. since it's more likely than not to make mistakes while rushing. Making errors is common, but it is necessary to learn from them.</li>
                          <li>The addition of milestones to a written self assessment help requires students to turn in rough versions of their work deters them from considering the possibility of plagiarism.</li> Additionally, it allows students to stretch out a lengthy writing assessment over a long timeframe, which reduces the likelihood that they will plagiarize their assessment.
                        </ul>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Best Assessment Help Online That Can Assist You In Acquiring Top-notch Grades</Accordion.Header>
                    <Accordion.Body>
                      <p>Will you believe us if we said that Assessment Help provide best assessment help in achieving an A+ grades? Most probably, the response would be "no." However, before forming a decision on our services, we kindly ask that you check with your acquaintances and friends. Undoubtedly, your friends or peers must have employed our services to finish off their outstanding tasks. Once a student has enrolled in a college, getting an A+ mark is difficult since writing assessments with inadequate information will only result in low grades.
                      </p>
                      <p>You should be aware of and educate yourself on all the intricacies of assessment writing so that you can complete the necessary task. It is also necessary to comprehend the assessment's requirements and why it is crucial to complete it in accordance with the provided instructions. The majority of the time, students find it challenging to complete an assessment according to the standards set by their professors. Our decision to launch our online assessment help services was ultimately motivated by this. You can contact the online assessment help to meet your requirements as well as of the university. We ensure to create work that adheres to the standards and complies to the guidelines established by your lecturers.</p>
                      <p>The completed project provides you with satisfaction and peace of mind and satisfaction, as well as the A+ grade you have been seeking for a long time. For ages, we have expanded our services in the United Kingdom, assisting countless students in attaining the marks they haven't ever anticipated. If you want to know what it's like to acquire an assessment from the best assessment help UK, get in touch with us straight away.</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        {/* our-partner-section end */}
        {/* blog-section */}
        <section className="ttm-row blog-section clearfix" id="reviews">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5><span className='text-warning'>4.8</span> Star Rating</h5>
                    <h2 className="title">Reviews, Comments And <span>Love From Students</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={3}>
              {
                data.map((element, index) => (
                  <ReviewCard data={element} />
                ))
              }
            </Slider>
          </div>
        </section>
        {/* blog-section end */}
      </div>

    )
  }
}

export default Home2_mainpage;