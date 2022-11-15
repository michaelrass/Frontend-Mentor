export default function ExpenseChart () {
	const columnAmount = document.querySelectorAll('.column__hover-value');
	const columns = document.querySelectorAll('.days__column');
	let currentIndex = 0;
	let columnAmountVisible = false;

	for (let index = 0; index < columns.length; index += 1) {
		columns[index].addEventListener('mouseover', event => {
			handleColumnsMouseover(event, index);
		})
	}

	for (let index = 0; index < columns.length; index += 1) {
		columns[index].addEventListener('mouseout', event => {
			handleColumnsMouseout(event, index);
		})
	}

	for (let index = 0; index < columns.length; index += 1) {
		columns[index].addEventListener('click', event => {
			handleColumnsClick(event, index);
		})
	}

	function handleColumnsMouseover(event, index) {
		showColumnValueOnMouseover(event, index);
	}

	function handleColumnsMouseout(event, index) {
		removeColumnValueOnMouseout(event, index);
	}

	function handleColumnsClick(event, index) {
		toggleColumnsValueWithClick(event, index);
	}

	async function showColumnValueOnMouseover(event, index) {
		currentIndex = index;
		columnAmountVisible = true;
		columnAmount[currentIndex].classList.add('column__hover-value--active-hover');

		const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/expense-chart-component/js/data.json');
		const data = await response.json();

		columnAmount[currentIndex].innerHTML = data[currentIndex].amount;
	}

	function removeColumnValueOnMouseout(event, index) {
		currentIndex = index;
		columnAmountVisible = false;
		columnAmount[currentIndex].classList.remove('column__hover-value--active-hover');
	}

	async function toggleColumnsValueWithClick(event, index) {
		currentIndex = index;

		columns[index].classList.toggle('days__column--active');
		columnAmount[index].classList.toggle('column__hover-value--active-clicked');

		const response = await fetch('https://raw.githubusercontent.com/michaelrass/Frontend-Mentor/feature/expense-chart-component/js/data.json');
		const data = await response.json();

		const dataColumnAmount = data[currentIndex].amount;
		
		columnAmount[currentIndex].innerHTML = data[currentIndex].amount;
	}
}