// Create image overlay container
const overlay = document.createElement('div');
//Creates a div element and assigns it to the variable 'overlay'. This div will be used as a container for displaying the enlarged images when a character or weapon image is clicked.
overlay.className = 'image-overlay';
//Sets the class name of the overlay div to 'image-overlay'. This allows us to style the overlay using CSS.
overlay.id = 'image-overlay';
//Sets the id of the overlay div to 'image-overlay'. This can be used for additional styling or JavaScript manipulation if needed.
document.body.appendChild(overlay);
//Appends the overlay div to the body of the document, making it part of the webpage's DOM. This allows the overlay to be displayed when needed.

// Get all character and weapon images
const characterImages = document.querySelectorAll('.character-box img, .weapon-box img');

// Add click event listeners to all character/weapon images
characterImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents the click event from bubbling up to the overlay, allowing the image to be clicked without closing the overlay immediately.
        const expandedImg = document.createElement('img');
        expandedImg.src = this.src;
        overlay.innerHTML = '';
        overlay.appendChild(expandedImg);
        overlay.classList.add('active');
    });
});

// Close overlay when clicking on it (the background or the image)
overlay.addEventListener('click', function() {
    this.classList.remove('active');
    this.innerHTML = '';
});

// Handle the fixed button - scroll to top
const fixedButton = document.querySelector('.fixed-button');
if (fixedButton) {
    fixedButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

