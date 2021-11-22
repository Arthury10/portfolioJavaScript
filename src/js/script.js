import load from './modules/load.js'
import navMenu from './modules/navMenu.js'
import typed from './modules/typed.js'
import arrowToUp from './modules/arrowToUp.js'
import initAnimacaoScroll from './modules/scroll-animacao.js'
import initScrollSuave from './modules/scroll-suave.js'
import particles from './modules/particles.js'
import SimpleAnime from './plugin/anime.js'
import darkMode from './modules/darkMode.js'

load()
navMenu()
typed()
arrowToUp()
initAnimacaoScroll()
initScrollSuave()
particles()
new SimpleAnime()
darkMode()
