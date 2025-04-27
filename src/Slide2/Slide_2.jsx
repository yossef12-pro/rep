import React from "react"
import Body2 from "./Body"
import Footer2 from "./Footer"
function Slide2({id,slideref}){
    return(
        <div id={id} ref={slideref} className="dark:text-white">
            <Body2/>
        </div>
    ) 
}
export default Slide2