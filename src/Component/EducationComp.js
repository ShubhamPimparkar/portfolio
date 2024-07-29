
import React, { useState } from 'react';
export default function EducationComp() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
    <span onClick={handleClick} className=' my-style-text'>Education</span>
        
      {isClicked ? (
         <div className='container edu-sec'>
         <div className='row' >
           <div className='col-md-3 box '>
             <span className='edu-title'>CDAC</span>
               <p>
                 Graduated from IACSD Pune in PG Dac course in 2024 March batch.

               </p>
           </div>
           <div className='col-md-3 box'>
           <span className='edu-title '>BE</span>
           <p>
             Graduated from APCOER Pune from Computer Eng. in 2023 with 8.6 cgpa.

           </p>
           </div>
           <div className='col-md-3 box '>
           <span className='edu-title'>12th</span>
           <p>
           Completed HSC from Central Academy CBSE Board in PCM with 72% in 2019.
           </p>

           </div>
           <div className='col-md-3 box '>
           <span className='edu-title'>10th</span>
           <p>

           Completed SSC from APS Devlali Nashik CBSE Board with 74% in 2017.
           </p>

           </div>

         </div>

       </div>
      ) : (
        <span className='my-lang my-style-text'></span>
      )}
    </div>
  );
  
}
