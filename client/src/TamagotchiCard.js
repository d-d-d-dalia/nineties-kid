import React, {useState} from "react"
import EditForm from "./EditForm"

function TamagotchiCard({tamagotchi, removeTamagotchi, user, editTamagotchi}) {

    const [editForm, setEditForm] = useState(false)
    const [editButton, setEditButton] = useState("Show Edit Form")

    function handleDelete(tamagotchi){
        fetch(`/tamagotchis/${tamagotchi.id}`, {method: "DELETE"}).then(r => {
            removeTamagotchi(tamagotchi)
        })
    }

    function handleEditButtonClick(){
        setEditForm(!editForm)
        !editForm ? setEditButton("Hide Edit Form") : setEditButton("Show Edit Form")
    }

    return(
        <div>
            <h1>{tamagotchi.name}</h1>
            <h3>age: {tamagotchi.age}</h3>
            <h3>favorite food: {tamagotchi.fav_food}</h3>
            <br></br>
            <button onClick={e => handleDelete(tamagotchi)}>Delete</button>
            <button onClick={e => handleEditButtonClick()}>{editButton}</button>
            {editForm ? <EditForm handleEditButtonClick={handleEditButtonClick} editTamagotchi={editTamagotchi} tamagotchi={tamagotchi} user={user}/> : null}
        </div>
    )
}

export default TamagotchiCard