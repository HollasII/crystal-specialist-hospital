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
  // let change = useRef(null);
  // const[title, setTitle] = useState("");
  // useEffect(() => {
  //   setTitle(change.current.children(0))
  // })
  const Changer = (e)=>{
    e.preventDefault()
    const style = e.target;
    if(selected === false){
      
      console.log(`you clicked ${style}`);
    }
    setSelected( current => !current);
    // let style={background: selected ? '#6EEFB1' : ''};
    // if (selected === true){
    //   setSelected(false)
    //   // let style= {styleObject.li}
      
    // }else{
    //   setSelected(true)
    // }
  }
  return(
    <section className={selected ? "serviceClicked" : "services"}>
      <h1>Our Services</h1>
      <div className='service-content'>
        <div className='service-text'>
        <h2>j</h2>
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
            <li onClick={Changer}>
              <img src={oby} alt='gynecology'/>
              {/* <div></div> */}
              <p>ob/gyn</p>
            </li>
            <li  onClick={Changer}>
              <img src={neuro} alt='neurology' />
              {/* <div></div> */}
              <p>neurology</p>
            </li>
            <li  onClick={Changer}>
              <img src={peds} alt='pediatrics' />
              {/* <div></div> */}
              <p>pediatrics</p>
            </li>
          </ul>
          <ul id='bottom-list'>
            <li  onClick={Changer}>
              <img src={dental} alt='dental' />
              {/* <div></div> */}
              <p>dental care</p>
            </li>
            <li  onClick={Changer}>
              <img src={cardio} alt='cardiology' />
              {/* <div></div> */}
              <p>cardiology</p>
            </li>
            <li  onClick={Changer}>
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