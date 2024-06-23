document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Spremanje podataka koji se salju backend-u
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Slanje 
        fetch('http://localhost:3001/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Form submitted successfully!\nResponse from server: ${JSON.stringify(data)}`);
            form.reset(); // Reset form fields
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error submitting form. Please try again later.');
        });
    });
});