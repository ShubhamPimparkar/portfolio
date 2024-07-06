import React from 'react'
import resume from "../Static/shubham_pimparkar_resume.pdf"
export default function HomeComp() {
  return (
    <div className='home'>
      <h3>My Name is <span className='my-name'> Shubham Pimparkar</span> </h3>
      <div className='yellow-bar'></div>
      <p className='my-self'>
        I am from Ahmednagar city and currently living in Pune. I am goal
        oriented person and much interested in technology. My preferred languages are Java, React. I am open to learn more
        technologies and gain experience. My hobbies which I do in my free time are Motion Designing.
      </p>
      <div className='black-bar'></div>
      <div className='education'>
        <span className='my-lang my-style-text'>Education</span>
        <div className='container edu-sec'>
          <div className='row' >
            <div className='col-md-3 box cdac'>
              <span className='edu-title'>CDAC</span>
                <p>
                  Graduated from IACSD Pune in PG Dac course in 2024 March batch.

                </p>
            </div>
            <div className='col-md-3 box be'>
            <span className='edu-title '>BE</span>
            <p>
              Graduated from APCOER Pune from Computer Eng. in 2023 with 8.6 cgpa.

            </p>
            </div>
            <div className='col-md-3 box twelve'>
            <span className='edu-title'>12th</span>
            <p>
            Completed 12th from APS Ahmednagar CBSE Board in PCM with 72%.
            </p>

            </div>
            <div className='col-md-3 box ten'>
            <span className='edu-title'>10th</span>
            <p>

            Completed 10th from APS Devlali Nashik CBSE Board with 74%.
            </p>

            </div>

          </div>

        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4 lang'>
            <span className='my-lang my-style-text'>Languages</span>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Java </li>
            <li>Adv Java</li>
            <li>DotNet</li>

          </div>
          <div className='col-md-4 intrest'>
            <span className='my-lang my-style-text'>Intrests</span>
            <li>Coding</li>
            <li>Chess</li>
            <li>Horror Movies</li>
            <li>Reading</li>
            <li>Walking</li>
          </div>
        </div>
      </div>

      <div className='my-resume'>
        <a href={resume} download className='resume'>Resume </a>
      </div>
    </div>
  )
}
