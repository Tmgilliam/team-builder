import React from 'react';
import './App.css';


const Card = (props) => {
    const person = props.person;
    // getting person object out of props
  return(
   <div>
     <div>{person.name}</div>
     <div>{person.email}</div>
     <div>{person.role}</div>
    </div>
  );
};

export default Card;








// {name:"", email:"", role:""}