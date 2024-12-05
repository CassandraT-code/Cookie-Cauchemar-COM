let cookieCount = 0;

// Récupération des éléments HTML par leurs identifiants
const button = document.getElementById("cookieButton"); // Bouton pour cliquer
const counter = document.getElementById("counter"); // Affichage du compteur
const ads = document.getElementById("ads"); // Bannière publicitaire

// Vérifiez que les éléments sont bien trouvés
if (!button) console.error("Élément 'cookieButton' introuvable !");
if (!counter) console.error("Élément 'counter' introuvable !");
if (!ads) console.error("Élément 'ads' introuvable !");

// Fonction pour déplacer le bouton
function moveButton() {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = x + "px";
  button.style.top = y + "px";
}

// Incrémentation des cookies au clic
button.addEventListener("click", () => {
  cookieCount++;
  counter.textContent = `Cookies: ${cookieCount}`;
  moveButton();
});

// Pop-ups aléatoires pour distraire l'utilisateur
setInterval(() => {
  if (Math.random() > 0.7) {
    alert("You won... nothing! Keep clicking!");
  }
}, 5000);

// Déplacement aléatoire des publicités
setInterval(() => {
  const x = Math.random() * (window.innerWidth - ads.offsetWidth);
  ads.style.left = x + "px";
}, 3000);
