import { useEffect, useState } from "react";
import ReturnButton from "./ReturnButton";

export default function Viewport() {
    const [size,setSize] = useState(window.innerWidth)

    function windowSize() {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize',windowSize)
        return () => {
            window.removeEventListener('resize', windowSize)
        }
    })

    return(
        <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
            <h1 style={{ color: '#bd00ff' }} className="text-5xl asher-punk font-extrabold uppercase text-white">View Device</h1>
            <div className="text-4xl text-white m-6 p-6 rounded-lg">
                <h1>{size}px</h1>
            </div>
            <ReturnButton />
        </div>
    )
}