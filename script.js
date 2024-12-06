let cookieCount = 0;
let autoClickerPurchased = false; // Vérifie si l'auto-clicker a été acheté
let advancedAutoClickerPurchased = false; // Vérifie si le second curseur a été acheté
let cursor1Purchased = false;
let cursor2Purchased = false;
let cursor3Purchased = false;

const cursor1Cost = 20; // Coût du premier curseur
const cursor2Cost = 40; // Coût du second curseur
const cursor3Cost = 80; // Coût du dernier curseur
const autoClickerCost = 160;  
const advancedAutoClickerCost = 320;
const button = document.getElementById("cookieButton");
const counter = document.getElementById("counter");
const ads = document.getElementById("ads");
const uselessButton = document.getElementById("uselessButton"); // Récupérer le bouton inutile


let moveCounter = 0;  // Compteur pour savoir combien de fois le bouton a été déplacé

// Fonction pour déplacer le bouton de manière aléatoire
function moveButton() {
    moveCounter++; // Incrément du compteur de déplacement
  
    if (moveCounter % 5 !== 0) {
      // Obtenir les dimensions du bouton
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;
  
      // Obtenir les dimensions de la fenêtre
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      let x, y;
  
      // Boucle pour générer des coordonnées aléatoires pour le bouton
      do {
        x = Math.random() * (windowWidth - buttonWidth);
        y = Math.random() * (windowHeight - buttonHeight);
      } while (false); // Ne vérifier plus la zone du shop
  
      // Appliquer les nouvelles positions au bouton
      button.style.left = x + "px";
      button.style.top = y + "px";
    }
  }
  // Fonction pour déplacer le bouton de manière aléatoire movais code
function 话发货看风景MovaiCode2() {
//     int ;زائل
    
//     djdfkqjdk = 1
//     if (djdfkqjdk != 2){
//         switch(1){
//             case 1:
//                 prout = 1
//                 break
//             case 2:
//                 prout = 2
//                 break
//             case 3: 
//                 prout = 3
//                 break
//             case 4: 
//                 prout = 4
//                 break
//             case 5:
//                 prout = 5
//                 break
//             case 6 :
//                 prout = 6 
//                 break

//             case 7 : 
//                 prout = 7
//                 break
//             case 8 : 
//                 prout =8
//                 break
//             case 9 : 
//                 Prout = 9
//                 break
//             case 10 : 
//                 Prouhdjt = 10
//                 break
//             case wtf_pk_je_fais_ca = 11 :   
//                 tkt = 11;
//                 break
//             default :
//                 ekjrkghlfml = 5;

//         }
//         if ((prout || Prout || tkt || Prouhdjt || 5) != 5) {
//             prout = 5
//             Prout =5
//             tkt   = 5
//             Prouhdjt    =5
//         }


//     }
//     if (qjkhdqjksdh % 5 !== 0) {
//       const sjdhdckqjhfhqhdnfjjzkfjk = button.offsetWidth;
//       const sjdhdckqjhfhqhdnfjjzkfjkqsdQZRTVGARFAF = button.offsetHeight;
//       const SQDKjqshcnksdqnbdfjkfqnjkf12367438I = window.innerWidth;
//       const SQDKjqsboudmca367438I = window.innerHeight;
  
//       let fdlkqshfjkzan, djkhflkhjenfinqdf;
  
//       do {
//         fdlkqshfjkzan = Math.random() * (SQDKjqshcnksdqnbdfjkfqnjkf12367438I - sjdhdckqjhfhqhdnfjjzkfjk);
//         djkhflkhjenfinqdf = Math.random() * (SQDKjqsboudmca367438I - sjdhdckqjhfhqhdnfjjzkfjkqsdQZRTVGARFAF);
//       } while (false); 
  
//       button.style.left = fdlkqshfjkzan + "px";
//       button.style.top = djkhflkhjenfinqdf + "px";
//     }
//   }

  
  function avoidMouse(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
  
    const threshold = 100;
  
    const distanceX = Math.abs(mouseX - buttonCenterX);
    const distanceY = Math.abs(mouseY - buttonCenterY);
  
    if (distanceX < threshold && distanceY < threshold && moveCounter % 5 !== 0) {
      moveButton();
    }
  }
  
  button.addEventListener("click", () => {
    if (moveCounter % 5 === 0) {
      collectCoquillage(); // Appel à collecter un coquillage
      counter.textContent = `Coquillage: ${cookieCount}`;
    }
  
    button.style.transform = 'translate(-50%, -50%) rotate(720deg)';
    
    moveButton();
  
    setTimeout(() => {
      button.style.transition = 'none';
      button.style.transform = 'translate(-50%, -50%)';
      setTimeout(() => {
        button.style.transition = 'transform 1s ease-in-out';
      }, 50);
    }, 1000);
  });
  
  
  setInterval(() => {
    if (Math.random() > 0.7) {
      alert("You won... nothing! Keep clicking!");
    }
  }, 5000);
  
  setInterval(() => {
    const x = Math.random() * (window.innerWidth - ads.offsetWidth);
    ads.style.left = x + "px";
  }, 3000);
  
  document.addEventListener("mousemove", avoidMouse);
  
  moveButton();
  
  setInterval(() => {
    const x = Math.random() * (window.innerWidth - uselessButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - uselessButton.offsetHeight);
  
    // Déplacer le bouton uselessButton
    uselessButton.style.left = `${x}px`;
    uselessButton.style.top = `${y}px`;
  
    // Toujours afficher le bouton uselessButton
    uselessButton.style.display = 'inline-block';
  
    // Copier le texte du cookieButton
    uselessButton.textContent = button.textContent;
  
    uselessButton.style.opacity = 1;
  
    uselessButton.style.transition = 'opacity 0.5s ease';
  
  }, 3000);
  
  const container = document.getElementById('container');
  
  function addNewContent() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-content');
    newDiv.textContent = "Plus de Coquillages! 🐚 Continue à scroll !";
    container.appendChild(newDiv);
  }
  
  // Détection du défilement
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      addNewContent();
    }
  });
  

const oceanQuestions = [
    {
      question: "Quelle est la profondeur moyenne de l'océan Pacifique ?",
      options: ["3 000 mètres", "4 000 mètres", "5 000 mètres", "7 000 mètres"],
      correctAnswer: 1, //
      reward: 5,
    },
    {
      question: "Quel pourcentage de l'oxygène de la Terre provient des océans ?",
      options: ["30%", "50%", "70%", "90%"],
      correctAnswer: 2,
      reward: 10,
    },
    {
      question: "Quel animal marin peut vivre plus de 400 ans ?",
      options: ["La baleine bleue", "Le requin du Groenland", "La méduse immortelle", "Le calamar géant"],
      correctAnswer: 1,
      reward: 15,
    },
    {
      question: "Quelle est la mer la plus salée du monde ?",
      options: ["Mer Méditerranée", "Mer Morte", "Mer Rouge", "Mer Caspienne"],
      correctAnswer: 1,
      reward: 7,
    },
    {
      question: "Quel est le plus grand récif corallien au monde ?",
      options: [
        "Récif corallien de la mer Rouge",
        "La Grande Barrière de Corail",
        "Récif corallien des Maldives",
        "Récif corallien des Caraïbes",
      ],
      correctAnswer: 1,
      reward: 12,
    },
  ];
  
  
  function showOceanQuestion() {
    const randomIndex = Math.floor(Math.random() * oceanQuestions.length);
    const questionData = oceanQuestions[randomIndex];
  
  
    const questionText = `${questionData.question}\n`;
    const optionsText = questionData.options
        .map((option, index) => `${index + 1}. ${option}`)
        .join("\n");
  
  
    const userAnswer = prompt(`${questionText}\n${optionsText}\n\nEntrez le numéro de votre réponse :`);
  
    if (parseInt(userAnswer) - 1 === questionData.correctAnswer) {
      alert(`Bonne réponse ! Vous gagnez ${questionData.reward} coquillages ! 🌊`);
      cookieCount += questionData.reward;
      counter.textContent = `Coquillages: ${cookieCount}`;
    } else {
      alert("Oups, mauvaise réponse. Essayez encore ! 🐠");
    }
  }
  
  let clickThreshold = 10;
  
  button.addEventListener("click", () => {
    if (cookieCount >= clickThreshold) {
      showOceanQuestion();
      clickThreshold += 10;
    }
  });

  const buyAutoClickerButton = document.getElementById("buyAutoClicker");


buyAutoClickerButton.addEventListener("click", () => {
    if (cookieCount >= autoClickerCost && !autoClickerPurchased) {
      cookieCount -= autoClickerCost;
      counter.textContent = `Coquillage: ${cookieCount}`;
      autoClickerPurchased = true;
  
      alert("Félicitations ! Vous avez acheté un auto-clicker ! 🍪");
      startAutoClicker();
  
      // Désactiver le bouton et le griser
      buyAutoClickerButton.disabled = true;
  
      // Activer le second curseur
      document.getElementById("buyAdvancedAutoClicker").disabled = false;
    } else if (autoClickerPurchased) {
      alert("Vous avez déjà acheté l'auto-clicker ! 😊");
    } else {
      alert("Vous n'avez pas assez de cookies pour acheter l'auto-clicker. 😢");
    }
  });

function startAutoClicker() {
    setInterval(() => {
      if (autoClickerPurchased) {
        // Simule un clic automatique
        cookieCount++;
        counter.textContent = `Coquillage : ${cookieCount}`;
      }
    }, 10000); // Clique toutes les 10 secondes
  }

  const buyAdvancedAutoClickerButton = document.getElementById("buyAdvancedAutoClicker");

buyAdvancedAutoClickerButton.addEventListener("click", () => {
  if (cookieCount >= advancedAutoClickerCost && autoClickerPurchased && !advancedAutoClickerPurchased) {
    cookieCount -= advancedAutoClickerCost;
    counter.textContent = `Coquillage: ${cookieCount}`;
    advancedAutoClickerPurchased = true;

    alert("Félicitations ! Vous avez acheté l'Advanced Auto-Clicker ! 🎉");
    startAdvancedAutoClicker();

    // Désactiver le bouton et le griser
    buyAdvancedAutoClickerButton.disabled = true;
  } else if (!autoClickerPurchased) {
    alert("Vous devez d'abord acheter le premier auto-clicker ! 🚫");
  } else if (advancedAutoClickerPurchased) {
    alert("Vous avez déjà acheté l'Advanced Auto-Clicker ! 😊");
  } else {
    alert("Vous n'avez pas assez de cookies pour acheter l'Advanced Auto-Clicker. 😢");
  }
});
function startAdvancedAutoClicker() {
    setInterval(() => {
      if (advancedAutoClickerPurchased) {
        cookieCount++;
        counter.textContent = `Coquillages: ${cookieCount}`;
      }
    }, 15000); // Clique toutes les 15 secondes
    
    const buyCursor1Button = document.getElementById("buyCursor1");

buyCursor1Button.addEventListener("click", () => {
  if (cookieCount >= cursor1Cost && autoClickerPurchased && advancedAutoClickerPurchased && !cursor1Purchased) {
    cookieCount -= cursor1Cost;
    counter.textContent = `Coquillage: ${cookieCount}`;
    cursor1Purchased = true;

    alert("Félicitations ! Vous avez acheté le Super Auto-Clicker ! 🚀");
    startCursor1();

    // Désactiver le bouton et activer le suivant
    buyCursor1Button.disabled = true;
    document.getElementById("buyCursor2").disabled = false;
  } else if (cursor1Purchased) {
    alert("Vous avez déjà acheté ce curseur ! 😊");
  } else {
    alert("Vous n'avez pas encore débloqué ce curseur ou pas assez de cookies. 😢");
  }
});

function startCursor1() {
  setInterval(() => {
    if (cursor1Purchased) {
      cookieCount++;
      counter.textContent = `Coquillage: ${cookieCount}`;
    }
  }, 10000); // Clique toutes les 10 secondes
}
const buyCursor2Button = document.getElementById("buyCursor2");

buyCursor2Button.addEventListener("click", () => {
  if (cookieCount >= cursor2Cost && cursor1Purchased && !cursor2Purchased) {
    cookieCount -= cursor2Cost;
    counter.textContent = `Coquillage: ${cookieCount}`;
    cursor2Purchased = true;

    alert("Félicitations ! Vous avez acheté l'Ultra Auto-Clicker ! 🚀");
    startCursor2();

    // Désactiver le bouton et activer le suivant
    buyCursor2Button.disabled = true;
    document.getElementById("buyCursor3").disabled = false;
  } else if (cursor2Purchased) {
    alert("Vous avez déjà acheté ce curseur ! 😊");
  } else {
    alert("Vous n'avez pas encore débloqué ce curseur ou pas assez de cookies. 😢");
  }
});

function startCursor2() {
  setInterval(() => {
    if (cursor2Purchased) {
      cookieCount++;
      counter.textContent = `Coquillage : ${cookieCount}`;
    }
  }, 5000); // Clique toutes les 5 secondes
}
const buyCursor3Button = document.getElementById("buyCursor3");

buyCursor3Button.addEventListener("click", () => {
  if (cookieCount >= cursor3Cost && cursor2Purchased && !cursor3Purchased) {
    cookieCount -= cursor3Cost;
    counter.textContent = `Coquillage : ${cookieCount}`;
    cursor3Purchased = true;

    alert("Félicitations ! Vous avez acheté l'Hyper Auto-Clicker ! 🚀");
    startCursor3();

    // Désactiver le bouton
    buyCursor3Button.disabled = true;
  } else if (cursor3Purchased) {
    alert("Vous avez déjà acheté ce curseur ! 😊");
  } else {
    alert("Vous n'avez pas encore débloqué ce curseur ou pas assez de cookies. 😢");
  }
});

function startCursor3() {
  setInterval(() => {
    if (cursor3Purchased) {
      cookieCount++;
      counter.textContent = `Coquillage: ${cookieCount}`;
    }
  }, 3000); // Clique toutes les 3 secondes
}
}
const toggleShopButton = document.getElementById("toggleShop");
const shop = document.getElementById("shop");
const countdownDisplay = document.getElementById("countdown");

// Variable pour suivre le timer et le compte à rebours
let pressTimer;
let countdownValue = 5; // Délai de 5 secondes avant l'affichage du shop
let shopVisibleTimeout;

// Gérer le début de l'appui (mousedown)
toggleShopButton.addEventListener("mousedown", () => {
  countdownValue = 5;  // Réinitialiser la valeur du décompte
  countdownDisplay.textContent = countdownValue;  // Afficher le décompte initial
  countdownDisplay.classList.remove("hidden");  // Afficher l'élément du décompte

  pressTimer = setInterval(() => {
    countdownValue--;  // Décrémenter le décompte à chaque seconde
    countdownDisplay.textContent = countdownValue;

    // Lorsque le décompte atteint 0, afficher le shop et annuler le timer
    if (countdownValue === 0) {
      clearInterval(pressTimer);  // Arrêter le décompte
      countdownDisplay.classList.add("hidden");  // Cacher l'affichage du décompte

      // Afficher le shop
      shop.classList.remove("hidden");

      // Masquer le shop après 3 secondes
      shopVisibleTimeout = setTimeout(() => {
        shop.classList.add("hidden");
      }, 1500); // 1.5 secondes
    }
  }, 1000);  // Décrémenter chaque seconde
});

// Annuler l'action si l'utilisateur relâche le bouton avant 5 secondes (mouseup)
toggleShopButton.addEventListener("mouseup", () => {
  clearInterval(pressTimer);  // Arrêter le décompte
  countdownDisplay.classList.add("hidden");  // Cacher le décompte
});

// Si l'utilisateur quitte le bouton avec la souris (mouseout), annuler aussi le timer
toggleShopButton.addEventListener("mouseout", () => {
  clearInterval(pressTimer);  // Arrêter le décompte
  countdownDisplay.classList.add("hidden");  // Cacher le décompte
});


const coquillageGoal = 600; // Objectif de coquillages
const messageFelicitation = "Félicitations, vous avez nettoyé tous les océans !"; // Message de félicitations

// Fonction pour collecter un coquillage
function collectCoquillage() {
    if (cookieCount < coquillageGoal) {  // Vérifier si l'objectif n'est pas encore atteint
      cookieCount++; // Augmenter le nombre de coquillages collectés
      console.log(`Coquillages collectés: ${cookieCount}`);
  
      // Vérifier si l'objectif est atteint
      if (cookieCount >= coquillageGoal) {
        stopGame(); // Arrêter le jeu
        afficherMessageFelicitation(); // Afficher le message de félicitations
      }
    }
  }

// Fonction pour arrêter le jeu
function stopGame() {
    // Masquer tous les boutons de jeu
    const buttons = document.querySelectorAll("button"); // Sélectionner tous les boutons
    buttons.forEach(button => button.style.display = "none"); // Masquer chaque bouton
  
    // Désactiver d'autres éléments interactifs si nécessaire
    document.body.style.pointerEvents = "none"; // Désactiver l'interaction avec la page
  
    console.log("Jeu arrêté");
  }
  

// Fonction pour afficher un message de félicitations
function afficherMessageFelicitation() {
    const messageElement = document.createElement("div"); // Créer un élément pour le message
    messageElement.textContent = messageFelicitation; // Définir le texte du message
    messageElement.style.fontSize = "24px"; // Style du texte
    messageElement.style.fontWeight = "bold"; // Texte en gras
    messageElement.style.color = "green"; // Couleur du texte
    messageElement.style.position = "fixed"; // Position fixe pour centrer le message à l'écran
    messageElement.style.top = "50%"; // Position verticale
    messageElement.style.left = "50%"; // Position horizontale
    messageElement.style.transform = "translate(-50%, -50%)"; // Centrer le message
    messageElement.style.padding = "20px";
    messageElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Fond semi-transparent
    messageElement.style.borderRadius = "10px"; // Coins arrondis
    document.body.appendChild(messageElement); // Ajouter le message à l'écran
  }
  

// Exemple d'appel de la fonction collectCoquillage
// Cela pourrait être lié à un événement, comme cliquer sur un coquillage dans le jeu.
collectCoquillage(); // Appeler cette fonction chaque fois qu'un coquillage est collecté
