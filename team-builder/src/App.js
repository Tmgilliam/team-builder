import React, {useState} from 'react';
import './App.css';
import Card from './Card.js';
import Form from './Forms.js';

function App(){
  const [people, setPeople] = useState([
    { name:"Tatianna", email:"webdevdungeon@gmail.com", role:"tl"},
    { name:"Desi-B",   email:"desiboo@gmail.com", role: "sub"},
  ]);
    return (
    <div className="App">  
      <Form setPeople={setPeople}/>
      {people.map(person => <Card person={person}/>)}
        
    </div>
    );
}





export default App;