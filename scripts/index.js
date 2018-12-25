window.onload = function() {
    var location = window.location.search;
    var linkContainerLocation = location.split('?page=');
    linkContainerLocation = linkContainerLocation.length > 1 ? linkContainerLocation[1] : 'main';
    handleLink(linkContainerLocation);
}


var mainPage = document.getElementById('main-link-container');
var aboutPage = document.getElementById('about-link-container');
var projectsPage = document.getElementById('projects-link-container');
var resumePage = document.getElementById('resume-link-container');

var navItems = Array.from(document.getElementsByClassName('link-item')).map(function(elem) {
    elem.addEventListener('click', function(){
        var linkTarget = elem.getAttribute('data-link');
        window.history.pushState({},"", 'index.html?page='+linkTarget);
        handleLink(linkTarget);
    })
});

function handleLink(linkTarget) {
    var linkElement = document.getElementById(linkTarget + '-link-container');
    var linkContainers = Array.from(document.getElementsByClassName('link-containers'));
    linkContainers.map(function(elem) {
        elem.classList.add('link-container-hidden');
    });
    linkElement.classList.remove('link-container-hidden');
}
