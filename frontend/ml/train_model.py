import pandas as pd

from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier

import joblib

data = pd.read_csv("travel_data.csv")
encoders = {}

for column in data.columns:
    encoder = LabelEncoder()
    data[column] = encoder.fit_transform(
        data[column]
    )
    encoders[column] = encoder

X = data.drop("preferred_place", axis=1)
y = data["preferred_place"]

model = DecisionTreeClassifier()
model.fit(X, y)

joblib.dump(model, "travel_model.pkl")
joblib.dump(encoders, "encoders.pkl")
print("Model trained successfully!")