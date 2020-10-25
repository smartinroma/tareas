let agregarTarea = document.querySelector('#tarea');
let prioridad = document.querySelector('#prioridad');
let btnGuardar = document.querySelector('#btnGuardar');
let buscarTipoTarea = document.querySelector('#buscarTipoTarea');
let tareaBuscada = document.querySelector('#tareaBuscada');
let seccionTareas = document.querySelector('#seccionTareas');





btnGuardar.addEventListener('click', addTarea);


function addTarea(event) {

    event.preventDefault();
    let tareaAgregada = agregarTarea.value;
    let prioridadTarea = prioridad.value;

    let nuevaTarea = {
        nombreTarea: tareaAgregada,
        prioridad: prioridadTarea
    }
    listaTareas.push(nuevaTarea);

    console.log(listaTareas);

    pintarOneTarea(nuevaTarea, seccionTareas);

}

//eliminar.addEventListener('click', eliminarTarea);


tareaBuscada.addEventListener('input', recogerBusquedaPalabra)

function recogerBusquedaPalabra(event) {
    let palabraBuscada = event.target.value.trim();

    let listaFiltrada = filtrarPorPalabra(listaTareas, palabraBuscada)

    pintarTareas(listaFiltrada, seccionTareas)
}


/* buscarTipoTarea.addEventListener('change', recogerBusquedaPrioridad)

function recogerBusquedaPrioridad(event) {
    let prioridadBuscada = event.target;

    let listaFiltrada = filtrarPorPrioridad(listaTareas, prioridadBuscada);

    pintarTareas(listaFiltrada, seccionTareas)
} */
