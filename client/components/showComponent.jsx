import React, { Component } from 'react';
import ShowInput from './showInput.jsx';
import ShowList from './showList.jsx';


class Show extends Component {

    render() {
        return (
            <div className='showComponent'>
                <h1 className='show'>Shows</h1>
                <div className="showBox">
                    <ShowInput />
                    <ShowList />
                </div>
            </div>
        );
    }
}


export default Show;