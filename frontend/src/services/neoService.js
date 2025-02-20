import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const fetchNeoData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/neo`);
        return Object.values(response.data.near_earth_objects).flat();
    } catch (error) {
        console.error("Error fetching NEO data:", error);
        throw error;
    }
};
