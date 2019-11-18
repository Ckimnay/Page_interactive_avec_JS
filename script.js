//Fonctionnalité 1 :

var count = 0
let element = document.getElementsByTagName("footer")[0];
 element.addEventListener("click", function(){ console.log("click")});



//Fonctionnalité 1-bis :
let numbClick = 1;
element.addEventListener("click", function(){
    console.log(`clique ${numbClick}`);
    numbClick += 1;
});


//Fonctionnalité 2 :
let navBtn = document.querySelector('.navbar-toggler');
let navClass = document.getElementById("navbarHeader")
let clickBtn = function(){
    if  (navClass.classList.contains('collapse')){
        navClass.classList.remove('collapse')
    }else {
        navClass.classList.add('collapse')
    }
};

// Fonctionnalité 3 :
let firstCard = document.querySelector('.col-md-4 .btn-group .btn-outline-secondary');
let textRed = function(){
    firstCard.style.color = "red";
};
firstCard.addEventListener("click", textRed);


//Fonctionnalité 4 :
let secondCard = document.querySelectorAll('.col-md-4 .btn-group .btn-outline-secondary')[1];
let textGreen = function(){
    if (secondCard.style.color != "green"){
        secondCard.style.color = "green";
    }else {
        secondCard.style.color = "gray";
    }
};
secondCard.addEventListener("click", textGreen);


//Fonctionnalité 5 :
let navBar = document.querySelector('.navbar');
let styleCss = document.getElementsByTagName("link")[0]

let changeCss = function(event){
    if (styleCss.getAttribute('href') != "style.css") {
    styleCss.setAttribute("href", "style.css"); 
    event.stopPropagation(); //stop la methode click
    }
};
navBar.addEventListener("dblclick", changeCss);

let changeCss = function(){
    if (styleCss.getAttribute('href') == "style.css") {
        styleCss.getAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    }
};
document.addEventListener("dblclick", changeCss);


//Fonctionnalité 6 :
//La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
//Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles.
// Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
let allCards = document.querySelectorAll('.col-md-4 .btn-group .btn-success');

let overCard = function(){
    cardThis = this.closest('.col-md-4');
    img = cardThis.getElementsByTagName('img')[0];
    img = cardThis.getElementsByTagName('img')[0];
    text = cardThis.querySelector('.card-text');
    
    if (text.style.visibility != "hidden"){
        img.style.width = "20%";
        text.style.visibility = "hidden";
    }else {
        img.style.width = "100%";
        text.style.visibility = "visible";
    }
};

allCards.forEach(el => el.addEventListener('mouseover', overCard));