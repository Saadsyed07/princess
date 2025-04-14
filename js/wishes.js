document.addEventListener('DOMContentLoaded', () => {
    const wishesContainer = document.querySelector('.wishes-container');
    const submitButton = document.getElementById('submitWish');
    const newWishInput = document.getElementById('newWish');
    const wishAuthorInput = document.getElementById('wishAuthor');

    // Sample wishes (you can add more)
    const sampleWishes = [
        {
            text: "May your life be filled with love, joy, and endless possibilities. Welcome to our world, precious little one!",
            author: "Family"
        },
        {
            text: "Wishing you a lifetime of happiness and beautiful memories. Welcome to the family!",
            author: "Friends"
        }
    ];

    // Function to create a wish card
    function createWishCard(wish) {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        
        const wishContent = document.createElement('div');
        wishContent.className = 'wish-content';
        
        const wishText = document.createElement('p');
        wishText.className = 'wish-text';
        wishText.textContent = `"${wish.text}"`;
        
        const wishAuthor = document.createElement('p');
        wishAuthor.className = 'wish-author';
        wishAuthor.textContent = `- ${wish.author}`;
        
        wishContent.appendChild(wishText);
        wishContent.appendChild(wishAuthor);
        wishCard.appendChild(wishContent);
        
        return wishCard;
    }

    // Add sample wishes
    sampleWishes.forEach(wish => {
        const wishCard = createWishCard(wish);
        wishesContainer.appendChild(wishCard);
    });

    // Handle new wish submission
    submitButton.addEventListener('click', () => {
        const wishText = newWishInput.value.trim();
        const wishAuthor = wishAuthorInput.value.trim();

        if (wishText && wishAuthor) {
            const newWish = {
                text: wishText,
                author: wishAuthor
            };

            const wishCard = createWishCard(newWish);
            wishesContainer.appendChild(wishCard);

            // Clear inputs
            newWishInput.value = '';
            wishAuthorInput.value = '';

            // Add animation
            wishCard.style.animation = 'fadeIn 0.5s forwards';
        }
    });

    // Add hover effects to wish cards
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 