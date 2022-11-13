const adviceIdWindow = document.querySelector('.number');
const adviceTextWindow = document.querySelector('.advice-generator__paragraph');
const buttonGetNewAdvice = document.querySelector('.advice-generator__button-generate');
const advice_api_url = 'https://api.adviceslip.com/advice';

buttonGetNewAdvice.addEventListener('click', handleButtonGetNewAdviceClick);

async function getNewAdvice() {
	const response = await fetch(advice_api_url);
	const result = await response.json();
	
	const adviceId = result.slip.id;
	const adviceText = result.slip.advice;

	adviceIdWindow.innerHTML = adviceId;
	adviceTextWindow.innerHTML = adviceText;
}

function handleButtonGetNewAdviceClick() {
	getNewAdvice();
}

getNewAdvice();
