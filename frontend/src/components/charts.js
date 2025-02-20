import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement , Filler} from "chart.js";
import { getChartOptions } from "../config/chartOptions"; 


ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, Filler);

const Charts = ({ neoData, isDarkMode }) => {
    if (!neoData || neoData.length === 0) return <p className="loading"> No data available for visualization.</p>;

    
    const chartOptions = getChartOptions(isDarkMode);

   
    const asteroidNames = neoData.map((asteroid) => asteroid.name);
    const asteroidSizes = neoData.map((asteroid) => asteroid.estimated_diameter.kilometers.estimated_diameter_max);
    const approachDates = neoData.map((asteroid) => asteroid.close_approach_data[0].close_approach_date);
    const hazardousAsteroids = neoData.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid).length;
    const safeAsteroids = neoData.length - hazardousAsteroids;

    const sizeChartData = {
        labels: asteroidNames.slice(0, 10), 
        datasets: [
            {
                label: "Asteroid Size (km)",
                data: asteroidSizes.slice(0, 10),
                backgroundColor: isDarkMode ? "rgba(75, 192, 192, 0.7)" : "rgba(255, 159, 64, 0.7)",
                borderColor: isDarkMode ? "rgba(75, 192, 192, 1)" : "rgba(255, 159, 64, 1)",
                borderWidth: 1,
            },
        ],
    };

  
    const dateCount = {};
    approachDates.forEach((date) => {
        dateCount[date] = (dateCount[date] || 0) + 1;
    });

    const lineChartData = {
        labels: Object.keys(dateCount),
        datasets: [
            {
                label: "Number of Asteroids",
                data: Object.values(dateCount),
                backgroundColor: isDarkMode ? "rgba(255, 99, 132, 0.5)" : "rgba(54, 162, 235, 0.5)",
                borderColor: isDarkMode ? "rgba(255, 99, 132, 1)" : "rgba(54, 162, 235, 1)",
                fill: true,
            },
        ],
    };

    const pieChartData = {
        labels: ["Safe Asteroids", "Hazardous Asteroids"],
        datasets: [
            {
                data: [safeAsteroids, hazardousAsteroids],
                backgroundColor: isDarkMode ? ["rgba(54, 162, 235, 0.7)", "rgba(255, 99, 132, 1)"] : ["rgba(255, 206, 86, 1)", "rgba(255, 99, 132, 1)"],
            },
        ],
    };

    return (
        <div className="charts-container">
            <div className="chart-wrapper">
                <h3> Asteroid Sizes (Top 10)</h3>
                <Bar data={sizeChartData} options={chartOptions} />
            </div>
            <div className="chart-wrapper">
                <h3> Asteroid Approaches Over Time</h3>
                <Line data={lineChartData} options={chartOptions} />
            </div>
            <div className="chart-wrapper">
                <h3> Hazardous vs Safe Asteroids</h3>
                <Pie data={pieChartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default Charts;
