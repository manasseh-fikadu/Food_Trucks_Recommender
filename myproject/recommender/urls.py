# food_truck_recommendations/urls.py
from django.urls import path
from .views import FoodTruckRecommendationsView

urlpatterns = [
    path('recommend-food-trucks/', FoodTruckRecommendationsView.as_view(),
         name='recommend_food_trucks'),
]
