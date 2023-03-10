import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scan from './components/types'
import Details from "./components/Details";
import Home from "./components/Home";


const App = () => {
  const [scans, setScans] = useState<Scan[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonware.com/api/v1/json/402b9d6d-9862-4c19-b336-c456999258d6"
      );
      const data = await response.json();
      setScans(data.data);
    };
    fetchData();
    console.log(scans)
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/:id" element={<Details scans={scans} />}/>
          <Route path="/" element={ <Home scans={scans} />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
