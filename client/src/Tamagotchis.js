import React, {useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import TamagotchiCard from "./TamagotchiCard"
import TamagotchiForm from "./TamagotchiForm"

function Tamagotchis({user}) {
    const [tamagotchis, setTamagotchis] = useState([])

    function removeTamagotchi(tamagotchi){
        setTamagotchis((tamagotchis)=> tamagotchis.filter(t => t.id !== tamagotchi.id))
    }

    function addTamagotchi(tamagotchi){
        setTamagotchis([...tamagotchis, tamagotchi])
    }

    function editTamagotchi(tamagotchi){
        const edited = tamagotchis.map(t =>{
            if (tamagotchi.id === t.id) {
                return tamagotchi
            }
            return t
        })
        setTamagotchis(edited)
    }

    useEffect(()=> {
        fetch("/tamagotchis")
            .then((r) => r.json())
            .then(setTamagotchis)
    }, [])

    return (
        <div>
            <h1>Tamagotchis</h1>
            <Link to={`/about`}><h4>About</h4></Link>
            {tamagotchis.map(t => <TamagotchiCard editTamagotchi={editTamagotchi} tamagotchi={t} key={t.id} removeTamagotchi={removeTamagotchi} user={user}/>)}
            <TamagotchiForm user={user} addTamagotchi={addTamagotchi}/>
        </div>
    )
}

export default Tamagotchis