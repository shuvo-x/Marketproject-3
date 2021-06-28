import React from 'react';
import './Unknown.css';

function Unknown() {
    return(
        <>
        
        <div className='unknown'>
         <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
                 <img className='unknown-img'src='card-03.jpg'altg='' />
             </div>
             <div className='col-md-6'>
                 <div className='unkwn-writting-part'>
                     <h1>We are driven by<br/>values</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button type='button'className='btn btx-3 mt-3'>Learn More</button>
                 </div>
             </div>
          </div>
         </div>
        </div>
        
        
        
        </>
    )
}
export default Unknown;