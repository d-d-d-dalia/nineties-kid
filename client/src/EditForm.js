import {useState} from "react"

function EditForm({tamagotchi, user, editTamagotchi, handleEditButtonClick}){
    const [name, setName] = useState(tamagotchi.name)
    const [age, setAge] = useState(tamagotchi.age)
    const [fav_food, setFavFood] = useState(tamagotchi.fav_food)

    function handleSubmit(e){
        e.preventDefault()
        setName("")
        setAge(0)
        setFavFood("")
        fetch(`/tamagotchis/${tamagotchi.id}`, {
            method: "PATCH",
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
          .then(t => {
              editTamagotchi(t)
              handleEditButtonClick()
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit</h2>
            <label> Name </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <label>Age </label> 
            <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)}/>
            <label>Favorite Food </label>
            <input type="text" id="fav_food" value={fav_food} onChange={e => setFavFood(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}

export default EditForm