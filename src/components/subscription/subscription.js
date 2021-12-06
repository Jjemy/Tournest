import React from 'react';
import './subscription.css';

export default function Subscription() {
    return (
        <div>
            <section id='subscription' className="subscribe">
                <div className="container">
                    <div class="subscribe-title text-center">
                        <h2>Join our Subscribers List to Get Regular Update</h2>
                        <p>Subscribe Now. We will send you Best offer for your Trip </p>
                    </div>
                </div>
                <form>
					<div class="row justify-content-center">
						<div class="col-lg-6 col-md-9 col-sm-11">
							<div class="inputt input-group-prepend">
								<input type="email" class="form-control" placeholder="Enter your Email Here"/>
								<button class="subscribe-btn">Subscribe</button>
								<div class="clearfix"/>
								<i class="fa fa-envelope"></i>
							</div>
						</div>
					</div>
				</form>
            </section>
            <section id="footer">
                <div className="footer bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4 col-6 pt-5">
                                <a href="#" class="navbar-brand">Tour<span>Nest</span></a>
                                <p>Best Travel Agency</p>
                            </div>
                            <div className="col-md-3 col-sm-4 col-6 footer-info">
                                <h3>Link</h3>
                                <ul className="footer-list">
                                    <li className="footer-item">Home</li>
                                    <li className="footer-item">Destination</li>
                                    <li className="footer-item">Special Packages</li>
                                    <li className="footer-item">Special Offers</li>
                                    <li className="footer-item">Blog</li>
                                    <li className="footer-item">Contact</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4 col-6 footer-info">
                                <h3>Popular Destinations</h3>
                                <ul className="footer-list">
                                    <li className="footer-item">China</li>
                                    <li className="footer-item">Venzuella</li>
                                    <li className="footer-item">Brazil</li>
                                    <li className="footer-item">Australia</li>
                                    <li className="footer-item">Londom</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4 col-6 footer-info">
                                <h3>Contacts</h3>
                                <ul className="footer-list">
                                    <li className="footer-item1">+1 (300) 1234 6543</li>
                                    <li className="footer-item">Info@Tnest.Com</li>
                                    <li className="footer-item1">North Warnner Park 336/A</li>
                                    <li className="footer-item1">Newyork, USA</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div class="foot-icons ">
                            <ul class="footer-social-links list-inline list-unstyled">
                                <li><a href="#" target="_blank" class="foot-icon-bg-1"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank" class="foot-icon-bg-2"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank" class="foot-icon-bg-3"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                            <p>© 2017 <a href="https://www.themesine.com">ThemeSINE</a>. All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
