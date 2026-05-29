const woosh = new Audio('assets/audio/woosh-end.mp3');

function playWoosh() {
    if (localStorage.getItem('muted') !== 'true') {
        woosh.play();
    }
}

// Listen for the first click anywhere on the page to unlock sound
document.addEventListener('click', playWoosh, { once: true });
