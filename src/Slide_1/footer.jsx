import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function Footer({name}){
    return(
        <div className="flex  flex-col ml-50 mb-30 relative w-screen">
            <input className="text-6xl font-bold font-primare placeholder-black outline-0 " placeholder={name}/>
            <input className="text-2xl font-bold font-primare placeholder-black mt-5 outline-0" placeholder='Other details you’d like to share (Date & Time)'/> 
        </div>
    ) 
}
export default Footer