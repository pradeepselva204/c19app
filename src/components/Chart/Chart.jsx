import React,{ useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import  {Line, Bar, Polar, Radar,Bubble } from 'react-chartjs-2';
import styles from './Chart.module.css'

const Chart=({data,country})=>{
    const [dailyData,setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI=async () => {
            setDailyData(await fetchDailyData());
        }        
        fetchAPI();
    },[]);
    const lineChart=(
        dailyData.length ? (<Line
        data={
            {
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: '#564356',
                    fill: true,                    
                }]
            }
        }/>) : null
    );
    console.log(data)
    const barChart = (
        data.confirmed ? (           
            <Bar data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    { 
                        label: 'People',
                        backgroundColor: [
                            'rgba(240, 149, 12, 0.911)',
                            'rgba(21, 202, 172, 0.733)',
                            'rgba(202, 21, 36, 0.733)'
                        ],
                        data: [data.confirmed.value, data.recovered.value,data.deaths.value]
                     }
                ]
            }}
                options={{ 
                    legend: {display:false},
                    title: { display: true,text:`Current Status in ${country}` },
                 }}
            
            />
            
        ):null
    );
    const radarChart = (
        data.confirmed ? (           
            <Radar data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    { 
                        label: 'People',
                        backgroundColor: [
                            'rgba(240, 149, 12, 0.911)',
                            'rgba(21, 202, 172, 0.733)',
                            'rgba(202, 21, 36, 0.733)'
                        ],
                        data: [data.confirmed.value, data.recovered.value,data.deaths.value]
                     }
                ]
            }}
                options={{ 
                    legend: {display:false},
                    title: { display: true,text:`Current Status in ${country}` },
                 }}
            
            />
            
        ):null
    );    
    const doughNut=(
        data.confirmed? (
            <Polar data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [
                    { 
                        label: 'People',
                        backgroundColor: [
                            'rgba(240, 149, 12, 0.911)',
                            'rgba(21, 202, 172, 0.733)',
                            'rgba(202, 21, 36, 0.733)'
                        ],
                        data: [data.confirmed.value, data.recovered.value,data.deaths.value]
                     }
                ]                
            }}

            />
        ):null
    )
    return(
    <div className={styles.container}>
        { country ?  barChart : lineChart}
        { country ?  doughNut : null}
        { country ?  radarChart : null}        
        </div>
    )
}

export default Chart;