import React, { useState } from "react";
import Header from "./components/Header";
import Map from "./components/MapComponent";
import PreferencesModal from "./components/PreferencesModal"; // Import the PreferencesModal component
import FoodTruckList from "./components/FoodTruckList"; // Import the FoodTruckList component
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState("");
  const [foodTrucks, setFoodTrucks] = useState([]);

  const handleSavePreferences = (preferences) => {
    const latitude = 37.7879732832; // Replace with your latitude
    const longitude = -122.4001850499; // Replace with your longitude

    setPreferences(preferences);

    // Make API call to recommend food trucks
    axios
      .get(
        `http://localhost:8000/api/recommend-food-trucks/?preferences=${preferences}&latitude=${latitude}&longitude=${longitude}`
      )
      .then((response) => {
        response.data = JSON.parse(response.data);
        response.data = response.data.slice(0, 5);
        console.log("response", response.data);
        setFoodTrucks(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });

    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  console.log("foodTrucks", foodTrucks);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <Map foodTrucks={foodTrucks} />
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Set Preferences
        </button>
        {showModal && (
          <PreferencesModal
            onCloseModal={handleCloseModal}
            onSavePreferences={handleSavePreferences}
          />
        )}
        {foodTrucks && foodTrucks.length > 0 && (
          <FoodTruckList foodTrucks={foodTrucks} />
        )}
      </main>
    </div>
  );
}

export default App;
