/*typed*/
export default function typed() {
	window.addEventListener('load', () => {
		const typed = new Typed('.typing', {
			strings: ['Web Developer', 'Web Designer'],
			typeSpeed: 150,
			backSpeed: 100,
			backDelay: 500,
			loop: true
		})
	})
}
