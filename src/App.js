import './App.css';
import Destination from './components/Destination/destination';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Offers from './components/offers/offers';
import Packages from './components/packages/packages';
import Subscription from './components/subscription/subscription';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    const sections=document.querySelectorAll('section');
    const links=document.querySelectorAll('.nav-link');
    let nav=document.querySelector('.navigation-bar');
    let arrow=document.querySelector('.up-arrow');

    window.onscroll=() => {
        if(window.scrollY>1){
            nav.classList.add('dark');
            arrow.classList.add('block');
        }
        else{
            nav.classList.remove('dark');
            arrow.classList.remove('block');
        }

        sections.forEach(section => {
          if(window.scrollY>=section.offsetTop-5){
            let current=section.getAttribute('id');
            console.log(current);
            links.forEach(link=>{
              link.classList.remove('active');
              if(link.classList.contains(current)){
                link.classList.add('active');
                }
              })
            }
          });
        };
    },[]);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Destination />
      <Packages />
      <Offers />
      <Subscription />
      <a href='#home' className="up-arrow"> <i className='fas fa-angle-double-up'/> </a>
    </div>
  );
}

export default App;
