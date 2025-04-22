import React, { useEffect } from "react"
import Slide from "./Slide_1/Slide_1"
import Slide2 from "./Slide2/Slide_2"
import Slide3 from "./Slide3/Slide3"
import Footer2 from "./Slide2/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import {useRef } from "react"

function App() {
  const slide1Ref = useRef(null)
  const slide2Ref1 = useRef(null)  // أنشأنا useRef جديد لكل Slide2
  const slide2Ref2 = useRef(null)

useEffect(() => {
  const footer = document.getElementById('footer')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === "slide1" && entry.isIntersecting) {
        footer.classList.add("opacity-0", "pointer-events-none")
      } else if (entry.target.id === "slide2" && entry.isIntersecting) {
        footer.classList.remove("opacity-0", "pointer-events-none")
      }
    })
  }, { threshold: 0.5 })

  if (slide1Ref.current) observer.observe(slide1Ref.current)
    if (slide2Ref1.current) observer.observe(slide2Ref1.current)
    if (slide2Ref2.current) observer.observe(slide2Ref2.current)
    
  return () => observer.disconnect()
}, [])
    return(

      <div  className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
        <FontAwesomeIcon icon={faReact} className='z-10 left-500 top-200 rotate-220 absolute ' style={{color: "#0400ff",fontSize:"70vh"}} />
    <Slide id='slide1' slideRef={slide1Ref} />
    <Slide2 slideRef={slide2Ref1} />
    <Slide2 slideRef={slide2Ref2} />
    <Footer2/>
      </div>
    
    )
  }
  export default App