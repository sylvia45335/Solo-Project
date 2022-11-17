import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return(
            <div className="movieItem">
                <p>{this.props.title}</p>
                <button className="delButton" onClick={this.props.delClick}>Delete</button>
            </div>
        );
    }
}

export default MovieItem;