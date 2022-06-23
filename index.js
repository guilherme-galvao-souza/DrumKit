const buttons = document.querySelectorAll('.drum');
let audio = '';
//when button is clicked
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		makeSound(button.innerHTML);
		drumAnimation(button.innerHTML);
	});
	//when key is pressed
	document.addEventListener('keydown', (event) => {
		makeSound(event.key);
		drumAnimation(event.key);
	});

	function makeSound(key) {
		switch (key) {
			case 'w':
				audio = new Audio('./sounds/tom-1.mp3');
				audio.play();
				break;
			case 'a':
				audio = new Audio('./sounds/tom-2.mp3');
				audio.play();
				break;
			case 's':
				audio = new Audio('./sounds/tom-3.mp3');
				audio.play();
				break;
			case 'd':
				audio = new Audio('./sounds/tom-4.mp3');
				audio.play();
				break;
			case 'j':
				audio = new Audio('./sounds/snare.mp3');
				audio.play();
				break;
			case 'k':
				audio = new Audio('./sounds/crash.mp3');
				audio.play();
				break;
			case 'l':
				audio = new Audio('./sounds/kick-bass.mp3');
				audio.play();
				break;
			default:
				console.log(button.innerHTML);
				break;
		}
	}
});
function drumAnimation(currentKey) {
	var activebutton = document.querySelector(`.${currentKey}`);
	activebutton.classList.add('pressed');

	setTimeout(() => {
		activebutton.classList.remove('pressed');
	}, 100);
}
