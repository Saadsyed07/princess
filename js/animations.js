document.addEventListener('DOMContentLoaded', () => {
    // Create floating hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.querySelector('.floating-hearts').appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts periodically
    setInterval(createHeart, 300);

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add sparkle effect on click
    const sparkle = document.querySelector('.sparkle');
    sparkle.addEventListener('click', () => {
        sparkle.style.animation = 'none';
        sparkle.offsetHeight; // Trigger reflow
        sparkle.style.animation = 'sparkle 2s infinite';
    });

    // Add confetti effect on page load
    setTimeout(() => {
        const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#fff0f5'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('.confetti-container').appendChild(confetti);
        }
    }, 1000);

    // Update birth details
    const birthDate = document.getElementById('birthDate');
    const birthTime = document.getElementById('birthTime');
    const birthWeight = document.getElementById('birthWeight');

    // You can update these values with actual birth details
    birthDate.textContent = 'April 14, 2024';
    birthTime.textContent = '10:30 AM';
    birthWeight.textContent = '3.2 kg';
}); 