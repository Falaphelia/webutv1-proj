function toggleMute() {
    let isMuted = localStorage.getItem('muted') === 'true';
    localStorage.setItem('muted', !isMuted);

    // Change button text based on mute state
    event.target.innerText = !isMuted ? "Unmute Sound" : "Mute Sound";
}
