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
                    <img src="https://img.freepik.com/free-vector/cute-panda-playing-laptop-cartoon-vector-icon-illustration-animal-technology-icon-isolated_138676-5387.jpg?w=2000" alt="Logo" width="100px" className="logo" />
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