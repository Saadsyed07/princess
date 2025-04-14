document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const photoContainers = document.querySelectorAll('.photo-container');

    // Filter photos based on category
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            photoContainers.forEach(container => {
                if (filter === 'all' || container.getAttribute('data-category') === filter) {
                    container.style.display = 'block';
                    container.style.animation = 'fadeIn 0.5s forwards';
                } else {
                    container.style.display = 'none';
                }
            });
        });
    });

    // Add zoom effect on photo hover
    photoContainers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'scale(1.05)';
        });

        container.addEventListener('mouseleave', () => {
            container.style.transform = 'scale(1)';
        });
    });

    // Add click effect to show photo details
    photoContainers.forEach(container => {
        container.addEventListener('click', () => {
            const overlay = container.querySelector('.photo-overlay');
            overlay.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                overlay.style.transform = 'translateY(100%)';
            }, 2000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');
    
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 768;
    
    // Function to handle image loading
    function handleImageLoading(img) {
        // Add loading indicator
        img.style.opacity = '0.5';
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        img.parentNode.appendChild(loadingIndicator);
        
        // When image loads
        img.onload = function() {
            img.style.opacity = '1';
            if (loadingIndicator) {
                loadingIndicator.remove();
            }
        };
        
        // If image fails to load
        img.onerror = function() {
            if (loadingIndicator) {
                loadingIndicator.remove();
            }
        };
    }
    
    // Add loading indicators to all images
    document.querySelectorAll('.photo-wrapper img').forEach(img => {
        handleImageLoading(img);
    });

    // Add click event to each photo card
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('.photo-label').textContent;
            const description = this.querySelector('.photo-description').textContent;

            // Show loading indicator in modal
            modalImg.style.opacity = '0.5';
            modal.classList.add('show');
            
            // Set modal content
            modalImg.src = img.src;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            
            // When modal image loads
            modalImg.onload = function() {
                modalImg.style.opacity = '1';
            };
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
            
            // Add swipe gestures for mobile
            if (isMobile) {
                let startX, startY;
                
                modal.addEventListener('touchstart', function(e) {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                }, {passive: true});
                
                modal.addEventListener('touchend', function(e) {
                    const endX = e.changedTouches[0].clientX;
                    const endY = e.changedTouches[0].clientY;
                    
                    const diffX = startX - endX;
                    const diffY = startY - endY;
                    
                    // If swipe down, close modal
                    if (diffY < -50 && Math.abs(diffX) < 50) {
                        closeModal();
                    }
                }, {passive: true});
            }
        });
    });
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('show');
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    // Add double tap to close for mobile
    if (isMobile) {
        let lastTap = 0;
        modalImg.addEventListener('touchend', function(e) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 300 && tapLength > 0) {
                closeModal();
                e.preventDefault();
            }
            lastTap = currentTime;
        });
    }
}); 
}); 