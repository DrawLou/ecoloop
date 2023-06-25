// Sélectionnez tous les liens d'ancrage
const links = document.querySelectorAll('a[href^="#"]');

// Ajoutez un gestionnaire d'événements pour chaque lien
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement de lien par défaut

    const target = document.querySelector(link.getAttribute('href')); // Sélectionne la cible du lien

    // Vérifiez si la cible existe et faites défiler la page vers la cible avec une transition fluide
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Sélectionnez le bouton par son ID
const button = document.getElementById('bouton');

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
button.addEventListener('click', () => {
  const target = document.querySelector('#telecharger');

  // Vérifiez si la cible existe et faites défiler la page vers la cible avec une transition fluide
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
});