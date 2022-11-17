import React, { Component } from 'react';
import ShowInput from './showInput.jsx';
import ShowList from './showList.jsx';


class Show extends Component {

    render() {
        return (
            <div className='showComponent'>
                <h1>Shows</h1>
                <ShowInput />
                <ShowList />
            </div>
        );
    }
}


export default Show;