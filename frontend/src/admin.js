document.addEventListener("DOMContentLoaded", function() {
    var dataTable = document.getElementById("data-table");
    
    // Fetch data from backend
    fetch('http://localhost:3000/data') // Replace with your backend API endpoint
        .then(response => response.json())
        .then(data => {
            // Clear the table before inserting new rows
            //dataTable.innerHTML = '';

            // Create table headers if not already present
            if (dataTable.rows.length === 0) {
                var headerRow = dataTable.insertRow(0);
                var headerCell1 = headerRow.insertCell(0);
                var headerCell2 = headerRow.insertCell(1);
                var headerCell3 = headerRow.insertCell(2);

                headerCell1.innerHTML = "Ime";
                headerCell2.innerHTML = "Email";
                headerCell3.innerHTML = "Message";
            }

            // Iterate over fetched data and populate table rows
            console.log(data)
            data.forEach((item, index) => {
                var row = dataTable.insertRow(index + 1); // Insert at index + 1 to account for header row
                const { Name, Email, Message } = item;
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = Name;
                cell2.innerHTML = Email;
                cell3.innerHTML = Message;

                console.log(`Name: ${Name}, Email: ${Email}, Message: ${Message}`);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error loading data');
        });
});