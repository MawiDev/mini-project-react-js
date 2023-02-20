import { useState } from "react"

export default function Counter () {
    //Qui dichiaro un array con all'interno una variabile counter e una setCounter.
    //e imposto lo stato di counter a 0
    const [counter, setCounter] = useState(0)
    //dichiaro una funzione che incrementa in counter.
    const incrementCounter = () => {
        //quando viene eseguita la funzione chiamo il setCounter e prendo il valore di counter e gli aggiungo 1.
        setCounter(counter + 1)
    }
    return(
        <>
        <h1>Counter</h1>
        <div>
            {/* Qui nella view mostro il counter che partirà con il valore 0
                e dopodiche creo un bottone che cliccato chiamera la funzione incremet
                e il counter incrementerà di 1*/}
            <h4>{counter}</h4>
            <button onClick={() => incrementCounter()}>increment</button>
        </div>
        </>
    )
}