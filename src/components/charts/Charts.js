/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // CategoryScale: 0.8,
  // categoryPercentage: 0.8,
  // barPercentage: 0.8,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'end',
      labels: {
        boxWidth: 12,
        padding: 30,
        generateLabels: (chart) => {
          const { datasets } = chart.data;
          const backgroundColor = ['#36b9ff', '#1756c2', '#ff650E'];
          return datasets[0].data.map((data, i) => ({
            text: `${chart.data.labels[i]}`,
            fillStyle: backgroundColor[i],
            strokeStyle: backgroundColor[i],
          }));
        },
      },
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart',
    // },
  },
  // layout: {
  //   padding: 10,
  // },
  scales: {
    x: {
      grid: {
        display: false,
        offset: true,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['Total', 'Successful', 'Failed'];
const backgroundColor = ['#36b9ff', '#1756c2', '#ff650E'];
// data: labels.map(() => Math.floor(Math.random() * 15000)),
const total = Math.floor(Math.random() * 15000);
const successful = Math.floor(Math.random() * 15000);
const failed = Math.floor(Math.random() * 15000);

const data = {
  labels,

  datasets: [
    {
      label: '',
      data: [total, successful, failed],
      backgroundColor: (c) => backgroundColor[c.dataIndex % backgroundColor.length],
      barPercentage: 0.9,
      maxBarThickness: 35,
      hoverBackgroundColor: '#000B93',
      // minBarLength: 2,
    },
  ],
};

export const Charts = () => {
  const test = 0;
  return <Bar options={options} data={data} height={220} />;
};

export default Charts;
