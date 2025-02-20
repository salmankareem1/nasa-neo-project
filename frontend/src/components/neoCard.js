import React from "react";
import "../styles/App.css"; 

const NEOCard = ({ asteroid }) => {
    return (
        <li className="neo-card">
            <h2>{asteroid.name}</h2>
            <p> Close Approach: {asteroid.close_approach_data[0].close_approach_date}</p>
            <p> Size: {asteroid.estimated_diameter.kilometers.estimated_diameter_max} km</p>
            <p>
                 Hazard Status: 
                <span className={asteroid.is_potentially_hazardous_asteroid ? "hazard" : "safe"}>
                    {asteroid.is_potentially_hazardous_asteroid ? " Hazardous " : " Safe "}
                </span>
            </p>
        </li>
    );
};

export default NEOCard;
