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

	const menuMobile = document.querySelector('.icon-menu')
	const menuMobileList = document.querySelector('.nav-mobile')

	menuMobile.addEventListener('click', () => {
		menuMobileList.classList.toggle('openModalMobile')
	})
	navMenu.forEach(e => {
		e.addEventListener('click', () => {
			menuMobileList.classList.toggle('openModalMobile')
		})
	})
}
