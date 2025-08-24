const flame = document.getElementById('flame');
const landing = document.getElementById('landing');
const message = document.getElementById('message');
const popup = document.getElementById('popup');
const slideshow = document.getElementById('slideshow');
const slideImage = document.getElementById('slideImage');

// Photo list (make sure these images exist in assets/images/)
const photos = [
    'assets/images/v1.jpeg',
    'assets/images/mav2.jpg',
    'assets/images/mmav3.jpg',
    'assets/images/mv3.jpg',
    'assets/images/IMG_20180101_202005.jpg',
    'assets/images/IMG_20180401_022104.jpg',
    'assets/images/IMG-20190101-WA0015.jpg',
    'assets/images/mv1.jpg',
    'assets/images/IMG-20190104-WA0007.jpg',
    'assets/images/IMG-20181230-WA0012.jpg',
    'assets/images/IMG_20191225_021032.jpg',
    'assets/images/IMG-20181225-WA0007.jpg',
    'assets/images/483.jpg',
    'assets/images/452.jpg',
    'assets/images/mv10.jpeg',
    'assets/images/mv07.jpeg',
    'assets/images/IMG_20240915_180047.jpg',
    'assets/images/IMG_5097 Small.jpeg',
    // Add more photos here
];

let currentPhoto = 0;

// Blow out
flame.addEventListener('click', () => {
    flame.style.display = 'none';
    landing.style.display = 'none';
    message.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'block';
    }, 1000);

    // Add confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * -100 + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
    }
});

// Close popup
function closePopup() {
    popup.style.display = 'none';
}

// View memories (button inside popup)
function viewMemories() {
    closePopup();
    startSlideshow();
}

let viewedPhotos = new Set();

// Start slideshow
function startSlideshow() {
    slideshow.style.display = 'flex';
    showSlide(currentPhoto);
}

// Show slide and manage buttons
function showSlide(index) {
    slideImage.src = photos[index];
    viewedPhotos.add(index);

    // Hide "Close" until all photos are viewed
    if (viewedPhotos.size === photos.length) {
        document.getElementById('closeButton').style.display = 'inline-block';
    } else {
        document.getElementById('closeButton').style.display = 'none';
    }
}

// Next photo
function nextSlide() {
    currentPhoto = (currentPhoto + 1) % photos.length;
    showSlide(currentPhoto);
}

// Previous photo
function previousSlide() {
    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
    showSlide(currentPhoto);
}

//Close slideshow
function closeSlideshow() {
    slideshow.style.display = 'none';
    currentPhoto = 0;
    viewedPhotos.clear(); // Optional: Reset viewed state if restarting slideshow
}

function closeSlideshow() {
    slideshow.style.display = 'none';
    currentPhoto = 0;
    viewedPhotos.clear();

    // Create the final surprise message
    const finalMessage = document.createElement('div');
    finalMessage.id = 'finalMessage';
    finalMessage.innerHTML = `
        <h1>🎉 Thank You for Watching, Vini! 🎉</h1>
        <p>These childhood memories mean so much to me — not just because of the moments, but because you were in them. Somewhere between all those laughs and quiet moments, I found a soft corner for you in my heart.</p>
        <p style="margin-top:20px;"><br><strong>Milan</strong></p>
    `;
    document.body.appendChild(finalMessage);

    // Optional: Add hearts or confetti again
    for (let i = 0; i < 80; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        document.body.appendChild(heart);
    }
}

// function closeSlideshow() {
//     // Hide slideshow
//     slideshow.style.display = 'none';
//     currentPhoto = 0;
//     viewedPhotos.clear();

//     // Remove existing final message and hearts, if any
//     const oldFinalMessage = document.getElementById('finalMessage');
//     if (oldFinalMessage) oldFinalMessage.remove();
//     document.querySelectorAll('.heart').forEach(h => h.remove());

//     // Create and display the final message
//     const finalMessage = document.createElement('div');
//     finalMessage.id = 'finalMessage';
//     finalMessage.innerHTML = `
//         <h1>🎉 Thank You for Watching, Vini! 🎉</h1>
//         <p>These childhood memories mean so much to me — not just because of the moments, but because you were in them. Somewhere between all those laughs and quiet moments, I found a soft corner for you in my heart.</p>
//         <p style="margin-top:20px;"><br><strong>Milan</strong></p>
//     `;
//     document.body.appendChild(finalMessage);

//     for (let i = 0; i < 80; i++) {
//         const heart = document.createElement('div');
//         heart.classList.add('heart');
//         heart.style.left = Math.random() * window.innerWidth + 'px';
//         heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
//         document.body.appendChild(heart);
//     }

//     // After 3 seconds, remove the final message and hearts, and show landing page
//     setTimeout(() => {
//         finalMessage.remove();
//         document.querySelectorAll('.heart').forEach(h => h.remove());
//         // Show landing page and reset candle/flame
//         flame.style.display = 'block';
//         landing.style.display = 'flex';
//         message.style.display = 'none';
//         popup.style.display = 'none';
//     }, 3000); // 3 second delay for the final message
// }

//this should be in the bottom
window.onload = function () {
    // Always start from landing page
    landing.style.display = 'flex';
    flame.style.display = 'block';
    message.style.display = 'none';
    popup.style.display = 'none';
    slideshow.style.display = 'none';

    // Remove final message and hearts if any (clean up from previous session)
    const oldFinalMessage = document.getElementById('finalMessage');
    if (oldFinalMessage) oldFinalMessage.remove();
    document.querySelectorAll('.heart').forEach(h => h.remove());

    // Reset current photo and viewed photos
    currentPhoto = 0;
    viewedPhotos.clear();
};



