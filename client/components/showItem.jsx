import React, { Component } from 'react';

class ShowItem extends Component {
    render() {
        return(
            <div className="showItem">
                <p>{this.props.title}</p>
                <button className="delButton" onClick={this.props.delClick}>Delete</button>
            </div>
        );
    }
}

export default ShowItem;