document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts for the main page
    if (document.querySelector('.floating-hearts')) {
        createFloatingHearts();
    }
    
    // Smooth scroll for navigation buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to photo cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.photo-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Random position, size and animation delay
        const size = Math.random() * 15 + 10; // 10-25px hearts
        const left = Math.random() * 100; // random horizontal position
        const animDuration = Math.random() * 10 + 15; // 15-25s animation
        const animDelay = Math.random() * 15; // 0-15s delay
        const opacity = Math.random() * 0.5 + 0.3; // 0.3-0.8 opacity
        
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${animDuration}s`;
        heart.style.animationDelay = `${animDelay}s`;
        heart.style.opacity = opacity;
        
        // Create a pulsating effect with different intervals
        const pulseDelay = Math.random() * 5;
        heart.style.animation = `floatHeart ${animDuration}s ease-in-out infinite ${animDelay}s, 
                                pulse 3s ease-in-out infinite ${pulseDelay}s`;
        
        // Random color variations
        const hue = Math.floor(Math.random() * 30) + 340; // pinks and reds
        heart.style.backgroundColor = `hsl(${hue}, 100%, 75%)`;
        
        container.appendChild(heart);
    }
}

// Celebration Particles
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particles';
    document.body.appendChild(container);

    // Create particles with random positions and delays
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        const left = Math.random() * 100;
        particle.style.left = `${left}%`;
        
        // Random size
        const size = Math.random() * 6 + 4;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color
        const colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 3 + 5;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}

// Add celebration effect on page load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Create new particles every 8 seconds
    setInterval(() => {
        const container = document.querySelector('.particles');
        if (container) {
            container.remove();
            createParticles();
        }
    }, 8000);
}); 