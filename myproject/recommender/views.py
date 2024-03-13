# food_truck_recommendations/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .utils import get_food_truck_recommendations
import urllib.parse


def sanitize_preferences(preferences):
    decoded_preferences = urllib.parse.unquote(preferences)
    sanitized_preferences = [preference.strip().strip("'")
                             for preference in decoded_preferences.split(',')]
    return sanitized_preferences


@method_decorator(csrf_exempt, name='dispatch')
class FoodTruckRecommendationsView(View):
    def get(self, request):
        preferences = request.GET.get('preferences')
        user_latitude = request.GET.get('latitude')
        user_longitude = request.GET.get('longitude')

        # Check if preferences, latitude, and longitude parameters are provided
        if not all([preferences, user_latitude, user_longitude]):
            return JsonResponse({"error": "Preferences, latitude, and longitude parameters are required."}, status=400)

        # Sanitize preferences
        sanitized_preferences = sanitize_preferences(preferences)

        # Check if latitude and longitude parameters are valid numbers
        try:
            user_latitude = float(user_latitude)
            user_longitude = float(user_longitude)
        except ValueError:
            return JsonResponse({"error": "Latitude and longitude parameters must be valid numbers."}, status=400)

        # Call the function to get food truck recommendations
        recommended_food_trucks = get_food_truck_recommendations(
            sanitized_preferences, user_latitude, user_longitude)

        # Return the recommended food trucks as JSON response
        return JsonResponse(recommended_food_trucks, safe=False)
