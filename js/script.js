async function getData() {
	const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/time-tracking-dashboard/js/data.json?token=GHSAT0AAAAAABYGR4FGTRXOWHZOUYBH2KXEY3SD3FQ')
	const data = await response.json();
	console.log(data);
}

getData();