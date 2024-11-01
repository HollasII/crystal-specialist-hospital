import oby from '../../images/obgyn-green 1.svg';
import neuro from '../../images/neuro.svg';
import peds from '../../images/peds.svg';
import dental from '../../images/dental.svg';
import cardio from '../../images/cardio.svg';
import ent from '../../images/ent.svg';
import {useState} from 'react';
// useRef, useEffect
// let styleObject = {
//   li: {
//     background: "#6EEFB1"
//   }
// }

const Service = () => {
  const [selected, setSelected] = useState(false);
  const [serviceText, setServiceText] = useState("Our Services");
  
  const Changer = (e, text)=>{
    e.preventDefault()
    setSelected( current => !current);
    setServiceText(text);
  }
  return(
    <section className={selected ? "serviceClicked" : "services"}>
      <h1>Our Services</h1>
      <div className='service-content'>
        <div className='service-text'>
        <h2>{serviceText}</h2>
        <p>
          Syse infrans att dedade. Redar fäsat. Älogi hypol. Antere nydavarat och hemil. 
          Dist kyning. Kroska bröllopskoordinator. Teletotal. Mor tin. 
        </p>
        <p>
          Spejörar befaladat. Lavis kvasideledes. 
          Dande dak. Anteck ur dick. 
          Skurkstat larad henifiera. Belogi koliga selig. 
        </p>
        </div>
        <div className='service-list'>
          <ul id='top-list'>
            <li onClick={(e) => Changer(e, "ob/gyn")}
              style={{ backgroundColor: selected && serviceText === "ob/gyn" ? '#6EEFB1' : '' }}>
              <img src={oby} alt='gynecology'/>
              {/* <div></div> */}
              <p>ob/gyn</p>
            </li>
            <li  onClick={(e) => Changer(e, "neurology")}
              style={{ backgroundColor: selected && serviceText === "neurology" ? '#6EEFB1' : '' }}>
              <img src={neuro} alt='neurology' />
              {/* <div></div> */}
              <p>neurology</p>
            </li>
            <li  onClick={(e) => Changer(e, "pediatrics")}
              style={{ backgroundColor: selected && serviceText === "pediatrics" ? '#6EEFB1' : '' }}>
              <img src={peds} alt='pediatrics' />
              {/* <div></div> */}
              <p>pediatrics</p>
            </li>
          </ul>
          <ul id='bottom-list'>
            <li  onClick={(e) => Changer(e, "dental care")}
              style={{ backgroundColor: selected && serviceText === "dental care" ? '#6EEFB1' : '' }}>
              <img src={dental} alt='dental' />
              {/* <div></div> */}
              <p>dental care</p>
            </li>
            <li  onClick={(e) => Changer(e, "cardiology")}
              style={{ backgroundColor: selected && serviceText === "cardiology" ? '#6EEFB1' : '' }}>
              <img src={cardio} alt='cardiology' />
              {/* <div></div> */}
              <p>cardiology</p>
            </li>
            <li  onClick={(e) => Changer(e, "ENT")}
              style={{ backgroundColor: selected && serviceText === "ENT" ? '#6EEFB1' : '' }}>
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