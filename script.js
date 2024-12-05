let cookieCount = 0;
const button = document.getElementById("cookieButton");
const counter = document.getElementById("counter");
const ads = document.getElementById("ads");
const uselessButton = document.getElementById("uselessButton"); // Récupérer le bouton inutile

let moveCounter = 0;  // Compteur pour savoir combien de fois le bouton a été déplacé

// Fonction pour déplacer le bouton de manière aléatoire
function moveButton() {
  moveCounter++;  // Incrémenter le compteur de déplacements

  // Déplace le bouton seulement si le compteur n'est pas un multiple de 5
  if (moveCounter % 5 !== 0) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = x + "px";
    button.style.top = y + "px";
  }
}

// Fonction pour éviter la souris (déplacer le bouton si la souris est trop proche)
function avoidMouse(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const buttonRect = button.getBoundingClientRect(); // Récupère la position du bouton
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const threshold = 100; // Distance en pixels pour considérer que la souris est trop proche

  const distanceX = Math.abs(mouseX - buttonCenterX);
  const distanceY = Math.abs(mouseY - buttonCenterY);

  // Si la souris est trop proche, déplacer le bouton
  if (distanceX < threshold && distanceY < threshold && moveCounter % 5 !== 0) {
    moveButton();  // Déplacer le bouton à une nouvelle position
  }
}

// Ajouter l'événement de clic sur le bouton
button.addEventListener("click", () => {
  // Incrémenter le compteur de cookies
  if (moveCounter % 5 === 0) {
    cookieCount++;
    counter.textContent = `Cookies: ${cookieCount}`;
  }

  // Ajouter une rotation au bouton
  button.style.transform = 'translate(-50%, -50%) rotate(720deg)'; // Rotation de 720° (2 tours complets)

  // Déplacer le bouton
  moveButton();

  // Réinitialiser la rotation après l'animation
  setTimeout(() => {
    button.style.transition = 'none';  // Désactiver la transition pendant la réinitialisation
    button.style.transform = 'translate(-50%, -50%)';  // Réinitialiser la position et supprimer la rotation
    setTimeout(() => {
      button.style.transition = 'transform 1s ease-in-out';  // Réactiver la transition
    }, 50);  // Petit délai avant de réactiver la transition
  }, 1000);  // Durée de l'animation de rotation (1 seconde)
});

// Pop-up aléatoire
setInterval(() => {
  if (Math.random() > 0.7) {
    alert("You won... nothing! Keep clicking!");
  }
}, 5000);

// Déplacer les annonces de manière aléatoire
setInterval(() => {
  const x = Math.random() * (window.innerWidth - ads.offsetWidth);
  ads.style.left = x + "px";
}, 3000);

// Ajouter un écouteur d'événements pour la souris pour esquiver le curseur
document.addEventListener("mousemove", avoidMouse);

// Déplacer le bouton pour la première fois
moveButton();

// Afficher le bouton inutile à des positions aléatoires, et il a le même texte que le cookieButton
setInterval(() => {
  // Position aléatoire du bouton uselessButton
  const x = Math.random() * (window.innerWidth - uselessButton.offsetWidth); // Position horizontale aléatoire
  const y = Math.random() * (window.innerHeight - uselessButton.offsetHeight); // Position verticale aléatoire

  // Déplacer le bouton uselessButton
  uselessButton.style.left = `${x}px`;  // Position horizontale
  uselessButton.style.top = `${y}px`;   // Position verticale

  // Toujours afficher le bouton uselessButton
  uselessButton.style.display = 'inline-block';  // Le bouton reste affiché

  // Copier le texte du cookieButton
  uselessButton.textContent = button.textContent;

  uselessButton.style.opacity = 1;  // Le bouton devient complètement visible

  // Ajouter une petite animation pour rendre le bouton plus visible
  uselessButton.style.transition = 'opacity 0.5s ease';  // Transition pour l'apparition du bouton

}, 3000); // Le bouton se déplace toutes les 3 secondes
