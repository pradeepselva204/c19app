import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import {fetchData} from './api';
import c19Image from './images/covid19.png'
class App extends React.Component{
    state={
        data:{},
        country:''
        
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data : fetchedData });
        
        
    }

    handleCountryChange=async(country)=>{
        const fetchedData = await fetchData(country);
        this.setState({ data : fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={c19Image} alt="Covid 19 App Header Image"/>
                <CountryPicker handleCountryChange={this.handleCountryChange} ></CountryPicker>
                <Cards data={data}></Cards>                                
                <Chart data={data} country={country}></Chart>
                <p>Dashboard design: Pradeep Selvaraj</p>
            </div>
        )
    };
}

export default App;