function startup() {

    var array = document.getElementsByClassName("static");
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove('hideStaticTitleElement');
        }

    setTimeout(function() {
        var hiddenTitleElems = document.getElementsByClassName("hideExpandingTitleElement");
        document.getElementById("titleContainer").classList.toggle('showElement');
        for (var i = 0; i < hiddenTitleElems.length; i++) {
            hiddenTitleElems[i].classList.toggle('showElement');
        }
    }, 1000);

    setTimeout(function() {
        var startupAnimationBox = document.getElementsByClassName("loadAnimationBox")[0];

        startupAnimationBox.classList.toggle('move');

        setTimeout(function() {
            showElementsAfterStartup();
            startupAnimationBox.remove();
        }, 1000)
        
    }, 3800);
}

function showElementsAfterStartup() {
        
        var pageBox = document.getElementsByClassName("hideElement")[0];
        var home = document.getElementById("home");
 
        pageBox.classList.remove('hideElement');
        home.classList.remove('hideElement');
            
}


currentView = "home";
function navTo(to) {
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