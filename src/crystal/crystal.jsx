import Header from "./components/header.jsx";
import Service from "./components/services.jsx";
import About from "./components/about.jsx"
import Doctors from "./components/doctors.jsx";
import Footer from "./components/footer.jsx";
import './css/style.css'

const Crystal = () =>{
  return(
    <div>
      <Header/>
      <Service/>
      <About/>
      <Doctors/>
      <Footer/>
    </div>
  )
}

export default Crystal;