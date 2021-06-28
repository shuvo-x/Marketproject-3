import React from 'react';
import './Navbar.css';

function Navbar() {
    return(
        <>
       <div className='bg-clors'>
    <div className='container'>
     <nav className='navbar navbar-expand-md navbar-light'>
      <a href='#'className='navbar-brand'>
        <img src='logo192.png'id='logo'/>
        <span>React js</span>
      </a>
      <button className='btn btn-sucess navbar-toggler'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#toggleMobileMenu'
      aria-controls='toggleMobileMenu'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse'id='toggleMobileMenu'>
        <ul className='navbar-nav ml-auto text-center'>
          <li>
            <a className='nav-link'href='/'>Home</a>
          </li>
          <li>
            <a className='nav-link'href='#about-page'>About</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Blog</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Shop</a>
          </li>
          <li>
            <a className='nav-link'href='#'>Contact</a>
          </li>
          
        
        </ul>
      </div>
     </nav>


    </div>
    </div> 
        </>
    )
}

export default Navbar;