import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine } from 'react-sparklines';
import GoogleMap from '../components/google_map';

// components
import Chart from '../components/chart';

class WeatherList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {weather: this.props.weather};
    // }
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp); 
        const pressures = cityData.list.map(weather => weather.main.pressure); 
        const humidities = cityData.list.map(weather => weather.main.humidity); 
        const {lon, lat} = cityData.city.coord;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}  /> </td>
                <td> <Chart data={temps} color='red' units='F'/></td>
                <td> <Chart data={pressures} color='green' units='kPa'/></td>
                <td> <Chart data={humidities} color='blue' units='%'/></td>
            </tr>
        );

    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (kPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//this connects the container to the reducer
function mapStateToProps({weather}) {
    return {weather};
};

export default connect(mapStateToProps)(WeatherList);