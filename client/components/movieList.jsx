import React, { Component } from 'react';
import MovieItem from './movieItem.jsx';

class MovieList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            titles: []
        }
    }
    //componentDidMount here??
    //fetch req to database 
    //prop drill it down to movieItem
    //update state here 
    componentWillMount() {
        fetch('http://localhost:3000/api/movie')
            .then ((res) => res.json())
            .then ((data) => {
                //arr of obj
                //only want name 
                //each name will have its own <li>
                const newData = [];
                for(let i = 0; i < data.length; i++) {
                    newData.push(data[i].name);
                }

                this.setState({ titles: newData });
            })
    }

    // delClick(event) {
    //     event.preventDefault();

    //     fetch('http://localhost:3000/api/movie', { method: 'DELETE' })
    //         .then(() => {
    //             this.setState({ titles: })
    //         })
    // }
    render() {
        //forloop for each item here 
        //need movieitem in list form <li>
        const list = [];

        for(let i = 0; i <this.state.titles.length; i++) {
            list.push(<MovieItem title={this.state.titles[i]} key={i} className="movieTitle"/>)
        }
        return(
            <div className="movieList">
                {list}
            </div>
        );
    }
}

export default MovieList;