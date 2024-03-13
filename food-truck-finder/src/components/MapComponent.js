import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ foodTrucks }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize map
    const map = L.map(mapRef.current).setView(
      [37.7879732832, -122.4001850499],
      12
    );

    // Add tile layer (using OpenStreetMap as an example)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each food truck location
    foodTrucks.forEach((truck) => {
      L.marker([truck.Latitude, truck.Longitude])
        .addTo(map)
        .bindPopup(`<b>${truck.Applicant}</b><br>${truck.FoodItems}`)
        .openPopup();
    });

    // Cleanup
    return () => map.remove();
  }, [foodTrucks]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;
