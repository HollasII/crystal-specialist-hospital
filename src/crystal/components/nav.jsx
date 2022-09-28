const Nav = () => {
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
            <li><a href="p" className='cta'>book appointment</a></li>
          </ul>
        </nav>
      </nav>
  )
}

export default Nav;