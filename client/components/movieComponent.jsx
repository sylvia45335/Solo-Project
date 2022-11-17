import React, { Component } from 'react';
import MovieInput from './movieInput.jsx';
import MovieList from './movieList.jsx';


class Movie extends Component {

    render() {
        return (
            <div className='movieComponent'>
                <h1 className='movie'>Movies</h1>
                <div className="movieBox">
                    <MovieInput />
                    <MovieList />
                </div>
            </div>
        );
    }
}


export default Movie;