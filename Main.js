import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

//w import './public/test.css'   later just use: className="<class_from_css>")
import './teststyle.css'
import './teststyle2.css'

// nw: problems with loading css png, fonts, etc. Probably should use direct load via helmet
//import './public/css/style.css'
//import './public/css/media.css'
//import './public/css/font-awesome.min.css'

import Helmet from 'react-helmet';

export class Main extends Component {
  
  buttonClicked(event) {
    alert('Button clicked')
    //console.log('props:', this.props)
  }

  render() {
    return (
      <div className="wrapper">
        <Helmet
            meta={[
              {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ]}
            title='Nexar – Driving Safer. Together.'
            link={[
              {href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700', rel: 'stylesheet'},
              {href: '/css/font-awesome.min.css', rel: 'stylesheet'},
              {href: '/css/style.css', rel: 'stylesheet'},
              {href: '/css/media.css', rel: 'stylesheet'},
            ]}
        />

        <div className="header" id="header">
          <div className="header-top clearfix">
            <div className="container">
              <a href="/" className="logo"></a>
              <a href="javascript:void(0)" className="show-menu">
                <span></span>
                <span></span>
                <span></span>
              </a>
              <div className="header-nav">
                <ul className="nav">
                  <li className="active"><a href="/">Home</a></li>
                  <li>
                    <a href="javascript:void(0)" className="">Company</a>
                    <ul className="inner-nav">
                      <li><a href="javascript:void(0)">Team</a></li>
                      <li><a href="javascript:void(0)">Careers</a></li>
                      <li><a href="javascript:void(0)">Nexar blog</a></li>
                      <li><a href="javascript:void(0)">Deep challenge</a></li>
                      <li><a href="javascript:void(0)">Press kit</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Solutions</a>
                    <ul className="inner-nav">
                      <li><a href="javascript:void(0)">Fleets</a></li>
                      <li><a href="javascript:void(0)">City</a></li>
                      <li><a href="javascript:void(0)">Telematics</a></li>
                      <li><a href="javascript:void(0)">Automotive</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Support</a></li>
                  <li><a href="javascript:void(0)">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="slider">
            <a href="javascript:void(0)" className="slide-prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
            <a href="javascript:void(0)" className="slide-next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
          </div>
          <div className="features">
            <div className="container">
              <ul className="features-list">
                <li>
                  <div className="feature-icon">
                    <i className="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <span className="feature-title">Feature title</span>
                  <p>Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</p>
                </li>
                <li>
                  <div className="feature-icon">
                    <i className="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <span className="feature-title">Feature title</span>
                  <p>Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</p>
                </li>
                <li>
                  <div className="feature-icon">
                    <i className="fa fa-car" aria-hidden="true"></i>
                  </div>
                  <span className="feature-title">Feature title</span>
                  <p>Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="slog-slider">
            <div className="slog-slide">
              <div className="slog-img">
                <img src="images/avatar-img.jpg" width="50" height="50" className="slog-avatar" alt="" />
              </div>
              <p>Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.<br />The best dashcam ever! Saved my life a lot of times! </p>
              <span className="slog-author">Leonid Jack</span>
              <span className="slog-sub">Subtitle</span>
            </div>
          </div>
          <div className="stats">
            <div className="container">
              <ul className="stats-list">
                <li>
                  <div className="stat-num">
                    <span className="stat-value">99</span>
                    <span className="stat-symbol">%</span>
                  </div>
                  <span className="stat-text">Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</span>
                </li>
                <li>
                  <div className="stat-num">
                    <span className="stat-value">2,300,000</span>
                    <span className="stat-symbol">hrs</span>
                  </div>
                  <span className="stat-text">Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</span>
                </li>
                <li>
                  <div className="stat-num">
                    <span className="stat-symbol plus">+</span>
                    <span className="stat-value">87</span>
                  </div>
                  <span className="stat-text">Nexar instantly detects dangers on the road and provides “watch out” life-saving warnings.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="sign-up">
            <span className="title-box">Pro driver signup</span>
            {/*<!--
                 <ul className="benefits-list">
                 <li>
                 <div className="benefit-img">
                 <i className="fa fa-eye" aria-hidden="true"></i>
                 </div>
                 <span className="benefit-title">Advantage</span>
                 <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 </li>
                 <li>
                 <div className="benefit-img">
                 <i className="fa fa-eye" aria-hidden="true"></i>
                 </div>
                 <span className="benefit-title">Advantage</span>
                 <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 </li>
                 <li>
                 <div className="benefit-img">
                 <i className="fa fa-car" aria-hidden="true"></i>
                 </div>
                 <span className="benefit-title">Advantage</span>
                 <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                 </li>
                 </ul>
               --> */}
            <form action="#" className="sign-form">
              <div className="sign-input-box">
                <div className="minimal-form-input">
                  <label>
                    <span className="text">
                      <span className="text-inner"> Your Name (required)<br /></span>
                    </span>
                  </label>
                  <input type="text" placeholder="" className="sign-input" />
                </div>
              </div>
              <div className="sign-input-box">
                <div className="minimal-form-input">
                  <label>
                    <span className="text">
                      <span className="text-inner"> Your Email (required)<br /></span>
                    </span>
                  </label>
                  <input type="text" placeholder="" className="sign-input" />
                </div>
              </div>
              <div className="button-box">
                <button className="sign-bt">Send</button>
              </div>
              <div className="sign-text">
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </form>
          </div>
          <div className="tech">
            <div className="container">
              <div className="tech-top clearfix row">
                <div className="col-md-6 tech-box">
                  <span className="tech-title"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></span>
                  <h2>V2V</h2>
                  <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text.</p>
                  <div className="more-info">
                    <a href="javascript:void(0)">More info</a> 
                  </div>
                </div>
                <div className="col-md-6 tech-box">
                  <span className="tech-title"><i className="fa fa-share-alt" aria-hidden="true"></i></span>
                  <h2>V2V</h2>
                  <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text.</p>
                  <div className="more-info">
                    <a href="javascript:void(0)">More info</a> 
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="download-now">
            <div className="container">
              <div className="col-md-6 download-info">
                <img src="images/app-mockup.png" alt="img" />
              </div>
              <div className="col-md-6 download-info-text">
                <h2>DOWNLOAD NOW</h2>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block.</p>
                <a href=""><img src="images/appstore.png" alt="img" /></a>
                <a href=""><img src="images/google-play.png" alt="img" /></a>
              </div>
            </div>
          </div>
          <div className="solutions">
            <div className="container">
              <span className="title-box">BUSINESS SOLUTIONS</span>
              <div className="row clearfix">
                <div className="col-md-4">
                  <span className="soultions-title">Fleets</span>
                  <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <div className="more-link">
                    <a href="javascript:void(0)">MORE ABOUT FLEETS</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <span className="soultions-title">City</span>
                  <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <div className="more-link">
                    <a href="javascript:void(0)">MORE ABOUT FLEETS</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <span className="soultions-title">Insurance</span>
                  <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  <div className="more-link">
                    <a href="javascript:void(0)">MORE ABOUT FLEETS</a>
                  </div>
                  
                </div>
              </div>
              {/*<!--
                   <form action="#" className="sign-form">
                   <div className="sign-input-box">
                   <div className="minimal-form-input">
                   <label>
                   <span className="text">
                   <span className="text-inner"> Your Name (required)<br /></span>
                   </span>
                   </label>
                   <input type="text" placeholder="" className="sign-input">
                   </div>
                   </div>
                   <div className="sign-input-box">
                   <div className="minimal-form-input">
                   <label>
                   <span className="text">
                   <span className="text-inner"> Your Email (required)<br /></span>
                   </span>
                   </label>
                   <input type="text" placeholder="" className="sign-input">
                   </div>
                   </div>
                   <div className="button-box">
                   <button className="sign-bt" id="ss">Contact us</button>
                   </div>
                   </form>
                 -->*/}
            </div>
          </div>
          <div className="store">
            <div className="container">
              <span className="title-box gray">NEXAR STORE</span>
              <div className="store-slider">
                <a href="javascript:void(0)">
                  <div className="store-item">
                    <div className="product-img">
                      <img src="images/store1.jpg" alt="" />
                    </div>
                    <span className="product-name">Nexar Mount</span>
                    <p>This is some description for<br />the item</p>
                    <div className="clearfix">
                      <a href="javascript:void(0)" className="active-bt buy-bt">Buy now on Amazon</a>
                    </div>
                  </div> 
                </a>
                <a href="javascript:void(0)">
                  <div className="store-item">
                    <div className="product-img">
                      <img src="images/store1.jpg" alt="" />
                    </div>
                    <span className="product-name">Nexar Mount</span>
                    <p>This is some description for<br />the item</p>
                    <div className="clearfix">
                      <a href="javascript:void(0)" className="active-bt buy-bt">Buy now on Amazon</a>
                    </div>
                  </div> 
                </a>
                <a href="javascript:void(0)">
                  <div className="store-item">
                    <div className="product-img">
                      <img src="images/store1.jpg" alt="" />
                    </div>
                    <span className="product-name">Nexar Mount</span>
                    <p>This is some description for<br />the item</p>
                    <div className="clearfix">
                      <a href="javascript:void(0)" className="active-bt buy-bt">Buy now on Amazon</a>
                    </div>
                  </div> 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="clearfix">
                <div className="col-md-3">
                  <span className="footer-menu-title">COMPANY</span>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0)">Careers</a></li>
                    <li><a href="javascript:void(0)">Press kit</a></li>
                    <li><a href="javascript:void(0)">Terms of Use</a></li>
                    <li><a href="javascript:void(0)">Team</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <span className="footer-menu-title">SOLUTIONS</span>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0)">Fleets</a></li>
                    <li><a href="javascript:void(0)">City</a></li>
                    <li><a href="javascript:void(0)">Telematics</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <span className="footer-menu-title">TECHNOLOGY</span>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0)">Deep Challenge</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <span className="footer-menu-title">SUPPORT</span>
                  <ul className="footer-menu">
                    <li><a href="javascript:void(0)">F.A.Q.</a></li>
                    <li><a href="javascript:void(0)">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy">
            <div className="container">
              <div className="clearfix">
                <span className="copy">&copy; 2017 Nexar. All Rights Reserved.</span>
                <ul className="footer-soc">
                  <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fa fa-youtube-play"></i></a></li>
                  <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}
