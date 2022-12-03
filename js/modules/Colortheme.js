export default function Colortheme() {
	const buttonToggleColorMode = document.querySelector('.title__color-mode');
	const moonIcon = document.querySelector('.moon-svg-path');
	const body = document.querySelector('.body');
	const topLeftMainTitle = document.querySelector('.title__main-title');

	let lightMode = true;

	buttonToggleColorMode.addEventListener('click', handleButtonToggleColorModeClick);
	buttonToggleColorMode.addEventListener('mouseenter', handleButtonToggleMouseenter);
	buttonToggleColorMode.addEventListener('mouseleave', handleButtonToggleMouseleave);

	function handleButtonToggleColorModeClick() {
		toggleColorMode();
	}

	function handleButtonToggleMouseenter(event) {
		buttonToggleColorMoveHoverOn(event);
	}

	function handleButtonToggleMouseleave(event) {
		buttonToggleColorMoveHoverOff(event);
	}

	function buttonToggleColorMoveHoverOn(event) {
		moonIcon.classList.add('moon-svg-path--hover');
	}
	
	function buttonToggleColorMoveHoverOff(event) {
		moonIcon.classList.remove('moon-svg-path--hover');
	}
 	
	function toggleColorMode() {
		if (lightMode) {
			lightMode = false;

			body.classList.remove('body--lightmode');
			body.classList.add('body--darkmode');
			topLeftMainTitle.classList.remove('title__main-title--lightmode');
			topLeftMainTitle.classList.add('title__main-title--darkmode');
		} else {
			lightMode = true;

			body.classList.add('body--lightmode');
			body.classList.remove('body--darkmode');
			topLeftMainTitle.classList.add('title__main-title--lightmode');
			topLeftMainTitle.classList.remove('title__main-title--darkmode');
		}
	}
}