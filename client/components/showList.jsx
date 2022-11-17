import React, { Component } from 'react';
import ShowItem from './showItem.jsx';

class ShowList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            titles: []
        }
    }
    //componentDidMount here??
    //fetch req to database 
    //prop drill it down to showItem
    //update state here 
    componentWillMount() {
        fetch('http://localhost:3000/api/show')
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

    render() {
        //forloop for each item here 
        //need showitem in list form <li>
        const list = [];

        for(let i = 0; i <this.state.titles.length; i++) {
            list.push(<ShowItem title={this.state.titles[i]} key={i} className="showTitle"/>)
        }
        return(
            <div className="showList">
                {list}
            </div>
        );
    }
}

export default ShowList;