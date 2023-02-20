import { useState } from 'react'
import {teams} from '../data/data'
import ReturnButton from './ReturnButton';

export default function Teams() {
    //diachiaro team e setTeam e con useState punto all'array
    const [team, setTeam] = useState(teams)
    //creo una funzione che prenda id del team cliccato e lo va a filtrare 
    //per poi render il componente senza il team selezionato precedentemente
    const removeTeam = (id) => {
        let newTeams = team.filter((el) => el.id !== id);
        setTeam(newTeams)
    }

    return(
        <>
            <h1>Teams</h1>
            {/*Qui iteriamo team che al suo interno avrà lo state con dentro l'array di teams
                dopodiché con map lo iteriamo dentro un arrowfunction dove ogni el (elemento)
                ritornera una view che sarà un div con la key del id del team iterato in modo di avere traccia
                e dentro il div le varie proprietà dell'array.
                
                el.name el.points dove el indica quel determinato elemento stampa i dati delle proprietà name e points.
                
                infine abbiamo un bottone che cliccato creerà un arrowfunction che chiamerà removeTeam passando il
                parametro id del determinato elemento cliccato.  */}
            {team.map((el) => {
                return(
                <div key={el.id}>
                    <h4>{el.name}</h4>
                    <p>{el.points}</p>
                    <button type='button' onClick={()=>removeTeam(el.id)}>X</button>
                </div>
                )
            })}
            <ReturnButton/>
      </>
    )
};

//In questo modo map itirerà l'array creando vari div con dentro i dati delle proprietà di ogni team
//e se clicco sul bottone di ogni singolo div andrò a nascondere il div selezionato.
//Ovviamente una volta ricaricata la pagina tutto i cambiamenti verranno resettati per fare un modo 
//che siano persistenti bisogna usare un database ed eseguire operazioni di CRUD