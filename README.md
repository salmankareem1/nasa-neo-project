#  NASA Near-Earth Object Explorer 

This is a full-stack web application that **fetches and visualizes Near-Earth Object (NEO) data from NASA's API**. It provides an interactive UI with search, filtering, and data visualization features.

---

 Live Demo
Frontend: [https://nasa-neo-frontend.onrender.com](https://nasa-neo-project-frontend.onrender.com)  
Backend: [https://nasa-neo-project-backend.onrender.com](https://nasa-neo-project-backend.onrender.com)  

Note: The app is hosted on Render's free plan, so it may take a few seconds to wake up if inactive.

---

Features:
1. Fetch real-time NEO data from NASA API
2. Search for specific asteroids
3. Filter hazardous asteroids
4. Visualize data using dynamic charts
5. Dark Mode / Light Mode Toggle
6. Fully responsive (Mobile & Desktop-friendly)

---
Tech Stack
Frontend (React)
- React.js (UI framework)
- Chart.js (Data visualizations)
- React Toastify (Notifications)
- CSS3 (Styling & responsiveness)

Backend (Node.js + Express)
- Node.js  (JavaScript runtime)
- Express.js (Backend framework)
- Axios (API requests)

Hosting & Deployment
Render
---

##  Screenshots: 
Dark Mode  
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/Dark%20Mode.png

DarK mode scroll 1
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/DM%20scroll%201.png

DarK mode scroll 2 
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/DM%20Scroll%202.png

Light Mode  
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/Light%20mode.png

Light mode scroll 1
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/LM%20scroll%201.png

Light mode scroll 2
https://github.com/salmankareem1/nasa-neo-project/blob/2bdb15ef55b53e87ce2cd7be5736bb8a49df4465/LM%20Scroll%202.png

---

 Installation & Setup (For Local Development)
 Prerequisites
- Node.js v16+ (Download from [nodejs.org](https://nodejs.org/))
- Git (Download from [git-scm.com](https://git-scm.com/))

Clone the Repository:

git clone https://github.com/salmankareem1/nasa-neo-project.git
cd nasa-neo-project

Backend Setup
1️ Navigate to the backend folder:
cd backend

2 Install dependencies:

npm install

3.Create a .env file and add:
NASA_API_KEY=your_actual_nasa_api_key (You'll get a unique API Key from the website: https://api.nasa.gov/ )
NASA_API_URL=https://api.nasa.gov/neo/rest/v1/feed

4 Start the backend:
npm start

The backend will run on http://localhost:5000.

 Frontend Setup: 

1 Navigate to the frontend folder:
cd ../frontend

2 Install dependencies:
npm install

3️ Create a .env file and add:
REACT_APP_API_URL=http://localhost:5000

4️ Start the frontend:
npm start

The frontend will run on http://localhost:3000.

Testing the API
You can test the backend API using Postman 

Expected JSON response:

json:

{
  "near_earth_objects": {
    "2025-02-20": [
      {
        "name": "Asteroid XYZ",
        "estimated_diameter": { "kilometers": { "estimated_diameter_max": 0.5 } },
        "is_potentially_hazardous_asteroid": true
      }
    ]
  }
}


Deployment Guide on Render

Backend Deployment (Render)

1️ Push backend code to GitHub:

git add .
git commit -m "Deploy backend"
git push origin main

2 Deploy on Render:

Build Command: npm install
Start Command: node server.js
Environment Variables: NASA_API_KEY, NASA_API_URL


Frontend Deployment (Render)

1. Push frontend code to GitHub:

git add .
git commit -m "Deploy frontend"
git push origin main

2. Deploy on Render:
Build Command: npm install && npm run build
Publish Directory: build/
Environment Variable: REACT_APP_API_URL → (Your backend URL)

git push origin main
3. Deploy on Render:

Build Command: npm install && npm run build
Publish Directory: build/
Environment Variable: REACT_APP_API_URL → (Your backend URL)
