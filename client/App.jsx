import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Movie from './components/movieComponent.jsx';
import Show from './components/showComponent.jsx';

//should render my main page here 
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* maybe add logo here */}
                    <h1 className="App-title">Watch List</h1>
                </header>
                <div className="movieAndShow">
                    <Movie />
                    <Show />
                </div>
            </div>
        )
    }
}









export default App;