import React from 'react'
import './Branding.css';

function Branding() {
    return(
        <>
        <div className='branding'>
            <div className='container'>
                    <div className='row'>
                    <div className='col-md-6'>
                        <div className='branding-writting-part'>
                           <h1>Branding</h1>
                             <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing 
                              elit. Ut elit tellus, luctus nec 
                              ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                          <button type='button'className='btn btx-3 mt-4'>Learn More</button>
                          </div>
                    </div>

                    <div className='col-md-6'id='brand-img'>
                        <img className='branding-img'src='card-04.jpg'alt='' />
                    </div>
                    </div>
                                          
            </div>
        </div>
        
        </>
    )
}

export default Branding