// FoodTruckList.js
import React from "react";

const FoodTruckList = ({ foodTrucks }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Nearby Food Trucks</h2>
      {foodTrucks.length === 0 ? (
        <p>No food trucks found.</p>
      ) : (
        <ul>
          {foodTrucks.map((truck, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{truck.Applicant}</h3>
              <p>{truck.FoodItems}</p>
              <p>Type: {truck.FacilityType}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodTruckList;
