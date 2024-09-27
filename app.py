from flask import Flask, render_template, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the model with error handling
try:
    with open('random_forest_model1.pkl', 'rb') as model_file:
        model = pickle.load(model_file)
    print("Model loaded successfully.")
except Exception as e:
    model = None
    print("Error loading model:", e)

# Mapping of numeric labels to AQI categories
label_mapping = {
    0: 'Best',
    1: 'Moderate',
    2: 'Unhealthy for Sensitive Groups',
    3: 'Unhealthy',
    4: 'Very Unhealthy',
    5: 'Hazardous',
    6: 'Worst'
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/details')
def details():
    return render_template('Air_quality_prediction.html')

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded. Please check the server logs for details.'}), 500

    # Get data from the request
    data = request.get_json()

    # Create a DataFrame for the input features
    features = pd.DataFrame([data])

    # Make a prediction
    try:
        prediction = model.predict(features)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    # Convert prediction to a native Python type
    prediction_value = prediction.item() if hasattr(prediction, 'item') else prediction[0]
    print("Raw model prediction:", prediction_value)

    # Map the numeric prediction to the corresponding label
    prediction_label = label_mapping.get(prediction_value, 'Unknown')  # Default to 'Unknown' if not found

    # Return the result as JSON
    return jsonify({
        'prediction': prediction_label,
        'value': prediction_value,  # Return the numeric value if needed
        'error': None  # Include an error key for consistency
    })


if __name__ == '__main__':
    app.run(debug=True)
