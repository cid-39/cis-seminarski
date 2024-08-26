document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if ( name == "" || email == "" || message == "") {
            alert('Error submitting form. Form can not be empty.');
            return;
        }

        const formData = {
            name: name,
            email: email,
            message: message
        };
        console.log(JSON.stringify(formData))
         
        fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert(`Form submitted successfully!`);
            form.reset(); 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error submitting form. Try again later.');
        });
    });
});