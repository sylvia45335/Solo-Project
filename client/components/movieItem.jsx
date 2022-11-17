import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return(
            <div className="movieItem">
                <p> need name here </p>;
                <button className="delButton">Delete</button>
            </div>
        );
    }
}

export default MovieItem;