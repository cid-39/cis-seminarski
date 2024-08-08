document.addEventListener("DOMContentLoaded", function() {
    var dataTable = document.getElementById("data-table");
    
    fetch('http://localhost:3000/data') 
        .then(response => response.json())
        .then(data => {

            console.log(data)
            data.forEach((item, index) => {
                var row = dataTable.insertRow(index + 1);
                const { name, email, message } = item;
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                cell1.innerHTML = name;
                cell2.innerHTML = email;
                cell3.innerHTML = message;

                console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error loading data');
        });
});