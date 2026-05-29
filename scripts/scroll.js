const scrollBtn = document.getElementById('scroll-up-btn');

// Check if scroll button should be showns
window.addEventListener('scroll', () => {
    // If scrolled down more than 300px, show the button
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// scroll up smooth when clicked
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
