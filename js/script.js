const submitBox = document.querySelector('.interactive-rating-component');
const ratingButtons = document.querySelectorAll('.ratings__button');
const submitButton = document.querySelector('.interactive-rating-component__button-submit');
const thankYouBox = document.querySelector('.thank-you-box--hidden');
const youSelectedNumber = document.querySelector('.you-selected__number');

let currentIndex = 0;

submitButton.addEventListener('click', handleSubmitButtonClick);
for (let index = 0; index < ratingButtons.length; index += 1) {
	ratingButtons[index].addEventListener('click', event => {
		handleRatingButtonsClick(event, index);
	})
}

function handleSubmitButtonClick() {
	submitRating();
}

function handleRatingButtonsClick(event, index) {
	currentIndex = index;
	
	ratingButtons.forEach(button => {
		button.classList.remove('ratings__button--active');
	})

	ratingButtons[currentIndex].classList.add('ratings__button--active');
}

function submitRating() {
	submitBox.classList.add('interactive-rating-component--hidden')
	thankYouBox.classList.add('thank-you-box--visible');
	youSelectedNumber.innerHTML = ratingButtons[currentIndex].innerHTML;
}