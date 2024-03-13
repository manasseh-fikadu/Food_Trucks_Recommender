import React, { useState } from "react";

const PreferencesModal = ({ onCloseModal, onSavePreferences }) => {
  const [preferences, setPreferences] = useState("");

  const handleChange = (e) => {
    setPreferences(e.target.value);
  };

  const handleSubmit = () => {
    onSavePreferences(preferences);
  };

  return (
    <div className="fixed top-60 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-md shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Enter Preferences</h2>
        <textarea
          value={preferences}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-indigo-500"
          placeholder="Enter your preferences..."
        ></textarea>
        <div className="text-right mt-4">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold px-4 py-2 rounded-md hover:opacity-90 mr-2"
          >
            Save
          </button>
          <button
            onClick={onCloseModal}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreferencesModal;
