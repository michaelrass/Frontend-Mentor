export default function GetUserData() {
	function submitForm(event) {
		event.preventDefault();
	}
	
	async function GetUser(username) {
		let response = await fetch(`https://api.github.com/users/USERNAME/${username}`);
		let userData = await response.json();

		console.log(userData);
	}

	GetUser();
}