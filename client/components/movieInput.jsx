import React, { Component, useState } from 'react';
import axios from 'axios';

function MovieInput() {
    const [input, setInput] = useState({
        name: ''
    })
    //do i need to change the state of this??
    //when something is inputted i want it to send to DB
    //movieList should be updated 
    //post request in componentWillUpdate
    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();

        const obj = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: input.name
            })
        }
        
        fetch('http://localhost:3000/api/movie', obj)
            .then ((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }

    return(
        <div className="movieAdd">
             <form>
                <input className="movieInput" 
                        name='name' 
                        value={input.title} 
                        type="text" 
                        placeholder='Movie title ...' 
                        onChange={handleChange}/>
                <input className="movieButton" type="submit" value="+" onClick={handleClick}/>
            </form>
        </div>
     );
    
}

export default MovieInput;