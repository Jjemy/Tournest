import { useEffect,useState } from 'react';
import './home.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Home() {
    const [startDate, setStartDate] = useState(new Date());

    let tabContent=document.getElementsByClassName('tab-content');
    useEffect(()=>{
        let sliderHandle1= document.querySelector('.rc-slider-handle-1');
        let sliderHandle2 = document.querySelector('.rc-slider-handle-2');
        for(let i=0 ; i<tabContent.length;i++){
            tabContent[i].classList.add('hide');
        }
        tabContent[0].classList.remove('hide');

        document.querySelector('.range-label').innerHTML='$ '+sliderHandle1.ariaValueNow+' - $ '+sliderHandle2.ariaValueNow;
    },[]);

    function openTab(tabLink){
        console.log(tabLink);
        for(let i=0 ; i<tabContent.length;i++){
            tabContent[i].classList.add('hide');
        }
        if(tabLink=='tours'){
            tabContent[0].classList.remove('hide');
        }
        else if(tabLink=='hotels'){
            tabContent[1].classList.remove('hide');
        }
        else{
            tabContent[2].classList.remove('hide');
        }
    }

    return (
        <section id='home'>
            <div className="container header">
                <div className="row">
                    <div className="col-12">
                        <h1>Explore the Beauty of the Beautiful World</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <button className='blue-button'>EXPLORE NOW</button>
                    </div>
                </div>
            </div>
            <div className="container tabs">
                <div className="row tab-link">
                    <button className="tab col-2" onClick={()=>openTab('tours')}>
                        <i className="fa fa-tree" />
                        Tours
                    </button>
                    <button className="tab col-2" onClick={()=>openTab('hotels')}>
                        <i className="fa fa-building" />
                        Hotels
                    </button>
                    <button className="tab col-2" onClick={()=>openTab('flights')}>
                        <i className="fa fa-plane" />
                        Flights
                    </button>
                </div>
                <div className="row tab-content tours-content d-flex">
                    <div className="col-lg-4">
                        <h2>Destination</h2>
                        <div className="select-wrapper w-100">
                            <select name="country" className='w-100' id="country-slect">
                                <option value="default">Enter Your Destination Country</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Russia">Russia</option>
                                <option value="Egypt">Egypt</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                        <div className="select-wrapper w-100">
                            <select name="location" className='w-100' id="location-slect">
                                <option value="default">Enter Your Destination Location</option>
                                <option value="Istanbul">Istanbul</option>
                                <option value="Moscow">Moscow</option>
                                <option value="Cairo">Cairo</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Check In</h2>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Check Out</h2>
                        <DatePicker selected={startDate.getTime()+(7*24*60*60*1000)} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Duration</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Members</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-12 d-flex nested-columns">
                        <div className="col-md-5 col-12">
                            <div className="row budget">
                                <div className="col-md-3 col-sm-4">
                                    <h2>Budget :</h2>
                                </div>
                                <div className="col-md-9 col-sm-8 range d-flex align-items-center">
                                    <Range max={12000} defaultValue={[2000,10000]} step={5} dots={true} allowCross={false} onChange={()=>
                                    {
                                        let sliderHandle1= document.querySelector('.rc-slider-handle-1');
                                        let sliderHandle2 = document.querySelector('.rc-slider-handle-2');
                                        document.querySelector('.range-label').innerHTML='$ '+sliderHandle1.ariaValueNow+' - $ '+sliderHandle2.ariaValueNow;
                                        }} />
                                    <p className='range-label'></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-12 d-flex justify-content-end">
                            <button className='blue-button'>SEARCH</button>
                        </div>
                    </div>
                </div>
                <div className="row tab-content hotels-content">
                    <div className="col-lg-4">
                        <h2>Destination</h2>
                        <div className="select-wrapper w-100">
                            <select name="country" className='w-100' id="country-slect">
                                <option value="default">Enter Your Destination Country</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Russia">Russia</option>
                                <option value="Egypt">Egypt</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                        <div className="select-wrapper w-100">
                            <select name="location" className='w-100' id="location-slect">
                                <option value="default">Enter Your Destination Location</option>
                                <option value="Istanbul">Istanbul</option>
                                <option value="Moscow">Moscow</option>
                                <option value="Cairo">Cairo</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Check In</h2>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Check Out</h2>
                        <DatePicker selected={startDate.getTime()+(7*24*60*60*1000)} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Duration</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Members</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-12 d-flex nested-columns">
                        <div className="col-12 d-flex justify-content-end">
                            <button className='blue-button'>SEARCH</button>
                        </div>
                    </div>
                </div>
                <div className="row tab-content flights-content">
                    <div className="radio d-flex">
                        <div className="radio1">
                            <input type="radio" name='radio' id='radio1'/>
                            <label htmlFor="radio1" className='mx-2'>Round Trip</label>
                        </div>
                        <div className="radio2">
                            <input type="radio" name='radio' id='radio2' />
                            <label htmlFor="radio2" className='mx-2'>On Way</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h2>From</h2>
                        <div className="select-wrapper w-100">
                            <select name="country" className='w-100' id="country-slect">
                                <option value="default">Enter Your Destination Country</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Russia">Russia</option>
                                <option value="Egypt">Egypt</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Departure</h2>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Return</h2>
                        <DatePicker selected={startDate.getTime()+(7*24*60*60*1000)} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Adults</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <h2>Childs</h2>
                        <input placeholder='1' className='tour-info' type="text" />
                    </div>
                    <div className="col-lg-4 destination">
                        <h2>To</h2>
                        <div className="select-wrapper w-100">
                            <select name="location" className='w-100' id="location-slect">
                                <option value="default">Enter Your Destination Location</option>
                                <option value="Istanbul">Istanbul</option>
                                <option value="Moscow">Moscow</option>
                                <option value="Cairo">Cairo</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <h2>Class</h2>
                        <div className="select-wrapper w-100">
                            <select name="location" className='w-100' id="location-slect">
                                <option value="default">Enter Class</option>
                                <option value="Istanbul">A</option>
                                <option value="Moscow">B</option>
                                <option value="Cairo">C</option>
                            </select>
                            <i class="fas fa-chevron-down"/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-8 d-flex justify-content-end mt-3">
                        <button className='blue-button'>SEARCH</button>
                    </div>
                </div>
            </div>
            <div className="container features pb-5">
                <div className="row pb-5">
                <div className="feature d-flex flex-md-row flex-column col-md-4 align-items-center">
                        <img src="assets/s1.png" alt="logo" />
                        <div className="feature-text d-flex flex-column align-items-center">
                            <h3 className='text-center'>Amazing Tour Packages</h3>
                            <p className='text-center'>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                    <div className="feature d-flex flex-md-row flex-column col-md-4 align-items-center">
                        <img src="assets/s2.png" alt="logo" />
                        <div className="feature-text d-flex flex-column align-items-center">
                            <h3 className='text-center'>Book Top Class Hotel</h3>
                            <p className='text-center'>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                    <div className="feature d-flex flex-md-row flex-column col-md-4 align-items-center">
                        <img src="assets/s3.png" alt="logo" />
                        <div className="feature-text d-flex flex-column align-items-center">
                            <h3 className='text-center'>Online Flight Booking</h3>
                            <p className='text-center'>Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}