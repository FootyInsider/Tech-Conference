document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (firstName && lastName && email && phone) {
        alert("Registration successful!");
    } else {
        alert("Please fill out all fields correctly.");
    }
});
