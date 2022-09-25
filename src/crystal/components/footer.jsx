import insta from '../../images/insta.svg';
import mail from '../../images/mail.svg';
import phone from '../../images/phone.svg';


const Footer = () => {
  return(
    <footer>
      <div>
        <h1>CRYSTAL SPECIALIST HOSPITAL</h1>
        <ul>
          <li>
            <h3>contact us</h3>
            <ul>
              <li><a href="tel:+234-905-421-2352">09054212352</a></li>
              <li><a href="mailto:nicholasolajide@gmail.com">nicholasolajide@gmail.com</a></li>
              <li>148/150 akowonjo rd, alimosho, lagos</li>
            </ul>
          </li>
          <li>
            <h3>services</h3>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">services</a>
              </li>
              <li>
                <a href="">doctors</a>
              </li>
              <li>
                <a href="">crystal care</a>
              </li>
              <li>
                <a href="">reviews</a>
              </li>
            </ul>
          </li>
          <li>
            <h3>information</h3>
            <ul>
              <li>
                <a href="">about us</a>
              </li>
              <li>
                <a href="">privacy policy</a>
              </li>
              <li>
                <a href="">terms & conditions</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
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