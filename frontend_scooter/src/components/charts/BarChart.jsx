import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import Paper from "@mui/material/Paper"; // Ajout de Paper
import { styled as muiStyled } from "@mui/material/styles";
import { Line } from "react-chartjs-2";
import axios from "axios";
import Box from "@mui/material/Box";
import './BarChart.css'

import { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const BarChart = () => {
  const [Xdata, setXdata] = useState([]);
  const [Ydata, setYdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home/");
        const tabX = [];
        const tabY = [];

        for (const element of response.data[0]) {
          tabX.push(element.nomScooter);
        }
        for (const element of response.data[1]) {
          tabY.push(element.qteScooter);
        }
        setXdata(tabX);
        setYdata(tabY);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: Xdata,
    datasets: [
      {
        label: "quantité de scooter",
        data: Ydata,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
        backgroundColor: "rgba(54, 162, 235, 0.6)", 
        borderColor: "rgba(54, 162, 235, 1)", 
        borderWidth: 2,
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Couleur des points
        pointBorderColor: "#fff", // Couleur de la bordure des points
        pointHoverBackgroundColor: "#fff", // Couleur de fond des points au survol
        pointHoverBorderColor: "rgba(54, 162, 235, 1)", // Couleur de la bordure des points au survol
      },
    ],
  };

 const options = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)", 
        },
        ticks: {
          font: {
            size: 12, 
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Quantité de scooters par modèle",
        font: {
          size: 18, // Taille du titre
        },
      },
      legend: {
        labels: {
          font: {
            size: 14, // Taille de la police de la légende
          },
        },
      },
    },
    animation: {
      duration: 2000, // Durée de l'animation en millisecondes
    },
  };

  return (
    <div style={{ width: "600px" }}>
      <Box className="box">
        <Paper elevation={3} className="paper">
          <Line data={data} options={options}/>
        </Paper>
      </Box>
    </div>
  );
};

export default BarChart;
