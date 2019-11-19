console.log(document);                              //affiche en console, l'arborescence du fichier html


//************************************//
//1+1BIS - Compter le nombre de clics*//
//************************************//

console.log("1 - COMPTER LE NOMBRE DE CLICS");  // affiche l'énoncéf
let footer = document.querySelector("footer");       //sélectionner le footer
footer.addEventListener("click",nombreClics);        // à chaque clic exécuter l'événement/la méthode "nombreClics"

let n=0;
                                            // déclare la variable n qui servira de compteur de clics
function nombreClics(){
n ++;                                               //n ++ : incrémente de 1 à chaque clic
console.log ("nombre de clic footer : "+n)}


//*******************************************//
//2 - navbarHeader perd sa classe collapse  *//
//*******************************************//
console.log("2 - NAVBARHEADER PERD SA CLASSE COLLAPSE");

let hamburgerButton = document.querySelector("button");     //selectionne le premier bouton qu'il trouve
hamburgerButton.addEventListener("click",changeCollapse);  // définir une fonction à chaque clic sur bouton hamburger

function changeCollapse(){
collapse = document.getElementById('navbarHeader');
collapse.classList.toggle("collapse");                     //toggle = mettre en "on" ou mettre en "off" la fonction collapse
console.log("plie/déplie la navbar")}


//************************************************//
//3 - le texte de la card va se mettre en rouge  *//
//************************************************//
console.log("3 - LE TEXTE DE LA CARD SE MET EN ROUGE");

let cards = document.getElementsByClassName("card");                            // selectionne toutes les cartes dans un array nommé "cards"
console.log("liste des cartes");
console.log(cards);
let firstCard = cards[0];                                                       // sélectionne la 1ere carte dans le array des cards
console.log("detail de la 1ere carte ");
console.log(firstCard);                                                         // affiche le code html de la 1ere carte

var oneButton = firstCard.childNodes[0].nodeType;
console.log("1er bouton ");
console.log(oneButton);

var buttonList = document.getElementsByClassName("btn-outline-secondary")       // créé un array avec tous les boutons secondary
console.log("liste des boutons edit ");                                         //
console.log(buttonList);                                                        //affiche liste des boutons
let firstButton = buttonList[0];                                                // sélectionne le 1ere bouton dans le array des boutons
console.log("detail du 1er bouton edit ");                                      //
console.log(firstButton);                                                       // affiche le 1er bouton

firstButton.addEventListener("click",colorCard1)
function colorCard1(){
firstCard.style.color = "red";
console.log("colore la police de la carte en rouge")}


//********************************************************//
//4 - on/off - le texte de la card va se mettre en vert  *//
//********************************************************//
console.log("4 - LE TEXTE DE LA CARD SE MET EN VERT");

let secondButton = buttonList[1];                                               //selectionne le 2e bouton de liste des boutons
console.log("detail du 2nd bouton edit ");                                      //
console.log(secondButton);                                                      //

let secondCard = cards[1];                                                       // sélectionne la 2e carte dans le array des cards
console.log("detail de la 2nd carte ");
console.log(secondCard);

colorblack = true                                                              // definir la couleur actuelle
secondButton.addEventListener("click",colorCard2)                                 //à chaque clic sur bouton edit, faire la fonction colorier la carte

function colorCard2(){
  if (colorblack)
  {secondCard.style.color = "green";                                                // on colore en vert le texte de la carte 2
  console.log("colore la police de la carte en vert");
  colorblack = false}
  else  {secondCard.style.color = "black";                                                // on colore en noir le texte de la carte 2
  console.log("colore la police de la carte en noir");
  colorblack = true}}

//********************************************************//
//5 - on/off -  Bootstrap disparaît                      *//
//********************************************************//

let header = document.querySelector("header");                                  //sélectionner le header, qui contient la navbar
header.addEventListener("dblclick",hideBootstrap)                               //si doubleclic sur la navbar, alors appliquer la fonction cacher bootstrap

function hideBootstrap(){
link = document.querySelector("link");                                           //pour cacher bootstrap, commencer par retrouver le lien bootstrap dans le html
if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
  link.href = "";                                                               //si le lien existe; alors le supprimer, s'il n'existe pas alors le remettre
  console.log("bootstrap désactivé")}
else {link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    console.log("bootstrap activé")}}


//********************************************************//
//SUIVI DES EVENEMENTS QUI S'AFFICHENT EN CONSOLE        *//
//********************************************************//
console.log("");
console.log("JOURNAL DES EVENEMENTS :");
