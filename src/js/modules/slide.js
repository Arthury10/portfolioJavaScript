export default function slide() {
	new SimpleSlide({
		slide: 'principal', // nome do atributo data-slide="principal"
		nav: true, // se deve ou não mostrar a navegação
		auto: false, // se o slide deve passar automaticamente
		time: 5000, // tempo de transição dos slides
		pauseOnHover: true // pausa a transição automática
	})
}
