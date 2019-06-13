(function() {
var navBtn = document.getElementById('toggle-navigation-btn');
var mainNav = document.getElementById('mainNav')
navBtn.onclick = function() {
	navBtn.classList.toggle('toggle-navigation-btn_closed');
	mainNav.classList.toggle('nav_open')
}
}());
