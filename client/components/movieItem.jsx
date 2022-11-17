import React, { Component } from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.delClick = this.delClick.bind(this);
    }


    delClick(event) {
        event.preventDefault();
        console.log(this.props.title);

        const obj = {
            method: 'DELETE',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify({name: this.props.title})
        }

        fetch('http://localhost:3000/api/movie', obj)
            .then((res) => console.log(res))
            
    }
    render() {
        return(
            <div className="movieItem">
                <p>{this.props.title}</p>
                <button className="delButton" onClick={this.delClick}>Delete</button>
            </div>
        );
    }
}

export default MovieItem;