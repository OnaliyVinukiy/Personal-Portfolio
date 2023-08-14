var mixer = mixitup('.portfolio-gallery');

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon-circle');
    const overlay = document.getElementById('imageOverlay');
    const enlargedImage = document.getElementById('enlargedImage');
    const closeOverlay = document.getElementById('closeOverlay');
    

    icons.forEach(icon => {
        icon.addEventListener('click', event => {
            event.preventDefault();
            
            // Get the clicked image's source
            const imageSrc = icon.closest('.port-box').querySelector('.port-image img').src;
            
            // Set the enlarged image source
            enlargedImage.src = imageSrc;
            
            // Show the overlay
            overlay.style.display = 'flex';
            
            closeOverlay.addEventListener('click', () => {
                overlay.style.display = 'none';
            });
            
            // Show the close button when the image enlarges
            enlargedImage.addEventListener('load', () => {
                closeOverlay.style.display = 'block';
            });
        });
    });
});