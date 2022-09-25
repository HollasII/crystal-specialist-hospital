import oby from '../../images/obgyn-green 1.svg';
import neuro from '../../images/neuro.svg';
import peds from '../../images/peds.svg';
import dental from '../../images/dental.svg';
import cardio from '../../images/cardio.svg';
import ent from '../../images/ent.svg';
import {useState} from 'react';



const Service = () => {
  const [selected, setSelected] = useState(false);
  return(
    <section className={selected ? "newClass" : "services"} id='services'>
      <h1>Our Services</h1>
      <div className='service-content'>
        <div className='service-text'>
        <h2>stuff</h2>
        <p>more stuff fjskjs skdekjd dwkjfc ekf fee ek kd kw wb wk  k ebkj qbkq k q q qe eq fqe eq e</p>
        <p>more stuff fjskjs skdekjd dwkjfc ekf fee ek kd kw wb wk  k ebkj qbkq k q q qe eq fqe eq e</p>
        </div>
        <div className='service-list'>
          <ul id='top-list'>
            <li>
              <img src={oby} alt='gynecology'/>
              {/* <div></div> */}
              <p>ob/gyn</p>
            </li>
            <li>
              <img src={neuro} alt='neurology' />
              {/* <div></div> */}
              <p>neurology</p>
            </li>
            <li>
              <img src={peds} alt='pediatrics' />
              {/* <div></div> */}
              <p>pediatrics</p>
            </li>
          </ul>
          <ul id='bottom-list'>
            <li>
              <img src={dental} alt='dental' />
              {/* <div></div> */}
              <p>dental care</p>
            </li>
            <li>
              <img src={cardio} alt='cardiology' />
              {/* <div></div> */}
              <p>cardiology</p>
            </li>
            <li>
              <img src={ent} alt='E.N.T' />
              {/* <div></div> */}
              <p>ent</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default Service;