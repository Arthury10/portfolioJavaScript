export default function load() {
	var i = setInterval(function () {
		clearInterval(i)

		// O código desejado é apenas isto:
		document.querySelector('.loading').classList = 'loading'
		document.querySelector('.loading').classList = 'load'
		document.querySelector('#bar-loading').classList.add('desactiveLoad')
	}, 4000)
}
