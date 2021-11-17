/*open-modal-form-menu*/
export default function formMenu() {
	const BtnOpenFormHome = document.querySelector('.open-form-home')
	const ModalopenFormMenu = document.querySelector('.form-home')
	const BtnCloseFormHome = document.querySelector('.close-form-home')
	const formGroup = document.querySelectorAll('.form-group')
	const btnSubmit = document.querySelector('#btnSubmit')
	const btnContato = document.querySelector('#btnContato')
	const sucesso = document.querySelector('.sucesso')

	BtnOpenFormHome.addEventListener('click', () => {
		ModalopenFormMenu.classList.add('show-form-home')
	})

	BtnCloseFormHome.addEventListener('click', () => {
		ModalopenFormMenu.classList.remove('show-form-home')
	})

	btnSubmit.addEventListener('click', () => {
		formGroup.forEach(e => {
			e.classList.add('enviado')
		})
		sucesso.classList.add('enviado-sucesso')
	})

	btnContato.addEventListener('click', () => {
		const reloadPage = setTimeout(() => {
			location.reload()
		})
	})
}
