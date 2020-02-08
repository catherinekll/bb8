import React , {Component} from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';



class App extends Component {
    constructor() {
        super();
        this.state = {
            myweatherinfo: [],
            searchValue: ''
        }
    }

    componentDidMount(){
        fetch("https://api.data.gov.sg/v1/environment/air-temperature")
        .then(response=> {return response.json()})
        .then(weather => {
            const updatedWeather = [];
            for (let i = 0; i < weather.metadata.stations.length; i++) {
                updatedWeather.push({ ...weather.metadata.stations[i], ...weather.items[0].readings[i] })
            }
            this.setState({myweatherinfo: updatedWeather})


        })
    }

    onSearchChange = (a) => {
        console.log(a.target.value)
        this.setState({searchValue: a.target.value}) //helper function to change the value in our stored data
    }

    render () {
        let filteredWeather = this.state.myweatherinfo.filter(eachWeatherInfo => eachWeatherInfo.name.toLowerCase().includes(this.state.searchValue));
        
        return (
            <div className="tc">
                <h1>Weather App</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList weatherinfo={filteredWeather} />
            </div>
        )
    }
}


export default App;