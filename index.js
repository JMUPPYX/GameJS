// assigne à choix la classe choixjoueur => img qui correspond au 3 IMG
const choix = document.querySelectorAll('.choixjoueur img');
// assigne à robot la classe choixrobot => img qui correspond à la balise img créée
const robot = document.querySelector('.choixrobot img');
// assigne à possibilites le tableau avec les 3 img
const possibilites=["paper","rock","scissors"];
// assigne à res la class section2 et sa div
const res = document.querySelector('.section2 div');
// assigne à score la classe score et sa span
const score = document.querySelector('.score span');
// assigne à choixjoueur choixrobot resultat "vide" car les choix seront aléatoires
let choixjoueur ="";
let choixrobot ="";
let resultat = "";
let scorejoueur = 0;
let scorerobot = 0;

// setResultat = res = affiche le contenu de la div section2
const setResultat = ()=>{
    res.innerHTML = resultat;
    // score = affiche le contenu de la span (entre les balises)
    score.innerHTML = `${scorejoueur} - ${scorerobot}`;
  }

//   getResultat 
  const getResultat = ()=>{
    // switch renvoi true
    switch (true) {
        // choixjoueur strictement égal à la valeur de choixrobot 
      case choixjoueur == choixrobot:
        resultat = "Match nul";
        break;
        // choixjoueur strictement égal à 'pierre' et choixrobot strictement égal à 'papier' ou choixjoueur == 'papier' et choixrobot == "ciseaux" ou choixjoueur est strictement égal à 'ciseaux' et choixrobot == 'pierre'
      case ((choixjoueur == "rock" && choixrobot == "paper") || (choixjoueur == "paper" && choixrobot == "scissors") || (choixjoueur == "scissors" && choixrobot == "rock")):
        resultat = "Vous avez perdu";
        scorerobot++;
        break;
        // en dehors des conditions ci dessus 
      default:
        resultat = "Vous avez gagné";
        scorejoueur++;
        break;
    }
    // affiche  les constantes res et score
    setResultat();
  }

//   recupere le choix du robot = 
const getChoiseRobot = ()=>{
    choixrobot = possibilites[Math.floor(Math.random() * 3)];
    // prend l'ensemble qui contient l'attribut src et les img
    robot.setAttribute("src", `img/${choixrobot}.png`);
    getResultat();
  }
// pour chaque image qui appartient à la classe choixjoueur l'element au moment du clique cible l'evenement de la classe et envoi le choix du robot 'img)
choix.forEach(element => {
    element.addEventListener ('click' , e => {
      // choixjoueur est = cible l'evenement de la classe
    choixjoueur = e.target.className;
    getChoiseRobot();
    })
});