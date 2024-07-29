import React from 'react'
import resume from "../Static/shubham_pimparkar_resume.pdf"
import EducationComp from './EducationComp'
import LanguageComp from './LanguageComp'
export default function HomeComp() {
  return (
    <div className='home'>
      <h3>Hi, I am<span className='my-name grad-text'> Shubham Pimparkar</span> </h3>
      <div className='yellow-bar'></div>
      <p className='my-self'>
      Originally from Ahmednagar, I currently reside in Pune. I am Fresher and open for Jobs. I firmly believe that hard work can triumph over luck so i work hard to achieve my goals every day, and I have a strong interest in technologies . I am willing to pick up a lot of experience and learn more about new technologies. Here are a few of my details, my resume below is considerably more in-depth.
      </p>

      
      <div className='black-bar'></div>

    <EducationComp></EducationComp>
    <br></br>
    
    <LanguageComp></LanguageComp>
    <br></br>



      <div className='my-resume'>
        <a href={resume} download className='resume'>Resume </a>
      </div>
    </div>
  )
}
