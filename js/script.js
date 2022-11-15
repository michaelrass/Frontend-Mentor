const buttonQuestions = document.querySelectorAll('.text-container__question');
const answers = document.querySelectorAll('.text-container__answer');
const picturesArrow = document.querySelectorAll('.arrow-down');


buttonQuestions.forEach(button => {
	button.classList.remove('text-container__question--active');
});

picturesArrow.forEach(picture => {
	picture.classList.remove('arrow-down--flipped');
});

answers.forEach(answer => {
	answer.classList.remove('text-container__answer--visible');
});		


let currentIndex = 0;

for (let index = 0; index < buttonQuestions.length; index += 1) {
	buttonQuestions[index].addEventListener('click', event => {
		handleButtonQuestionsClick(event, index);
	})
}

function handleButtonQuestionsClick(event, index) {
	openNextQuestion(event, index);
}

function openNextQuestion(event, index) {
	if (!answers[index].classList.contains('text-container__answer--visible')) {
		currentIndex = index;
	buttonQuestions.forEach(button => {
		button.classList.remove('text-container__question--active');
	})
	
	picturesArrow.forEach(picture => {
		picture.classList.remove('arrow-down--flipped');
	})
	
	answers.forEach(answer => {
		answer.classList.remove('text-container__answer--visible');
	})

	buttonQuestions[currentIndex].classList.add('text-container__question--active');
	picturesArrow[currentIndex].classList.add('arrow-down--flipped');
	answers[currentIndex].classList.add('text-container__answer--visible');
	} else {
	answers[currentIndex].classList.remove('text-container__answer--visible');
	picturesArrow[currentIndex].classList.remove('arrow-down--flipped');
	buttonQuestions[currentIndex].classList.remove('text-container__question--active');
	}
}

function render() {
	buttonQuestions.forEach(button => {
		button.classList.remove('text-container__question--active');
	});
	
	picturesArrow.forEach(picture => {
		picture.classList.remove('arrow-down--flipped');
	});
	
	answers.forEach(answer => {
		answer.classList.remove('text-container__answer--visible');
	});	
}

render();