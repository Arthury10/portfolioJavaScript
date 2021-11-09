/*menu-mobile*/
const menuMobile = document.querySelector('.menu-hamburguer')
const menuMobileList = document.querySelector('.nav-mobile')

/*selectores navtabs*/
const navMenu = document.querySelectorAll('a[id^=nav]')
const modalMenu = document.querySelectorAll('section[id^=m]')

/*menu mobile*/
menuMobile.addEventListener('click', () => {
	menuMobileList.classList.toggle('openModalMobile')
})
navMenu.forEach(e => {
	e.addEventListener('click', () => {
		menuMobileList.classList.toggle('openModalMobile')
	})
})

/*NAVEGAÇÃO POR TABS*/

if (navMenu.length && modalMenu.length) {
	modalMenu[0].classList.add('ativo')

	function activeTab(index) {
		modalMenu.forEach(section => {
			section.classList.remove('ativo')
		})
		modalMenu[index].classList.add('ativo')
	}

	navMenu.forEach((itemMenu, index) => {
		itemMenu.addEventListener('click', () => {
			activeTab(index)
		})
	})
}

/*typed*/
window.addEventListener('load', () => {
	const typed = new Typed('.typing', {
		strings: ['Web Developer', 'Web Designer'],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	})

	const typed2 = new Typed('.typing2', {
		strings: ['fólio'],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	})
})

/*ARROW TO UP*/
const arrow = document.querySelector('.arrowtotop')

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		arrow.classList.add('openToTop')
	} else {
		arrow.classList.remove('openToTop')
	}
})
