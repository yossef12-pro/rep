import React, { useEffect, useRef, useState } from "react"
import Slide from "./Slide_1/Slide_1"
import Slide2 from "./Slide2/Slide_2"
import Slide3 from "./Slide3/Slide3"
import Slide4 from "./Slide4/slide4"
import Slide5 from "./Slide5/slide5"
import Footer2 from "./Slide2/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

function App() {
  const slide1Ref = useRef(null)
  const slide2Ref1 = useRef(null)
  const slide3Ref = useRef(null)

  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "slide1" && entry.isIntersecting) {
          setShowFooter(false)
        } else if (entry.target.id === "slide2" && entry.isIntersecting) {
          setShowFooter(true)
        }
      })
    }, { threshold: 0.5 })

    if (slide1Ref.current) observer.observe(slide1Ref.current)
    if (slide2Ref1.current) observer.observe(slide2Ref1.current)
    if (slide3Ref.current) observer.observe(slide3Ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
      <FontAwesomeIcon icon={faReact} className='z-10 left-500 top-200 rotate-220 absolute' style={{ color: "#0400ff", fontSize: "70rem" }} />
      <Slide id='slide1' slideref={slide1Ref} />
      <Slide2 id='slide2' slideref={slide2Ref1} />
      <Slide3 id='slide2' slideref={slide3Ref} />
      <Slide4/>
      <Slide5/>
      <Footer2 visible={showFooter} />
    </div>
  )
}

export default App