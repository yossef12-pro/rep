import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
function Content(){
    return(
         <div className='flex justify-center items-center gap-90'>
            <div className="font-primare  space-y-5  ">
                <h1 className="text-blue-500 text-5xl mb-10 ">Problem Statement</h1>
                <p className="text-4xl text-black dark:text-white">Write a sentence stating the problem you</p>
                <p className="text-4xl text-black dark:text-white">solve this problem. What pain points are </p>
                <p className="text-4xl text-black dark:text-white">you dealing with and how it is expected to</p>
                <p className="text-4xl text-black dark:text-white">make the users life better whilst achieving</p>
                <p className="text-4xl text-black dark:text-white">business goals.</p>
                <p className="text-4xl text-black dark:text-white">Write a sentence stating the problem you</p>
                <p className="text-4xl text-black dark:text-white">plan to solve for and why it is important to</p>
                <p className="text-4xl text-black dark:text-white">solve this problem. What pain points are</p>
                <p className="text-4xl text-black dark:text-white">you dealing with and how it is expected to</p>
                <p className="text-4xl text-black dark:text-white">make the users life better whilst achieving </p>
                <p className="text-4xl text-black dark:text-white">business goals.</p>
            </div>
            <div className='w-200 h-220 bg-blue-400 rounded-3xl flex justify-center items-center'>
            <FontAwesomeIcon icon={faImage} style={{fontSize:'10rem'}} />
            </div>
         </div>
    )
}
export default Content