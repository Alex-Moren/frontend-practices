function change_color_que_es_ceti(){
	let boton = document.getElementById('show_que_es_ceti');
	let info = document.getElementById('que_es_ceti');
	let cards = document.getElementById("aprendizaje");
	let proyectos = document.getElementById('proyectos');
	let invitacion = document.getElementById('invitacion');
	let hr = document.querySelector('hr');
	let imag = document.getElementById('image_section');
	let tecnologias = document.getElementById('tecnologias');

	boton.addEventListener("click", function(){
		info.classList.toggle("show");
		info.classList.toggle("hide");

		cards.classList.toggle("show");
		cards.classList.toggle("hide");

		proyectos.classList.toggle("show");
		proyectos.classList.toggle("hide");

		invitacion.classList.toggle("show");
		invitacion.classList.toggle("hide");

		hr.classList.toggle("show");
		hr.classList.toggle("hide");

		imag.classList.toggle("show");
		imag.classList.toggle("hide");

		tecnologias.classList.toggle("show");
		tecnologias.classList.toggle("hide");
});
}
change_color_que_es_ceti();
