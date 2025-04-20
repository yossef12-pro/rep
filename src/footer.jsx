import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function Footer({name}){
    return(
        <div className="flex  flex-col ml-50 mb-30 relative h-screen w-screengit add .">
            <input className="text-6xl font-bold font-primare placeholder-black outline-0 " placeholder={name}/>
            <input className="text-2xl font-bold font-primare placeholder-black mt-5 outline-0" placeholder='Other details you’d like to share (Date & Time)'/> 
            <FontAwesomeIcon icon={faReact} className=' left-380 top-20 rotate-220 absolute ' style={{color: "#0400ff",fontSize:"50vh"}} />
        </div>
    ) 
}
export default Footer