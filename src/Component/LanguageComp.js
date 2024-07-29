
import React, { useState } from 'react';
export default function LanguageComp() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  
    return (
      <div>
    <span onClick={handleClick} className=' my-style-text'>Intrests</span>
        
    {isClicked ? (
      <div className='container '>
      <div className='row'>
        <div className='col-md-4 lang'>
          <span className='edu-title '>Languages</span>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Java </li>
          <li>Adv Java</li>
          <li>DotNet</li>
        </div>
        <div className='col-md-4 intrest'>
          <span className='edu-title '>Hobbies</span>
         
          <li>Coding</li>
          <li>Chess</li>
          <li>Video Editing</li>
          <li>Watching Horror Movies</li>
          <li>Reading Fictional Novels</li>
          <li>Morning Walk</li>
        </div>
      </div>
    </div>

    ) : (
        <span className='my-lang my-style-text'></span>
    )}
    </div>
  );
  
}
