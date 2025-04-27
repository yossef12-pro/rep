import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
library.add(faUpload,faFeather)
function Body(){
    return(
        <div className=" h-full ml-35 mb-20">
            <div className=' ml-10'>
            <input className='text-3xl mb-10 text-blue-500 font-bold font-primare outline-0 placeholder-blue-500 'placeholder='COMPANY NAME'/>
            <header className="text-8xl font-bold font-primare"> Design Project</header>
            <p className="text-8xl font-bold font-primare placeholder-black outline-0 mt-10">Project Name</p>
            </div>
        </div>
    ) 
}
export default Body