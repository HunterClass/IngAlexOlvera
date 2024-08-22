document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const notLoveButton = document.getElementById('notLoveButton');
    const backgroundMusic = document.getElementById('backgroundMusic');

    loveButton.addEventListener('click', () => {
        // Create hearts and confetti effects
        createHearts();
        createConfetti();
    });

    notLoveButton.addEventListener('click', () => {
        loveButton.style.transform = 'scale(2)';
    });

    function createHearts() {
        const heartCount = 30;
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            document.body.appendChild(heart);

            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animation = `hearts ${Math.random() * 2 + 1}s ease-out`;
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }
    }

    function createConfetti() {
        const confettiCount = 50;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            document.body.appendChild(confetti);

            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = Math.random() * 100 + 'vh';
            confetti.style.animation = `confetti ${Math.random() * 2 + 1}s ease-out`;
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
