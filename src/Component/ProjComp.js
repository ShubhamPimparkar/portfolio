import React from 'react'
import certi1 from '../Static/JavaCertficate.pdf'
import certi2 from '../Static/Accenture.pdf'
import certi3 from '../Static/microsoftficate.pdf'
import meme from "../Static/this-site-appaears-to-be-under-construction-memes.jpg"
export default function ProjComp() {
  return (
    <div className="proj-back " >
      {/* <img src={meme} class="imgSize"  ></img> */}
      <h3 className='cont-text' >CERTIFICATES</h3>
      <div className='black-bar'></div>
      <br></br>
      <div className='certfi'>
        <span className='edu-title' > Java Core/Advc Internship  </span>
        <p className='para-text'>
          Capgemini - TNSIF Pune <br></br>
          Completed Core and Advanced Java placement training, October 2022 to February 2023, aslo Technical and Soft skills training for job readiness and personality development.
        </p>

        <div className='my-ficate'>
          <a href={certi1} download className='ficate'>Download </a>
        </div>
      </div>

      <br></br>

      <div className='certfi'>
        <span className='edu-title' > Accenture Certificate  </span>
        <p className='para-text'>
          Virtual Internship <br></br>
          For one week providing training in, Testing, Debugging algorithms & software development lifecycle.
        </p>

        <div className='my-ficate'>
          <a href={certi2} download className='ficate'>Download </a>
        </div>
      </div>
      <br></br>
      <div className='certfi'>
        <span className='edu-title' > Microsoft Certificate  </span>
        <p className='para-text'>
          Microsoft Learn Virtual <br></br>
          For one week providing training in, on HTML, CSS & created google drive clone.
        </p>

        <div className='my-ficate'>
          <a href={certi3} download className='ficate'>Download </a>
        </div>
      </div>

    </div>
  )
}
