import React from 'react';
import './offers.css';

export default function Offers() {
    return (
        <div>
            <section id='special-offers'>
                <div className="container">
                    <div className="row offers mx-auto">
                        <div className="col-md-8 mx-auto">
                            <div className="row">
                                <div className="col-12">
                                    <h2>Thiland</h2>
                                </div>
                                <div class="col-12 d-flex stars">
                                    <i class="fas fa-star"/><i class="fas fa-star"/><i class="fas fa-star"/><i class="fas fa-star"/><i class="fas fa-star"/><p class="px-3">2544 Review</p>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <p className="mx-2">{'>'} 5 Days 6 Nights</p>
                                        <p className="mx-2">{'>'} 2 Persons</p>
                                        <p className="mx-2">{'>'} 5 Star Accomodation</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <p className="mx-2">{'>'} Transportaion</p>
                                        <p className="mx-2">{'>'} Food Facilities</p>
                                    </div>
                                </div>
                                <p className="col-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation una ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="button-container col-xl-2 col-md-3 mt-4">
                                    <button className="book-btn">Make Tour</button>
                                </div>
                                <div className="button-container col-xl-2 col-md-3 mt-4">
                                    <button className="book-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 offer-banner">
                            <div className="img-container">
                                <img src="assets/offer-shape.png" alt="offer" />
                            </div>
                            <div class="img-text text-center text-light">
                                <h3>Special Offer</h3>
                                <h4><span>40%</span><br/>off</h4>
                                <p><span>$999</span><br/>Reguler $ 1450</p>
							</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='blog' className='news py-5'>
                <div className="container my-5 pt-5">
                    <div className="row text-center header-text">
                        <h1>Latest News</h1>
                        <p>Travel News from all over the world</p>
                    </div>
                    <div className="news-wrapper mx-auto mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="content-wrapper">
                                    <div className="d-flex news-text">
                                        <h4>Trending News</h4>
                                        <p>15 November 2017</p>
                                    </div>
                                    <div className="img-container">
                                        <img src="assets/b1.jpeg" alt="image" />
                                        <div className="img-overlay"/>
                                    </div>
                                    <div className='blog-text'>
                                        <h4>Discover on beautiful weather, Fantastic foods and historical place in Prag</h4>
                                        <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-wrapper">
                                    <div className="d-flex news-text">
                                        <h4>Trending News</h4>
                                        <p>15 November 2017</p>
                                    </div>
                                    <div className="img-container">
                                        <img src="assets/b2.jpeg" alt="image" />
                                        <div className="img-overlay"/>
                                    </div>
                                    <div className='blog-text'>
                                        <h4>Discover on beautiful weather, Fantastic foods and historical place in India</h4>
                                        <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="content-wrapper">
                                    <div className="d-flex news-text">
                                        <h4>Trending News</h4>
                                        <p>15 November 2017</p>
                                    </div>
                                    <div className="img-container">
                                        <img src="assets/b3.jpeg" alt="image" />
                                        <div className="img-overlay"/>
                                    </div>
                                    <div className='blog-text'>
                                        <h4>10 Most Natural Place To Discover</h4>
                                        <p>Lorem ipsum dolor sit amet, contur adip elit, sed do mod incid ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
