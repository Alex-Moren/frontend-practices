const form = document.querySelector("#formulario");
const carreraInput = document.querySelector("#carrera");
const lista = document.querySelector("#lista");

let carreras = [];

form.addEventListener("submit", (e) =>{
	e.preventDefault();

	const carrera = carreraInput.value;

	if (carrera.trim() === "") return;

	carreras.push({
		nombre: carrera
	});
	
	form.reset();
	carreraInput.focus();
	renderizar();

});
lista.addEventListener("click", (e)=>{
	if(e.target.classList.contains("btn-eliminar")){
		const index = Number(e.target.dataset.index);

		eliminar(index);
	}
})
function renderizar(){
	let html="";

	carreras.forEach((c, i) =>{
		html += `<li>
		${c.nombre}
		<button class="btn-eliminar" data-index="${i}">Eliminar</button>
	</li>`
	});

	lista.innerHTML = html;
}
function eliminar(index){
	carreras.splice(index, 1);
	renderizar();
}
