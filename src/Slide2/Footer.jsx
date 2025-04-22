import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
function Footer2(){
    return(
        <div id='footer' className="sticky bottom-0 z-100 bg-black h-28 -translate-y-[-1] w-full flex justify-between">
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