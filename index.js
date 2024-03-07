window.sr = ScrollReveal()
ScrollReveal().reveal('.nav-bar',{
    duration: 3000,
});
// Inicializar ScrollReveal
ScrollReveal().reveal('.card.m-2', {
    duration: 3000,
    // Puedes ajustar otros parámetros según tus necesidades
});

// // Función para activar la animación cuando se hace scroll
// function activarAnimacion() {
//     var cards = document.querySelectorAll('.card.m-2');
//     cards.forEach(function(card) {
//         if (isElementInViewport(card)) {
//             ScrollReveal().reveal(card);
//         }
//     });
// }

// // Función para verificar si un elemento está en el viewport
// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Activar la animación al cargar la página
// activarAnimacion();

// // Activar la animación cada vez que se hace scroll
// window.addEventListener('scroll', activarAnimacion);