import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Auth from './components/auth/Auth'
import Logout from './components/auth/logout/Logout'
import CharacterIndex from './components/character/CharacterIndex';
import CharacterCreate from './components/character/CharacterCreate';
import CharacterSheet from './components/character/sheet/CharacterSheet';
import CharacterEdit from './components/character/CharacterEdit';

function App() {
  const [sessionToken, setSessionToken] = useState("")
 

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, [])
  return (
    <div className="App">
      {sessionToken !== "" ?
      <Logout setToken={setSessionToken}/> : null
    }
    <Routes>
    <Route path="/" element={<Auth updateToken={updateToken} />} />
    <Route path="/character" element={<CharacterIndex token={sessionToken}/>} />
    <Route path="/character/creation" element={<CharacterCreate token={sessionToken}/>}/>
    <Route path="/character/:id" element={<CharacterSheet token={sessionToken}/>}/>
    <Route path="/character/edit/:id" element={<CharacterEdit token={sessionToken}/>}/>
    </Routes>

    </div>
  );
}

export default App;
