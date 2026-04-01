const form = document.querySelector("#formulario");
const carreraInput = document.querySelector("#carrera");
const btn = document.querySelector("button");
const lista = document.querySelector("#lista");

let carreras = [];

form.addEventListener("submit", (e) =>{
	e.preventDefault();
	const carrera = carreraInput.value;

	carreras.push({
		carrera: carrera
	});
	form.reset();
	renderizar();

});

function renderizar(){
	lista.innerHTML = "";
	carreras.forEach((c, i) =>{
		lista.innerHTML += `<li>
		${c.carrera}
		<button onclick="eliminar(${i})">Eliminar</button>
	</li>`
	});
}
function eliminar(index){
	carreras.splice(index, 1);
	renderizar();
}
