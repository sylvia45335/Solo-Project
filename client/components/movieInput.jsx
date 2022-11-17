import React, { Component } from 'react';

class MovieInput extends Component {
    //do i need to change the state of this??
    //when something is inputted i want it to send to DB
    //movieList should be updated 
    //post request in componentWillUpdate
    render() {
        return(
            <div className="movieAdd">
                <form onSubmit="">
                    <input className="movieInput" type="text" placeholder='Movie title ...' />
                    <input className="movieButton" type="submit" value="+" />
                </form>
            </div>
        );
    }
}

export default MovieInput;