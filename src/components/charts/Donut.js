/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement);

// const data = {
//   labels: ['Red', 'Blue', 'Yellow'],
//   datasets: [
//     {
//       data: [300, 50, 100],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//     },
//   ],
// };

// const myDoughnutChart = new Chart(ctx, {
//   type: 'doughnut',
//   data,
//   options: {
//     rotation: 1 * Math.PI,
//     circumference: 1 * Math.PI,
//   },
// });

// const donut = [
//   {
//     name: 'Porta',
//     color: '#05103b',
//     value: 70,
//   },
//   {
//     name: 'Curabitur',
//     color: '#2facff',
//     value: 65,
//   },
//   {
//     name: 'Fusce',
//     color: '#ffcf04',
//     value: 33,
//   },
//   {
//     name: 'Morbi',
//     color: '#ff8900',
//     value: 88,
//   },
//   {
//     name: 'Donec',
//     color: '#ff3838',
//     value: 92,
//   },
// ];

// ChartJS.canvas.parentNode.style.height = '128px';
// ChartJS.canvas.parentNode.style.width = '128px';

const state = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
      ],
      data: [65, 59, 80],
    },
  ],
};

const GaugeDonut = () => {
  const test = 0;
  const circumNum = 1 * Math.PI;
  const option = {
    plugins: {
      title: {
        display: false,
        text: 'API Calls',
        fontSize: 20,
      },
      legend: {
        position: 'bottom',
        align: 'center',
      },
    },
    title: {
      display: false,
      text: 'Average Rainfall per month',
      fontSize: 20,
      padding: {
        top: 10,
        bottom: 30,
      },
    },
    legend: {
      display: false,
      position: 'bottom',
    },
    fullSize: false,
    rotation: -90,
    circumference: 180,
    cutout: '75%',
    radius: '85%',
    borderWidth: '1',
    responsive: false,
    maintainAspectRatio: false,
    hoverOffset: 4,
  };
  return (
    // <div className="outline outline-red-600" style={{ height: '150px', width: '19.5rem' }}>
    <Doughnut
      data={state}
      options={option}
      width={350}
      // height="160px"
    />
    // </div>
  );
};

export default GaugeDonut;
