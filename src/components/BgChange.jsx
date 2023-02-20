import { useState } from "react"
import ReturnButton from "./ReturnButton"

export default function BgChange () {
    const colors = [
        'red',
        'black',
        'white',
        'green',
        'orange',
        'blue',
        'yellow',
        'pink',
        'purple',
        'cyan',
        'lightblue',
    ]
    const [color,setColor] = useState('white')
    const [i,setI] = useState(0)
    const changeColor = () => {
        setColor(colors[i % colors.length])
        setI(i + 1)
    }
    return(
        <>
            <h1>Background Change</h1>
            <div>
                <div style={
                    {
                        backgroundColor: color,
                        padding: '100px'
                    }
                }>
                </div>
                <button onClick={() => changeColor()}>Change color</button>
            </div>
            <ReturnButton/>
        </>
    )
}