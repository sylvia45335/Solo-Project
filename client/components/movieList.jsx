import React, { Component } from 'react';
import MovieItem from './movieItem.jsx';

class MovieList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }
    //componentDidMount here??
    //fetch req to database 
    //prop drill it down to movieItem
    //update state here 


    render() {
        //forloop for each item here 
        //need movieitem in list form <li>
        return(
            <div className="movieList">
                <ul>

                </ul>
            </div>
        );
    }
}

export default MovieList;