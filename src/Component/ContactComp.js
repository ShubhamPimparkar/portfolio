
import React from 'react';
import '../Static/contact.css'

export default function ContactComp() {
  return (
    
      <div className="paragraph-background" >

        <h3 className='cont-text'>Contact Info </h3>
        <div className='black-bar'></div>
        <div className="link-container">
          <div className='conts '><a className='conts-box' href="mailto:shubhampimparkar.sp@gmail.com" > Gmail</a>   </div>
     
          <div className='conts '><a className='conts-box' href="https://www.linkedin.com/in/shubham-pimparkar11/" target="_blank"
            rel="noopener noreferrer" > Linkedin</a> </div>
          <div className='conts '><a className='conts-box' href="https://github.com/ShubhamPimparkar" target="_blank"
            rel="noopener noreferrer" > Github</a></div>
          <div className='conts'><a className='conts-box' href="https://leetcode.com/u/shubhampimparkar/" target="_blank"
            rel="noopener noreferrer" > LeetCode</a></div>

        </div>
        <br></br>
      <div className='black-bar'></div>

      <div className='about-site' >
      {/* This portfolio is made using React.js and simple CSS and Javascript. I tend to like minimalistic looks so i have not used any fancy animations and UI libraries, and kept clean & organised react project. */}
      PS : React.js, basic CSS, and Javascript were used in the creation of this portfolio. I have kept my React project tidy and organized and have not utilized any flashy animations or UI libraries because I prefer basic designs.<br></br>
      E-mail <span className='mail-id'> :  shubhampimparkar.sp@gmail.com </span>
      </div>
      </div>
  
  )
}
