const tabContainers = document.querySelectorAll('.time-tracking__tab-container');

async function getData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json?token=GHSAT0AAAAAABYGR4FGRYPGXVWBPOGIFMHGY3SENRA')
	const data = await response.json();

	console.log(data);
}