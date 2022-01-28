import React, {useEffect, useState} from "react"
import TamagotchiCard from "./TamagotchiCard"
import TamagotchiForm from "./TamagotchiForm"

function Tamagotchis({user, editTamagotchi}) {
    const [tamagotchis, setTamagotchis] = useState([])

    function removeTamagotchi(tamagotchi){
        setTamagotchis((tamagotchis)=> tamagotchis.filter(t => t.id !== tamagotchi.id))
    }

    function addTamagotchi(tamagotchi){
        setTamagotchis([...tamagotchis, tamagotchi])
    }

    function editTamagotchi(){
        console.log('need to update state here')
    }

    useEffect(()=> {
        fetch("/tamagotchis")
            .then((r) => r.json())
            .then(setTamagotchis)
    }, [])

    return (
        <div>
            <h1>Tamagotchis</h1>
            {tamagotchis.map(t => <TamagotchiCard editTamagotchi={editTamagotchi} tamagotchi={t} key={t.id} removeTamagotchi={removeTamagotchi} user={user}/>)}
            <TamagotchiForm user={user} addTamagotchi={addTamagotchi}/>
        </div>
    )
}

export default Tamagotchis