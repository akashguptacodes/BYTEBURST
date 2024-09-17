function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const resultParagraph = document.getElementById('result');
    
    if (email === "") {
        resultParagraph.innerText = 'Please enter an email address.';
    } else if (emailPattern.test(email)) {
        resultParagraph.innerText = 'Entered email: ' + email + ' - Valid email address!';
    } else {
        resultParagraph.innerText = 'Entered email: ' + email + ' - Invalid email address! Please enter a valid email address.';
    }
}