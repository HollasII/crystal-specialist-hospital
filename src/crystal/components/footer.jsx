import insta from '../../images/insta.svg';
import mail from '../../images/mail.svg';
import phone from '../../images/phone.svg';
import logo from '../../images/LOGO 2.png';


const Footer = () => {
  return(
    <footer>
      <div className="footDiv">
        <img className='logo' src={logo} alt="" />
        <ul id='li'>
          <li id='li1'>
            <h3>contact us</h3>
            <ul>
              <li><a href="tel:+234-905-421-2352">09054212352</a></li>
              <li><a href="mailto:nicholasolajide@gmail.com">nicholasolajide@gmail.com</a></li>
              <li>148/150 akowonjo rd, alimosho, lagos</li>
            </ul>
          </li>
          <li id='li2'>
            <h3>services</h3>
            <ul>
              <li>
                <a href="aa">home</a>
              </li>
              <li>
                <a href="a">services</a>
              </li>
              <li>
                <a href="a">doctors</a>
              </li>
              <li>
                <a href="a">crystal care</a>
              </li>
              <li>
                <a href="a">reviews</a>
              </li>
            </ul>
          </li>
          <li id='li3'>
            <h3>information</h3>
            <ul>
              <li>
                <a href="a">about us</a>
              </li>
              <li>
                <a href="a">privacy policy</a>
              </li>
              <li>
                <a href="a">terms & conditions</a>
              </li>
              <li>
                <a href="a">FAQs</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul id='logo'>
          <li>
            <img src={insta} alt=""/>
          </li>
          <li>
            <img src={mail} alt=""/>
          </li>
          <li>
            <img src={phone} alt=""/>
          </li>
        </ul>
      </div>
      <h6>&copy; crystal 2022. all rights reserved</h6>
    </footer>
  )
};

export default Footer;