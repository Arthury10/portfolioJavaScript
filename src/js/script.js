/*NAVEGAÇÃO POR TABS*/
const navMenu = document.querySelectorAll('a[id^=nav]')
const modalMenu = document.querySelectorAll('section[id^=m]')

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
