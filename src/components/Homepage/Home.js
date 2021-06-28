import React from 'react';
import About from'../../About';
import Branding from '../../Branding';
import Unknown from '../../Unknown';
import './Home.css';

function Home() {
    return(
        <>
        
       <div className='d-flex justify-content-center align-items-center'id='div-images'>
       <div className='banner-text '>
        <h3>Create and grow your website<br/> fast, with React</h3>
           <div className='btn-dsgn'>
             <button type='button' className='btn btx-1'>Start Now</button>
             <button type='button' className=' btn btx-2'>Download</button>
           </div>
        </div>
       </div>

       <div className='space'>
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <div className='col-md-3'id='colun-1'>
                    <img src='icon-03.svg'/>
                    <h4>Fixed price projects</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor incididunt.
                     </p>
                </div>
                <div className='col-md-3'id='colun-1'>
                    <img src='icon-02.svg'/>
                    <h4>Receive on time</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor incididunt.
                     </p>
                </div>
                <div className='col-md-3'id='colun-1'>
                    <img src='icon-01.svg'/>
                    <h4>100% satisfiction</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit, sed do eiusmod tempor incididunt.
                     </p>
                </div>
            </div>
        </div>
        </div>

      <About />
      <Branding />
      <Unknown />

        
        </>
    )
}

export default Home;