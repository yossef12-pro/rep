
import Mobile from "./mobile"
function Slide4(){
    return(
    <div className="snap-start">
        <div className="p-50">
            <p className="text-blue-600 text-5xl font-semibold mb-60 -translate-x-5 -translate-y-15 font-primare">Old User Experince</p>
        </div>
        <div className="flex justify-center items-center gap-20">
        <Mobile title="Home Screen"  title3="Checkout"/>
        <Mobile title="Product Page"/>
        <Mobile title="Checkout"/>
        </div>
    </div>
    )
}
export default Slide4