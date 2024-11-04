import { useState } from 'react';
import cryst from '../../images/FindingTheRightDoctor 2.png';
import Nav from './nav.jsx';
import App from './app.jsx';

const Header = ()=>{
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when form is closed
  };

  return(
    <header>
      <Nav/>

      <div className='container'>
        <div className='header-text'>
          <h1>
            YOUR HEALTH IS OUR TOP PRIORITY
          </h1>
          <p>
            We are committed to making you feel better and 
            healthy everyday of your life. Your health is very 
            important and we have a great team to cater for you.
          </p>
          <a href='a' className='cta' onClick={(e) => {e.preventDefault(); openModal();}}>book an appointment</a>
        </div>
        <div className='image-holder'>
          <img src={cryst} alt='crystal doctors'/>
        </div>
      </div>

      {isModalOpen && <App onClose={closeModal} />}
    </header>
  )
}

export default Header;