import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LiveChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'TON/USDT',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const ws = new WebSocket('wss://stream.bybit.com:9443/ws/tonusdt@trade'); // Binance WebSocket URL for TON/USDT trades

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      updateChart(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  const updateChart = (data) => {
    setChartData((prevData) => {
      const newLabels = [...prevData.labels, new Date(data.T).toLocaleTimeString()];
      const newData = [...prevData.datasets[0].data, parseFloat(data.p)];

      if (newLabels.length > 20) {
        newLabels.shift();
        newData.shift();
      }

      return {
        ...prevData,
        labels: newLabels,
        datasets: [{ ...prevData.datasets[0], data: newData }],
      };
    });
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LiveChart;
