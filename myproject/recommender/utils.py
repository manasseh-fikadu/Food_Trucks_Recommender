import json
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.neighbors import NearestNeighbors
import os


def get_food_truck_recommendations(user_preferences, user_latitude, user_longitude):
    '''
    Get food truck recommendations based on user preferences and location

    Parameters:
    user_preferences (list): A list of food items that the user prefers
    user_latitude (float): Latitude of the user's location
    user_longitude (float): Longitude of the user's location

    Returns:
    str: A JSON string containing the details of the top food trucks
    '''
    # Load the cleaned food truck dataset
    # grab the path of the dataset its name is food-truck-data-cleaned.csv
    dataset_path = os.path.join(os.path.dirname(
        __file__), 'food-truck-data-cleaned.csv')
    df = pd.read_csv(dataset_path)

    df = df[df['Status'] == 'APPROVED']

    # Preprocess food items
    food_items = [items.split(':') for items in df['FoodItems']]
    flat_food_items = [item.strip()
                       for sublist in food_items for item in sublist]

    # Create a binary matrix indicating whether each food item is offered by each truck
    food_item_matrix = np.zeros((len(df), len(flat_food_items)), dtype=int)
    for i, items in enumerate(food_items):
        for item in items:
            food_item_index = flat_food_items.index(item.strip())
            food_item_matrix[i, food_item_index] = 1

    # Calculate cosine similarity between user preferences and food items offered by each truck
    user_preferences_embedding = np.array(
        [[1 if item in user_preferences else 0 for item in flat_food_items]])
    truck_food_item_embeddings = food_item_matrix
    similarity_scores = cosine_similarity(
        user_preferences_embedding, truck_food_item_embeddings)

    # Add proximity factor based on truck location
    # Replace with user's latitude and longitude
    user_location = np.array([[user_latitude, user_longitude]])
    truck_locations = df[['Latitude', 'Longitude']].values
    distances = np.linalg.norm(user_location - truck_locations, axis=1)
    max_distance = np.max(distances)
    # Normalize distances to [0, 1] range
    proximity_factor = 1 - (distances / max_distance)

    # Combine similarity scores with proximity factor
    combined_scores = similarity_scores * proximity_factor[:, np.newaxis]

    if np.all(combined_scores == 0):
        return json.dumps({"message": "There are not enough food trucks in the dataset to provide recommendations."})
    else:
        # Find the top 10 food trucks with the highest combined scores
        top_indices = np.argsort(combined_scores, axis=0)[-10:][::-1]

        # Get the details of the top food trucks
        top_food_trucks = df.iloc[top_indices.flatten()]

        # Filter out duplicate locations
        unique_locations = top_food_trucks.drop_duplicates(
            subset=['Latitude', 'Longitude'])

        return unique_locations.to_json(orient="records")
