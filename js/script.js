async function getData() {
	const response = await fetch('./js/data.json');
	const data = await response.json();

	console.log(data)
}

getData();