import emeka from '../../images/emeka.png';
import teni from '../../images/teni.png';
import tao from '../../images/taofeek.png';

const Doctors = () => {
  return(
    <section className="doctors">
      <h1>our doctors</h1>
      <ul>
        <li>
          <img src={emeka} alt="DR. Emeka Okechukwu"></img>
          <div>
            <h3>DR. Emeka Okechukwu</h3>
            <span>Pediatric</span>
            <p>
              DR. Emeka is a top professional 
              with over 20 years exprience.
            </p>
          </div>
        </li>
        <li>
          <img src={teni} alt="Dr. Teniola Ogunbayode" />
          <div>
            <h3>Dr. Teniola Ogunbayode</h3>
            <span>General</span>
            <p>
              DR. Teni has saved many patients
              with common illness in her career.
            </p>
          </div>
        </li>
        <li>
          <img src={tao} alt="Dr. Taofeek  Adeyemo  " />
          <div>
            <h3>Dr. Taofeek  Adeyemo  </h3>
            <span>OB/GYN</span>
            <p>
              DR. Pheeky ranked number 1 by NHS
              provides top notch OB/GYN services.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
};

export default Doctors;