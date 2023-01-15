openedNav = false;
function startup() {
    removeHold();
    setTimeout(function() {
        removeSlash();
        playClips();
    }, 700)

    setTimeout(function() {
        if(!openedNav) toggleNav();
    }, 5000)
}

function playClips() {
    var L = document.getElementById("Lc");
    var R = document.getElementById("Rc");

    L.style.animationPlayState = "running";
    R.style.animationPlayState = "running";

    setTimeout(function() {
        R.style.background = "transparent";
        L.style.background = "transparent";
        moveStartupLeft()
    }, 1995)
}

function removeHold() {
    var L = document.getElementById("Li");
    var R = document.getElementById("Ri");
    
    L.classList.toggle("moveL");
    R.classList.toggle("moveR");
}

function removeSlash() {
    var slash = document.getElementById("Si");

    slash.classList.add('blink_me');

    setTimeout(function() { 
        slash.classList.add("hidden");
    }, 300);
}

function moveStartupLeft() { 
    var titleContainer = document.getElementById("titleContainer");

    titleContainer.classList.add("moveLeft");

    setTimeout(function() {
        showElementsAfterStartup();
        titleContainer.classList.add("noDisplay");
    }, 1000)
}

function showElementsAfterStartup() {
        
    var pageBox = document.getElementById("pageBox");
    var home = document.getElementById("home");
    var fButton = document.getElementsByClassName("floatingButton");

    pageBox.classList.remove('dispNone');
    pageBox.classList.remove('hideElement');
    home.classList.remove('hideElement');
    for(var i = 0; i < fButton.length; i++) {
        fButton[i].classList.remove('hideFloatingButtons');
    }

}

function toggleNav() {
    openedNav = true;
    var nav = document.getElementsByClassName("navBar")[0];
    nav.classList.toggle('active');
}


currentView = "home";
lock = false;
function navTo(to) {

    if (lock) return;
    if(currentView == to) return;
    
    lock = true;
    console.log("navTo: " + currentView + " -> " + to);

    var currentPage = document.getElementById(currentView);
    var currentNav = document.getElementsByClassName(currentView)[0];
    var newPage = document.getElementById(to);
    var newNav = document.getElementsByClassName(to)[0];

    currentPage.classList.add('hideElement');
    currentNav.classList.remove('active');
    newPage.classList.remove('hideElement');
    newNav.classList.add('active');
    
    currentView = to;
    
    setTimeout(function() { lock = false; }, 1000);

}