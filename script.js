const twoLink = document.getElementById("nav-bas-g");
const firstLink = document.getElementById("activites");

window.addEventListener('resize', function () {
	if (window.innerWidth >= 768) {
		window.location.reload(); 
	} else {
		firstLink.onclick = function() {
			if (window.innerWidth < 768) {
				this.style.color = '#0065FC';
				twoLink.style.color = 'grey';
				this.style.borderBottom = '2px solid blue';
				twoLink.style.borderBottom = '2px solid grey';
			} else {
				this.style.color = 'initial';
				twoLink.style.color = 'initial';
				this.style.borderBottom = 'none';
				twoLink.style.borderBottom = 'none';
				// todo remove color and bottom
				// example borderBottom : none
			}
		}

		twoLink.onclick = function() {
			if (window.innerWidth < 768) {
				this.style.color = '#0065FC';
				firstLink.style.color = 'grey';
				this.style.borderBottom = '2px solid blue';
				firstLink.style.borderBottom = '2px solid grey';
			} else {
				this.style.color = 'initial';
				firstLink.style.color = 'initial';
				this.style.borderBottom = 'none';
				firstLink.style.borderBottom = 'none';
				// todo remove color and bottom
				// example borderBottom : none
			}
		}
	}
});