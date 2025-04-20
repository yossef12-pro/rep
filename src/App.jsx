import React from "react"
import Slide from "./Slide_1"
function App() {
    return(
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
    <Slide/>
    <Slide/>
    <Slide/>
      </div>
    )
  }
  export default App