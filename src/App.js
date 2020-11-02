import React, { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
import Data from "./components/Data";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState(Data);

  const removeTour = (id) => {
    // Return all cities whose id is not equal to the city's id passed in
    let remainingCities = tours.filter((city) => city.id !== id);
    setTours(remainingCities);
  };

  const refreshTours = () => {
    setTours(Data);
  };

  // This line of code sets the setLoading state to false after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <div className="main title">
        <h2>Which Tour you come want?</h2>
        <button className="no-tour" onClick={refreshTours}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
