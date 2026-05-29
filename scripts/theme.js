// Check for saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Function to toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    // Save the state
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
