import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
function Footer({name}){
    return(
        <div className="flex  flex-col ml-50 mb-30">
            <input className="text-6xl font-bold font-primare placeholder-black outline-0" placeholder={name}/>
            <input className="text-2xl font-bold font-primare placeholder-black mt-5 outline-0" placeholder='Other details you’d like to share (Date & Time)'/>
            <div className='text-9xl'>
            <FontAwesomeIcon icon={faReact} className=' left-380 top-150 rotate-220 absolute p-15' style={{color: "#0400ff",fontSize:"750px"}} />
            </div>
        </div>
    ) 
}
export default Footer