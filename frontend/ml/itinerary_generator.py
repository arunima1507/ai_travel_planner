import json
import sys

data = json.loads(sys.argv[1])

destination = data["destination"]
days = int(data["days"])
traveler = data["travelerType"]
style = data["travelStyle"]
budget = int(data["budget"])

itinerary = []

for day in range(1, days + 1):

    if style == "cultural":
        morning = "Visit historical monuments"
        afternoon = "Explore local markets"
        evening = "Traditional cultural show"

    elif style == "adventure":
        morning = "Outdoor adventure activity"
        afternoon = "Nature exploration"
        evening = "Campfire experience"

    else:
        morning = "Relaxing sightseeing"
        afternoon = "Cafe exploration"
        evening = "City walk"

    daily_plan = {
        "day": day,
        "morning": morning,
        "afternoon": afternoon,
        "evening": evening,
        "budgetEstimate": budget // days
    }

    itinerary.append(daily_plan)

print(json.dumps(itinerary))