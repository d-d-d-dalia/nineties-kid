import './App.css';
import { Route, Switch} from 'react-router-dom';
import TamagotchiForm from './TamagotchiForm';
import {useState, useEffect} from "react"
import Tamagotchis from './Tamagotchis';
import LoginForm from "./LoginForm"
import About from "./About"

//stretch
//password protection
//deployment
//maybe add another model
//nav bar

//MVP
//error handling on the front end
//add one more route

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

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
          <Route exact path="/">
            <Tamagotchis user={user}/>
            <button onClick={handleLogoutClick}>Logout</button>
          </Route>
          {/* <Route exact path="/new">
            <TamagotchiForm user={user}/>
          </Route> */}
          <Route exact path="/about">
            <About/> 
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
