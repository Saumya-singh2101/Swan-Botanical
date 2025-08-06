// about_script.js

document.addEventListener('DOMContentLoaded', () => {
    const bubbleArea = document.getElementById('bubbleAreaAbout');

    // Only run if the bubble area exists on the page
    if (bubbleArea) {
        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');

            // Random size for "small" bubbles (e.g., 20px to 60px)
            const size = Math.random() * 40 + 20; // Size between 20 and 60 pixels
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            // Random starting X position within the bubble area (to avoid being perfectly aligned)
            const startX = Math.random() * (bubbleArea.offsetWidth - size);
            bubble.style.left = `${startX}px`;

            // Start from slightly off the bottom of the bubble area
            bubble.style.bottom = `-50px`;

            // Random X offset for the animation path (for varied movement)
            const randomXOffset = (Math.random() - 0.5) * 200; // Drifts between -100px and +100px
            bubble.style.setProperty('--random-x-offset', `${randomXOffset}px`);

            bubbleArea.appendChild(bubble);

            // Remove bubble after animation ends to prevent memory buildup
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        };

        // Generate bubbles at regular intervals
        // Adjust the interval to change the density of bubbles
        setInterval(createBubble, 800); // Creates a new bubble every 0.8 seconds
    }
});