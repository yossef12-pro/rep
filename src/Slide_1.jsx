import React from "react"
import Body from "./Body"
import Header from "./header"
import Footer from "./footer"
function Slide() {
  return(
    <div className="bg-white flex flex-col">
      {/* HEADER */}
      <div className="flex justify-end">
      <Header/>
      </div>
      {/* HEADER */}


      {/* =======BODY====== */}
      <div className="flex justify-start items-center flex-grow">
      <Body/>
      </div>
      {/* =======BODY====== */}


      {/* =======FOOTER====== */}
      <div>
        <Footer name ='Your Full Name'/>
      </div>
      {/* =======FOOTER====== */}

    </div>
  )
}
export default Slide