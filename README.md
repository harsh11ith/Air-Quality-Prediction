 # Air Quality Prediction using Random Forest Classifier

This project is a web application for predicting the Air Quality Index (AQI) based on pollutant data. The model used is a Random Forest Classifier, which classifies air quality into categories such as Good, Moderate, Unhealthy, etc. The web interface allows users to input pollutant levels and receive a predicted AQI category in real time.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Model Overview](#model-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This AQI prediction system helps users determine the air quality in their city using historical data on various pollutants. The pollutants considered are PM2.5, NO2, SO2, CO, O3, and NH3. The model uses a Random Forest Classifier trained on a dataset to predict the AQI bucket for any given combination of pollutant levels. 

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Machine Learning**: Random Forest Classifier (scikit-learn)
- **Hosting**: PythonAnywhere

## Model Overview

The Random Forest Classifier was chosen for its ability to handle large datasets and manage missing data while providing high accuracy in classification tasks. The model was trained on pollutant data and labels that categorize AQI into different buckets such as:
- Good
- Satisfactory
- Moderate
- Poor
- Very Poor
- Severe

### Random Forest Classifier:
- **Features**: PM2.5, NO2, SO2, CO, O3, NH3 (pollutant levels)
- **Target**: AQI Bucket (categorical output)
- **Evaluation Metrics**: Accuracy, Precision, Recall, F1-Score

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/Air-Quality-Prediction.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Air-Quality-Prediction.git
    ```

3. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask app:
    ```bash
    python app.py
    ```

## Usage
- Hosted on pythonanywhere 'https://aqi053harshith.pythonanywhere.com/'.
- Open your web browser and go to `http://localhost:5000`.
- Enter pollutant data (PM2.5, NO2, SO2, CO, O3, NH3) into the form.
- Click the **Predict** button to see the predicted AQI category.

## Screenshots

![AQI Prediction Screenshot 1](static/images/Screenshot%201.png)
*Screenshot of the home page and form input for pollutant data.*

![AQI Prediction Screenshot 2](static/images/Screenshot%202.png)
*Screenshot of the AQI prediction result popup.*

![AQI Prediction Screenshot 3](static/images/Screenshot%203.png)
*Screenshot of the AQI prediction model.*


## Contributing

If you'd like to contribute, please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License.

