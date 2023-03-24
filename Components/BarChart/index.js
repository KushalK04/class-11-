import { useState, useEffect } from "react";
import styles from './BarChart.module.css'

import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["2017", "2018", "2019", "2020", "2021"],
            datasets: [
                {
                    label: 'Revenue',
                    data: [12376, 13511, 14809, 15797, 16590],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Private nursing and residential care facilities, summary statistics"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])
    
    
    return(
        <>
           <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
           </div>
        </>
    )
}