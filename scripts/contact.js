// Different sound than for the new site woosh
const sentSound = new Audio('assets/audio/sent.mp3');

function showContactForm() {
    document.getElementById('contact-box').style.display = 'block';
}

function hideContactForm() {
    document.getElementById('contact-box').style.display = 'none';
}

function sendAndClose() {
    // if unumted play sound
    if (localStorage.getItem('muted') !== 'true') {
        sentSound.play();
    }

    // empty inputs after use
    const inputs = document.querySelectorAll('#contact-box input');
    inputs.forEach(input => {
        input.value = "";
    });

    alert("Message sent!");

    // Close the box
    hideContactForm();
}
