import random
import json

def data_predictions(input_data):
    predictions = []
    for data_point in input_data:
        prediction = data_point['value'] + random.uniform(-5, 5)
        actual = data_point['value']
        predictions.append({'name': data_point['name'], 'predictions': prediction, 'actual': actual})
    return predictions

input_data = [
    {'name': 'Jan', 'value': 100},
    {'name': 'Feb', 'value': 110},
]


output_data = {'predictions': data_predictions(input_data)}

print(json.dumps(output_data, indent=2))
