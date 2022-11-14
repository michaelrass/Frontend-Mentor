const tabContainers = document.querySelectorAll('.time-tracking__tab-container');
const tabTitles = document.querySelectorAll('.title__title');
const tabTimesCurrent = document.querySelectorAll('.time__current');
const tabTimesHistoryText = document.querySelectorAll('.time__history');
const tabTimesHistoryNumber = document.querySelectorAll('.history__time');
const buttonDaily = document.querySelector('.periodical__daily');
const buttonWeekly = document.querySelector('.periodical__weekly');
const buttonMonthly = document.querySelector('.periodical__monthly');


buttonDaily.addEventListener('click', handleButtonDailyClick);
buttonWeekly.addEventListener('click', handleButtonWeeklyClick);
buttonMonthly.addEventListener('click', handleButtonMonthlyClick);

function handleButtonDailyClick() {
	getDailyData();
}

function handleButtonWeeklyClick() {
	getWeeklyData();
}

function handleButtonMonthlyClick() {
	getMonthlyData();
}

async function getTabTitles() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json')
	const data = await response.json();

	tabTitles.forEach((title, index) =>  {
		tabTitles[index].innerHTML = data[index].title;
	})

	console.log(data);
}

getTabTitles();

async function getDailyData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json')
	const data = await response.json();

	tabTimesCurrent.forEach((time, index) => {
		tabTimesCurrent[index].innerHTML = `${data[index].timeframes.daily.current}`+'hrs';
	})

	tabTimesHistoryNumber.forEach((time, index) => {
		tabTimesHistoryText[index].innerHTML = 'Yesterday - ' + `${data[index].timeframes.daily.previous}`+'hrs';
	})

	buttonDaily.classList.add('periodical__daily--active');
	buttonWeekly.classList.remove('periodical__weekly--active');
	buttonMonthly.classList.remove('periodical__monthly--active');
}

async function getWeeklyData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json')
	const data = await response.json();

	tabTimesCurrent.forEach((time, index) => {
		tabTimesCurrent[index].innerHTML = `${data[index].timeframes.weekly.current}`+'hrs';
	})

	tabTimesHistoryNumber.forEach((time, index) => {
		tabTimesHistoryText[index].innerHTML = 'Last Week - ' + `${data[index].timeframes.weekly.previous}`+'hrs';
	})

	buttonDaily.classList.remove('periodical__daily--active');
	buttonWeekly.classList.add('periodical__weekly--active');
	buttonMonthly.classList.remove('periodical__monthly--active');
}

async function getMonthlyData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json')
	const data = await response.json();

	tabTimesCurrent.forEach((time, index) => {
		tabTimesCurrent[index].innerHTML = `${data[index].timeframes.monthly.current}`+'hrs';
	})

	tabTimesHistoryNumber.forEach((time, index) => {
		tabTimesHistoryText[index].innerHTML = 'Last Month - ' + `${data[index].timeframes.monthly.previous}`+'hrs';
	})

	buttonDaily.classList.remove('periodical__daily--active');
	buttonWeekly.classList.remove('periodical__weekly--active');
	buttonMonthly.classList.add('periodical__monthly--active');
}

getWeeklyData();