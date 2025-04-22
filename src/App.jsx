import React from "react"
import Slide from "./Slide_1/Slide_1"
import Slide2 from "./Slide2/Slide_2"
import Slide3 from "./Slide3/Slide3"
import Footer2 from "./Slide2/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function App() {
    return(

      <div  className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
        <FontAwesomeIcon icon={faReact} className='z-10 left-500 top-200 rotate-220 absolute ' style={{color: "#0400ff",fontSize:"70vh"}} />
    <Slide />
    <Slide2 />
    <Slide3/>
      </div>
    
    )
  }
  export default App