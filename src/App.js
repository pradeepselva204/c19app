import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import {fetchData} from './api';

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
                <CountryPicker handleCountryChange={this.handleCountryChange} ></CountryPicker>
                <Cards data={data}></Cards>                                
                <Chart data={data} country={country}></Chart>
                <p>Dashboard design: <a href="https://www.linkedin.com/in/pradeep-selvaraj-70b3a6134/">Pradeep Selvaraj</a></p>
            </div>
        )
    };
}

export default App;