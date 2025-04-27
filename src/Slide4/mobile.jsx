import { motion } from "framer-motion"
function Mobile(props){
    return(
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex justify-center items-center flex-col font-primare -translate-y-20"
    >
           <p className="text-2xl text-black -translate-y-50 font-semibold dark:text-white"> {props.title}</p>
        <div className="h-190 w-90 bg-black rounded-[3rem] flex justify-center items-center -translate-y-40">
            
            <div className="h-180 w-80 bg-blue-500 rounded-4xl flex justify-center items-center flex-col text-2xl text-white">
                <p>Replace Blue Screen</p>
                <p>W262 x H568</p>
                <p>Corner Radius 20</p>
            </div>
        </div>
        </motion.div>
    )
}
export default Mobile