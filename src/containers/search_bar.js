import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        // this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange = (event) => {
        this.setState({term: event.target.value})
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        // go Fetch Weather Data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    };

    //go Fetch Weather Data


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                placeholder="Get a 5 day forecast for your favorite city!"
                className='form-control'
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    };
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
};

//pass null because this container does not need state passed to it. 
//the function mapDispatchToProps must always be the second argument 
export default connect(null,mapDispatchToProps)(SearchBar);