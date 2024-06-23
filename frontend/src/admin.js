document.addEventListener("DOMContentLoaded", function() {
    const dataTable = document.getElementById("data-table").querySelector("tbody");

    // Fetch data from backend (replace URL with your backend endpoint)
    fetch('http://localhost:3000/api/data') // Replace with your backend API endpoint
        .then(response => response.json())
        .then(data => {
            // Iterate over fetched data and populate table rows
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.emai}</td>
                    <td>${item.message}
                `;
                dataTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error scenario if needed
        });
});