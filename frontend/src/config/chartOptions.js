export const getChartOptions = (isDarkMode) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: isDarkMode ? "white" : "black", 
                font: {
                    size: 14,
                    family: "Arial",
                    weight: "bold",
                },
            },
        },
        tooltip: {
            titleColor: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)", 
            bodyColor: isDarkMode ? "rgb(224, 224, 224)" : "rgb(51, 51, 51)",
            backgroundColor: isDarkMode ? "rgb(51, 51, 51)" : "rgb(255, 255, 255)",
        },
    },
    scales: {
        x: {
            ticks: {
                color: isDarkMode ? "white" : "black", 
            },
            grid: {
                color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
            },
        },
        y: {
            ticks: {
                color: isDarkMode ? "white" : "black", 
            },
            grid: {
                color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
            },
        },
    },
});
