import {useState} from "react"

function TamagotchiForm({user, addTamagotchi}){
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [fav_food, setFavFood] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        setName("")
        setAge(0)
        setFavFood("")
        fetch("/tamagotchis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                age,
                fav_food,
                user_id: user.id
            }),
        })
          .then(r => r.json())
          .then(t => addTamagotchi(t))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>New Tamagotchi</h2>
                <label> Name </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
                <label>Age </label> 
                <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)}/>
                <label>Favorite Food </label>
                <input type="text" id="fav_food" value={fav_food} onChange={e => setFavFood(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default TamagotchiForm