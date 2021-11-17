/*ARROW TO UP*/
export default function arrowToUp() {
	const arrow = document.querySelector('.back-to-top')

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			arrow.classList.add('show')
		} else {
			arrow.classList.remove('show')
		}
	})
}
