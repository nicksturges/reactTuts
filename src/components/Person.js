import React from 'react';
import './Person.css';

// this is a functional component
const person = (props) => {
     // *********** using class based components use  this.props ***********
    return (
        <div className="Person">
            <p>I am {props.name} and I am {props.age} years old! {props.click} </p>
            {/* <p>{props.children}</p> */}
            <input type='text' onChange={props.changed} value={props.older} />
        </div>
       
       )
    };
    export default person;  


 
