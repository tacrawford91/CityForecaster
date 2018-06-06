import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {weather: this.props.weather};
    // }
    renderWeather(cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )

    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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