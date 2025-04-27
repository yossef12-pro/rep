import { motion, useAnimation } from "framer-motion";
import { style } from "framer-motion/client";
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
function Percent({ percentage ,title}){
    const radius= 200;
    const stroke = 30;
   const normalizedRadius = radius - stroke * 0.5;
   const Circumference= normalizedRadius *2*Math.PI
   

   const [progress, setProgress] = useState(0)

  const { ref, inView } = useInView({
    triggerOnce: true, // يحصل مرة واحدة
    threshold: 0.5, // لما نص العنصر يكون باين
  })
  useEffect(() => {
    if (inView) {
      let start = 0
      const step = () => {
        start += 1
        if (start <= percentage) {
          setProgress(start)
          requestAnimationFrame(step)
        }
      }
      step()
    }
  }, [inView, percentage])
  const strokeDashoffset = Circumference - (progress / 100) * Circumference;
   return (
    <div ref={ref}>
    <svg
      height={radius * 2}
      width={radius * 2}
      className="rotate-[0deg]"
    >
      <circle
        stroke="#eee"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#2569ED"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={Circumference + " " + Circumference}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="80px"
        fill="currentColor"
        fontWeight={"300px"}
      >
        {progress}%
      </text>
    </svg>
    <div className="flex justify-center items-center mt-20">
      <p className="black text-4xl ">{title}</p>
      </div>
    </div>
  );
}
export default Percent