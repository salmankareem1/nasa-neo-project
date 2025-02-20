import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { fetchNeoData } from "../src/services/neoService";
import NEOCard from "../src/components/neoCard";
import SearchBar from "../src/components/searchBar";
import Charts from "../src/components/charts"; 
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";

const App = () => {
    const [neoData, setNeoData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [showHazardous, setShowHazardous] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
   

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchNeoData();
                setNeoData(data);
                setFilteredData(data);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        let filtered = neoData;
        if (searchTerm) {
            filtered = filtered.filter((asteroid) =>
                asteroid.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (showHazardous) {
            filtered = filtered.filter((asteroid) => asteroid.is_potentially_hazardous_asteroid);
        }
        setFilteredData(filtered);
    }, [searchTerm, showHazardous, neoData]);

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "";
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        toast.success(`Switched to ${!darkMode ? "Dark" : "Light"} Mode! 🌗`, {
            position: "bottom-right",
            autoClose: 2000,
            theme: darkMode ? "light" : "dark",
        });
    };

    const isSearching = searchTerm.length > 0;
    const scrollToAsteroids = () => {
        document.querySelector(".neo-list").scrollIntoView({ behavior: "smooth" });
    };
    if (loading) return( <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text"> Fetching Near-Earth Objects...</p>
    </div>);
    if (error) return <p className="error"> {error}</p>;


    return (
        <div className="container">
            <button className="toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
            <div className="top-section" onClick={scrollToAsteroids}>
            <video autoPlay loop muted playsInline poster="/images/background.jpg" className="background-video">
        <source src="/video/earth.webm" type="video/webm" />
        Your browser does not support the video tag.
    </video>
            <div className="overlay">
        🌍 Near-Earth Objects (NEOs)
    </div>
            </div>
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                showHazardous={showHazardous} 
                setShowHazardous={setShowHazardous} 
            />
            <Charts neoData={filteredData} isDarkMode={darkMode} isSearching={isSearching} />
            <ul className="neo-list">
                {filteredData.length > 0 ? (
                    filteredData.map((asteroid, index) => <NEOCard key={index} asteroid={asteroid} />)
                ) : (
                    <p className="no-results">No results found.</p>
                )}
            </ul>
            <ToastContainer />
        </div>
    );
};

export default App;
