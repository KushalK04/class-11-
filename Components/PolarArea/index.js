import styles from './PolarArea.module.css'
import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['1996', '2001', '2006', '2011', '2016', '2021'],
  datasets: [
    {
      label: '# of people',
      data: [28528100, 29639035, 31241030, 33121175, 34767250, 36620955],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 50, 203, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

export function Pol() {
  return (<>
            <h5 className={styles.h33}>Total Knowledges Of Offical Languages</h5>
            <div className={styles.container}>
             <PolarArea data={data} />
            </div>
          </>);
}
