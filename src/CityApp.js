import React, { Component } from 'react';
import Cities from './cities';

let cityData = require('./cities.json')
// console.log(cityData)

class CityApp extends Component {
    constructor(){
        super();
        console.log("constructor ran");
        this.state = {cityData:[]}
        console.log(this.state);
    }
    componentDidMount(){ //already binded
        // const url = require(`./cities.json`);
        this.setState({
            cityData: cityData
        })
        console.log("componentmounted");
    }
    render() {
        console.log("rendered man");
        console.log(this.state.cityData);
        const citiesArray = this.state.cityData.map((cities, i)=>{
            console.log(cities);
            return (
                <Cities key={i} data={cities} />
            )
        })
        return (
            <div>
                {citiesArray}
            </div>

        )
    }
}

export default CityApp;