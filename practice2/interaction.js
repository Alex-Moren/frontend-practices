function show_data(){

	const boton =
	document.getElementById(
		"show_que_es_ceti"
	);

	const elements =
	document.querySelectorAll(
		".contenido"
	);

	let activo = false;

	// LOCAL STORAGE

	const guardado =
	localStorage.getItem(
		"contenidoVisible"
	);

	if(guardado === "true"){

		activo = true;

		mostrarElementos();

	}

	// BOTON

	boton.addEventListener(
		"click",
		()=>{

			activo = !activo;

			if(activo){

				mostrarElementos();

				localStorage.setItem(
					"contenidoVisible",
					true
				);

			}else{

				ocultarElementos();

				localStorage.setItem(
					"contenidoVisible",
					false
				);

			}

		}
	);

	// SCROLL

	window.addEventListener(
		"scroll",
		function(){

			if(activo){

				checkScroll();

			}

		}
	);

	// FUNCIONES

	function mostrarElementos(){

		checkScroll();

	}

	function ocultarElementos(){

		elements.forEach(
			(element)=>{

				element.classList.remove(
					"visible"
				);

			}
		);

	}

}

function checkScroll(){

	const elements =
	document.querySelectorAll(
		".contenido"
	);

	elements.forEach((element)=>{

		const position =
		element.getBoundingClientRect();

		if(
			position.top
			<
			window.innerHeight - 100
		){

			element.classList.add(
				"visible"
			);

		}else{

			element.classList.remove(
				"visible"
			);

		}

	});

}

show_data();
