import React from 'react';
import './About.css';

function About() {
    return(
        <>
         <div className='about-bg mt-5'id='about-page'>
         <div className='container'>
             <div className='row'>
                 <div className='col-md-6'id='about-img'>
                     <img className='about-img-2'src='card-05.jpg'alt='' />
                 </div>
                 <div className='col-md-6'id='writting-section'>
                    <div className='writting-section-2'>
                    <h1>Web Design</h1>
                     <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <button type='button'className='btn btx-3 mt-4'>Learn More</button>
                    </div>
                    
                 </div>
             </div>
           </div>
         </div>
        </>
    )
}
export default About;