function startup() {

    setTimeout(function() {
        var startupAnimationBox = document.getElementsByClassName("bgvid")[0];

        setTimeout(function() {
            showElementsAfterStartup();
            startupAnimationBox.remove();
        }, 1000)
        
    }, 2400);
}

function showElementsAfterStartup() {
        
    var buttons = document.getElementsByClassName("floatingLinkButtonsContainer");
    var pageBox = document.getElementById("pageBox");
    var home = document.getElementById("home");

    pageBox.classList.remove('dispNone');
    pageBox.classList.remove('hideElement');
    home.classList.add('loadin')
    home.classList.remove('widthnull');
    home.classList.remove('hideElement');
            
}

function toggleNav() {
    var nav = document.getElementsByClassName("navBar")[0];
    nav.classList.toggle('active');
}


currentView = "home";
lock = false;
function navTo(to) {

    while(lock) {}

    if(currentView == to) return;

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
}