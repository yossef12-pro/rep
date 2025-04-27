import Percent from "./percent";
function Slide6(){
    return(
        <div className="snap-start flex flex-col p-[24rem]">
            <div>
                <p className="text-7xl font-primare font-bold -translate-y-80 text-blue-500">The PainPoint</p>
                <p className="text-8xl font-primare -translate-y-60 font-bold text-black dark:text-white">Problem  Statistics</p>
            </div>
            <div className="flex justify-center items-center gap-50">
        <Percent percentage={35} title={'App Downloads'} />
        <Percent percentage={50} title={'App Interactions'} />
        <Percent percentage={70} title={'App Subscriptions'} />
        </div>
        </div>
    )
}
export default Slide6