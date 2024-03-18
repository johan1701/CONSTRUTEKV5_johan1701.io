document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');

    // Función para desplazar el slider hacia la izquierda
    function slideLeft() {
        slideTrack.appendChild(slideTrack.firstElementChild);
    }

    // Función para desplazar el slider hacia la derecha
    function slideRight() {
        slideTrack.insertBefore(slideTrack.lastElementChild, slideTrack.firstElementChild);
    }

    // Event listener para la flecha izquierda
    prevSlide.addEventListener('click', function() {
        slideLeft();
    });

    // Event listener para la flecha derecha
    nextSlide.addEventListener('click', function() {
        slideRight();
    });
});
