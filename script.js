const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', function() {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggleButton.textContent = 'Switch to Light Theme';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggleButton.textContent = 'Switch to Dark Theme';
    }
});
