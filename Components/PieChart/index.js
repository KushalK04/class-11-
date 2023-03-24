import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './PieChart.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['September 2022', 'October 2022', 'November 2022', 'December 2022', 'January 2023'],
  datasets: [
    {
      label: '# of Votes',
      data: [6447303, 6581644, 6824388, 8078154, 7224376],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
    <>
      <div className={styles.idk}>
        <h4 className={styles.h33}>Canadian monthly natural gas transmission (x1000) (exports to the U.S.)</h4>
        <Pie data={data} />
      </div>
    </>
  );
}
