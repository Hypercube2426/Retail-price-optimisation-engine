// script.js
document.getElementById('priceOptimizationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(event.target);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Perform AJAX request to backend API
    fetch('/api/price-optimization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => response.json())
    .then(data => {
        // Display price optimization results
        document.getElementById('priceOptimizationResults').innerHTML = `
            <h2>Price Optimization Results</h2>
            <p>Optimized Price: $${data.optimizedPrice}</p>
            <p>Predicted Sales: ${data.predictedSales}</p>
            <p>Revenue Impact: $${data.revenueImpact}</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
