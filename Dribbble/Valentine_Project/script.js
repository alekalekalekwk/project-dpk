// DOM Elements
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainCard = document.getElementById('mainCard');
const successCard = document.getElementById('successCard');
const bgHearts = document.getElementById('bgHearts');
const bgBlossoms = document.getElementById('bgBlossoms');

// Configuration
// RENAME "your-image.png" TO YOUR ACTUAL IMAGE FILENAME (e.g. "photo.jpg")
const pathToCustomImage = "profile.jpg"; 

// Create background elements (Hearts or Images)
function createHearts() {
    if (!bgHearts) return;
    
    const heartIcons = ['❤️', '💖', '💝', '💕', '💗'];
    
    for (let i = 0; i < 30; i++) {
        const item = document.createElement('div');
        item.classList.add('heart');
        
        // UNCOMMENT THE SECTION BELOW TO USE YOUR IMAGE INSTEAD OF HEARTS
        
        const img = document.createElement('img');
        img.src = pathToCustomImage;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'contain';
        item.innerHTML = '';
        item.appendChild(img);
        item.style.width = '50px'; // Adjust size of your image
        item.style.height = '50px';
    

        // COMMENT THIS OUT IF USING IMAGES
        //item.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
        
        // Random positioning
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        // Only randomize font-size if using text hearts
        if (!item.querySelector('img')) {
            item.style.fontSize = Math.random() * 1 + 1 + 'rem';
        }

        bgHearts.appendChild(item);
    }
}
createHearts();

// Create falling cherry blossoms
function createBlossoms() {
    if (!bgBlossoms) return;

    const flowers = ['🌸', '💮'];
    
    for (let i = 0; i < 20; i++) {
        const item = document.createElement('div');
        item.classList.add('blossom');
        item.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Random positioning
        item.style.left = Math.random() * 100 + 'vw';
        item.style.animationDuration = Math.random() * 5 + 5 + 's'; // Slower individual fall
        item.style.animationDelay = Math.random() * 5 + 's'; // Random start delays
        item.style.fontSize = Math.random() * 1 + 0.5 + 'rem';
        
        bgBlossoms.appendChild(item);
    }
}
createBlossoms();

// No Button Interaction
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Change to fixed to allow free movement
    noBtn.classList.add('moving');
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

if (noBtn) {
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton); // For mobile
}

// Yes Button Interaction
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        // Trigger confetti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ff8fa3', '#fff']
        });
    
        // Burst confetti from sides
        const duration = 3000;
        const end = Date.now() + duration;
    
        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff8fa3']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff8fa3']
            });
    
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    
        // Hide main card, show success card
        if (mainCard && successCard) {
            mainCard.classList.add('hidden');
            successCard.classList.remove('hidden');
        }
    
        // Play a sound (optional, browser policies might block autoplay)
        // const audio = new Audio('happy-sound.mp3');
        // audio.play().catch(e => console.log('Audio disabled'));
    });
}
