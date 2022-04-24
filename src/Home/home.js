import $ from 'jquery';
import Popper from 'popper.js';
import { useEffect } from 'react';
import '../App.css';

const Home = ()=>{
  const titles = [
    'Full Stack Developer',
    'Back End Developer',
    'Front End Developer',
    'Web Developer',
    'Python Developer',
    'Java Developer'
  ]
  const timeoutDelay = 2000;
  let counter = 0;
  var elem = document.getElementById("name");

  const change = function () {
    $(elem).delay(timeoutDelay).fadeTo(1000, 0, function () {
      this.innerHTML = titles[counter];
      counter = ++counter % titles.length;
      $(this).fadeTo(1000, 1, change)
    });
  }
  useEffect(change);
 return (
    <div className="row">
    <div className="col-md-6"></div>
    <div className="col-md-6">
      <h1 style={{ fontSize: "10vw" }}>Hello World!</h1>
      <h2 style={{ fontSize: "2vw" }}>I'm an aspiring <span id="name"></span></h2>
      <div className="row">
        <div className='col-md-4 d-flex justify-content-start'>
          <div className='div-icons'>
            <a href='https://facebook.com/100002844207547' target='_blank'>
              <img className='contact-icon' src='facebook.svg' title="https://facebook.com/100002844207547" />
            </a>
          </div>
          <div className='div-icons'>
            <a href='https://linkedin.com/in/marcial-abasola-a9498b210' target='_blank'>
              <img className='contact-icon' src='linkedin.svg' title="https://linkedin.com/in/marcial-abasola-a9498b210" />
            </a>
          </div>
          <div className='div-icons'>
            <a href='https://github.com/marsyaaaaal' target='_blank'>
              <img className='contact-icon' src='github.svg' title="https://github.com/marsyaaaaal" />
            </a>
          </div>
          <div className='div-icons'>
            <a href='https://instagram.com/marshaaaaal' target='_blank'>
              <img className='contact-icon' src='instagram.svg' title="https://instagram.com/marshaaaaal" />
            </a>
          </div>
        </div>
        <div className='col-md-4'></div>
        <div className='col-md-4'></div>
      </div>
    </div>

  </div>
 );
}

export default Home;