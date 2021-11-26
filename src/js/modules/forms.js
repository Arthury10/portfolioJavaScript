export default function forms() {
	const form = document.getElementById('contato')
	const enviado = document.querySelector('.enviadoContato')
	const btnContato = document.getElementById('btnContato')

	function handleChange(event) {
		const target = event.target
		if (!target.checkValidity()) {
			target.classList.add('invalido')
			target.nextElementSibling.innerText = 'Campo Obrigatorio'
		} else {
			target.classList.remove('invalido')
		}
	}

	function success() {
		form.classList.add('sucesso')
	}

	form.addEventListener('change', handleChange)

	btnContato.addEventListener('click', function (event) {
		if (form.checkValidity()) {
			form.classList.add('loading')
			form.classList.add('load')
			enviado.classList.add('enviado')
			success()
		}
	})
}
