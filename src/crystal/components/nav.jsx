import { useState } from "react";
import App from "./app";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal when form is closed
  };

  return(
    <nav className='header-nav'>
        <h1>CRYSTAL SPECIALIST HOSPITAL</h1>

        <nav className='nav-list'>
          <ul>
            <li><a href="#s">home</a></li>
            <li><a href="#services">service</a></li>
            <li><a href="o">crystal care</a></li>
            <li><a href="#about">about us</a></li>
            <li><a href="p">contact us</a></li>
            <li><a href='a' className='cta' onClick={(e) => {e.preventDefault(); openModal();}}>book an appointment</a></li>
          </ul>
        </nav>

        {isModalOpen && <App onClose={closeModal} />}
      </nav>
  )
}

export default Nav;