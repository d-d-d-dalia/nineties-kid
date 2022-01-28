import './App.css';
import { Route, Switch} from 'react-router-dom';
import TamagotchiForm from './TamagotchiForm';
import {useState} from "react"
import Tamagotchis from './Tamagotchis';
import LoginForm from "./LoginForm"

//stretch
//password protection
//deployment

//MVP
//error handling on the front end
//update state of tamagotchis after patch
//debug why editing name changes names of all tamagotchi

function App() {
  const [user, setUser] = useState(null)

  function handleLogoutClick(){
    fetch("/logout", {method: "DELETE"}).then(r => {
      setUser(null)
    })
  }

  if (!user) return <LoginForm setUser={setUser}/>

  return (
    <>
      <main>
        <Switch>
          <Route path="/new">
            <TamagotchiForm/>
          </Route>
          <Route path="/">
            <Tamagotchis user={user}/>
            <button onClick={handleLogoutClick}>Lougout</button>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
