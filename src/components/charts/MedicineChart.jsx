import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Required for Pie and Doughnut charts
} from "chart.js";

import medicines from "../data/medicine.json";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const MedicineChart = () => {
  // Extract medicine names and prices
  const labels = medicines.map((medicine) => medicine.medicineName);
  const prices = medicines.map((medicine) => medicine.price);

  // Chart data for both Bar and Pie charts
  const data = {
    labels, // Medicine names as labels
    datasets: [
      {
        label: "Medicine Prices ($)",
        data: prices, // Prices as data points
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Medicine Prices",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <h2>Medicine Prices Bar Chart</h2>
        <Bar data={data} options={options} />
      </div>
      <div style={{ width: "50%", margin: "0 auto" }} className="p-8 m-10">
        <h2>Medicine Prices Pie Chart</h2>
        <Pie data={data} />
      </div>
    </>
  );
};

export default MedicineChart;
