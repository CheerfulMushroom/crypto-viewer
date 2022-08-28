import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartOptions,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

export type Point = {
  x: Date;
  y: number;
};

export type PriceChartProps = {
  points: Point[];
  showGrid: boolean;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale
);

export const PriceChart: React.FC<PriceChartProps> = ({ points, showGrid }) => {
  const options: ChartOptions<'line'> = {
    responsive: true,
    animation: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        display: showGrid,
        type: 'time',
        ticks: {
          source: 'auto',
        },
      },
      y: {
        display: showGrid,
      },
    },
  };

  const parsedPoints = points.map((point) => {
    return {
      x: point.x.getTime(),
      y: point.y,
    };
  });

  const data = {
    indexAxis: 'x',
    datasets: [
      {
        data: parsedPoints,
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return <Line options={options} data={data} />;
};
