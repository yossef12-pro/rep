import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiedPiper } from '@fortawesome/free-brands-svg-icons'
import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <div className=" h-full text-4xl mr-12 p-15 flex items-center gap-3 ">
            <FontAwesomeIcon icon={faSquareCaretUp} style={{color: "#74C0FC",}} />
            <FontAwesomeIcon icon={faCircle} style={{color: "#63E6BE",}} />
            <FontAwesomeIcon icon={faSquare} style={{color: "#B197FC",}} />
            <FontAwesomeIcon icon={faPiedPiper} size="2xl" style={{color: "#F12D47"}} />
        </div>
    ) 
}

export default Header