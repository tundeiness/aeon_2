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
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      align: 'end',
    },
  },
  // layout: {
  //   padding: 10,
  // },
  scales: {
    x: {
      grid: {
        display: false,
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
      data: labels.map(() => Math.floor(Math.random() * 120)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      barThickness: 22,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 120)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      barThickness: 22,
      hoverBackgroundColor: '#000B93',
    },
  ],
};

export const Charts = () => {
  const test = 0;
  return <Bar options={options} data={data} />;
};

export default Charts;
