import sys
import json
import joblib
import pandas as pd

model = joblib.load("travel_model.pkl")

encoders = joblib.load("encoders.pkl")

input_data = json.loads(sys.argv[1])

df = pd.DataFrame([input_data])

for column in df.columns:
    df[column] = encoders[column].transform(
        df[column]
    )

prediction = model.predict(df)

result = encoders["preferred_place"].inverse_transform(
    prediction
)

print(result[0])