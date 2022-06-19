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
import { Bar } from 'react-chartjs-2';
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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,

  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 15000)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // barThickness: 22,
      barPercentage: 0.9,
      maxBarThickness: 35,
      // minBarLength: 2,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 15000)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // barThickness: 22,
      maxBarThickness: 35,
      barPercentage: 0.9,
      hoverBackgroundColor: '#000B93',
    },
  ],
};

export const Charts = () => {
  const test = 0;
  return <Bar options={options} data={data} height={220} />;
};

export default Charts;
