window.onload = function() {
    const splashScreen = document.getElementById('splash-screen');
    
    // Fade out splash screen
    setTimeout(() => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1000);
    }, 2000);

    // Collapsible menu functionality
    const collapsibleHeaders = document.querySelectorAll('.toggle-category'); // Updated to match the class used in the HTML

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            content.style.opacity = content.style.display === 'block' ? '1' : '0';
            content.style.transition = 'opacity 0.3s ease';
        });
    });
};


