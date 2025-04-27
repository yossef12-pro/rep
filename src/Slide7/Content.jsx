
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { TextFade } from "./Rotate.tsx";

export default function Content() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = ["Ideation", "Research", "Develop", "Testing", "Deploy"];

  return (
    <div className="flex gap-5 mb-120">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className="flex flex-col justify-center items-center gap-20 font-primare font-bold cursor-pointer"
        >
          <p className="text-6xl cursor-default">{item}</p>
          <div
            className={`w-100 h-15 rounded-2xl ${
              activeIndex === index ? "bg-blue-600" : "bg-blue-100"
            }`}
          ></div>
          {activeIndex === index && (
            <div className="flex flex-col gap-10 absolute translate-y-100 justify-center items-center">
            
           <TextFade
               direction="down"
               className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
               >
               <h2 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[2rem] space-y-10">
               <p className="text-5xl">App Analytics</p>
            <p className="text-5xl">Heat Mapping</p>
            <p className="text-5xl">User Surveys</p>
            <p className="text-5xl">User Interviews</p>
            <p className="text-5xl">A/B testing</p>
               </h2>
           </TextFade>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
