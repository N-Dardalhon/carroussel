// script.js

let currentIndex = 0;
const totalSlides = 5; // Nombre de slides

const carrousel = document.querySelector('.carrousel');

// Fonction pour déplacer le carrousel
function moveCarrousel() {
    const rotationDegree = -currentIndex * 72; // Chaque slide occupe 72 degrés
    carrousel.style.transform = `rotateY(${rotationDegree}deg)`;
}

// Fonction pour aller à la slide suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Boucle sur les slides
    moveCarrousel();
}

// Fonction pour aller à la slide précédente
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Boucle sur les slides
    moveCarrousel();
}

// Vous pouvez déclencher ces fonctions avec des boutons ou des événements de swipe
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    }
    if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Initialiser la position
moveCarrousel();
