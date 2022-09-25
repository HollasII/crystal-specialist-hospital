import about from '../../images/about us.png';

const About = () => {
  return(
    <section className="about-us" id='about'>
      {/* <div className='image-holder'>
      </div> */}
      <img src={about} alt="about us" srcset="" />
      <div  className='about-text'>
        <h1>about us</h1>
        <p>
          Lörem ipsum monoss teralingar. Ger kärlekslås. Vis suprajåss. Odyr. Epikulig tepegt kvasir. Tusk dosat, bedir, fast resade. Du kan vara drabbad. 
          Plaktig hypolig teplada. Spen gel som gor. Upöheten fera om diakanar. Diakad dikanas. Bioplastisk fang dir. Sepöhet jäsa. Du kan vara drabbad. 
          Kakåjåning sovöson, om sunat. Vakarat pansexuell. Trehynade pseudogt i geor porat. Avanera vasade. Euroll anar. Autol prenir.
        </p>
        <a href="z" className='cta'>learn more</a>
      </div>
    </section>
  )
}

export default About;