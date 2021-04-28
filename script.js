const twoLink = document.getElementById("nav-bas-g");
const firstLink = document.getElementById("activites");

if (window.innerWidth < 520) {
firstLink.onclick = function() {
	this.style.color = '#0065FC';
	twoLink.style.color = 'grey';
	this.style.borderBottom = '2px solid blue';
	twoLink.style.borderBottom = '2px solid grey';
}

twoLink.onclick = function() {
	this.style.color = '#0065FC';
	firstLink.style.color = 'grey';
	this.style.borderBottom = '2px solid blue';
	firstLink.style.borderBottom = '2px solid grey';
}
};