const tabContainers = document.querySelectorAll('.time-tracking__tab-container');
const tabTitles = document.querySelectorAll('.title__title');
const tabTimesCurrent = document.querySelectorAll('.time__current');
const tabTimesHistory = document.querySelectorAll('.time__history');



console.log(tabTitles, tabTimesCurrent, tabTimesHistory);
let currentIndex = 0;

async function getData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json')
	const data = await response.json();

	
}

getData();