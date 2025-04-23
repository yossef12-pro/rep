import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
function Footer2({visible}){
    return(
        <div id='footer' className={`
            fixed bottom-0 z-50 bg-black h-24 w-full flex justify-between items-center px-20
            transition-all duration-700
            ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}
          `}>
            <div className='flex justify-center items-center text-5xl px-20 gap-3 '>
         <FontAwesomeIcon icon={faSquareCaretUp} style={{color: "#fff",}} />
         <FontAwesomeIcon icon={faCircle} style={{color: "#fff",}} />
         <FontAwesomeIcon icon={faSquare} style={{color: "#fff",}} />
         </div>
         <div className='flex justify-center items-center px-20'>
            <p className='text-3xl text-amber-50 font-primare'>Company Name</p>
         </div>
        </div>
    )
}
export default Footer2