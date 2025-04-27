import React from "react";
import { TextFade } from "./Rotate";
export default function usage() {
    return <TextFade
    direction="down"
    className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
    >
    <h2 className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[2rem]">
        Fade Down
    </h2>
    <div className="text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
    </div>
</TextFade>
}