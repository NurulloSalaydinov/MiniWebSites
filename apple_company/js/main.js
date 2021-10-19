let showNav = document.querySelector('#show-nav');
let hideNav = document.querySelector('#hide-nav');
let navbar = document.querySelector('nav');
let secretNav = document.querySelector('#secret-nav');
function show() {
	showNav.style = 'display: none;';
	hideNav.style = 'display: inline-block;';
	secretNav.style = 'transform: translateY(0px);transition: 0.8s;';
	navbar.style = 'opacity: 1;transition: 0.8s;background: #000;';
}
function hide() {
	showNav.style = 'display: inline-block;';
	hideNav.style = 'display: none;';
	secretNav.style = 'transform: translateY(-1000px);transition: 0.8s;';
	navbar.style = 'opacity: 0.9;transition: 0.8s;background: #222;';
}