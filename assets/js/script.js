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

//Changer les images (responsive)
window.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            id: 'mockupImg1',
            src: 'assets/img/mockupAccueil.png',
            srcSmall: 'assets/img/mockupAccueil-petit.png'
        },
        {
            id: 'mockupImg2',
            src: 'assets/img/mockupCollecte.png',
            srcSmall: 'assets/img/mockupCollecte-petit.png'
        },
        {
            id: 'mockupImg3',
            src: 'assets/img/mockupExplorer.png',
            srcSmall: 'assets/img/mockupExplorer-petit.png'
        },
        {
            id: 'mockupImg4',
            src: 'assets/img/mockupSucces.png',
            srcSmall: 'assets/img/mockupSucces-petit.png'
        },
        {
            id: 'mockupImg5',
            src: 'assets/img/mockupTelecharger.png',
            srcSmall: 'assets/img/mockupTelecharger-petit.png'
        }
    ];

    function changeImagesBasedOnScreenWidth() {
        const screenWidth = window.innerWidth;

        images.forEach(function(image) {
            const imgElement = document.getElementById(image.id);

            if (screenWidth <= 1080) {
                imgElement.src = image.srcSmall;
            } else {
                imgElement.src = image.src;
            }
        });
    }

    // Écouteur d'événement pour déclencher le changement d'images lorsque la taille de l'écran change
    window.addEventListener('resize', changeImagesBasedOnScreenWidth);

    // Appel initial pour définir les images en fonction de la taille de l'écran au chargement de la page
    changeImagesBasedOnScreenWidth();
});