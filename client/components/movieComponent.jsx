import React, { Component } from 'react';
import MovieInput from './movieInput.jsx';
import MovieList from './movieList.jsx';


class Movie extends Component {

    render() {
        return (
            <div className='movieComponent'>
                <h1>Movies</h1>
                <MovieInput />
                <MovieList />
            </div>
        );
    }
}


export default Movie;