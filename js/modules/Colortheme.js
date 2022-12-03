export default function Colortheme() {
	const buttonToggleColorMode = document.querySelector('.title__button-color-mode');
	const body = document.querySelector('.body');
	const topLeftMainTitle = document.querySelector('.title__main-title');
	const searchSectionContainer = document.querySelector('.devfinder__search-container');
	const searchfield = document.querySelector('#usersearchfield');
	const moonIcon = document.querySelector('.moon-svg');
	const moonIconPath = document.querySelector('.moon-svg__path');
	const sunIcon = document.querySelector('.sun-svg');
	const sunIconPath = document.querySelector('.sun-svg__path');
	const resultsContainer = document.querySelector('.devfinder__result-container');
	const userTitle = document.querySelector('.user-title-container__user-name');
	const bioText = document.querySelector('.bio__text');
	const joinedDate = document.querySelector('.joined-info__info');
	const statsContainer = document.querySelector('.result-container__statistic-container');
	const reposTitle = document.querySelector('.repos-container__title');
	const reposValue = document.querySelector('.repos-container__value');
	const followersTitle = document.querySelector('.followers-container__title');
	const followersValue = document.querySelector('.followers-container__value');
	const followingTitle = document.querySelector('.following-container__title');
	const followingValue = document.querySelector('.following-container__value');
	const linkLocation = document.querySelector('.divider-top__location');
	const linkTwitter = document.querySelector('.divider-top__twitter');
	const linkHomepage = document.querySelector('.divider-bottom__homepage');
	const linkCompany = document.querySelector('.divider-bottom__company');

	let lightMode = true;
	let bioAvailable = false;

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
		moonIconPath.classList.add('moon-svg__path--hover');
		sunIconPath.classList.add('sun-svg__path--hover');
	}
	
	function buttonToggleColorMoveHoverOff(event) {
		moonIconPath.classList.remove('moon-svg__path--hover');
		sunIconPath.classList.remove('sun-svg__path--hover');
	}
 	
	function toggleColorMode() {
		if (lightMode) {
			lightMode = false;

			body.classList.remove('body--lightmode');
			body.classList.add('body--darkmode');
			topLeftMainTitle.classList.remove('title__main-title--lightmode');
			topLeftMainTitle.classList.add('title__main-title--darkmode');
			searchSectionContainer.classList.remove('devfinder__search-container--lightmode');
			searchSectionContainer.classList.add('devfinder__search-container--darkmode');
			searchfield.classList.remove('usersearchfield--lightmode');
			searchfield.classList.add('usersearchfield--darkmode');
			buttonToggleColorMode.classList.remove('title__button-color-mode--lightmode');
			buttonToggleColorMode.classList.add('title__button-color-mode--darkmode');
			moonIcon.classList.remove('moon-svg--visible');
			sunIcon.classList.add('sun-svg--visible');
			resultsContainer.classList.remove('devfinder__result-container--lightmode');
			resultsContainer.classList.add('devfinder__result-container--darkmode');
			userTitle.classList.remove('user-title-container__user-name--lightmode');
			userTitle.classList.add('user-title-container__user-name--darkmode');
			bioText.classList.remove('bio__text--lightmode');
			bioText.classList.add('bio__text--darkmode');
			joinedDate.classList.remove('joined-info__info--lightmode');
			joinedDate.classList.add('joined-info__info--darkmode');
			statsContainer.classList.remove('result-container__statistic-container--lightmode');
			statsContainer.classList.add('result-container__statistic-container--darkmode');
			reposTitle.classList.remove('statistics-container__titles--lightmode');
			reposTitle.classList.add('statistics-container__titles--darkmode');
			reposValue.classList.remove('statistics-container__titles--lightmode');
			reposValue.classList.add('statistics-container__titles--darkmode');
			followersTitle.classList.remove('statistics-container__titles--lightmode');
			followersTitle.classList.add('statistics-container__titles--darkmode');
			followersValue.classList.remove('statistics-container__titles--lightmode');
			followersValue.classList.add('statistics-container__titles--darkmode');
			followingTitle.classList.remove('statistics-container__titles--lightmode');
			followingTitle.classList.add('statistics-container__titles--darkmode');
			followingValue.classList.remove('statistics-container__titles--lightmode');
			followingValue.classList.add('statistics-container__titles--darkmode');
			linkLocation.classList.remove('socials--lightmode');
			linkLocation.classList.add('socials--darkmode');
			linkTwitter.classList.remove('socials--lightmode');
			linkTwitter.classList.add('socials--darkmode');
			linkHomepage.classList.remove('socials--lightmode');
			linkHomepage.classList.add('socials--darkmode');
			linkCompany.classList.remove('socials--lightmode');
			linkCompany.classList.add('socials--darkmode');
		} else {
			lightMode = true;
			
			body.classList.add('body--lightmode');
			body.classList.remove('body--darkmode');
			topLeftMainTitle.classList.add('title__main-title--lightmode');
			topLeftMainTitle.classList.remove('title__main-title--darkmode');
			searchSectionContainer.classList.add('devfinder__search-container--lightmode');
			searchSectionContainer.classList.remove('devfinder__search-container--darkmode');
			searchfield.classList.add('usersearchfield--lightmode');
			searchfield.classList.remove('usersearchfield--darkmode');
			buttonToggleColorMode.classList.add('title__button-color-mode--lightmode');
			buttonToggleColorMode.classList.remove('title__button-color-mode--darkmode');
			moonIcon.classList.add('moon-svg--visible');
			sunIcon.classList.remove('sun-svg--visible');
			resultsContainer.classList.add('devfinder__result-container--lightmode');
			resultsContainer.classList.remove('devfinder__result-container--darkmode');
			userTitle.classList.add('user-title-container__user-name--lightmode');
			userTitle.classList.remove('user-title-container__user-name--darkmode');
			bioText.classList.add('bio__text--lightmode');
			bioText.classList.remove('bio__text--darkmode');
			joinedDate.classList.add('joined-info__info--lightmode');
			joinedDate.classList.remove('joined-info__info--darkmode');
			statsContainer.classList.add('result-container__statistic-container--lightmode');
			statsContainer.classList.remove('result-container__statistic-container--darkmode');
			reposTitle.classList.add('statistics-container__titles--lightmode');
			reposTitle.classList.remove('statistics-container__titles--darkmode');
			reposValue.classList.add('statistics-container__titles--lightmode');
			reposValue.classList.remove('statistics-container__titles--darkmode');
			followersTitle.classList.add('statistics-container__titles--lightmode');
			followersTitle.classList.remove('statistics-container__titles--darkmode');
			followersValue.classList.add('statistics-container__titles--lightmode');
			followersValue.classList.remove('statistics-container__titles--darkmode');
			followingTitle.classList.add('statistics-container__titles--lightmode');
			followingTitle.classList.remove('statistics-container__titles--darkmode');
			followingValue.classList.add('statistics-container__titles--lightmode');
			followingValue.classList.remove('statistics-container__titles--darkmode');
			linkLocation.classList.add('socials--lightmode');
			linkLocation.classList.remove('socials--darkmode');
			linkTwitter.classList.add('socials--lightmode');
			linkTwitter.classList.remove('socials--darkmode');
			linkHomepage.classList.add('socials--lightmode');
			linkHomepage.classList.remove('socials--darkmode');
			linkCompany.classList.add('socials--lightmode');
			linkCompany.classList.remove('socials--darkmode');
		}
	}
	
	function render() {
		if (lightMode) {			
			body.classList.add('body--lightmode');
			topLeftMainTitle.classList.add('title__main-title--lightmode');
			buttonToggleColorMode.classList.add('title__button-color-mode--lightmode');
			searchSectionContainer.classList.add('devfinder__search-container--lightmode');
			searchfield.classList.add('usersearchfield--lightmode');
			moonIcon.classList.add('moon-svg--visible');
			userTitle.classList.add('user-title-container__user-name--lightmode');
			bioText.classList.add('bio__text--lightmode');
			resultsContainer.classList.add('devfinder__result-container--lightmode');
			joinedDate.classList.add('joined-info__info--lightmode');
			statsContainer.classList.add('result-container__statistic-container--lightmode');
			reposTitle.classList.add('statistics-container__titles--lightmode');
			reposValue.classList.add('statistics-container__titles--lightmode');
			followersTitle.classList.add('statistics-container__titles--lightmode');
			followersValue.classList.add('statistics-container__titles--lightmode');
			followingTitle.classList.add('statistics-container__titles--lightmode');
			followingValue.classList.add('statistics-container__titles--lightmode');
			linkCompany.classList.add('socials--lightmode');
			linkLocation.classList.add('socials--lightmode');
			linkTwitter.classList.add('socials--lightmode');
			linkHomepage.classList.add('socials--lightmode');
		}
	}

	render();
}