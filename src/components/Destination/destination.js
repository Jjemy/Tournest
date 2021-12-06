import './destination.css';
import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      hours,
      days
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    return (
      <div style={{textAlign: 'center'}}>
        <div className='timer-counter'>
          <h2>{days} <span className='time-label'>Days</span></h2><i> : </i><h2>{hours}<span className='time-label'>Hours</span></h2><i> : </i><h2>{minutes}<span className='time-label'>Minutes</span></h2><i> : </i><h2>{seconds}<span className='time-label'>Seconds</span></h2>
        </div>
      </div>
    );
}

export default function Destination() {
    const time = new Date(2022,12,30);
    return (
        <section id='destination'>
            <div className="container bg-light destination">
                <div className="row text-center header-text">
                    <h1>Top Destination</h1>
                    <p>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                </div>
                <div className='country'>
                    <div className="row mt-5">
                        <div className="col-md-6 country-column">
                            <div className="img-wrapper">
                                <img src="assets/g1.jpeg" alt="country" />
                                <div className="country-text text-light">
                                    <h2>China</h2>
                                    <p>20 Tours ,</p>
                                    <p>15 Places</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 country-column">
                            <div className="img-wrapper">
                                <img src="assets/g2.jpeg" alt="country" />
                                <div className="country-text text-light">
                                    <h2>Venzuela</h2>
                                    <p>12 Tours ,</p>
                                    <p>9 Places</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 country-column">
                            <div className="img-wrapper">
                                <img src="assets/g3.jpeg" alt="country" />
                                <div className="country-text text-light">
                                    <h2>Brazil</h2>
                                    <p>25 Tours ,</p>
                                    <p>10 Places</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6 country-column">
                                    <div className="img-wrapper">
                                        <img src="assets/g4.jpeg" alt="country" />
                                        <div className="country-text text-light">
                                            <h2>Australia</h2>
                                            <p>18 Tours ,</p>
                                            <p>9 Places</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 country-column">
                                    <div className="img-wrapper">
                                        <img src="assets/g5.jpeg" alt="country" />
                                        <div className="country-text text-light">
                                            <h2>Netherlands</h2>
                                            <p>14 Tours ,</p>
                                            <p>12 Places</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 country-column">
                                    <div className="img-wrapper">
                                        <img src="assets/g6.jpeg" alt="country" />
                                        <div className="country-text text-light">
                                            <h2>Turkey</h2>
                                            <p>14 Tours ,</p>
                                            <p>6 Places</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container discount">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Join With Us Within 21 January, 2018 And Get Upto 40% Discount</h3>
                    </div>
                    <div className="col-12 ">
                        <MyTimer expiryTimestamp={time} days={20} />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className='blue-button'>Join Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}