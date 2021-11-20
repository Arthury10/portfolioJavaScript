/*NAVEGAÇÃO POR TABS*/
/*selectores navtabs*/
export default function navMenu() {
	const navMenu = document.querySelectorAll('a[id^=nav]')
	const modalMenu = document.querySelectorAll('section[id^=m]')

	if (navMenu.length && modalMenu.length) {
		modalMenu[0].classList.add('ativo')
		navMenu[0].classList.add('navAtivo')

		function activeTab(index) {
			modalMenu.forEach(section => {
				section.classList.remove('ativo')
			})
			navMenu.forEach(section => {
				section.classList.remove('navAtivo')
			})
			modalMenu[index].classList.add('ativo')
			navMenu[index].classList.add('navAtivo')
		}

		navMenu.forEach((itemMenu, index) => {
			itemMenu.addEventListener('click', () => {
				activeTab(index)
			})
		})
	}
	/*////////////////////////////////////////////////////////////////////////////*/
	/*menu-mobile*/

	const menuMobile = document.querySelector('#btn-mobile')
	const menuMobileList = document.querySelector('.nav-mobile')

	menuMobile.addEventListener('click', () => {
		menuMobileList.classList.toggle('openModalMobile')
		menuMobile.classList.toggle('openModalMobile')
	})
	navMenu.forEach(e => {
		e.addEventListener('click', () => {
			menuMobileList.classList.toggle('openModalMobile')
			menuMobile.classList.toggle('openModalMobile')
		})
	})
}

// const btnMobile = document.getElementById('btn-mobile')

// function toggleMenu(event) {
// 	if (event.type === 'touchstart') event.preventDefault()
// 	const nav = document.querySelector('.nav-mobile')

// 	nav.classList.toggle('active')
// 	const active = nav.classList.contains('active')
// 	event.currentTarget.setAttribute('aria-expanded', active)
// 	if (active) {
// 		event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
// 	} else {
// 		event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
// 	}
// }

// btnMobile.addEventListener('click', toggleMenu)
// btnMobile.addEventListener('touchstart', toggleMenu)
