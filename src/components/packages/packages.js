import './packages.css';
import React,{useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Packages() {
    return (
        <section id='packages'>
            <div className="container packages py-5 mb-5">
                <div className="row text-center header-text pt-5 mt-5">
                    <h1>Special Packages</h1>
                    <p>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                </div>
                <div className="country mx-auto mt-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p1.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>Italy</h3>
                                    <h3>$499</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Days 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p2.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>England</h3>
                                    <h3>$1499</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Days 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p3.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>France</h3>
                                    <h3>$1199</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Days 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p4.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>India</h3>
                                    <h3>$799</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Days 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p5.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>Spain</h3>
                                    <h3>$999</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Days 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="content-wrapper">
                                <img src="assets/p6.jpeg" alt="country" />
                                <div className='country-price d-flex justify-content-between'>
                                    <h3>Thailand</h3>
                                    <h3>$799</h3>
                                </div>
                                <div className='horizontal-line' />
                                <div className="country-details">
                                    <div className="row">
                                        <p className="col-6">{'>'} 5 Daays 6 Nights Accomodation</p>
                                        <p className="col-6">{'>'} 5 Star</p>
                                        <p className="col-6">{'>'} Transportaion</p>
                                        <p className="col-6">{'>'} Food Facilities</p>
                                        <div className="col-12 d-flex stars"><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><p className='px-3'>"2544 Review"</p></div>
                                        <div className="col-12"><button className='book-btn'>Book Now</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='clients bg-light py-5'>
                <div className="container mb-5">
                    <div className="row text-center header-text pt-5 mt-5">
                        <h1>Clients Reviews</h1>
                        <p>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                    </div>
                    <div className="clients-slider mx-auto">
                        <div className="row">
                            <div className="col-12">
                                <OwlCarousel className='owl-theme' responsive={
                                    {0:{
                                        items:1
                                    },
                                    767:{
                                        items:2
                                    },
                                    992:{
                                        items:3
                                    }}}
                                loop margin={12} smartSpeed={1000} autoplay={true} autoplayTimeout={5000}>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial1.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial2.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial1.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial2.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial1.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial2.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                    <div className="slide">
                                        <div className="slide-content d-flex flex-column align-items-center text-center m-auto">
                                            <div className="slider-img-container">
                                                <img src="assets/testimonial1.jpeg" alt="client" />
                                            </div>
                                            <i class="fas fa-quote-left my-4" />
                                            <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <h3>Kevin Watson</h3>
                                            <h4>london, england</h4>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}