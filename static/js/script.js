document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('predict-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Get the form data
        let city = document.getElementById('city').value;
        let pm25 = parseFloat(document.getElementById('pm25').value);
        let no2 = parseFloat(document.getElementById('no2').value);
        let so2 = parseFloat(document.getElementById('so2').value);
        let co = parseFloat(document.getElementById('co').value);
        let o3 = parseFloat(document.getElementById('o3').value);
        let nh3 = parseFloat(document.getElementById('nh3').value);

        // Validate the input values
        if (pm25 < 0 || no2 < 0 || so2 < 0 || co < 0 || o3 < 0 || nh3 < 0) {
            alert('Pollutant values cannot be negative.');
            return;
        }

        // Send the data to the Flask API
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'PM2.5': pm25,
                'NO2': no2,
                'SO2': so2,
                'CO': co,
                'O3': o3,
                'NH3': nh3
            }),
        })
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
    if (data.error) {
        // Handle any errors returned by the Flask API
        alert('Error: ' + data.error);
        return;
    }

    // Display the result in the popup
    document.getElementById('cityname').innerHTML = city;
    document.getElementById('prediction').innerText = data.prediction; // Insert prediction result into the span
    document.getElementById('resultPopup').style.display = 'block';  // Show the popup
})

        .catch((error) => {
            console.error('Error:', error);
        });
    });

    // Add a listener to close the popup when the 'Close' button is clicked
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('resultPopup').style.display = 'none';  // Hide the popup
    });
});
