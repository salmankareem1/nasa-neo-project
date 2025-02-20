import React from "react";
import "../styles/App.css";

const SearchBar = ({ searchTerm, setSearchTerm, showHazardous, setShowHazardous }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search asteroids..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <label className="filter-label">
                <input
                    type="checkbox"
                    checked={showHazardous}
                    onChange={() => setShowHazardous(!showHazardous)}
                />
                Show only hazardous asteroids
            </label>
        </div>
    );
};

export default SearchBar;
