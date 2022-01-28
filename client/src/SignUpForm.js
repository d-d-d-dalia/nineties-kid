import React, {useState} from "react"

function SignUpForm({setUser}){
    const [username, setUsername] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}),
        }).then(r => {
            console.log(r)
            r.json().then(user => setUser(user))
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label> Username: </label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </form>
    </div>
    )

}

export default SignUpForm