# Food Truck Recommender System

This project is a food truck recommender system built using Python and Django + React. The recommender system suggests food trucks to users based on their preferences and current location. It utilizes machine learning techniques such as cosine similarity and nearest neighbors to make personalized recommendations.

## Overview

The recommender system combines user preferences, such as preferred food items, with the geographical proximity of food trucks to the user's location. It ranks food trucks based on their similarity to the user's preferences and their proximity to the user.

## Video Explanations 📽️
- https://www.loom.com/share/14890a06379c4cff952522ee77de40a3?sid=d61155b9-17a8-44fa-897b-0a7a4359daa9
- https://www.loom.com/share/86a1c492559d4a6f942779413d51790e?sid=61c5c473-bcd4-4c7e-9314-eb079103b7f8

## Features

- **User Preferences:** Users can specify their preferred food items, such as "tacos," "burgers," or "coffee."
- **Location-Based Recommendations:** The system considers the user's current location to recommend nearby food trucks.
- **Personalized Recommendations:** Recommendations are personalized based on the user's food preferences.
- **Filtering Approved Food Trucks:** Only approved food trucks are considered for recommendations, ensuring quality and compliance.

## How to Run the Project

Follow these steps to run the food truck recommender system:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/manasseh-fikadu/Food_Trucks_Recommender.git
   ```

2. **Install Dependencies:**
   Navigate to the project directory and install the required dependencies using pip.
   ```bash
   cd myproject
   pip install -r requirements.txt
   ```

3. **Prepare the Dataset:**
   Place the cleaned food truck dataset (`food-truck-data-cleaned.csv`) in the project directory.

4. **Run the Django Server:**
   Start the Django server to run the recommender system.
   ```bash
   python manage.py runserver
   ```

5. **Access the Recommender System:**
   Once the server is running, access the food truck recommender system through the provided URL (typically `http://localhost:8000/`).

## Usage

- **Input Parameters:** Users need to provide their food preferences and current location.
- **Output:** The system provides a list of recommended food trucks based on the user's preferences and location.

## Frontend
Sure! Here's a sample README.md file for your project:

### Technologies Used

- React.js
- Axios for API requests
- Tailwind CSS for styling
- Map component: [Leaflet](https://leafletjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manasseh-fikadu/Food_Trucks_Recommender.git
   ```

2. Navigate to the project directory:

   ```bash
   cd food-truck-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

5. Run the app:

   ```bash
   npm start
   ```

6. Open your browser and visit http://localhost:3000 to view the app.

## Contributors

- Minase Fikadu (@manasseh-fikadu)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
