var search = document.getElementById('search');
var button = document.getElementById('button');
var input = document.getElementById('input');

function loading() {
	search.classList.add('loading');

	setTimeout(function() {
		search.classList.remove('loading');
	}, 1500);
}

button.addEventListener('click', loading);

document.addEventListener("DOMContentLoaded", function() {
	const part1 = document.getElementById('part1');
	const part2 = document.getElementById('part2');
	const part3 = document.getElementById('part3');
	const mainContent = document.querySelector('.l-viewport'); // Main content selector

	setTimeout(() => { part2.style.display = 'block'; }, 1000); // Delay 1 second
	setTimeout(() => { part3.style.display = 'block'; }, 2000); // Delay 2 seconds
	setTimeout(() => {
		document.getElementById('logo-animation').style.display = 'none'; // Hide logo
		mainContent.style.visibility = 'visible'; // Show main content
	}, 3000); // Adjust timing as necessary
});

mainContent.style.visibility = 'hidden'; // Initially hide main content

input.addEventListener('keydown', function() {
	if(event.keyCode == 13) loading();
});
