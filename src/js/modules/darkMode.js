export default function darkMode() {
	const darkMode = document.querySelector('.checkbox')

	function toggleDarkMode() {
		document.body.classList.toggle('light')
	}
	darkMode.addEventListener('click', toggleDarkMode)
}
