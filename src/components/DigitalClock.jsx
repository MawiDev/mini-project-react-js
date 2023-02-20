import { useState } from "react";
import ReturnButton from "./ReturnButton";

export default function DigitalClock () {
    const clock = new Date()
    let [time,setTime] = useState()
    const [wait,setWait] = useState(true)
    setTimeout(() => {
        setTime(time=clock.toLocaleTimeString())
        setWait(false)
    }, 1000);
    return(
        <>
            <h1>Digital Clock</h1>

            <div style={
                {
                    border:'2px solid white',
                    borderRadius:'10px',
                    paddingLeft:'25px',
                    paddingRight:'25px'
                }
            }>
                <h1>{wait ? clock.toLocaleTimeString() : time}</h1>
            </div>

            <ReturnButton/>
        </>
    )
}