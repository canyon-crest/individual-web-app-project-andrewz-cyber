document.addEventListener('DOMContentLoaded', (event) => {
    const showImageButton = document.getElementById('But');
    const MyImage = document.getElementById('Myimage');

    showImageButton.addEventListener('click', () => {
        // Toggles the hidden attribute (true/false)
        MyImage.hidden = !MyImage.hidden;
    });
});

